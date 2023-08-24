import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";
import FormData from 'form-data';

import { AnimationAssetMeta } from './model/AnimationAssetMeta';
import { AnimationItem } from './model/AnimationItem';
import { AssetExtraMeta } from './model/AssetExtraMeta';
import { AssetFileInfo } from './model/AssetFileInfo';
import { ComponentInfo } from './model/ComponentInfo';
import { ConfirmFileUploadRequest } from './model/ConfirmFileUploadRequest';
import { ConfirmFileUploadRequestBody } from './model/ConfirmFileUploadRequestBody';
import { ConfirmFileUploadResponse } from './model/ConfirmFileUploadResponse';
import { ControlDigitalHumanLiveReq } from './model/ControlDigitalHumanLiveReq';
import { CreateDigitalAssetRequest } from './model/CreateDigitalAssetRequest';
import { CreateDigitalAssetRequestBody } from './model/CreateDigitalAssetRequestBody';
import { CreateDigitalAssetResponse } from './model/CreateDigitalAssetResponse';
import { CreateFileRequest } from './model/CreateFileRequest';
import { CreateFileResponse } from './model/CreateFileResponse';
import { CreatePictureModelingByUrlJobRequest } from './model/CreatePictureModelingByUrlJobRequest';
import { CreatePictureModelingByUrlJobResponse } from './model/CreatePictureModelingByUrlJobResponse';
import { CreatePictureModelingJobRequest } from './model/CreatePictureModelingJobRequest';
import { CreatePictureModelingJobRequestBody } from './model/CreatePictureModelingJobRequestBody';
import { CreatePictureModelingJobResponse } from './model/CreatePictureModelingJobResponse';
import { CreateStyleRequestBody } from './model/CreateStyleRequestBody';
import { CreateTTSAReq } from './model/CreateTTSAReq';
import { CreateTtsaRequest } from './model/CreateTtsaRequest';
import { CreateTtsaResponse } from './model/CreateTtsaResponse';
import { CreateVideoMotionCaptureJobRequest } from './model/CreateVideoMotionCaptureJobRequest';
import { CreateVideoMotionCaptureJobResponse } from './model/CreateVideoMotionCaptureJobResponse';
import { DeleteAssetRequest } from './model/DeleteAssetRequest';
import { DeleteAssetResponse } from './model/DeleteAssetResponse';
import { DeleteFileRequest } from './model/DeleteFileRequest';
import { DeleteFileResponse } from './model/DeleteFileResponse';
import { DigitalAssetInfo } from './model/DigitalAssetInfo';
import { DigitalAssetSummary } from './model/DigitalAssetSummary';
import { DigitalHumanModelingJobInfo } from './model/DigitalHumanModelingJobInfo';
import { EngineAssetInfo } from './model/EngineAssetInfo';
import { ErrorResponse } from './model/ErrorResponse';
import { ExecuteVideoMotionCaptureCommandRequest } from './model/ExecuteVideoMotionCaptureCommandRequest';
import { ExecuteVideoMotionCaptureCommandResponse } from './model/ExecuteVideoMotionCaptureCommandResponse';
import { ExternalVoiceAssetMeta } from './model/ExternalVoiceAssetMeta';
import { FilesCreateReq } from './model/FilesCreateReq';
import { HuaweiEIVoiceAssetMeta } from './model/HuaweiEIVoiceAssetMeta';
import { HumanModel2DAssetMeta } from './model/HumanModel2DAssetMeta';
import { HumanModelAssetMeta } from './model/HumanModelAssetMeta';
import { HumanModelMetaProperties } from './model/HumanModelMetaProperties';
import { InputInfo } from './model/InputInfo';
import { ListAssetSummaryRequest } from './model/ListAssetSummaryRequest';
import { ListAssetSummaryResponse } from './model/ListAssetSummaryResponse';
import { ListAssetSummarysReq } from './model/ListAssetSummarysReq';
import { ListAssetsRequest } from './model/ListAssetsRequest';
import { ListAssetsResponse } from './model/ListAssetsResponse';
import { ListPictureModelingJobsRequest } from './model/ListPictureModelingJobsRequest';
import { ListPictureModelingJobsResponse } from './model/ListPictureModelingJobsResponse';
import { ListStylesRequest } from './model/ListStylesRequest';
import { ListStylesResponse } from './model/ListStylesResponse';
import { ListTtsaDataRequest } from './model/ListTtsaDataRequest';
import { ListTtsaDataResponse } from './model/ListTtsaDataResponse';
import { ListTtsaJobsRequest } from './model/ListTtsaJobsRequest';
import { ListTtsaJobsResponse } from './model/ListTtsaJobsResponse';
import { ListVideoMotionCaptureJobsRequest } from './model/ListVideoMotionCaptureJobsRequest';
import { ListVideoMotionCaptureJobsResponse } from './model/ListVideoMotionCaptureJobsResponse';
import { MaterialAssetMeta } from './model/MaterialAssetMeta';
import { MaterialComponentInfo } from './model/MaterialComponentInfo';
import { MotionItem } from './model/MotionItem';
import { OutputInfo } from './model/OutputInfo';
import { PPTAssetMeta } from './model/PPTAssetMeta';
import { PPTPageInfo } from './model/PPTPageInfo';
import { PictureModelingByUrlReq } from './model/PictureModelingByUrlReq';
import { PictureModelingInfo } from './model/PictureModelingInfo';
import { RTCRoomInfoList } from './model/RTCRoomInfoList';
import { RTCUserInfo } from './model/RTCUserInfo';
import { RestoreAssetRequest } from './model/RestoreAssetRequest';
import { RestoreAssetResponse } from './model/RestoreAssetResponse';
import { SceneAssetMeta } from './model/SceneAssetMeta';
import { SceneComponentInfo } from './model/SceneComponentInfo';
import { ShowAssetRequest } from './model/ShowAssetRequest';
import { ShowAssetResponse } from './model/ShowAssetResponse';
import { ShowPictureModelingJobRequest } from './model/ShowPictureModelingJobRequest';
import { ShowPictureModelingJobResponse } from './model/ShowPictureModelingJobResponse';
import { ShowVideoMotionCaptureJobRequest } from './model/ShowVideoMotionCaptureJobRequest';
import { ShowVideoMotionCaptureJobResponse } from './model/ShowVideoMotionCaptureJobResponse';
import { StopVideoMotionCaptureJobRequest } from './model/StopVideoMotionCaptureJobRequest';
import { StopVideoMotionCaptureJobResponse } from './model/StopVideoMotionCaptureJobResponse';
import { StyleAssetItem } from './model/StyleAssetItem';
import { StyleExtraMeta } from './model/StyleExtraMeta';
import { StyleExtraMetaAdditionalProperties } from './model/StyleExtraMetaAdditionalProperties';
import { StyleExtraMetaAdditionalProperties1 } from './model/StyleExtraMetaAdditionalProperties1';
import { StyleExtraMetaEditColorItems } from './model/StyleExtraMetaEditColorItems';
import { StyleExtraMetaEditComponents } from './model/StyleExtraMetaEditComponents';
import { StyleExtraMetaEditValueItems } from './model/StyleExtraMetaEditValueItems';
import { StyleExtraMetaModellingAlgorithm } from './model/StyleExtraMetaModellingAlgorithm';
import { StyleInfo } from './model/StyleInfo';
import { SystemProperty } from './model/SystemProperty';
import { TTSAJob } from './model/TTSAJob';
import { UpdateDigitalAssetRequest } from './model/UpdateDigitalAssetRequest';
import { UpdateDigitalAssetRequestBody } from './model/UpdateDigitalAssetRequestBody';
import { UpdateDigitalAssetResponse } from './model/UpdateDigitalAssetResponse';
import { VideoMotionCaptureInfo } from './model/VideoMotionCaptureInfo';
import { VideoMotionCaptureJobReq } from './model/VideoMotionCaptureJobReq';
import { VoiceModelAssetMeta } from './model/VoiceModelAssetMeta';
import { XimalayaVoiceAssetMeta } from './model/XimalayaVoiceAssetMeta';

export class MetaStudioClient {
    public static newBuilder(): ClientBuilder<MetaStudioClient> {
            return new ClientBuilder<MetaStudioClient>(newClient);
    }

    private hcClient: HcClient;
    public constructor(client: HcClient) {
        this.hcClient = client;
    }

    public getPath() {
        return __dirname;
    }


    /**
     * 该接口用于在资产库中添加上传新的媒体资产。可上传的资产类型包括：数字人模型、素材、视频、图片、场景等。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建资产
     * @param {CreateDigitalAssetRequestBody} createDigitalAssetRequestBody 创建资产
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。  格式为(YYYYMMDD\&#39;T\&#39;HHMMSS\&#39;Z\&#39;)。
     * @param {string} [xAppUserId] 开发者应用作为资产权属的可选字段。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createDigitalAsset(createDigitalAssetRequest?: CreateDigitalAssetRequest): Promise<CreateDigitalAssetResponse> {
        const options = ParamCreater().createDigitalAsset(createDigitalAssetRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于删除资产库中的媒体资产。第一次调用删除接口，将指定资产放入回收站；第二次调用删除接口，将指定资产彻底删除。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除资产
     * @param {string} assetId 资产ID。
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。  格式为(YYYYMMDD\&#39;T\&#39;HHMMSS\&#39;Z\&#39;)。
     * @param {string} [xAppUserId] 开发者应用作为资产权属的可选字段。
     * @param {string} [mode] 删除模式
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteAsset(deleteAssetRequest?: DeleteAssetRequest): Promise<DeleteAssetResponse> {
        const options = ParamCreater().deleteAsset(deleteAssetRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询媒体资产库中指定的多个资产的概要信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询资产概要
     * @param {ListAssetSummarysReq} listAssetSummaryRequestBody 资产概要查询。
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。  格式为(YYYYMMDD\&#39;T\&#39;HHMMSS\&#39;Z\&#39;)。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAssetSummary(listAssetSummaryRequest?: ListAssetSummaryRequest): Promise<ListAssetSummaryResponse> {
        const options = ParamCreater().listAssetSummary(listAssetSummaryRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询资产库中的媒体资产列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询资产列表
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。  格式为(YYYYMMDD\&#39;T\&#39;HHMMSS\&#39;Z\&#39;)。
     * @param {string} [xAppUserId] 开发者应用作为资产权属的可选字段。
     * @param {number} [limit] 每页显示的条目数量。
     * @param {number} [offset] 偏移量，表示从此偏移量开始查询。
     * @param {string} [name] 按名称模糊查询。
     * @param {string} [tag] 按标签模糊查询。
     * @param {string} [startTime] 起始时间。格式遵循：RFC 3339 如\&quot;2021-01-10T08:43:17Z\&quot;。
     * @param {string} [endTime] 结束时间。格式遵循：RFC 3339 如\&quot;2021-01-10T10:43:17Z\&quot;。
     * @param {string} [assetType] 资产类型。多个类型使用英文逗号分割。 * HUMAN_MODEL：数字人模型 * VOICE_MODEL：音色模型（仅系统管理员可上传） * SCENE：场景模型 * ANIMATION：动作动画 * VIDEO：视频文件 * IMAGE：图片文件 * PPT：幻灯片文件 * MATERIAL：风格化素材 * HUMAN_MODEL_2D: 2D数字人网络模型 * BUSINESS_CARD_TEMPLET: 数字人名片模板 * MUSIC: 音乐
     * @param {string} [sortKey] 排序字段，目前只支持create_time。
     * @param {string} [sortDir] 排序方式。 * asc：升序 * desc：降序  默认asc升序。
     * @param {'SYSTEM' | 'CUSTOMIZATION' | 'ALL'} [assetSource] 资产来源。 * SYSTEM：系统资产 * CUSTOMIZATION：租户资产 * ALL：所有资产  默认查询租户资产。
     * @param {'UPLOAD' | 'UPLOADED' | 'UPLOADING' | 'UPLOAD_FAILED' | 'DOWNLOAD' | 'COLLECTIO' | 'DRAFT' | 'RECYCLE'} [assetManageType] 资产管理分类。 * UPLOAD：我的上传 * UPLOADED：已上传 * UPLOADING：UPLOADING * UPLOAD_FAILED：上传失败 * DOWNLOAD：我的下载 * COLLECTION：我的收藏 * DRAFT：草稿箱 * RECYCLE：回收站
     * @param {string} [assetState] 资产状态。多个资产状态使用英文逗号分割。 * CREATING：资产创建中，主文件尚未上传 * FAILED：主文件上传失败 * UNACTIVED：主文件上传成功，资产未激活，资产不可用于其他业务（用户可更新状态） * ACTIVED：主文件上传成功，资产激活，资产可用于其他业务（用户可更新状态） * DELETING：资产删除中，资产不可用，资产可恢复 * DELETED：资产文件已删除，资产不可用，资产不可恢复 * BLOCK：资产被冻结，资产不可用，不可查看文件。 默认查询所有状态的资产。
     * @param {string} [styleId] 基于风格化ID查询关联资产。 * system_male_001：男性风格01 * system_female_001：女性风格01 * system_male_002：男性风格02  * system_female_002：女性风格02
     * @param {string} [xUserMePrivilege] 玄天引擎测试用户字段。
     * @param {string} [renderEngine] 可用引擎。 * UE：UE引擎 * MetaEngine：MetaEngine引擎 &gt; 该字段当前只对MetaEngine白名单用户生效
     * @param {string} [sex] 性别。多选使用英文逗号分隔。
     * @param {string} [language] 语言。多选使用英文逗号分隔。
     * @param {string} [systemProperty] 系统属性。  key和value间用\&quot;:\&quot;分隔，多个key之间用\&quot;,\&quot;分隔。  如system_property&#x3D;BACKGROUND_IMG:Yes,RENDER_ENGINE:MetaEngine。  不同Key对应Value取值如下： * STYLE_ID：风格Id * RENDER_ENGINE：引擎类型，可取值UE或MetaEngine * BACKGROUND_IMG：视频制作的2D背景图片，可取值Yes * BACKGROUND_SCENE：视频制作的2D背景场景，可取值Horizontal（横屏）或者Vertical（竖屏） * CREATED_BY_PLATFORM：是否平台生成，可取值Yes
     * @param {boolean} [actionEditable] 动作是否可编辑。仅在分身数字人模型查询时有效。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAssets(listAssetsRequest?: ListAssetsRequest): Promise<ListAssetsResponse> {
        const options = ParamCreater().listAssets(listAssetsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于恢复被删除至回收站的媒体资产。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 恢复被删除的资产
     * @param {string} assetId 资产ID。
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。  格式为(YYYYMMDD\&#39;T\&#39;HHMMSS\&#39;Z\&#39;)。
     * @param {string} [xAppUserId] 开发者应用作为资产权属的可选字段。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public restoreAsset(restoreAssetRequest?: RestoreAssetRequest): Promise<RestoreAssetResponse> {
        const options = ParamCreater().restoreAsset(restoreAssetRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询资产库中指定媒体资产的详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询资产详情
     * @param {string} assetId 资产ID。
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。  格式为(YYYYMMDD\&#39;T\&#39;HHMMSS\&#39;Z\&#39;)。
     * @param {string} [xAppUserId] 开发者应用作为资产权属的可选字段。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAsset(showAssetRequest?: ShowAssetRequest): Promise<ShowAssetResponse> {
        const options = ParamCreater().showAsset(showAssetRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于更新资产库中的媒体资产信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新资产
     * @param {string} assetId 资产ID。
     * @param {UpdateDigitalAssetRequestBody} updateDigitalAssetRequestBody 创建资产
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。  格式为(YYYYMMDD\&#39;T\&#39;HHMMSS\&#39;Z\&#39;)。
     * @param {string} [xAppUserId] 开发者应用作为资产权属的可选字段。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateDigitalAsset(updateDigitalAssetRequest?: UpdateDigitalAssetRequest): Promise<UpdateDigitalAssetResponse> {
        const options = ParamCreater().updateDigitalAsset(updateDigitalAssetRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 资产文件上传完毕后，通过该接口确认上传完成。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 确认文件已上传
     * @param {string} fileId 文件ID。
     * @param {ConfirmFileUploadRequestBody} confirmFileUploadRequestBody 确认媒资上传
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。  格式为(YYYYMMDD\&#39;T\&#39;HHMMSS\&#39;Z\&#39;)。
     * @param {string} [xAppUserId] 开发者应用作为资产权属的可选字段。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public confirmFileUpload(confirmFileUploadRequest?: ConfirmFileUploadRequest): Promise<ConfirmFileUploadResponse> {
        const options = ParamCreater().confirmFileUpload(confirmFileUploadRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于创建文件并获取上传URL。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建文件并获取上传URL
     * @param {FilesCreateReq} createFileRequestBody 创建文件请求。
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。  格式为(YYYYMMDD\&#39;T\&#39;HHMMSS\&#39;Z\&#39;)。
     * @param {string} [xAppUserId] 开发者应用作为资产权属的可选字段。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createFile(createFileRequest?: CreateFileRequest): Promise<CreateFileResponse> {
        const options = ParamCreater().createFile(createFileRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于删除媒体资产库中指定的文件。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除文件
     * @param {string} fileId 文件ID。
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。  格式为(YYYYMMDD\&#39;T\&#39;HHMMSS\&#39;Z\&#39;)。
     * @param {string} [xAppUserId] 开发者应用作为资产权属的可选字段。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteFile(deleteFileRequest?: DeleteFileRequest): Promise<DeleteFileResponse> {
        const options = ParamCreater().deleteFile(deleteFileRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于从URL中获取图片进行照片建模任务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 基于图片URL创建照片建模任务
     * @param {PictureModelingByUrlReq} createPictureModelingByUrlJobRequestBody 建模请求
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。  格式为(YYYYMMDD\&#39;T\&#39;HHMMSS\&#39;Z\&#39;)。
     * @param {string} [xProjectId] 使用AK/SK方式认证时必选，携带项目ID信息。
     * @param {string} [xAppUserId] 开发者应用作为资产权属的可选字段。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createPictureModelingByUrlJob(createPictureModelingByUrlJobRequest?: CreatePictureModelingByUrlJobRequest): Promise<CreatePictureModelingByUrlJobResponse> {
        const options = ParamCreater().createPictureModelingByUrlJob(createPictureModelingByUrlJobRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于创建风格化照片建模任务。通过上传照片，生成风格化数字人模型。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建照片建模任务
     * @param {any} file 照片文件。 &gt; 只能上传jpg/jpeg/png格式文件， 最大分辨率为3840*2160
     * @param {string} styleId 数字人风格ID。 * system_male_001：男性风格01 * system_female_001：女性风格01 * system_male_002：男性风格02 * system_female_002：女性风格02
     * @param {string} name 数字人模型名称，首次创建时使用。
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。  格式为(YYYYMMDD\&#39;T\&#39;HHMMSS\&#39;Z\&#39;)。
     * @param {string} [xProjectId] 使用AK/SK方式认证时必选，携带项目ID信息。
     * @param {string} [xAppUserId] 开发者应用作为资产权属的可选字段。
     * @param {string} [xUserPrivilege] 测试用户判断。
     * @param {string} [notifyUrl] 照片建模任务结束的回调地址。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createPictureModelingJob(createPictureModelingJobRequest?: CreatePictureModelingJobRequest): Promise<CreatePictureModelingJobResponse> {
        const options = ParamCreater().createPictureModelingJob(createPictureModelingJobRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询风格化照片建模任务列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 照片建模任务列表查询
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。  格式为(YYYYMMDD\&#39;T\&#39;HHMMSS\&#39;Z\&#39;)。
     * @param {string} [xProjectId] 使用AK/SK方式认证时必选，携带项目ID信息。
     * @param {string} [xAppUserId] 开发者应用作为资产权属的可选字段。
     * @param {number} [offset] 偏移量，表示从此偏移量开始查询。
     * @param {number} [limit] 每页显示的条目数量。
     * @param {string} [state] 任务状态，默认所有状态。  可多个状态查询，使用英文逗号分隔。  如state&#x3D;CREATING,PUBLISHED
     * @param {string} [sortKey] 排序字段，目前只支持create_time。
     * @param {string} [sortDir] 排序方式。 * asc：升序 * desc：降序  默认asc升序。
     * @param {string} [createUntil] 过滤创建时间&lt;&#x3D;输入时间的记录。
     * @param {string} [createSince] 过滤创建时间&gt;&#x3D;输入时间的记录。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listPictureModelingJobs(listPictureModelingJobsRequest?: ListPictureModelingJobsRequest): Promise<ListPictureModelingJobsResponse> {
        const options = ParamCreater().listPictureModelingJobs(listPictureModelingJobsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于风格化查询照片建模任务详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 照片建模任务详情查询
     * @param {string} jobId 任务ID。
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。  格式为(YYYYMMDD\&#39;T\&#39;HHMMSS\&#39;Z\&#39;)。
     * @param {string} [xProjectId] 使用AK/SK方式认证时必选，携带项目ID信息。
     * @param {string} [xAppUserId] 开发者应用作为资产权属的可选字段。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showPictureModelingJob(showPictureModelingJobRequest?: ShowPictureModelingJobRequest): Promise<ShowPictureModelingJobResponse> {
        const options = ParamCreater().showPictureModelingJob(showPictureModelingJobRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询数字人风格列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询数字人风格列表
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。  格式为(YYYYMMDD\&#39;T\&#39;HHMMSS\&#39;Z\&#39;)。
     * @param {string} [xProjectId] 使用AK/SK方式认证时必选，携带项目ID信息。
     * @param {string} [xAppUserId] 开发者应用作为资产权属的可选字段。
     * @param {number} [offset] 偏移量，表示从此偏移量开始查询。
     * @param {number} [limit] 每页显示的条目数量。
     * @param {string} [state] 任务状态，默认所有状态。  可多个状态查询，使用英文逗号分隔。  如state&#x3D;CREATING,PUBLISHED
     * @param {string} [sortKey] 排序字段，目前只支持create_time。
     * @param {string} [sortDir] 排序方式。 * asc：升序 * desc：降序  默认asc升序。
     * @param {string} [createUntil] 过滤创建时间&lt;&#x3D;输入时间的记录。
     * @param {string} [createSince] 过滤创建时间&gt;&#x3D;输入时间的记录。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listStyles(listStylesRequest?: ListStylesRequest): Promise<ListStylesResponse> {
        const options = ParamCreater().listStyles(listStylesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于创建驱动数字人表情、动作及语音的任务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建语音驱动任务
     * @param {CreateTTSAReq} createTTSARequestBody 数字人语音驱动任务创建请求。
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。  格式为(YYYYMMDD\&#39;T\&#39;HHMMSS\&#39;Z\&#39;)。
     * @param {string} [xProjectId] 使用AK/SK方式认证时必选，携带项目ID信息。
     * @param {string} [xAppUserId] 开发者应用作为资产权属的可选字段。
     * @param {string} [xUserPrivilege] 账号类型（INTERNAL_TEST：测试账号）
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createTtsa(createTtsaRequest?: CreateTtsaRequest): Promise<CreateTtsaResponse> {
        const options = ParamCreater().createTtsa(createTtsaRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于获取生成的数字人驱动数据，包括语音、表情、动作等。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取语音驱动数据
     * @param {string} jobId 任务ID。
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。  格式为(YYYYMMDD\&#39;T\&#39;HHMMSS\&#39;Z\&#39;)。
     * @param {string} [xProjectId] 使用AK/SK方式认证时必选，携带项目ID信息。
     * @param {number} [offset] 偏移量，表示生成内容时间偏移，目前每次返回2秒内容。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTtsaData(listTtsaDataRequest?: ListTtsaDataRequest): Promise<ListTtsaDataResponse> {
        const options = ParamCreater().listTtsaData(listTtsaDataRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询驱动数字人表情、动作及语音的任务列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取语音驱动任务列表
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。  格式为(YYYYMMDD\&#39;T\&#39;HHMMSS\&#39;Z\&#39;)。
     * @param {string} [xProjectId] 使用AK/SK方式认证时必选，携带项目ID信息。
     * @param {number} [offset] 偏移量，表示从此偏移量开始查询。
     * @param {number} [limit] 每页显示的条目数量。
     * @param {string} [xAppUserId] 开发者应用作为资产权属的可选字段。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTtsaJobs(listTtsaJobsRequest?: ListTtsaJobsRequest): Promise<ListTtsaJobsResponse> {
        const options = ParamCreater().listTtsaJobs(listTtsaJobsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于创建视频驱动任务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建视频驱动任务
     * @param {VideoMotionCaptureJobReq} createVideoMotionCaptureJobRequestBody 视频驱动任务创建请求。
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。  格式为(YYYYMMDD\&#39;T\&#39;HHMMSS\&#39;Z\&#39;)。
     * @param {string} [xProjectId] 使用AK/SK方式认证时必选，携带项目ID信息。
     * @param {string} [xAppUserId] 开发者应用作为资产权属的可选字段。
     * @param {string} [xUserPrivilege] 测试用户判断。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createVideoMotionCaptureJob(createVideoMotionCaptureJobRequest?: CreateVideoMotionCaptureJobRequest): Promise<CreateVideoMotionCaptureJobResponse> {
        const options = ParamCreater().createVideoMotionCaptureJob(createVideoMotionCaptureJobRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于控制数字人驱动。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 控制数字人驱动
     * @param {string} jobId 任务ID。
     * @param {ControlDigitalHumanLiveReq} executeVideoMotionCaptureCommandRequestBody 控制数字人驱动。
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。  格式为(YYYYMMDD\&#39;T\&#39;HHMMSS\&#39;Z\&#39;)。
     * @param {string} [xProjectId] 使用AK/SK方式认证时必选，携带项目ID信息。
     * @param {string} [xAppUserId] 开发者应用作为资产权属的可选字段。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public executeVideoMotionCaptureCommand(executeVideoMotionCaptureCommandRequest?: ExecuteVideoMotionCaptureCommandRequest): Promise<ExecuteVideoMotionCaptureCommandResponse> {
        const options = ParamCreater().executeVideoMotionCaptureCommand(executeVideoMotionCaptureCommandRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询视频驱动任务列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询视频驱动任务列表
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。  格式为(YYYYMMDD\&#39;T\&#39;HHMMSS\&#39;Z\&#39;)。
     * @param {string} [xProjectId] 使用AK/SK方式认证时必选，携带项目ID信息。
     * @param {string} [xAppUserId] 开发者应用作为资产权属的可选字段。
     * @param {number} [offset] 偏移量，表示从此偏移量开始查询。
     * @param {number} [limit] 每页显示的条目数量。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listVideoMotionCaptureJobs(listVideoMotionCaptureJobsRequest?: ListVideoMotionCaptureJobsRequest): Promise<ListVideoMotionCaptureJobsResponse> {
        const options = ParamCreater().listVideoMotionCaptureJobs(listVideoMotionCaptureJobsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询视频驱动任务详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询视频驱动任务详情
     * @param {string} jobId 任务ID。
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。  格式为(YYYYMMDD\&#39;T\&#39;HHMMSS\&#39;Z\&#39;)。
     * @param {string} [xProjectId] 使用AK/SK方式认证时必选，携带项目ID信息。
     * @param {string} [xAppUserId] 开发者应用作为资产权属的可选字段。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showVideoMotionCaptureJob(showVideoMotionCaptureJobRequest?: ShowVideoMotionCaptureJobRequest): Promise<ShowVideoMotionCaptureJobResponse> {
        const options = ParamCreater().showVideoMotionCaptureJob(showVideoMotionCaptureJobRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于停止视频驱动任务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 停止视频驱动任务
     * @param {string} jobId 任务ID。
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。  格式为(YYYYMMDD\&#39;T\&#39;HHMMSS\&#39;Z\&#39;)。
     * @param {string} [xProjectId] 使用AK/SK方式认证时必选，携带项目ID信息。
     * @param {string} [xAppUserId] 开发者应用作为资产权属的可选字段。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public stopVideoMotionCaptureJob(stopVideoMotionCaptureJobRequest?: StopVideoMotionCaptureJobRequest): Promise<StopVideoMotionCaptureJobResponse> {
        const options = ParamCreater().stopVideoMotionCaptureJob(stopVideoMotionCaptureJobRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 该接口用于在资产库中添加上传新的媒体资产。可上传的资产类型包括：数字人模型、素材、视频、图片、场景等。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createDigitalAsset(createDigitalAssetRequest?: CreateDigitalAssetRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/digital-assets",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let authorization;
            
            let xSdkDate;
            
            let xAppUserId;

            if (createDigitalAssetRequest !== null && createDigitalAssetRequest !== undefined) {
                if (createDigitalAssetRequest instanceof CreateDigitalAssetRequest) {
                    body = createDigitalAssetRequest.body
                    authorization = createDigitalAssetRequest.authorization;
                    xSdkDate = createDigitalAssetRequest.xSdkDate;
                    xAppUserId = createDigitalAssetRequest.xAppUserId;
                } else {
                    body = createDigitalAssetRequest['body'];
                    authorization = createDigitalAssetRequest['Authorization'];
                    xSdkDate = createDigitalAssetRequest['X-Sdk-Date'];
                    xAppUserId = createDigitalAssetRequest['X-App-UserId'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (authorization !== undefined && authorization !== null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }
            if (xAppUserId !== undefined && xAppUserId !== null) {
                localVarHeaderParameter['X-App-UserId'] = String(xAppUserId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于删除资产库中的媒体资产。第一次调用删除接口，将指定资产放入回收站；第二次调用删除接口，将指定资产彻底删除。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteAsset(deleteAssetRequest?: DeleteAssetRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/digital-assets/{asset_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let assetId;
            
            let authorization;
            
            let xSdkDate;
            
            let xAppUserId;
            
            let mode;

            if (deleteAssetRequest !== null && deleteAssetRequest !== undefined) {
                if (deleteAssetRequest instanceof DeleteAssetRequest) {
                    assetId = deleteAssetRequest.assetId;
                    authorization = deleteAssetRequest.authorization;
                    xSdkDate = deleteAssetRequest.xSdkDate;
                    xAppUserId = deleteAssetRequest.xAppUserId;
                    mode = deleteAssetRequest.mode;
                } else {
                    assetId = deleteAssetRequest['asset_id'];
                    authorization = deleteAssetRequest['Authorization'];
                    xSdkDate = deleteAssetRequest['X-Sdk-Date'];
                    xAppUserId = deleteAssetRequest['X-App-UserId'];
                    mode = deleteAssetRequest['mode'];
                }
            }

        
            if (assetId === null || assetId === undefined) {
            throw new RequiredError('assetId','Required parameter assetId was null or undefined when calling deleteAsset.');
            }
            if (mode !== null && mode !== undefined) {
                localVarQueryParameter['mode'] = mode;
            }
            if (authorization !== undefined && authorization !== null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }
            if (xAppUserId !== undefined && xAppUserId !== null) {
                localVarHeaderParameter['X-App-UserId'] = String(xAppUserId);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'asset_id': assetId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询媒体资产库中指定的多个资产的概要信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAssetSummary(listAssetSummaryRequest?: ListAssetSummaryRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/digital-assets/summarys",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let authorization;
            
            let xSdkDate;

            if (listAssetSummaryRequest !== null && listAssetSummaryRequest !== undefined) {
                if (listAssetSummaryRequest instanceof ListAssetSummaryRequest) {
                    body = listAssetSummaryRequest.body
                    authorization = listAssetSummaryRequest.authorization;
                    xSdkDate = listAssetSummaryRequest.xSdkDate;
                } else {
                    body = listAssetSummaryRequest['body'];
                    authorization = listAssetSummaryRequest['Authorization'];
                    xSdkDate = listAssetSummaryRequest['X-Sdk-Date'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (authorization !== undefined && authorization !== null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
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
         * 该接口用于查询资产库中的媒体资产列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAssets(listAssetsRequest?: ListAssetsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/digital-assets",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let authorization;
            
            let xSdkDate;
            
            let xAppUserId;
            
            let limit;
            
            let offset;
            
            let name;
            
            let tag;
            
            let startTime;
            
            let endTime;
            
            let assetType;
            
            let sortKey;
            
            let sortDir;
            
            let assetSource;
            
            let assetManageType;
            
            let assetState;
            
            let styleId;
            
            let xUserMePrivilege;
            
            let renderEngine;
            
            let sex;
            
            let language;
            
            let systemProperty;
            
            let actionEditable;

            if (listAssetsRequest !== null && listAssetsRequest !== undefined) {
                if (listAssetsRequest instanceof ListAssetsRequest) {
                    authorization = listAssetsRequest.authorization;
                    xSdkDate = listAssetsRequest.xSdkDate;
                    xAppUserId = listAssetsRequest.xAppUserId;
                    limit = listAssetsRequest.limit;
                    offset = listAssetsRequest.offset;
                    name = listAssetsRequest.name;
                    tag = listAssetsRequest.tag;
                    startTime = listAssetsRequest.startTime;
                    endTime = listAssetsRequest.endTime;
                    assetType = listAssetsRequest.assetType;
                    sortKey = listAssetsRequest.sortKey;
                    sortDir = listAssetsRequest.sortDir;
                    assetSource = listAssetsRequest.assetSource;
                    assetManageType = listAssetsRequest.assetManageType;
                    assetState = listAssetsRequest.assetState;
                    styleId = listAssetsRequest.styleId;
                    xUserMePrivilege = listAssetsRequest.xUserMePrivilege;
                    renderEngine = listAssetsRequest.renderEngine;
                    sex = listAssetsRequest.sex;
                    language = listAssetsRequest.language;
                    systemProperty = listAssetsRequest.systemProperty;
                    actionEditable = listAssetsRequest.actionEditable;
                } else {
                    authorization = listAssetsRequest['Authorization'];
                    xSdkDate = listAssetsRequest['X-Sdk-Date'];
                    xAppUserId = listAssetsRequest['X-App-UserId'];
                    limit = listAssetsRequest['limit'];
                    offset = listAssetsRequest['offset'];
                    name = listAssetsRequest['name'];
                    tag = listAssetsRequest['tag'];
                    startTime = listAssetsRequest['start_time'];
                    endTime = listAssetsRequest['end_time'];
                    assetType = listAssetsRequest['asset_type'];
                    sortKey = listAssetsRequest['sort_key'];
                    sortDir = listAssetsRequest['sort_dir'];
                    assetSource = listAssetsRequest['asset_source'];
                    assetManageType = listAssetsRequest['asset_manage_type'];
                    assetState = listAssetsRequest['asset_state'];
                    styleId = listAssetsRequest['style_id'];
                    xUserMePrivilege = listAssetsRequest['X-User-MePrivilege'];
                    renderEngine = listAssetsRequest['render_engine'];
                    sex = listAssetsRequest['sex'];
                    language = listAssetsRequest['language'];
                    systemProperty = listAssetsRequest['system_property'];
                    actionEditable = listAssetsRequest['action_editable'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (tag !== null && tag !== undefined) {
                localVarQueryParameter['tag'] = tag;
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (assetType !== null && assetType !== undefined) {
                localVarQueryParameter['asset_type'] = assetType;
            }
            if (sortKey !== null && sortKey !== undefined) {
                localVarQueryParameter['sort_key'] = sortKey;
            }
            if (sortDir !== null && sortDir !== undefined) {
                localVarQueryParameter['sort_dir'] = sortDir;
            }
            if (assetSource !== null && assetSource !== undefined) {
                localVarQueryParameter['asset_source'] = assetSource;
            }
            if (assetManageType !== null && assetManageType !== undefined) {
                localVarQueryParameter['asset_manage_type'] = assetManageType;
            }
            if (assetState !== null && assetState !== undefined) {
                localVarQueryParameter['asset_state'] = assetState;
            }
            if (styleId !== null && styleId !== undefined) {
                localVarQueryParameter['style_id'] = styleId;
            }
            if (renderEngine !== null && renderEngine !== undefined) {
                localVarQueryParameter['render_engine'] = renderEngine;
            }
            if (sex !== null && sex !== undefined) {
                localVarQueryParameter['sex'] = sex;
            }
            if (language !== null && language !== undefined) {
                localVarQueryParameter['language'] = language;
            }
            if (systemProperty !== null && systemProperty !== undefined) {
                localVarQueryParameter['system_property'] = systemProperty;
            }
            if (actionEditable !== null && actionEditable !== undefined) {
                localVarQueryParameter['action_editable'] = actionEditable;
            }
            if (authorization !== undefined && authorization !== null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }
            if (xAppUserId !== undefined && xAppUserId !== null) {
                localVarHeaderParameter['X-App-UserId'] = String(xAppUserId);
            }
            if (xUserMePrivilege !== undefined && xUserMePrivilege !== null) {
                localVarHeaderParameter['X-User-MePrivilege'] = String(xUserMePrivilege);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于恢复被删除至回收站的媒体资产。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        restoreAsset(restoreAssetRequest?: RestoreAssetRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/digital-assets/{asset_id}/restore",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let assetId;
            
            let authorization;
            
            let xSdkDate;
            
            let xAppUserId;

            if (restoreAssetRequest !== null && restoreAssetRequest !== undefined) {
                if (restoreAssetRequest instanceof RestoreAssetRequest) {
                    assetId = restoreAssetRequest.assetId;
                    authorization = restoreAssetRequest.authorization;
                    xSdkDate = restoreAssetRequest.xSdkDate;
                    xAppUserId = restoreAssetRequest.xAppUserId;
                } else {
                    assetId = restoreAssetRequest['asset_id'];
                    authorization = restoreAssetRequest['Authorization'];
                    xSdkDate = restoreAssetRequest['X-Sdk-Date'];
                    xAppUserId = restoreAssetRequest['X-App-UserId'];
                }
            }

        
            if (assetId === null || assetId === undefined) {
            throw new RequiredError('assetId','Required parameter assetId was null or undefined when calling restoreAsset.');
            }
            if (authorization !== undefined && authorization !== null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }
            if (xAppUserId !== undefined && xAppUserId !== null) {
                localVarHeaderParameter['X-App-UserId'] = String(xAppUserId);
            }

            options.pathParams = { 'asset_id': assetId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询资产库中指定媒体资产的详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAsset(showAssetRequest?: ShowAssetRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/digital-assets/{asset_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let assetId;
            
            let authorization;
            
            let xSdkDate;
            
            let xAppUserId;

            if (showAssetRequest !== null && showAssetRequest !== undefined) {
                if (showAssetRequest instanceof ShowAssetRequest) {
                    assetId = showAssetRequest.assetId;
                    authorization = showAssetRequest.authorization;
                    xSdkDate = showAssetRequest.xSdkDate;
                    xAppUserId = showAssetRequest.xAppUserId;
                } else {
                    assetId = showAssetRequest['asset_id'];
                    authorization = showAssetRequest['Authorization'];
                    xSdkDate = showAssetRequest['X-Sdk-Date'];
                    xAppUserId = showAssetRequest['X-App-UserId'];
                }
            }

        
            if (assetId === null || assetId === undefined) {
            throw new RequiredError('assetId','Required parameter assetId was null or undefined when calling showAsset.');
            }
            if (authorization !== undefined && authorization !== null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }
            if (xAppUserId !== undefined && xAppUserId !== null) {
                localVarHeaderParameter['X-App-UserId'] = String(xAppUserId);
            }

            options.pathParams = { 'asset_id': assetId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于更新资产库中的媒体资产信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateDigitalAsset(updateDigitalAssetRequest?: UpdateDigitalAssetRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/digital-assets/{asset_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let assetId;
            
            let authorization;
            
            let xSdkDate;
            
            let xAppUserId;

            if (updateDigitalAssetRequest !== null && updateDigitalAssetRequest !== undefined) {
                if (updateDigitalAssetRequest instanceof UpdateDigitalAssetRequest) {
                    assetId = updateDigitalAssetRequest.assetId;
                    body = updateDigitalAssetRequest.body
                    authorization = updateDigitalAssetRequest.authorization;
                    xSdkDate = updateDigitalAssetRequest.xSdkDate;
                    xAppUserId = updateDigitalAssetRequest.xAppUserId;
                } else {
                    assetId = updateDigitalAssetRequest['asset_id'];
                    body = updateDigitalAssetRequest['body'];
                    authorization = updateDigitalAssetRequest['Authorization'];
                    xSdkDate = updateDigitalAssetRequest['X-Sdk-Date'];
                    xAppUserId = updateDigitalAssetRequest['X-App-UserId'];
                }
            }

        
            if (assetId === null || assetId === undefined) {
            throw new RequiredError('assetId','Required parameter assetId was null or undefined when calling updateDigitalAsset.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (authorization !== undefined && authorization !== null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }
            if (xAppUserId !== undefined && xAppUserId !== null) {
                localVarHeaderParameter['X-App-UserId'] = String(xAppUserId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'asset_id': assetId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 资产文件上传完毕后，通过该接口确认上传完成。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        confirmFileUpload(confirmFileUploadRequest?: ConfirmFileUploadRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/files/{file_id}/complete",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let fileId;
            
            let authorization;
            
            let xSdkDate;
            
            let xAppUserId;

            if (confirmFileUploadRequest !== null && confirmFileUploadRequest !== undefined) {
                if (confirmFileUploadRequest instanceof ConfirmFileUploadRequest) {
                    fileId = confirmFileUploadRequest.fileId;
                    body = confirmFileUploadRequest.body
                    authorization = confirmFileUploadRequest.authorization;
                    xSdkDate = confirmFileUploadRequest.xSdkDate;
                    xAppUserId = confirmFileUploadRequest.xAppUserId;
                } else {
                    fileId = confirmFileUploadRequest['file_id'];
                    body = confirmFileUploadRequest['body'];
                    authorization = confirmFileUploadRequest['Authorization'];
                    xSdkDate = confirmFileUploadRequest['X-Sdk-Date'];
                    xAppUserId = confirmFileUploadRequest['X-App-UserId'];
                }
            }

        
            if (fileId === null || fileId === undefined) {
            throw new RequiredError('fileId','Required parameter fileId was null or undefined when calling confirmFileUpload.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (authorization !== undefined && authorization !== null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }
            if (xAppUserId !== undefined && xAppUserId !== null) {
                localVarHeaderParameter['X-App-UserId'] = String(xAppUserId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'file_id': fileId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于创建文件并获取上传URL。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createFile(createFileRequest?: CreateFileRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/files",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let authorization;
            
            let xSdkDate;
            
            let xAppUserId;

            if (createFileRequest !== null && createFileRequest !== undefined) {
                if (createFileRequest instanceof CreateFileRequest) {
                    body = createFileRequest.body
                    authorization = createFileRequest.authorization;
                    xSdkDate = createFileRequest.xSdkDate;
                    xAppUserId = createFileRequest.xAppUserId;
                } else {
                    body = createFileRequest['body'];
                    authorization = createFileRequest['Authorization'];
                    xSdkDate = createFileRequest['X-Sdk-Date'];
                    xAppUserId = createFileRequest['X-App-UserId'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (authorization !== undefined && authorization !== null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }
            if (xAppUserId !== undefined && xAppUserId !== null) {
                localVarHeaderParameter['X-App-UserId'] = String(xAppUserId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于删除媒体资产库中指定的文件。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteFile(deleteFileRequest?: DeleteFileRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/files/{file_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let fileId;
            
            let authorization;
            
            let xSdkDate;
            
            let xAppUserId;

            if (deleteFileRequest !== null && deleteFileRequest !== undefined) {
                if (deleteFileRequest instanceof DeleteFileRequest) {
                    fileId = deleteFileRequest.fileId;
                    authorization = deleteFileRequest.authorization;
                    xSdkDate = deleteFileRequest.xSdkDate;
                    xAppUserId = deleteFileRequest.xAppUserId;
                } else {
                    fileId = deleteFileRequest['file_id'];
                    authorization = deleteFileRequest['Authorization'];
                    xSdkDate = deleteFileRequest['X-Sdk-Date'];
                    xAppUserId = deleteFileRequest['X-App-UserId'];
                }
            }

        
            if (fileId === null || fileId === undefined) {
            throw new RequiredError('fileId','Required parameter fileId was null or undefined when calling deleteFile.');
            }
            if (authorization !== undefined && authorization !== null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }
            if (xAppUserId !== undefined && xAppUserId !== null) {
                localVarHeaderParameter['X-App-UserId'] = String(xAppUserId);
            }

            options.pathParams = { 'file_id': fileId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于从URL中获取图片进行照片建模任务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createPictureModelingByUrlJob(createPictureModelingByUrlJobRequest?: CreatePictureModelingByUrlJobRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/digital-human/stylized/picture-modelings-by-url",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let authorization;
            
            let xSdkDate;
            
            let xProjectId;
            
            let xAppUserId;

            if (createPictureModelingByUrlJobRequest !== null && createPictureModelingByUrlJobRequest !== undefined) {
                if (createPictureModelingByUrlJobRequest instanceof CreatePictureModelingByUrlJobRequest) {
                    body = createPictureModelingByUrlJobRequest.body
                    authorization = createPictureModelingByUrlJobRequest.authorization;
                    xSdkDate = createPictureModelingByUrlJobRequest.xSdkDate;
                    xProjectId = createPictureModelingByUrlJobRequest.xProjectId;
                    xAppUserId = createPictureModelingByUrlJobRequest.xAppUserId;
                } else {
                    body = createPictureModelingByUrlJobRequest['body'];
                    authorization = createPictureModelingByUrlJobRequest['Authorization'];
                    xSdkDate = createPictureModelingByUrlJobRequest['X-Sdk-Date'];
                    xProjectId = createPictureModelingByUrlJobRequest['X-Project-Id'];
                    xAppUserId = createPictureModelingByUrlJobRequest['X-App-UserId'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (authorization !== undefined && authorization !== null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }
            if (xProjectId !== undefined && xProjectId !== null) {
                localVarHeaderParameter['X-Project-Id'] = String(xProjectId);
            }
            if (xAppUserId !== undefined && xAppUserId !== null) {
                localVarHeaderParameter['X-App-UserId'] = String(xAppUserId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于创建风格化照片建模任务。通过上传照片，生成风格化数字人模型。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createPictureModelingJob(createPictureModelingJobRequest?: CreatePictureModelingJobRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/digital-human/stylized/picture-modelings",
                contentType: "multipart/form-data",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            const localVarFormParams = new FormData();
            let file;
            
            let styleId;
            
            let name;
            
            
            let authorization;
            
            let xSdkDate;
            
            let xProjectId;
            
            let xAppUserId;
            
            let xUserPrivilege;
            let notifyUrl;
            

            if (createPictureModelingJobRequest !== null && createPictureModelingJobRequest !== undefined) {
                if (createPictureModelingJobRequest instanceof CreatePictureModelingJobRequest) {
                    file = createPictureModelingJobRequest.body?.file;
                    styleId = createPictureModelingJobRequest.body?.styleId;
                    name = createPictureModelingJobRequest.body?.name;
                    authorization = createPictureModelingJobRequest.authorization;
                    xSdkDate = createPictureModelingJobRequest.xSdkDate;
                    xProjectId = createPictureModelingJobRequest.xProjectId;
                    xAppUserId = createPictureModelingJobRequest.xAppUserId;
                    xUserPrivilege = createPictureModelingJobRequest.xUserPrivilege;
                    notifyUrl = createPictureModelingJobRequest.body?.notifyUrl;
                } else {
                    file = createPictureModelingJobRequest['body']['file'];
                    styleId = createPictureModelingJobRequest['body']['styleId'];
                    name = createPictureModelingJobRequest['body']['name'];
                    authorization = createPictureModelingJobRequest['Authorization'];
                    xSdkDate = createPictureModelingJobRequest['X-Sdk-Date'];
                    xProjectId = createPictureModelingJobRequest['X-Project-Id'];
                    xAppUserId = createPictureModelingJobRequest['X-App-UserId'];
                    xUserPrivilege = createPictureModelingJobRequest['X-User-Privilege'];
                    notifyUrl = createPictureModelingJobRequest['body']['notifyUrl'];
                }
            }

        
            if (file === null || file === undefined) {
            throw new RequiredError('file','Required parameter file was null or undefined when calling createPictureModelingJob.');
            }
            if (styleId === null || styleId === undefined) {
            throw new RequiredError('styleId','Required parameter styleId was null or undefined when calling createPictureModelingJob.');
            }
            if (name === null || name === undefined) {
            throw new RequiredError('name','Required parameter name was null or undefined when calling createPictureModelingJob.');
            }
            if (styleId !== undefined) { 
                localVarFormParams.append('style_id', styleId as any);
            }
            if (name !== undefined) { 
                localVarFormParams.append('name', name as any);
            }
            if (notifyUrl !== undefined) { 
                localVarFormParams.append('notify_url', notifyUrl as any);
            }
            if (file !== undefined) { 
                localVarFormParams.append('file', file as any);
            }
            if (authorization !== undefined && authorization !== null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }
            if (xProjectId !== undefined && xProjectId !== null) {
                localVarHeaderParameter['X-Project-Id'] = String(xProjectId);
            }
            if (xAppUserId !== undefined && xAppUserId !== null) {
                localVarHeaderParameter['X-App-UserId'] = String(xAppUserId);
            }
            if (xUserPrivilege !== undefined && xUserPrivilege !== null) {
                localVarHeaderParameter['X-User-Privilege'] = String(xUserPrivilege);
            }
            localVarHeaderParameter['Content-Type'] = 'application/x-www-form-urlencoded';
            localVarHeaderParameter['Content-Type'] = 'multipart/form-data';
            options.data = localVarFormParams;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询风格化照片建模任务列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listPictureModelingJobs(listPictureModelingJobsRequest?: ListPictureModelingJobsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/digital-human/stylized/picture-modelings",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let authorization;
            
            let xSdkDate;
            
            let xProjectId;
            
            let xAppUserId;
            
            let offset;
            
            let limit;
            
            let state;
            
            let sortKey;
            
            let sortDir;
            
            let createUntil;
            
            let createSince;

            if (listPictureModelingJobsRequest !== null && listPictureModelingJobsRequest !== undefined) {
                if (listPictureModelingJobsRequest instanceof ListPictureModelingJobsRequest) {
                    authorization = listPictureModelingJobsRequest.authorization;
                    xSdkDate = listPictureModelingJobsRequest.xSdkDate;
                    xProjectId = listPictureModelingJobsRequest.xProjectId;
                    xAppUserId = listPictureModelingJobsRequest.xAppUserId;
                    offset = listPictureModelingJobsRequest.offset;
                    limit = listPictureModelingJobsRequest.limit;
                    state = listPictureModelingJobsRequest.state;
                    sortKey = listPictureModelingJobsRequest.sortKey;
                    sortDir = listPictureModelingJobsRequest.sortDir;
                    createUntil = listPictureModelingJobsRequest.createUntil;
                    createSince = listPictureModelingJobsRequest.createSince;
                } else {
                    authorization = listPictureModelingJobsRequest['Authorization'];
                    xSdkDate = listPictureModelingJobsRequest['X-Sdk-Date'];
                    xProjectId = listPictureModelingJobsRequest['X-Project-Id'];
                    xAppUserId = listPictureModelingJobsRequest['X-App-UserId'];
                    offset = listPictureModelingJobsRequest['offset'];
                    limit = listPictureModelingJobsRequest['limit'];
                    state = listPictureModelingJobsRequest['state'];
                    sortKey = listPictureModelingJobsRequest['sort_key'];
                    sortDir = listPictureModelingJobsRequest['sort_dir'];
                    createUntil = listPictureModelingJobsRequest['create_until'];
                    createSince = listPictureModelingJobsRequest['create_since'];
                }
            }

        
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (state !== null && state !== undefined) {
                localVarQueryParameter['state'] = state;
            }
            if (sortKey !== null && sortKey !== undefined) {
                localVarQueryParameter['sort_key'] = sortKey;
            }
            if (sortDir !== null && sortDir !== undefined) {
                localVarQueryParameter['sort_dir'] = sortDir;
            }
            if (createUntil !== null && createUntil !== undefined) {
                localVarQueryParameter['create_until'] = createUntil;
            }
            if (createSince !== null && createSince !== undefined) {
                localVarQueryParameter['create_since'] = createSince;
            }
            if (authorization !== undefined && authorization !== null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }
            if (xProjectId !== undefined && xProjectId !== null) {
                localVarHeaderParameter['X-Project-Id'] = String(xProjectId);
            }
            if (xAppUserId !== undefined && xAppUserId !== null) {
                localVarHeaderParameter['X-App-UserId'] = String(xAppUserId);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于风格化查询照片建模任务详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showPictureModelingJob(showPictureModelingJobRequest?: ShowPictureModelingJobRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/digital-human/stylized/picture-modelings/{job_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let jobId;
            
            let authorization;
            
            let xSdkDate;
            
            let xProjectId;
            
            let xAppUserId;

            if (showPictureModelingJobRequest !== null && showPictureModelingJobRequest !== undefined) {
                if (showPictureModelingJobRequest instanceof ShowPictureModelingJobRequest) {
                    jobId = showPictureModelingJobRequest.jobId;
                    authorization = showPictureModelingJobRequest.authorization;
                    xSdkDate = showPictureModelingJobRequest.xSdkDate;
                    xProjectId = showPictureModelingJobRequest.xProjectId;
                    xAppUserId = showPictureModelingJobRequest.xAppUserId;
                } else {
                    jobId = showPictureModelingJobRequest['job_id'];
                    authorization = showPictureModelingJobRequest['Authorization'];
                    xSdkDate = showPictureModelingJobRequest['X-Sdk-Date'];
                    xProjectId = showPictureModelingJobRequest['X-Project-Id'];
                    xAppUserId = showPictureModelingJobRequest['X-App-UserId'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling showPictureModelingJob.');
            }
            if (authorization !== undefined && authorization !== null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }
            if (xProjectId !== undefined && xProjectId !== null) {
                localVarHeaderParameter['X-Project-Id'] = String(xProjectId);
            }
            if (xAppUserId !== undefined && xAppUserId !== null) {
                localVarHeaderParameter['X-App-UserId'] = String(xAppUserId);
            }

            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询数字人风格列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listStyles(listStylesRequest?: ListStylesRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/styles",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let authorization;
            
            let xSdkDate;
            
            let xProjectId;
            
            let xAppUserId;
            
            let offset;
            
            let limit;
            
            let state;
            
            let sortKey;
            
            let sortDir;
            
            let createUntil;
            
            let createSince;

            if (listStylesRequest !== null && listStylesRequest !== undefined) {
                if (listStylesRequest instanceof ListStylesRequest) {
                    authorization = listStylesRequest.authorization;
                    xSdkDate = listStylesRequest.xSdkDate;
                    xProjectId = listStylesRequest.xProjectId;
                    xAppUserId = listStylesRequest.xAppUserId;
                    offset = listStylesRequest.offset;
                    limit = listStylesRequest.limit;
                    state = listStylesRequest.state;
                    sortKey = listStylesRequest.sortKey;
                    sortDir = listStylesRequest.sortDir;
                    createUntil = listStylesRequest.createUntil;
                    createSince = listStylesRequest.createSince;
                } else {
                    authorization = listStylesRequest['Authorization'];
                    xSdkDate = listStylesRequest['X-Sdk-Date'];
                    xProjectId = listStylesRequest['X-Project-Id'];
                    xAppUserId = listStylesRequest['X-App-UserId'];
                    offset = listStylesRequest['offset'];
                    limit = listStylesRequest['limit'];
                    state = listStylesRequest['state'];
                    sortKey = listStylesRequest['sort_key'];
                    sortDir = listStylesRequest['sort_dir'];
                    createUntil = listStylesRequest['create_until'];
                    createSince = listStylesRequest['create_since'];
                }
            }

        
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (state !== null && state !== undefined) {
                localVarQueryParameter['state'] = state;
            }
            if (sortKey !== null && sortKey !== undefined) {
                localVarQueryParameter['sort_key'] = sortKey;
            }
            if (sortDir !== null && sortDir !== undefined) {
                localVarQueryParameter['sort_dir'] = sortDir;
            }
            if (createUntil !== null && createUntil !== undefined) {
                localVarQueryParameter['create_until'] = createUntil;
            }
            if (createSince !== null && createSince !== undefined) {
                localVarQueryParameter['create_since'] = createSince;
            }
            if (authorization !== undefined && authorization !== null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }
            if (xProjectId !== undefined && xProjectId !== null) {
                localVarHeaderParameter['X-Project-Id'] = String(xProjectId);
            }
            if (xAppUserId !== undefined && xAppUserId !== null) {
                localVarHeaderParameter['X-App-UserId'] = String(xAppUserId);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于创建驱动数字人表情、动作及语音的任务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createTtsa(createTtsaRequest?: CreateTtsaRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/ttsa-jobs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let authorization;
            
            let xSdkDate;
            
            let xProjectId;
            
            let xAppUserId;
            
            let xUserPrivilege;

            if (createTtsaRequest !== null && createTtsaRequest !== undefined) {
                if (createTtsaRequest instanceof CreateTtsaRequest) {
                    body = createTtsaRequest.body
                    authorization = createTtsaRequest.authorization;
                    xSdkDate = createTtsaRequest.xSdkDate;
                    xProjectId = createTtsaRequest.xProjectId;
                    xAppUserId = createTtsaRequest.xAppUserId;
                    xUserPrivilege = createTtsaRequest.xUserPrivilege;
                } else {
                    body = createTtsaRequest['body'];
                    authorization = createTtsaRequest['Authorization'];
                    xSdkDate = createTtsaRequest['X-Sdk-Date'];
                    xProjectId = createTtsaRequest['X-Project-Id'];
                    xAppUserId = createTtsaRequest['X-App-UserId'];
                    xUserPrivilege = createTtsaRequest['X-User-Privilege'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (authorization !== undefined && authorization !== null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }
            if (xProjectId !== undefined && xProjectId !== null) {
                localVarHeaderParameter['X-Project-Id'] = String(xProjectId);
            }
            if (xAppUserId !== undefined && xAppUserId !== null) {
                localVarHeaderParameter['X-App-UserId'] = String(xAppUserId);
            }
            if (xUserPrivilege !== undefined && xUserPrivilege !== null) {
                localVarHeaderParameter['X-User-Privilege'] = String(xUserPrivilege);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于获取生成的数字人驱动数据，包括语音、表情、动作等。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTtsaData(listTtsaDataRequest?: ListTtsaDataRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/ttsa-jobs/{job_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let jobId;
            
            let authorization;
            
            let xSdkDate;
            
            let xProjectId;
            
            let offset;

            if (listTtsaDataRequest !== null && listTtsaDataRequest !== undefined) {
                if (listTtsaDataRequest instanceof ListTtsaDataRequest) {
                    jobId = listTtsaDataRequest.jobId;
                    authorization = listTtsaDataRequest.authorization;
                    xSdkDate = listTtsaDataRequest.xSdkDate;
                    xProjectId = listTtsaDataRequest.xProjectId;
                    offset = listTtsaDataRequest.offset;
                } else {
                    jobId = listTtsaDataRequest['job_id'];
                    authorization = listTtsaDataRequest['Authorization'];
                    xSdkDate = listTtsaDataRequest['X-Sdk-Date'];
                    xProjectId = listTtsaDataRequest['X-Project-Id'];
                    offset = listTtsaDataRequest['offset'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling listTtsaData.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (authorization !== undefined && authorization !== null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }
            if (xProjectId !== undefined && xProjectId !== null) {
                localVarHeaderParameter['X-Project-Id'] = String(xProjectId);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询驱动数字人表情、动作及语音的任务列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTtsaJobs(listTtsaJobsRequest?: ListTtsaJobsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/ttsa-jobs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let authorization;
            
            let xSdkDate;
            
            let xProjectId;
            
            let offset;
            
            let limit;
            
            let xAppUserId;

            if (listTtsaJobsRequest !== null && listTtsaJobsRequest !== undefined) {
                if (listTtsaJobsRequest instanceof ListTtsaJobsRequest) {
                    authorization = listTtsaJobsRequest.authorization;
                    xSdkDate = listTtsaJobsRequest.xSdkDate;
                    xProjectId = listTtsaJobsRequest.xProjectId;
                    offset = listTtsaJobsRequest.offset;
                    limit = listTtsaJobsRequest.limit;
                    xAppUserId = listTtsaJobsRequest.xAppUserId;
                } else {
                    authorization = listTtsaJobsRequest['Authorization'];
                    xSdkDate = listTtsaJobsRequest['X-Sdk-Date'];
                    xProjectId = listTtsaJobsRequest['X-Project-Id'];
                    offset = listTtsaJobsRequest['offset'];
                    limit = listTtsaJobsRequest['limit'];
                    xAppUserId = listTtsaJobsRequest['X-App-UserId'];
                }
            }

        
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (authorization !== undefined && authorization !== null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }
            if (xProjectId !== undefined && xProjectId !== null) {
                localVarHeaderParameter['X-Project-Id'] = String(xProjectId);
            }
            if (xAppUserId !== undefined && xAppUserId !== null) {
                localVarHeaderParameter['X-App-UserId'] = String(xAppUserId);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于创建视频驱动任务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createVideoMotionCaptureJob(createVideoMotionCaptureJobRequest?: CreateVideoMotionCaptureJobRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/video-motion-capture-jobs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let authorization;
            
            let xSdkDate;
            
            let xProjectId;
            
            let xAppUserId;
            
            let xUserPrivilege;

            if (createVideoMotionCaptureJobRequest !== null && createVideoMotionCaptureJobRequest !== undefined) {
                if (createVideoMotionCaptureJobRequest instanceof CreateVideoMotionCaptureJobRequest) {
                    body = createVideoMotionCaptureJobRequest.body
                    authorization = createVideoMotionCaptureJobRequest.authorization;
                    xSdkDate = createVideoMotionCaptureJobRequest.xSdkDate;
                    xProjectId = createVideoMotionCaptureJobRequest.xProjectId;
                    xAppUserId = createVideoMotionCaptureJobRequest.xAppUserId;
                    xUserPrivilege = createVideoMotionCaptureJobRequest.xUserPrivilege;
                } else {
                    body = createVideoMotionCaptureJobRequest['body'];
                    authorization = createVideoMotionCaptureJobRequest['Authorization'];
                    xSdkDate = createVideoMotionCaptureJobRequest['X-Sdk-Date'];
                    xProjectId = createVideoMotionCaptureJobRequest['X-Project-Id'];
                    xAppUserId = createVideoMotionCaptureJobRequest['X-App-UserId'];
                    xUserPrivilege = createVideoMotionCaptureJobRequest['X-User-Privilege'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (authorization !== undefined && authorization !== null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }
            if (xProjectId !== undefined && xProjectId !== null) {
                localVarHeaderParameter['X-Project-Id'] = String(xProjectId);
            }
            if (xAppUserId !== undefined && xAppUserId !== null) {
                localVarHeaderParameter['X-App-UserId'] = String(xAppUserId);
            }
            if (xUserPrivilege !== undefined && xUserPrivilege !== null) {
                localVarHeaderParameter['X-User-Privilege'] = String(xUserPrivilege);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于控制数字人驱动。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        executeVideoMotionCaptureCommand(executeVideoMotionCaptureCommandRequest?: ExecuteVideoMotionCaptureCommandRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/video-motion-capture-jobs/{job_id}/command",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let jobId;
            
            let authorization;
            
            let xSdkDate;
            
            let xProjectId;
            
            let xAppUserId;

            if (executeVideoMotionCaptureCommandRequest !== null && executeVideoMotionCaptureCommandRequest !== undefined) {
                if (executeVideoMotionCaptureCommandRequest instanceof ExecuteVideoMotionCaptureCommandRequest) {
                    jobId = executeVideoMotionCaptureCommandRequest.jobId;
                    body = executeVideoMotionCaptureCommandRequest.body
                    authorization = executeVideoMotionCaptureCommandRequest.authorization;
                    xSdkDate = executeVideoMotionCaptureCommandRequest.xSdkDate;
                    xProjectId = executeVideoMotionCaptureCommandRequest.xProjectId;
                    xAppUserId = executeVideoMotionCaptureCommandRequest.xAppUserId;
                } else {
                    jobId = executeVideoMotionCaptureCommandRequest['job_id'];
                    body = executeVideoMotionCaptureCommandRequest['body'];
                    authorization = executeVideoMotionCaptureCommandRequest['Authorization'];
                    xSdkDate = executeVideoMotionCaptureCommandRequest['X-Sdk-Date'];
                    xProjectId = executeVideoMotionCaptureCommandRequest['X-Project-Id'];
                    xAppUserId = executeVideoMotionCaptureCommandRequest['X-App-UserId'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling executeVideoMotionCaptureCommand.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (authorization !== undefined && authorization !== null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }
            if (xProjectId !== undefined && xProjectId !== null) {
                localVarHeaderParameter['X-Project-Id'] = String(xProjectId);
            }
            if (xAppUserId !== undefined && xAppUserId !== null) {
                localVarHeaderParameter['X-App-UserId'] = String(xAppUserId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询视频驱动任务列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listVideoMotionCaptureJobs(listVideoMotionCaptureJobsRequest?: ListVideoMotionCaptureJobsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/video-motion-capture-jobs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let authorization;
            
            let xSdkDate;
            
            let xProjectId;
            
            let xAppUserId;
            
            let offset;
            
            let limit;

            if (listVideoMotionCaptureJobsRequest !== null && listVideoMotionCaptureJobsRequest !== undefined) {
                if (listVideoMotionCaptureJobsRequest instanceof ListVideoMotionCaptureJobsRequest) {
                    authorization = listVideoMotionCaptureJobsRequest.authorization;
                    xSdkDate = listVideoMotionCaptureJobsRequest.xSdkDate;
                    xProjectId = listVideoMotionCaptureJobsRequest.xProjectId;
                    xAppUserId = listVideoMotionCaptureJobsRequest.xAppUserId;
                    offset = listVideoMotionCaptureJobsRequest.offset;
                    limit = listVideoMotionCaptureJobsRequest.limit;
                } else {
                    authorization = listVideoMotionCaptureJobsRequest['Authorization'];
                    xSdkDate = listVideoMotionCaptureJobsRequest['X-Sdk-Date'];
                    xProjectId = listVideoMotionCaptureJobsRequest['X-Project-Id'];
                    xAppUserId = listVideoMotionCaptureJobsRequest['X-App-UserId'];
                    offset = listVideoMotionCaptureJobsRequest['offset'];
                    limit = listVideoMotionCaptureJobsRequest['limit'];
                }
            }

        
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (authorization !== undefined && authorization !== null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }
            if (xProjectId !== undefined && xProjectId !== null) {
                localVarHeaderParameter['X-Project-Id'] = String(xProjectId);
            }
            if (xAppUserId !== undefined && xAppUserId !== null) {
                localVarHeaderParameter['X-App-UserId'] = String(xAppUserId);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询视频驱动任务详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showVideoMotionCaptureJob(showVideoMotionCaptureJobRequest?: ShowVideoMotionCaptureJobRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/video-motion-capture-jobs/{job_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let jobId;
            
            let authorization;
            
            let xSdkDate;
            
            let xProjectId;
            
            let xAppUserId;

            if (showVideoMotionCaptureJobRequest !== null && showVideoMotionCaptureJobRequest !== undefined) {
                if (showVideoMotionCaptureJobRequest instanceof ShowVideoMotionCaptureJobRequest) {
                    jobId = showVideoMotionCaptureJobRequest.jobId;
                    authorization = showVideoMotionCaptureJobRequest.authorization;
                    xSdkDate = showVideoMotionCaptureJobRequest.xSdkDate;
                    xProjectId = showVideoMotionCaptureJobRequest.xProjectId;
                    xAppUserId = showVideoMotionCaptureJobRequest.xAppUserId;
                } else {
                    jobId = showVideoMotionCaptureJobRequest['job_id'];
                    authorization = showVideoMotionCaptureJobRequest['Authorization'];
                    xSdkDate = showVideoMotionCaptureJobRequest['X-Sdk-Date'];
                    xProjectId = showVideoMotionCaptureJobRequest['X-Project-Id'];
                    xAppUserId = showVideoMotionCaptureJobRequest['X-App-UserId'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling showVideoMotionCaptureJob.');
            }
            if (authorization !== undefined && authorization !== null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }
            if (xProjectId !== undefined && xProjectId !== null) {
                localVarHeaderParameter['X-Project-Id'] = String(xProjectId);
            }
            if (xAppUserId !== undefined && xAppUserId !== null) {
                localVarHeaderParameter['X-App-UserId'] = String(xAppUserId);
            }

            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于停止视频驱动任务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        stopVideoMotionCaptureJob(stopVideoMotionCaptureJobRequest?: StopVideoMotionCaptureJobRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/video-motion-capture-jobs/{job_id}/finish",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let jobId;
            
            let authorization;
            
            let xSdkDate;
            
            let xProjectId;
            
            let xAppUserId;

            if (stopVideoMotionCaptureJobRequest !== null && stopVideoMotionCaptureJobRequest !== undefined) {
                if (stopVideoMotionCaptureJobRequest instanceof StopVideoMotionCaptureJobRequest) {
                    jobId = stopVideoMotionCaptureJobRequest.jobId;
                    authorization = stopVideoMotionCaptureJobRequest.authorization;
                    xSdkDate = stopVideoMotionCaptureJobRequest.xSdkDate;
                    xProjectId = stopVideoMotionCaptureJobRequest.xProjectId;
                    xAppUserId = stopVideoMotionCaptureJobRequest.xAppUserId;
                } else {
                    jobId = stopVideoMotionCaptureJobRequest['job_id'];
                    authorization = stopVideoMotionCaptureJobRequest['Authorization'];
                    xSdkDate = stopVideoMotionCaptureJobRequest['X-Sdk-Date'];
                    xProjectId = stopVideoMotionCaptureJobRequest['X-Project-Id'];
                    xAppUserId = stopVideoMotionCaptureJobRequest['X-App-UserId'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling stopVideoMotionCaptureJob.');
            }
            if (authorization !== undefined && authorization !== null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }
            if (xProjectId !== undefined && xProjectId !== null) {
                localVarHeaderParameter['X-Project-Id'] = String(xProjectId);
            }
            if (xAppUserId !== undefined && xAppUserId !== null) {
                localVarHeaderParameter['X-App-UserId'] = String(xAppUserId);
            }

            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
    }
};

function newClient(client: HcClient): MetaStudioClient {
    return new MetaStudioClient(client);
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