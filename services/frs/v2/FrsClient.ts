import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { ActionsList } from './model/ActionsList';
import { AddFacesBase64Req } from './model/AddFacesBase64Req';
import { AddFacesByBase64Request } from './model/AddFacesByBase64Request';
import { AddFacesByBase64Response } from './model/AddFacesByBase64Response';
import { AddFacesByFileRequest } from './model/AddFacesByFileRequest';
import { AddFacesByFileRequestBody } from './model/AddFacesByFileRequestBody';
import { AddFacesByFileResponse } from './model/AddFacesByFileResponse';
import { AddFacesByUrlRequest } from './model/AddFacesByUrlRequest';
import { AddFacesByUrlResponse } from './model/AddFacesByUrlResponse';
import { AddFacesUrlReq } from './model/AddFacesUrlReq';
import { Attributes } from './model/Attributes';
import { AttributesExpression } from './model/AttributesExpression';
import { BatchDeleteFacesRequest } from './model/BatchDeleteFacesRequest';
import { BatchDeleteFacesResponse } from './model/BatchDeleteFacesResponse';
import { BoundingBox } from './model/BoundingBox';
import { CompareFace } from './model/CompareFace';
import { CompareFaceByBase64Request } from './model/CompareFaceByBase64Request';
import { CompareFaceByBase64Response } from './model/CompareFaceByBase64Response';
import { CompareFaceByFileRequest } from './model/CompareFaceByFileRequest';
import { CompareFaceByFileRequestBody } from './model/CompareFaceByFileRequestBody';
import { CompareFaceByFileResponse } from './model/CompareFaceByFileResponse';
import { CompareFaceByUrlRequest } from './model/CompareFaceByUrlRequest';
import { CompareFaceByUrlResponse } from './model/CompareFaceByUrlResponse';
import { CreateFaceSetReq } from './model/CreateFaceSetReq';
import { CreateFaceSetRequest } from './model/CreateFaceSetRequest';
import { CreateFaceSetResponse } from './model/CreateFaceSetResponse';
import { DeleteFaceByExternalImageIdRequest } from './model/DeleteFaceByExternalImageIdRequest';
import { DeleteFaceByExternalImageIdResponse } from './model/DeleteFaceByExternalImageIdResponse';
import { DeleteFaceByFaceIdRequest } from './model/DeleteFaceByFaceIdRequest';
import { DeleteFaceByFaceIdResponse } from './model/DeleteFaceByFaceIdResponse';
import { DeleteFaceSetRequest } from './model/DeleteFaceSetRequest';
import { DeleteFaceSetResponse } from './model/DeleteFaceSetResponse';
import { DeleteFacesBatchReq } from './model/DeleteFacesBatchReq';
import { DetectFace } from './model/DetectFace';
import { DetectFaceByBase64IntlRequest } from './model/DetectFaceByBase64IntlRequest';
import { DetectFaceByBase64IntlResponse } from './model/DetectFaceByBase64IntlResponse';
import { DetectFaceByBase64Request } from './model/DetectFaceByBase64Request';
import { DetectFaceByBase64Response } from './model/DetectFaceByBase64Response';
import { DetectFaceByFileIntlRequest } from './model/DetectFaceByFileIntlRequest';
import { DetectFaceByFileIntlRequestBody } from './model/DetectFaceByFileIntlRequestBody';
import { DetectFaceByFileIntlResponse } from './model/DetectFaceByFileIntlResponse';
import { DetectFaceByFileRequest } from './model/DetectFaceByFileRequest';
import { DetectFaceByFileRequestBody } from './model/DetectFaceByFileRequestBody';
import { DetectFaceByFileResponse } from './model/DetectFaceByFileResponse';
import { DetectFaceByUrlIntlRequest } from './model/DetectFaceByUrlIntlRequest';
import { DetectFaceByUrlIntlResponse } from './model/DetectFaceByUrlIntlResponse';
import { DetectFaceByUrlRequest } from './model/DetectFaceByUrlRequest';
import { DetectFaceByUrlResponse } from './model/DetectFaceByUrlResponse';
import { DetectLiveByBase64IntlRequest } from './model/DetectLiveByBase64IntlRequest';
import { DetectLiveByBase64IntlResponse } from './model/DetectLiveByBase64IntlResponse';
import { DetectLiveByBase64Request } from './model/DetectLiveByBase64Request';
import { DetectLiveByBase64Response } from './model/DetectLiveByBase64Response';
import { DetectLiveByFileIntlRequest } from './model/DetectLiveByFileIntlRequest';
import { DetectLiveByFileIntlRequestBody } from './model/DetectLiveByFileIntlRequestBody';
import { DetectLiveByFileIntlResponse } from './model/DetectLiveByFileIntlResponse';
import { DetectLiveByFileRequest } from './model/DetectLiveByFileRequest';
import { DetectLiveByFileRequestBody } from './model/DetectLiveByFileRequestBody';
import { DetectLiveByFileResponse } from './model/DetectLiveByFileResponse';
import { DetectLiveByUrlIntlRequest } from './model/DetectLiveByUrlIntlRequest';
import { DetectLiveByUrlIntlResponse } from './model/DetectLiveByUrlIntlResponse';
import { DetectLiveByUrlRequest } from './model/DetectLiveByUrlRequest';
import { DetectLiveByUrlResponse } from './model/DetectLiveByUrlResponse';
import { DetectLiveFaceByBase64Request } from './model/DetectLiveFaceByBase64Request';
import { DetectLiveFaceByBase64Response } from './model/DetectLiveFaceByBase64Response';
import { DetectLiveFaceByFileRequest } from './model/DetectLiveFaceByFileRequest';
import { DetectLiveFaceByFileRequestBody } from './model/DetectLiveFaceByFileRequestBody';
import { DetectLiveFaceByFileResponse } from './model/DetectLiveFaceByFileResponse';
import { DetectLiveFaceByUrlRequest } from './model/DetectLiveFaceByUrlRequest';
import { DetectLiveFaceByUrlResponse } from './model/DetectLiveFaceByUrlResponse';
import { Dress } from './model/Dress';
import { FaceCompareBase64Req } from './model/FaceCompareBase64Req';
import { FaceCompareUrlReq } from './model/FaceCompareUrlReq';
import { FaceDetectBase64Req } from './model/FaceDetectBase64Req';
import { FaceDetectUrlReq } from './model/FaceDetectUrlReq';
import { FaceQuality } from './model/FaceQuality';
import { FaceSearchBase64Req } from './model/FaceSearchBase64Req';
import { FaceSearchFaceIdReq } from './model/FaceSearchFaceIdReq';
import { FaceSearchUrlReq } from './model/FaceSearchUrlReq';
import { FaceSetFace } from './model/FaceSetFace';
import { FaceSetInfo } from './model/FaceSetInfo';
import { LiveDetectBase64Req } from './model/LiveDetectBase64Req';
import { LiveDetectFaceBase64Req } from './model/LiveDetectFaceBase64Req';
import { LiveDetectFaceRespResult } from './model/LiveDetectFaceRespResult';
import { LiveDetectFaceUrlReq } from './model/LiveDetectFaceUrlReq';
import { LiveDetectRespVideoresult } from './model/LiveDetectRespVideoresult';
import { LiveDetectUrlReq } from './model/LiveDetectUrlReq';
import { SearchFace } from './model/SearchFace';
import { SearchFaceByBase64Request } from './model/SearchFaceByBase64Request';
import { SearchFaceByBase64Response } from './model/SearchFaceByBase64Response';
import { SearchFaceByFaceIdRequest } from './model/SearchFaceByFaceIdRequest';
import { SearchFaceByFaceIdResponse } from './model/SearchFaceByFaceIdResponse';
import { SearchFaceByFileRequest } from './model/SearchFaceByFileRequest';
import { SearchFaceByFileRequestBody } from './model/SearchFaceByFileRequestBody';
import { SearchFaceByFileResponse } from './model/SearchFaceByFileResponse';
import { SearchFaceByUrlRequest } from './model/SearchFaceByUrlRequest';
import { SearchFaceByUrlResponse } from './model/SearchFaceByUrlResponse';
import { ShowAllFaceSetsRequest } from './model/ShowAllFaceSetsRequest';
import { ShowAllFaceSetsResponse } from './model/ShowAllFaceSetsResponse';
import { ShowFaceSetRequest } from './model/ShowFaceSetRequest';
import { ShowFaceSetResponse } from './model/ShowFaceSetResponse';
import { ShowFacesByFaceIdRequest } from './model/ShowFacesByFaceIdRequest';
import { ShowFacesByFaceIdResponse } from './model/ShowFacesByFaceIdResponse';
import { ShowFacesByLimitRequest } from './model/ShowFacesByLimitRequest';
import { ShowFacesByLimitResponse } from './model/ShowFacesByLimitResponse';
import { TypeInfo } from './model/TypeInfo';
import { UpdateFaceReq } from './model/UpdateFaceReq';
import { UpdateFaceRequest } from './model/UpdateFaceRequest';
import { UpdateFaceResponse } from './model/UpdateFaceResponse';
import { WarningList } from './model/WarningList';

export class FrsClient {
    public static newBuilder(): ClientBuilder<FrsClient> {
        return new ClientBuilder<FrsClient>(newClient);
    }

    private hcClient: HcClient;
    public constructor(client: HcClient) {
        this.hcClient = client;
    }

    public getPath() {
        return __dirname;
    }


    /**
     * 添加人脸到人脸库中。将单张图片中的人脸添加至人脸库中，支持添加最大人脸或所有人脸。
     * 
     * 详细说明请参考华为云API Explorer。
     * Please refer to Huawei cloud API Explorer for details.
     *
     * @summary 添加人脸
     * @param {string} faceSetName 人脸库名称。
     * @param {AddFacesBase64Req} addFacesBase64Req This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addFacesByBase64(addFacesByBase64Request?: AddFacesByBase64Request): Promise<AddFacesByBase64Response> {
        const options = ParamCreater().addFacesByBase64(addFacesByBase64Request);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 添加人脸到人脸库中。将单张图片中的人脸添加至人脸库中，支持添加最大人脸或所有人脸。
     * 
     * 详细说明请参考华为云API Explorer。
     * Please refer to Huawei cloud API Explorer for details.
     *
     * @summary 添加人脸
     * @param {string} faceSetName 人脸库名称。
     * @param {any} imageFile 本地图片文件，图片不能超过8MB，建议小于1MB。上传文件时，请求格式为multipart。
     * @param {string} [externalImageId] 用户指定的图片外部ID，与当前图像绑定。用户没提供，系统会生成一个。 该ID长度范围为1～36位，可以包含字母、数字、中划线或者下划线，不包含其他的特殊字符。
     * @param {string} [externalFields] [根据用户自定义数据类型，填入相应的数值。 创建faceset时定义该字段，Json字符串不校验重复性，参考[自定义字段](https://support.huaweicloud.com/api-face/face_02_0012.html)。](tag:hc) [根据用户自定义数据类型，填入相应的数值。 创建faceset时定义该字段，Json字符串不校验重复性，参考[自定义字段](https://support.huaweicloud.com/intl/zh-cn/api-face/face_02_0012.html)。](tag:hk)
     * @param {boolean} [single] 是否将图片中的最大人脸添加至人脸库。可选值包括: • true: 传入的单张图片中如果包含多张人脸，则只将最大人脸添加到人脸库中。 • false: 默认为false。传入的单张图片中如果包含多张人脸，则将所有人脸添加至人脸库中。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addFacesByFile(addFacesByFileRequest?: AddFacesByFileRequest): Promise<AddFacesByFileResponse> {
        const options = ParamCreater().addFacesByFile(addFacesByFileRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 添加人脸到人脸库中。将单张图片中的人脸添加至人脸库中，支持添加最大人脸或所有人脸。
     * 
     * 详细说明请参考华为云API Explorer。
     * Please refer to Huawei cloud API Explorer for details.
     *
     * @summary 添加人脸
     * @param {string} faceSetName 人脸库名称。
     * @param {AddFacesUrlReq} addFacesUrlReq This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addFacesByUrl(addFacesByUrlRequest?: AddFacesByUrlRequest): Promise<AddFacesByUrlResponse> {
        const options = ParamCreater().addFacesByUrl(addFacesByUrlRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 自定义筛选条件，批量删除人脸库中的符合指定条件的多张人脸。
     * 
     * 详细说明请参考华为云API Explorer。
     * Please refer to Huawei cloud API Explorer for details.
     *
     * @summary 批量删除人脸
     * @param {string} faceSetName 人脸库名称。
     * @param {DeleteFacesBatchReq} deleteFacesBatchReq This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeleteFaces(batchDeleteFacesRequest?: BatchDeleteFacesRequest): Promise<BatchDeleteFacesResponse> {
        const options = ParamCreater().batchDeleteFaces(batchDeleteFacesRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 人脸比对是将两个人脸进行比对，来判断是否为同一个人，返回比对置信度。如果传入的图片中包含多个人脸，选取最大的人脸进行比对。
     * 
     * 详细说明请参考华为云API Explorer。
     * Please refer to Huawei cloud API Explorer for details.
     *
     * @summary 人脸比对
     * @param {FaceCompareBase64Req} faceCompareBase64Req This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public compareFaceByBase64(compareFaceByBase64Request?: CompareFaceByBase64Request): Promise<CompareFaceByBase64Response> {
        const options = ParamCreater().compareFaceByBase64(compareFaceByBase64Request);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 人脸比对是将两个人脸进行比对，来判断是否为同一个人，返回比对置信度。如果传入的图片中包含多个人脸，选取最大的人脸进行比对。
     * 
     * 详细说明请参考华为云API Explorer。
     * Please refer to Huawei cloud API Explorer for details.
     *
     * @summary 人脸比对
     * @param {any} image1File 本地图片文件，图片不能超过8MB。上传文件时，请求格式为multipart。
     * @param {any} image2File 本地图片文件，图片不能超过8MB。上传文件时，请求格式为multipart。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public compareFaceByFile(compareFaceByFileRequest?: CompareFaceByFileRequest): Promise<CompareFaceByFileResponse> {
        const options = ParamCreater().compareFaceByFile(compareFaceByFileRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 人脸比对是将两个人脸进行比对，来判断是否为同一个人，返回比对置信度。如果传入的图片中包含多个人脸，选取最大的人脸进行比对。
     * 
     * 详细说明请参考华为云API Explorer。
     * Please refer to Huawei cloud API Explorer for details.
     *
     * @summary 人脸比对
     * @param {FaceCompareUrlReq} faceCompareUrlReq This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public compareFaceByUrl(compareFaceByUrlRequest?: CompareFaceByUrlRequest): Promise<CompareFaceByUrlResponse> {
        const options = ParamCreater().compareFaceByUrl(compareFaceByUrlRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建用于存储人脸特征的人脸库。您最多可以创建10个人脸库，每个人脸库最大容量为10万个人脸特征。如有更大规格的需求请联系客服。
     * 
     * 详细说明请参考华为云API Explorer。
     * Please refer to Huawei cloud API Explorer for details.
     *
     * @summary 创建人脸库
     * @param {CreateFaceSetReq} createFaceSetReq This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createFaceSet(createFaceSetRequest?: CreateFaceSetRequest): Promise<CreateFaceSetResponse> {
        const options = ParamCreater().createFaceSet(createFaceSetRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据external_image_id删除人脸。
     * 
     * 详细说明请参考华为云API Explorer。
     * Please refer to Huawei cloud API Explorer for details.
     *
     * @summary 删除人脸
     * @param {string} faceSetName 人脸库名称。
     * @param {string} externalImageId external_image_id。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteFaceByExternalImageId(deleteFaceByExternalImageIdRequest?: DeleteFaceByExternalImageIdRequest): Promise<DeleteFaceByExternalImageIdResponse> {
        const options = ParamCreater().deleteFaceByExternalImageId(deleteFaceByExternalImageIdRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据face_id删除人脸。
     * 
     * 详细说明请参考华为云API Explorer。
     * Please refer to Huawei cloud API Explorer for details.
     *
     * @summary 删除人脸
     * @param {string} faceSetName 人脸库名称。
     * @param {string} faceId 人脸ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteFaceByFaceId(deleteFaceByFaceIdRequest?: DeleteFaceByFaceIdRequest): Promise<DeleteFaceByFaceIdResponse> {
        const options = ParamCreater().deleteFaceByFaceId(deleteFaceByFaceIdRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除人脸库以及其中所有的人脸。
     * 
     * 详细说明请参考华为云API Explorer。
     * Please refer to Huawei cloud API Explorer for details.
     *
     * @summary 删除人脸库
     * @param {string} faceSetName 人脸库名称。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteFaceSet(deleteFaceSetRequest?: DeleteFaceSetRequest): Promise<DeleteFaceSetResponse> {
        const options = ParamCreater().deleteFaceSet(deleteFaceSetRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 人脸检测是对输入图片进行人脸检测和分析，输出人脸在图像中的位置、人脸关键点位置和人脸关键属性。
     * 
     * 详细说明请参考华为云API Explorer。
     * Please refer to Huawei cloud API Explorer for details.
     *
     * @summary 人脸检测
     * @param {FaceDetectBase64Req} faceDetectBase64Req This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public detectFaceByBase64(detectFaceByBase64Request?: DetectFaceByBase64Request): Promise<DetectFaceByBase64Response> {
        const options = ParamCreater().detectFaceByBase64(detectFaceByBase64Request);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 人脸检测是对输入图片进行人脸检测和分析，输出人脸在图像中的位置、人脸关键点位置和人脸关键属性。
     * 
     * 详细说明请参考华为云API Explorer。
     * Please refer to Huawei cloud API Explorer for details.
     *
     * @summary 人脸检测
     * @param {FaceDetectBase64Req} faceDetectBase64Req This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public detectFaceByBase64Intl(detectFaceByBase64IntlRequest?: DetectFaceByBase64IntlRequest): Promise<DetectFaceByBase64IntlResponse> {
        const options = ParamCreater().detectFaceByBase64Intl(detectFaceByBase64IntlRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 人脸检测是对输入图片进行人脸检测和分析，输出人脸在图像中的位置、人脸关键点位置和人脸关键属性。
     * 
     * 详细说明请参考华为云API Explorer。
     * Please refer to Huawei cloud API Explorer for details.
     *
     * @summary 人脸检测
     * @param {any} imageFile 本地图片文件，图片不能超过8MB。上传文件时，请求格式为multipart。
     * @param {string} [attributes] 是否返回人脸属性，希望获取的属性列表，多个属性间使用逗号（,）隔开。目前支持的属性有： • 2：年龄 • 4：装束（帽子、眼镜） • 6：口罩 • 7：发型 • 8：胡须 • 11：图片类型 • 12：质量 • 13：表情 • 21：人脸图片旋转角（顺时针偏转角度），支持0°、90°、180°和270°图片旋转
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public detectFaceByFile(detectFaceByFileRequest?: DetectFaceByFileRequest): Promise<DetectFaceByFileResponse> {
        const options = ParamCreater().detectFaceByFile(detectFaceByFileRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 人脸检测是对输入图片进行人脸检测和分析，输出人脸在图像中的位置、人脸关键点位置和人脸关键属性。
     * 
     * 详细说明请参考华为云API Explorer。
     * Please refer to Huawei cloud API Explorer for details.
     *
     * @summary 人脸检测
     * @param {any} imageFile 本地图片文件，图片不能超过8MB。上传文件时，请求格式为multipart。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public detectFaceByFileIntl(detectFaceByFileIntlRequest?: DetectFaceByFileIntlRequest): Promise<DetectFaceByFileIntlResponse> {
        const options = ParamCreater().detectFaceByFileIntl(detectFaceByFileIntlRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 人脸检测是对输入图片进行人脸检测和分析，输出人脸在图像中的位置、人脸关键点位置和人脸关键属性。
     * 
     * 详细说明请参考华为云API Explorer。
     * Please refer to Huawei cloud API Explorer for details.
     *
     * @summary 人脸检测
     * @param {FaceDetectUrlReq} faceDetectUrlReq This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public detectFaceByUrl(detectFaceByUrlRequest?: DetectFaceByUrlRequest): Promise<DetectFaceByUrlResponse> {
        const options = ParamCreater().detectFaceByUrl(detectFaceByUrlRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 人脸检测是对输入图片进行人脸检测和分析，输出人脸在图像中的位置、人脸关键点位置和人脸关键属性。
     * 
     * 详细说明请参考华为云API Explorer。
     * Please refer to Huawei cloud API Explorer for details.
     *
     * @summary 人脸检测
     * @param {FaceDetectUrlReq} faceDetectUrlReq This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public detectFaceByUrlIntl(detectFaceByUrlIntlRequest?: DetectFaceByUrlIntlRequest): Promise<DetectFaceByUrlIntlResponse> {
        const options = ParamCreater().detectFaceByUrlIntl(detectFaceByUrlIntlRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 动作活体检测是通过判断视频中的人物动作与传入动作列表是否一致来识别视频中人物是否为活体。如果有多张人脸出现，则选取最大的人脸进行判定。
     * 
     * 详细说明请参考华为云API Explorer。
     * Please refer to Huawei cloud API Explorer for details.
     *
     * @summary 动作活体检测
     * @param {LiveDetectBase64Req} liveDetectBase64Req This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public detectLiveByBase64(detectLiveByBase64Request?: DetectLiveByBase64Request): Promise<DetectLiveByBase64Response> {
        const options = ParamCreater().detectLiveByBase64(detectLiveByBase64Request);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 动作活体检测是通过判断视频中的人物动作与传入动作列表是否一致来识别视频中人物是否为活体。如果有多张人脸出现，则选取最大的人脸进行判定。
     * 
     * 详细说明请参考华为云API Explorer。
     * Please refer to Huawei cloud API Explorer for details.
     *
     * @summary 动作活体检测
     * @param {LiveDetectBase64Req} liveDetectBase64Req This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public detectLiveByBase64Intl(detectLiveByBase64IntlRequest?: DetectLiveByBase64IntlRequest): Promise<DetectLiveByBase64IntlResponse> {
        const options = ParamCreater().detectLiveByBase64Intl(detectLiveByBase64IntlRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 动作活体检测是通过判断视频中的人物动作与传入动作列表是否一致来识别视频中人物是否为活体。如果有多张人脸出现，则选取最大的人脸进行判定。
     * 
     * 详细说明请参考华为云API Explorer。
     * Please refer to Huawei cloud API Explorer for details.
     *
     * @summary 动作活体检测
     * @param {any} videoFile 本地视频文件。上传文件时，请求格式为multipart。 视频要求： • 视频文件大小不超过8MB，建议客户端压缩到200KB~2MB。 • 限制视频时长1～15秒。 • 建议帧率10fps～30fps。 • 封装格式：mp4、avi、flv、webm、asf、mov。 • 视频编码格式： h261、h263、h264、hevc、vc1、vp8、vp9、wmv3。
     * @param {string} actions 动作代码顺序列表，英文逗号（,）分隔。建议单动作，目前支持的动作有： • 1：左摇头 • 2：右摇头 • 3：点头 • 4：嘴部动作
     * @param {string} [actionTime] 该参数为动作时间数组拼接的字符串，数组的长度和actions的数量一致，每一项代表了对应次序动作的起始时间和结束时间，单位为距视频开始的毫秒数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public detectLiveByFile(detectLiveByFileRequest?: DetectLiveByFileRequest): Promise<DetectLiveByFileResponse> {
        const options = ParamCreater().detectLiveByFile(detectLiveByFileRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 动作活体检测是通过判断视频中的人物动作与传入动作列表是否一致来识别视频中人物是否为活体。如果有多张人脸出现，则选取最大的人脸进行判定。
     * 
     * 详细说明请参考华为云API Explorer。
     * Please refer to Huawei cloud API Explorer for details.
     *
     * @summary 动作活体检测
     * @param {any} videoFile 本地视频文件。上传文件时，请求格式为multipart。 视频要求： • 视频文件大小不超过8MB，建议客户端压缩到200KB~2MB。 • 限制视频时长1～15秒。 • 建议帧率10fps～30fps。 • 封装格式：mp4、avi、flv、webm、asf、mov。 • 视频编码格式： h261、h263、h264、hevc、vc1、vp8、vp9、wmv3。
     * @param {string} actions 动作代码顺序列表，英文逗号（,）分隔。建议单动作，目前支持的动作有： • 1：左摇头 • 2：右摇头 • 3：点头 • 4：嘴部动作
     * @param {string} [actionTime] 该参数为动作时间数组拼接的字符串，数组的长度和actions的数量一致，每一项代表了对应次序动作的起始时间和结束时间，单位为距视频开始的毫秒数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public detectLiveByFileIntl(detectLiveByFileIntlRequest?: DetectLiveByFileIntlRequest): Promise<DetectLiveByFileIntlResponse> {
        const options = ParamCreater().detectLiveByFileIntl(detectLiveByFileIntlRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 动作活体检测是通过判断视频中的人物动作与传入动作列表是否一致来识别视频中人物是否为活体。如果有多张人脸出现，则选取最大的人脸进行判定。
     * 
     * 详细说明请参考华为云API Explorer。
     * Please refer to Huawei cloud API Explorer for details.
     *
     * @summary 动作活体检测
     * @param {LiveDetectUrlReq} liveDetectUrlReq This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public detectLiveByUrl(detectLiveByUrlRequest?: DetectLiveByUrlRequest): Promise<DetectLiveByUrlResponse> {
        const options = ParamCreater().detectLiveByUrl(detectLiveByUrlRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 动作活体检测是通过判断视频中的人物动作与传入动作列表是否一致来识别视频中人物是否为活体。如果有多张人脸出现，则选取最大的人脸进行判定。
     * 
     * 详细说明请参考华为云API Explorer。
     * Please refer to Huawei cloud API Explorer for details.
     *
     * @summary 动作活体检测
     * @param {LiveDetectUrlReq} liveDetectUrlReq This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public detectLiveByUrlIntl(detectLiveByUrlIntlRequest?: DetectLiveByUrlIntlRequest): Promise<DetectLiveByUrlIntlResponse> {
        const options = ParamCreater().detectLiveByUrlIntl(detectLiveByUrlIntlRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 静默活体检测是基于人脸图片中可能存在的畸变、摩尔纹、反光、倒影、边框等信息，判断图片中的人脸是否来自于真人活体，有效抵御纸质翻拍照、电子翻拍照以及视频翻拍等各种攻击方式。静默活体检测支持单张图片，不支持多人脸图片。
     * 
     * 详细说明请参考华为云API Explorer。
     * Please refer to Huawei cloud API Explorer for details.
     *
     * @summary 静默活体检测
     * @param {LiveDetectFaceBase64Req} liveDetectFaceBase64Req This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public detectLiveFaceByBase64(detectLiveFaceByBase64Request?: DetectLiveFaceByBase64Request): Promise<DetectLiveFaceByBase64Response> {
        const options = ParamCreater().detectLiveFaceByBase64(detectLiveFaceByBase64Request);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 静默活体检测是基于人脸图片中可能存在的畸变、摩尔纹、反光、倒影、边框等信息，判断图片中的人脸是否来自于真人活体，有效抵御纸质翻拍照、电子翻拍照以及视频翻拍等各种攻击方式。静默活体检测支持单张图片，不支持多人脸图片。
     * 
     * 详细说明请参考华为云API Explorer。
     * Please refer to Huawei cloud API Explorer for details.
     *
     * @summary 静默活体检测
     * @param {any} imageFile 本地图片文件。上传文件时，请求格式为multipart。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public detectLiveFaceByFile(detectLiveFaceByFileRequest?: DetectLiveFaceByFileRequest): Promise<DetectLiveFaceByFileResponse> {
        const options = ParamCreater().detectLiveFaceByFile(detectLiveFaceByFileRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 静默活体检测是基于人脸图片中可能存在的畸变、摩尔纹、反光、倒影、边框等信息，判断图片中的人脸是否来自于真人活体，有效抵御纸质翻拍照、电子翻拍照以及视频翻拍等各种攻击方式。静默活体检测支持单张图片，不支持多人脸图片。
     * 
     * 详细说明请参考华为云API Explorer。
     * Please refer to Huawei cloud API Explorer for details.
     *
     * @summary 静默活体检测
     * @param {LiveDetectFaceUrlReq} liveDetectFaceUrlReq This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public detectLiveFaceByUrl(detectLiveFaceByUrlRequest?: DetectLiveFaceByUrlRequest): Promise<DetectLiveFaceByUrlResponse> {
        const options = ParamCreater().detectLiveFaceByUrl(detectLiveFaceByUrlRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 人脸搜索是指在已有的人脸库中，查询与目标人脸相似的一张或者多张人脸，并返回相应的置信度。
     * 支持传入图片或者faceID进行人脸搜索，如果传入的是多张人脸图片，选取图片中检测到的最大尺寸人脸作为检索的输入。
     * 
     * 详细说明请参考华为云API Explorer。
     * Please refer to Huawei cloud API Explorer for details.
     *
     * @summary 人脸搜索
     * @param {string} faceSetName 人脸库名称。
     * @param {FaceSearchBase64Req} faceSearchBase64Req This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public searchFaceByBase64(searchFaceByBase64Request?: SearchFaceByBase64Request): Promise<SearchFaceByBase64Response> {
        const options = ParamCreater().searchFaceByBase64(searchFaceByBase64Request);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 人脸搜索是指在已有的人脸库中，查询与目标人脸相似的一张或者多张人脸，并返回相应的置信度。
     * 支持传入图片或者faceID进行人脸搜索，如果传入的是多张人脸图片，选取图片中检测到的最大尺寸人脸作为检索的输入。
     * 
     * 详细说明请参考华为云API Explorer。
     * Please refer to Huawei cloud API Explorer for details.
     *
     * @summary 人脸搜索
     * @param {string} faceSetName 人脸库名称。
     * @param {FaceSearchFaceIdReq} faceSearchFaceIdReq This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public searchFaceByFaceId(searchFaceByFaceIdRequest?: SearchFaceByFaceIdRequest): Promise<SearchFaceByFaceIdResponse> {
        const options = ParamCreater().searchFaceByFaceId(searchFaceByFaceIdRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 人脸搜索是指在已有的人脸库中，查询与目标人脸相似的一张或者多张人脸，并返回相应的置信度。
     * 支持传入图片或者faceID进行人脸搜索，如果传入的是多张人脸图片，选取图片中检测到的最大尺寸人脸作为检索的输入。
     * 
     * 详细说明请参考华为云API Explorer。
     * Please refer to Huawei cloud API Explorer for details.
     *
     * @summary 人脸搜索
     * @param {string} faceSetName 人脸库名称。
     * @param {any} imageFile 本地图片文件，图片不能超过8MB,建议小于1MB。上传文件时，请求格式为multipart。  必选，与image_url、image_base64、face_id四选一。
     * @param {number} [topN] 返回查询到的最相似的N张人脸，N默认为10。
     * @param {number} [threshold] 人脸相似度阈值，低于这个阈值则不返回，取值范围0~1，一般情况下建议取值0.93，默认为0。
     * @param {string} [sort] [支持字段排序，参考[sort语法](https://support.huaweicloud.com/api-face/face_02_0013.html)。](tag:hc)[支持字段排序，参考[sort语法](https://support.huaweicloud.com/intl/zh-cn/api-face/face_02_0013.html)。](tag:hk)
     * @param {string} [filter] [过滤条件，参考[filter语法](https://support.huaweicloud.com/api-face/face_02_0014.html)。](tag:hc)[过滤条件，参考[filter语法](https://support.huaweicloud.com/intl/zh-cn/api-face/face_02_0014.html)。](tag:hk)
     * @param {string} [returnFields] 指定返回的自定义字段。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public searchFaceByFile(searchFaceByFileRequest?: SearchFaceByFileRequest): Promise<SearchFaceByFileResponse> {
        const options = ParamCreater().searchFaceByFile(searchFaceByFileRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 人脸搜索是指在已有的人脸库中，查询与目标人脸相似的一张或者多张人脸，并返回相应的置信度。
     * 支持传入图片或者faceID进行人脸搜索，如果传入的是多张人脸图片，选取图片中检测到的最大尺寸人脸作为检索的输入。
     * 
     * 详细说明请参考华为云API Explorer。
     * Please refer to Huawei cloud API Explorer for details.
     *
     * @summary 人脸搜索
     * @param {string} faceSetName 人脸库名称。
     * @param {FaceSearchUrlReq} faceSearchUrlReq This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public searchFaceByUrl(searchFaceByUrlRequest?: SearchFaceByUrlRequest): Promise<SearchFaceByUrlResponse> {
        const options = ParamCreater().searchFaceByUrl(searchFaceByUrlRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询当前用户所有人脸库的状态信息。
     * 
     * 详细说明请参考华为云API Explorer。
     * Please refer to Huawei cloud API Explorer for details.
     *
     * @summary 查询所有人脸库
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAllFaceSets(): Promise<ShowAllFaceSetsResponse> {
        const options = ParamCreater().showAllFaceSets();
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询人脸库当前的状态。
     * 
     * 详细说明请参考华为云API Explorer。
     * Please refer to Huawei cloud API Explorer for details.
     *
     * @summary 查询人脸库
     * @param {string} faceSetName 人脸库名称。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showFaceSet(showFaceSetRequest?: ShowFaceSetRequest): Promise<ShowFaceSetResponse> {
        const options = ParamCreater().showFaceSet(showFaceSetRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定人脸库中人脸信息。
     * 
     * 详细说明请参考华为云API Explorer。
     * Please refer to Huawei cloud API Explorer for details.
     *
     * @summary 查询人脸
     * @param {string} faceSetName 人脸库名称。
     * @param {string} faceId 人脸ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showFacesByFaceId(showFacesByFaceIdRequest?: ShowFacesByFaceIdRequest): Promise<ShowFacesByFaceIdResponse> {
        const options = ParamCreater().showFacesByFaceId(showFacesByFaceIdRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定人脸库中人脸信息。
     * 
     * 详细说明请参考华为云API Explorer。
     * Please refer to Huawei cloud API Explorer for details.
     *
     * @summary 查询人脸
     * @param {string} faceSetName 人脸库名称。
     * @param {number} offset 从第几条数据读起，默认为0。
     * @param {number} limit 读取多少条，默认为5。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showFacesByLimit(showFacesByLimitRequest?: ShowFacesByLimitRequest): Promise<ShowFacesByLimitResponse> {
        const options = ParamCreater().showFacesByLimit(showFacesByLimitRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据人脸ID（face_id）更新单张人脸信息。
     * 
     * 详细说明请参考华为云API Explorer。
     * Please refer to Huawei cloud API Explorer for details.
     *
     * @summary 更新人脸
     * @param {string} faceSetName 人脸库名称。
     * @param {UpdateFaceReq} updateFaceReq This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateFace(updateFaceRequest?: UpdateFaceRequest): Promise<UpdateFaceResponse> {
        const options = ParamCreater().updateFace(updateFaceRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 添加人脸到人脸库中。将单张图片中的人脸添加至人脸库中，支持添加最大人脸或所有人脸。
         * 
         * 详细说明请参考华为云API Explorer。
         * Please refer to Huawei cloud API Explorer for details.
         */
        addFacesByBase64(addFacesByBase64Request?: AddFacesByBase64Request) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/face-sets/{face_set_name}/faces",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            let faceSetName;

            if (addFacesByBase64Request !== null && addFacesByBase64Request !== undefined) {
                if (addFacesByBase64Request instanceof AddFacesByBase64Request) {
                    faceSetName = addFacesByBase64Request.faceSetName;
                    body = addFacesByBase64Request.body
                } else {
                    faceSetName = addFacesByBase64Request['face_set_name'];
                    body = addFacesByBase64Request['body'];
                }
            }

        
            if (faceSetName === null || faceSetName === undefined) {
            throw new RequiredError('faceSetName','Required parameter faceSetName was null or undefined when calling addFacesByBase64.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'face_set_name': faceSetName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 添加人脸到人脸库中。将单张图片中的人脸添加至人脸库中，支持添加最大人脸或所有人脸。
         * 
         * 详细说明请参考华为云API Explorer。
         * Please refer to Huawei cloud API Explorer for details.
         */
        addFacesByFile(addFacesByFileRequest?: AddFacesByFileRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/face-sets/{face_set_name}/faces",
                contentType: "multipart/form-data",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            const localVarFormParams = new FormData();
            let faceSetName;
            var imageFile;var externalImageId;var externalFields;var single;

            if (addFacesByFileRequest !== null && addFacesByFileRequest !== undefined) {
                if (addFacesByFileRequest instanceof AddFacesByFileRequest) {
                    faceSetName = addFacesByFileRequest.faceSetName;
                    imageFile = addFacesByFileRequest.body;
                    externalImageId = addFacesByFileRequest.body;
                    externalFields = addFacesByFileRequest.body;
                    single = addFacesByFileRequest.body;
                } else {
                    faceSetName = addFacesByFileRequest['face_set_name'];
                    imageFile = addFacesByFileRequest['body'];
                    externalImageId = addFacesByFileRequest['body'];
                    externalFields = addFacesByFileRequest['body'];
                    single = addFacesByFileRequest['body'];
                }
            }

        
            if (faceSetName === null || faceSetName === undefined) {
            throw new RequiredError('faceSetName','Required parameter faceSetName was null or undefined when calling addFacesByFile.');
            }
            if (imageFile === null || imageFile === undefined) {
            throw new RequiredError('imageFile','Required parameter imageFile was null or undefined when calling addFacesByFile.');
            }
            if (imageFile !== undefined) { 
                localVarFormParams.append('image_file', imageFile as any);
            }
            if (externalImageId !== undefined) { 
                localVarFormParams.append('external_image_id', externalImageId as any);
            }
            if (externalFields !== undefined) { 
                localVarFormParams.append('external_fields', externalFields as any);
            }
            if (single !== undefined) { 
                localVarFormParams.append('single', single as any);
            }
            options.data = localVarFormParams;
            options.pathParams = { 'face_set_name': faceSetName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 添加人脸到人脸库中。将单张图片中的人脸添加至人脸库中，支持添加最大人脸或所有人脸。
         * 
         * 详细说明请参考华为云API Explorer。
         * Please refer to Huawei cloud API Explorer for details.
         */
        addFacesByUrl(addFacesByUrlRequest?: AddFacesByUrlRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/face-sets/{face_set_name}/faces",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            let faceSetName;

            if (addFacesByUrlRequest !== null && addFacesByUrlRequest !== undefined) {
                if (addFacesByUrlRequest instanceof AddFacesByUrlRequest) {
                    faceSetName = addFacesByUrlRequest.faceSetName;
                    body = addFacesByUrlRequest.body
                } else {
                    faceSetName = addFacesByUrlRequest['face_set_name'];
                    body = addFacesByUrlRequest['body'];
                }
            }

        
            if (faceSetName === null || faceSetName === undefined) {
            throw new RequiredError('faceSetName','Required parameter faceSetName was null or undefined when calling addFacesByUrl.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'face_set_name': faceSetName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 自定义筛选条件，批量删除人脸库中的符合指定条件的多张人脸。
         * 
         * 详细说明请参考华为云API Explorer。
         * Please refer to Huawei cloud API Explorer for details.
         */
        batchDeleteFaces(batchDeleteFacesRequest?: BatchDeleteFacesRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/face-sets/{face_set_name}/faces/batch",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            let faceSetName;

            if (batchDeleteFacesRequest !== null && batchDeleteFacesRequest !== undefined) {
                if (batchDeleteFacesRequest instanceof BatchDeleteFacesRequest) {
                    faceSetName = batchDeleteFacesRequest.faceSetName;
                    body = batchDeleteFacesRequest.body
                } else {
                    faceSetName = batchDeleteFacesRequest['face_set_name'];
                    body = batchDeleteFacesRequest['body'];
                }
            }

        
            if (faceSetName === null || faceSetName === undefined) {
            throw new RequiredError('faceSetName','Required parameter faceSetName was null or undefined when calling batchDeleteFaces.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'face_set_name': faceSetName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 人脸比对是将两个人脸进行比对，来判断是否为同一个人，返回比对置信度。如果传入的图片中包含多个人脸，选取最大的人脸进行比对。
         * 
         * 详细说明请参考华为云API Explorer。
         * Please refer to Huawei cloud API Explorer for details.
         */
        compareFaceByBase64(compareFaceByBase64Request?: CompareFaceByBase64Request) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/face-compare",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (compareFaceByBase64Request !== null && compareFaceByBase64Request !== undefined) {
                if (compareFaceByBase64Request instanceof CompareFaceByBase64Request) {
                    body = compareFaceByBase64Request.body
                } else {
                    body = compareFaceByBase64Request['body'];
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
         * 人脸比对是将两个人脸进行比对，来判断是否为同一个人，返回比对置信度。如果传入的图片中包含多个人脸，选取最大的人脸进行比对。
         * 
         * 详细说明请参考华为云API Explorer。
         * Please refer to Huawei cloud API Explorer for details.
         */
        compareFaceByFile(compareFaceByFileRequest?: CompareFaceByFileRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/face-compare",
                contentType: "multipart/form-data",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            const localVarFormParams = new FormData();
            var image1File;
            var image2File;

            if (compareFaceByFileRequest !== null && compareFaceByFileRequest !== undefined) {
                if (compareFaceByFileRequest instanceof CompareFaceByFileRequest) {
                    image1File = compareFaceByFileRequest.body;
                    image2File = compareFaceByFileRequest.body;
                } else {
                    image1File = compareFaceByFileRequest['body'];
                    image2File = compareFaceByFileRequest['body'];
                }
            }

        
            if (image1File === null || image1File === undefined) {
            throw new RequiredError('image1File','Required parameter image1File was null or undefined when calling compareFaceByFile.');
            }
            if (image2File === null || image2File === undefined) {
            throw new RequiredError('image2File','Required parameter image2File was null or undefined when calling compareFaceByFile.');
            }
            if (image1File !== undefined) { 
                localVarFormParams.append('image1_file', image1File as any);
            }
            if (image2File !== undefined) { 
                localVarFormParams.append('image2_file', image2File as any);
            }
            options.data = localVarFormParams;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 人脸比对是将两个人脸进行比对，来判断是否为同一个人，返回比对置信度。如果传入的图片中包含多个人脸，选取最大的人脸进行比对。
         * 
         * 详细说明请参考华为云API Explorer。
         * Please refer to Huawei cloud API Explorer for details.
         */
        compareFaceByUrl(compareFaceByUrlRequest?: CompareFaceByUrlRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/face-compare",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (compareFaceByUrlRequest !== null && compareFaceByUrlRequest !== undefined) {
                if (compareFaceByUrlRequest instanceof CompareFaceByUrlRequest) {
                    body = compareFaceByUrlRequest.body
                } else {
                    body = compareFaceByUrlRequest['body'];
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
         * 创建用于存储人脸特征的人脸库。您最多可以创建10个人脸库，每个人脸库最大容量为10万个人脸特征。如有更大规格的需求请联系客服。
         * 
         * 详细说明请参考华为云API Explorer。
         * Please refer to Huawei cloud API Explorer for details.
         */
        createFaceSet(createFaceSetRequest?: CreateFaceSetRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/face-sets",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (createFaceSetRequest !== null && createFaceSetRequest !== undefined) {
                if (createFaceSetRequest instanceof CreateFaceSetRequest) {
                    body = createFaceSetRequest.body
                } else {
                    body = createFaceSetRequest['body'];
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
         * 根据external_image_id删除人脸。
         * 
         * 详细说明请参考华为云API Explorer。
         * Please refer to Huawei cloud API Explorer for details.
         */
        deleteFaceByExternalImageId(deleteFaceByExternalImageIdRequest?: DeleteFaceByExternalImageIdRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/face-sets/{face_set_name}/faces",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let faceSetName;
            let externalImageId;

            if (deleteFaceByExternalImageIdRequest !== null && deleteFaceByExternalImageIdRequest !== undefined) {
                if (deleteFaceByExternalImageIdRequest instanceof DeleteFaceByExternalImageIdRequest) {
                    faceSetName = deleteFaceByExternalImageIdRequest.faceSetName;
                    externalImageId = deleteFaceByExternalImageIdRequest.externalImageId;
                } else {
                    faceSetName = deleteFaceByExternalImageIdRequest['face_set_name'];
                    externalImageId = deleteFaceByExternalImageIdRequest['external_image_id'];
                }
            }

        
            if (faceSetName === null || faceSetName === undefined) {
            throw new RequiredError('faceSetName','Required parameter faceSetName was null or undefined when calling deleteFaceByExternalImageId.');
            }
            if (externalImageId === null || externalImageId === undefined) {
                throw new RequiredError('externalImageId','Required parameter externalImageId was null or undefined when calling deleteFaceByExternalImageId.');
            }
            if (externalImageId !== null && externalImageId !== undefined) {
                localVarQueryParameter['external_image_id'] = externalImageId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'face_set_name': faceSetName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据face_id删除人脸。
         * 
         * 详细说明请参考华为云API Explorer。
         * Please refer to Huawei cloud API Explorer for details.
         */
        deleteFaceByFaceId(deleteFaceByFaceIdRequest?: DeleteFaceByFaceIdRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/face-sets/{face_set_name}/faces",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let faceSetName;
            let faceId;

            if (deleteFaceByFaceIdRequest !== null && deleteFaceByFaceIdRequest !== undefined) {
                if (deleteFaceByFaceIdRequest instanceof DeleteFaceByFaceIdRequest) {
                    faceSetName = deleteFaceByFaceIdRequest.faceSetName;
                    faceId = deleteFaceByFaceIdRequest.faceId;
                } else {
                    faceSetName = deleteFaceByFaceIdRequest['face_set_name'];
                    faceId = deleteFaceByFaceIdRequest['face_id'];
                }
            }

        
            if (faceSetName === null || faceSetName === undefined) {
            throw new RequiredError('faceSetName','Required parameter faceSetName was null or undefined when calling deleteFaceByFaceId.');
            }
            if (faceId === null || faceId === undefined) {
                throw new RequiredError('faceId','Required parameter faceId was null or undefined when calling deleteFaceByFaceId.');
            }
            if (faceId !== null && faceId !== undefined) {
                localVarQueryParameter['face_id'] = faceId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'face_set_name': faceSetName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除人脸库以及其中所有的人脸。
         * 
         * 详细说明请参考华为云API Explorer。
         * Please refer to Huawei cloud API Explorer for details.
         */
        deleteFaceSet(deleteFaceSetRequest?: DeleteFaceSetRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/face-sets/{face_set_name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let faceSetName;

            if (deleteFaceSetRequest !== null && deleteFaceSetRequest !== undefined) {
                if (deleteFaceSetRequest instanceof DeleteFaceSetRequest) {
                    faceSetName = deleteFaceSetRequest.faceSetName;
                } else {
                    faceSetName = deleteFaceSetRequest['face_set_name'];
                }
            }

        
            if (faceSetName === null || faceSetName === undefined) {
            throw new RequiredError('faceSetName','Required parameter faceSetName was null or undefined when calling deleteFaceSet.');
            }

            options.pathParams = { 'face_set_name': faceSetName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 人脸检测是对输入图片进行人脸检测和分析，输出人脸在图像中的位置、人脸关键点位置和人脸关键属性。
         * 
         * 详细说明请参考华为云API Explorer。
         * Please refer to Huawei cloud API Explorer for details.
         */
        detectFaceByBase64(detectFaceByBase64Request?: DetectFaceByBase64Request) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/face-detect",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (detectFaceByBase64Request !== null && detectFaceByBase64Request !== undefined) {
                if (detectFaceByBase64Request instanceof DetectFaceByBase64Request) {
                    body = detectFaceByBase64Request.body
                } else {
                    body = detectFaceByBase64Request['body'];
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
         * 人脸检测是对输入图片进行人脸检测和分析，输出人脸在图像中的位置、人脸关键点位置和人脸关键属性。
         * 
         * 详细说明请参考华为云API Explorer。
         * Please refer to Huawei cloud API Explorer for details.
         */
        detectFaceByBase64Intl(detectFaceByBase64IntlRequest?: DetectFaceByBase64IntlRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/face-detect",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (detectFaceByBase64IntlRequest !== null && detectFaceByBase64IntlRequest !== undefined) {
                if (detectFaceByBase64IntlRequest instanceof DetectFaceByBase64IntlRequest) {
                    body = detectFaceByBase64IntlRequest.body
                } else {
                    body = detectFaceByBase64IntlRequest['body'];
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
         * 人脸检测是对输入图片进行人脸检测和分析，输出人脸在图像中的位置、人脸关键点位置和人脸关键属性。
         * 
         * 详细说明请参考华为云API Explorer。
         * Please refer to Huawei cloud API Explorer for details.
         */
        detectFaceByFile(detectFaceByFileRequest?: DetectFaceByFileRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/face-detect",
                contentType: "multipart/form-data",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            const localVarFormParams = new FormData();
            var imageFile;var attributes;

            if (detectFaceByFileRequest !== null && detectFaceByFileRequest !== undefined) {
                if (detectFaceByFileRequest instanceof DetectFaceByFileRequest) {
                    imageFile = detectFaceByFileRequest.body;
                    attributes = detectFaceByFileRequest.body;
                } else {
                    imageFile = detectFaceByFileRequest['body'];
                    attributes = detectFaceByFileRequest['body'];
                }
            }

        
            if (imageFile === null || imageFile === undefined) {
            throw new RequiredError('imageFile','Required parameter imageFile was null or undefined when calling detectFaceByFile.');
            }
            if (imageFile !== undefined) { 
                localVarFormParams.append('image_file', imageFile as any);
            }
            if (attributes !== undefined) { 
                localVarFormParams.append('attributes', attributes as any);
            }
            options.data = localVarFormParams;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 人脸检测是对输入图片进行人脸检测和分析，输出人脸在图像中的位置、人脸关键点位置和人脸关键属性。
         * 
         * 详细说明请参考华为云API Explorer。
         * Please refer to Huawei cloud API Explorer for details.
         */
        detectFaceByFileIntl(detectFaceByFileIntlRequest?: DetectFaceByFileIntlRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/face-detect",
                contentType: "multipart/form-data",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            const localVarFormParams = new FormData();
            var imageFile;

            if (detectFaceByFileIntlRequest !== null && detectFaceByFileIntlRequest !== undefined) {
                if (detectFaceByFileIntlRequest instanceof DetectFaceByFileIntlRequest) {
                    imageFile = detectFaceByFileIntlRequest.body;
                } else {
                    imageFile = detectFaceByFileIntlRequest['body'];
                }
            }

        
            if (imageFile === null || imageFile === undefined) {
            throw new RequiredError('imageFile','Required parameter imageFile was null or undefined when calling detectFaceByFileIntl.');
            }
            if (imageFile !== undefined) { 
                localVarFormParams.append('image_file', imageFile as any);
            }
            options.data = localVarFormParams;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 人脸检测是对输入图片进行人脸检测和分析，输出人脸在图像中的位置、人脸关键点位置和人脸关键属性。
         * 
         * 详细说明请参考华为云API Explorer。
         * Please refer to Huawei cloud API Explorer for details.
         */
        detectFaceByUrl(detectFaceByUrlRequest?: DetectFaceByUrlRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/face-detect",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (detectFaceByUrlRequest !== null && detectFaceByUrlRequest !== undefined) {
                if (detectFaceByUrlRequest instanceof DetectFaceByUrlRequest) {
                    body = detectFaceByUrlRequest.body
                } else {
                    body = detectFaceByUrlRequest['body'];
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
         * 人脸检测是对输入图片进行人脸检测和分析，输出人脸在图像中的位置、人脸关键点位置和人脸关键属性。
         * 
         * 详细说明请参考华为云API Explorer。
         * Please refer to Huawei cloud API Explorer for details.
         */
        detectFaceByUrlIntl(detectFaceByUrlIntlRequest?: DetectFaceByUrlIntlRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/face-detect",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (detectFaceByUrlIntlRequest !== null && detectFaceByUrlIntlRequest !== undefined) {
                if (detectFaceByUrlIntlRequest instanceof DetectFaceByUrlIntlRequest) {
                    body = detectFaceByUrlIntlRequest.body
                } else {
                    body = detectFaceByUrlIntlRequest['body'];
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
         * 动作活体检测是通过判断视频中的人物动作与传入动作列表是否一致来识别视频中人物是否为活体。如果有多张人脸出现，则选取最大的人脸进行判定。
         * 
         * 详细说明请参考华为云API Explorer。
         * Please refer to Huawei cloud API Explorer for details.
         */
        detectLiveByBase64(detectLiveByBase64Request?: DetectLiveByBase64Request) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/live-detect",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (detectLiveByBase64Request !== null && detectLiveByBase64Request !== undefined) {
                if (detectLiveByBase64Request instanceof DetectLiveByBase64Request) {
                    body = detectLiveByBase64Request.body
                } else {
                    body = detectLiveByBase64Request['body'];
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
         * 动作活体检测是通过判断视频中的人物动作与传入动作列表是否一致来识别视频中人物是否为活体。如果有多张人脸出现，则选取最大的人脸进行判定。
         * 
         * 详细说明请参考华为云API Explorer。
         * Please refer to Huawei cloud API Explorer for details.
         */
        detectLiveByBase64Intl(detectLiveByBase64IntlRequest?: DetectLiveByBase64IntlRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/live-detect",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (detectLiveByBase64IntlRequest !== null && detectLiveByBase64IntlRequest !== undefined) {
                if (detectLiveByBase64IntlRequest instanceof DetectLiveByBase64IntlRequest) {
                    body = detectLiveByBase64IntlRequest.body
                } else {
                    body = detectLiveByBase64IntlRequest['body'];
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
         * 动作活体检测是通过判断视频中的人物动作与传入动作列表是否一致来识别视频中人物是否为活体。如果有多张人脸出现，则选取最大的人脸进行判定。
         * 
         * 详细说明请参考华为云API Explorer。
         * Please refer to Huawei cloud API Explorer for details.
         */
        detectLiveByFile(detectLiveByFileRequest?: DetectLiveByFileRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/live-detect",
                contentType: "multipart/form-data",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            const localVarFormParams = new FormData();
            var videoFile;var actions;var actionTime;

            if (detectLiveByFileRequest !== null && detectLiveByFileRequest !== undefined) {
                if (detectLiveByFileRequest instanceof DetectLiveByFileRequest) {
                    videoFile = detectLiveByFileRequest.body;
                    actions = detectLiveByFileRequest.body;
                    actionTime = detectLiveByFileRequest.body;
                } else {
                    videoFile = detectLiveByFileRequest['body'];
                    actions = detectLiveByFileRequest['body'];
                    actionTime = detectLiveByFileRequest['body'];
                }
            }

        
            if (videoFile === null || videoFile === undefined) {
            throw new RequiredError('videoFile','Required parameter videoFile was null or undefined when calling detectLiveByFile.');
            }
            if (actions === null || actions === undefined) {
            throw new RequiredError('actions','Required parameter actions was null or undefined when calling detectLiveByFile.');
            }
            if (videoFile !== undefined) { 
                localVarFormParams.append('video_file', videoFile as any);
            }
            if (actions !== undefined) { 
                localVarFormParams.append('actions', actions as any);
            }
            if (actionTime !== undefined) { 
                localVarFormParams.append('action_time', actionTime as any);
            }
            options.data = localVarFormParams;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 动作活体检测是通过判断视频中的人物动作与传入动作列表是否一致来识别视频中人物是否为活体。如果有多张人脸出现，则选取最大的人脸进行判定。
         * 
         * 详细说明请参考华为云API Explorer。
         * Please refer to Huawei cloud API Explorer for details.
         */
        detectLiveByFileIntl(detectLiveByFileIntlRequest?: DetectLiveByFileIntlRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/live-detect",
                contentType: "multipart/form-data",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            const localVarFormParams = new FormData();
            var videoFile;var actions;var actionTime;

            if (detectLiveByFileIntlRequest !== null && detectLiveByFileIntlRequest !== undefined) {
                if (detectLiveByFileIntlRequest instanceof DetectLiveByFileIntlRequest) {
                    videoFile = detectLiveByFileIntlRequest.body;
                    actions = detectLiveByFileIntlRequest.body;
                    actionTime = detectLiveByFileIntlRequest.body;
                } else {
                    videoFile = detectLiveByFileIntlRequest['body'];
                    actions = detectLiveByFileIntlRequest['body'];
                    actionTime = detectLiveByFileIntlRequest['body'];
                }
            }

        
            if (videoFile === null || videoFile === undefined) {
            throw new RequiredError('videoFile','Required parameter videoFile was null or undefined when calling detectLiveByFileIntl.');
            }
            if (actions === null || actions === undefined) {
            throw new RequiredError('actions','Required parameter actions was null or undefined when calling detectLiveByFileIntl.');
            }
            if (videoFile !== undefined) { 
                localVarFormParams.append('video_file', videoFile as any);
            }
            if (actions !== undefined) { 
                localVarFormParams.append('actions', actions as any);
            }
            if (actionTime !== undefined) { 
                localVarFormParams.append('action_time', actionTime as any);
            }
            options.data = localVarFormParams;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 动作活体检测是通过判断视频中的人物动作与传入动作列表是否一致来识别视频中人物是否为活体。如果有多张人脸出现，则选取最大的人脸进行判定。
         * 
         * 详细说明请参考华为云API Explorer。
         * Please refer to Huawei cloud API Explorer for details.
         */
        detectLiveByUrl(detectLiveByUrlRequest?: DetectLiveByUrlRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/live-detect",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (detectLiveByUrlRequest !== null && detectLiveByUrlRequest !== undefined) {
                if (detectLiveByUrlRequest instanceof DetectLiveByUrlRequest) {
                    body = detectLiveByUrlRequest.body
                } else {
                    body = detectLiveByUrlRequest['body'];
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
         * 动作活体检测是通过判断视频中的人物动作与传入动作列表是否一致来识别视频中人物是否为活体。如果有多张人脸出现，则选取最大的人脸进行判定。
         * 
         * 详细说明请参考华为云API Explorer。
         * Please refer to Huawei cloud API Explorer for details.
         */
        detectLiveByUrlIntl(detectLiveByUrlIntlRequest?: DetectLiveByUrlIntlRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/live-detect",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (detectLiveByUrlIntlRequest !== null && detectLiveByUrlIntlRequest !== undefined) {
                if (detectLiveByUrlIntlRequest instanceof DetectLiveByUrlIntlRequest) {
                    body = detectLiveByUrlIntlRequest.body
                } else {
                    body = detectLiveByUrlIntlRequest['body'];
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
         * 静默活体检测是基于人脸图片中可能存在的畸变、摩尔纹、反光、倒影、边框等信息，判断图片中的人脸是否来自于真人活体，有效抵御纸质翻拍照、电子翻拍照以及视频翻拍等各种攻击方式。静默活体检测支持单张图片，不支持多人脸图片。
         * 
         * 详细说明请参考华为云API Explorer。
         * Please refer to Huawei cloud API Explorer for details.
         */
        detectLiveFaceByBase64(detectLiveFaceByBase64Request?: DetectLiveFaceByBase64Request) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/live-detect-face",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (detectLiveFaceByBase64Request !== null && detectLiveFaceByBase64Request !== undefined) {
                if (detectLiveFaceByBase64Request instanceof DetectLiveFaceByBase64Request) {
                    body = detectLiveFaceByBase64Request.body
                } else {
                    body = detectLiveFaceByBase64Request['body'];
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
         * 静默活体检测是基于人脸图片中可能存在的畸变、摩尔纹、反光、倒影、边框等信息，判断图片中的人脸是否来自于真人活体，有效抵御纸质翻拍照、电子翻拍照以及视频翻拍等各种攻击方式。静默活体检测支持单张图片，不支持多人脸图片。
         * 
         * 详细说明请参考华为云API Explorer。
         * Please refer to Huawei cloud API Explorer for details.
         */
        detectLiveFaceByFile(detectLiveFaceByFileRequest?: DetectLiveFaceByFileRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/live-detect-face",
                contentType: "multipart/form-data",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            const localVarFormParams = new FormData();
            var imageFile;

            if (detectLiveFaceByFileRequest !== null && detectLiveFaceByFileRequest !== undefined) {
                if (detectLiveFaceByFileRequest instanceof DetectLiveFaceByFileRequest) {
                    imageFile = detectLiveFaceByFileRequest.body;
                } else {
                    imageFile = detectLiveFaceByFileRequest['body'];
                }
            }

        
            if (imageFile === null || imageFile === undefined) {
            throw new RequiredError('imageFile','Required parameter imageFile was null or undefined when calling detectLiveFaceByFile.');
            }
            if (imageFile !== undefined) { 
                localVarFormParams.append('image_file', imageFile as any);
            }
            options.data = localVarFormParams;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 静默活体检测是基于人脸图片中可能存在的畸变、摩尔纹、反光、倒影、边框等信息，判断图片中的人脸是否来自于真人活体，有效抵御纸质翻拍照、电子翻拍照以及视频翻拍等各种攻击方式。静默活体检测支持单张图片，不支持多人脸图片。
         * 
         * 详细说明请参考华为云API Explorer。
         * Please refer to Huawei cloud API Explorer for details.
         */
        detectLiveFaceByUrl(detectLiveFaceByUrlRequest?: DetectLiveFaceByUrlRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/live-detect-face",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (detectLiveFaceByUrlRequest !== null && detectLiveFaceByUrlRequest !== undefined) {
                if (detectLiveFaceByUrlRequest instanceof DetectLiveFaceByUrlRequest) {
                    body = detectLiveFaceByUrlRequest.body
                } else {
                    body = detectLiveFaceByUrlRequest['body'];
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
         * 人脸搜索是指在已有的人脸库中，查询与目标人脸相似的一张或者多张人脸，并返回相应的置信度。
         * 支持传入图片或者faceID进行人脸搜索，如果传入的是多张人脸图片，选取图片中检测到的最大尺寸人脸作为检索的输入。
         * 
         * 详细说明请参考华为云API Explorer。
         * Please refer to Huawei cloud API Explorer for details.
         */
        searchFaceByBase64(searchFaceByBase64Request?: SearchFaceByBase64Request) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/face-sets/{face_set_name}/search",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            let faceSetName;

            if (searchFaceByBase64Request !== null && searchFaceByBase64Request !== undefined) {
                if (searchFaceByBase64Request instanceof SearchFaceByBase64Request) {
                    faceSetName = searchFaceByBase64Request.faceSetName;
                    body = searchFaceByBase64Request.body
                } else {
                    faceSetName = searchFaceByBase64Request['face_set_name'];
                    body = searchFaceByBase64Request['body'];
                }
            }

        
            if (faceSetName === null || faceSetName === undefined) {
            throw new RequiredError('faceSetName','Required parameter faceSetName was null or undefined when calling searchFaceByBase64.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'face_set_name': faceSetName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 人脸搜索是指在已有的人脸库中，查询与目标人脸相似的一张或者多张人脸，并返回相应的置信度。
         * 支持传入图片或者faceID进行人脸搜索，如果传入的是多张人脸图片，选取图片中检测到的最大尺寸人脸作为检索的输入。
         * 
         * 详细说明请参考华为云API Explorer。
         * Please refer to Huawei cloud API Explorer for details.
         */
        searchFaceByFaceId(searchFaceByFaceIdRequest?: SearchFaceByFaceIdRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/face-sets/{face_set_name}/search",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            let faceSetName;

            if (searchFaceByFaceIdRequest !== null && searchFaceByFaceIdRequest !== undefined) {
                if (searchFaceByFaceIdRequest instanceof SearchFaceByFaceIdRequest) {
                    faceSetName = searchFaceByFaceIdRequest.faceSetName;
                    body = searchFaceByFaceIdRequest.body
                } else {
                    faceSetName = searchFaceByFaceIdRequest['face_set_name'];
                    body = searchFaceByFaceIdRequest['body'];
                }
            }

        
            if (faceSetName === null || faceSetName === undefined) {
            throw new RequiredError('faceSetName','Required parameter faceSetName was null or undefined when calling searchFaceByFaceId.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'face_set_name': faceSetName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 人脸搜索是指在已有的人脸库中，查询与目标人脸相似的一张或者多张人脸，并返回相应的置信度。
         * 支持传入图片或者faceID进行人脸搜索，如果传入的是多张人脸图片，选取图片中检测到的最大尺寸人脸作为检索的输入。
         * 
         * 详细说明请参考华为云API Explorer。
         * Please refer to Huawei cloud API Explorer for details.
         */
        searchFaceByFile(searchFaceByFileRequest?: SearchFaceByFileRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/face-sets/{face_set_name}/search",
                contentType: "multipart/form-data",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            const localVarFormParams = new FormData();
            let faceSetName;
            var imageFile;var topN;var threshold;var sort;var filter;var returnFields;

            if (searchFaceByFileRequest !== null && searchFaceByFileRequest !== undefined) {
                if (searchFaceByFileRequest instanceof SearchFaceByFileRequest) {
                    faceSetName = searchFaceByFileRequest.faceSetName;
                    imageFile = searchFaceByFileRequest.body;
                    topN = searchFaceByFileRequest.body;
                    threshold = searchFaceByFileRequest.body;
                    sort = searchFaceByFileRequest.body;
                    filter = searchFaceByFileRequest.body;
                    returnFields = searchFaceByFileRequest.body;
                } else {
                    faceSetName = searchFaceByFileRequest['face_set_name'];
                    imageFile = searchFaceByFileRequest['body'];
                    topN = searchFaceByFileRequest['body'];
                    threshold = searchFaceByFileRequest['body'];
                    sort = searchFaceByFileRequest['body'];
                    filter = searchFaceByFileRequest['body'];
                    returnFields = searchFaceByFileRequest['body'];
                }
            }

        
            if (faceSetName === null || faceSetName === undefined) {
            throw new RequiredError('faceSetName','Required parameter faceSetName was null or undefined when calling searchFaceByFile.');
            }
            if (imageFile === null || imageFile === undefined) {
            throw new RequiredError('imageFile','Required parameter imageFile was null or undefined when calling searchFaceByFile.');
            }
            if (imageFile !== undefined) { 
                localVarFormParams.append('image_file', imageFile as any);
            }
            if (topN !== undefined) { 
                localVarFormParams.append('top_n', topN as any);
            }
            if (threshold !== undefined) { 
                localVarFormParams.append('threshold', threshold as any);
            }
            if (sort !== undefined) { 
                localVarFormParams.append('sort', sort as any);
            }
            if (filter !== undefined) { 
                localVarFormParams.append('filter', filter as any);
            }
            if (returnFields !== undefined) { 
                localVarFormParams.append('return_fields', returnFields as any);
            }
            options.data = localVarFormParams;
            options.pathParams = { 'face_set_name': faceSetName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 人脸搜索是指在已有的人脸库中，查询与目标人脸相似的一张或者多张人脸，并返回相应的置信度。
         * 支持传入图片或者faceID进行人脸搜索，如果传入的是多张人脸图片，选取图片中检测到的最大尺寸人脸作为检索的输入。
         * 
         * 详细说明请参考华为云API Explorer。
         * Please refer to Huawei cloud API Explorer for details.
         */
        searchFaceByUrl(searchFaceByUrlRequest?: SearchFaceByUrlRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/face-sets/{face_set_name}/search",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            let faceSetName;

            if (searchFaceByUrlRequest !== null && searchFaceByUrlRequest !== undefined) {
                if (searchFaceByUrlRequest instanceof SearchFaceByUrlRequest) {
                    faceSetName = searchFaceByUrlRequest.faceSetName;
                    body = searchFaceByUrlRequest.body
                } else {
                    faceSetName = searchFaceByUrlRequest['face_set_name'];
                    body = searchFaceByUrlRequest['body'];
                }
            }

        
            if (faceSetName === null || faceSetName === undefined) {
            throw new RequiredError('faceSetName','Required parameter faceSetName was null or undefined when calling searchFaceByUrl.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'face_set_name': faceSetName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询当前用户所有人脸库的状态信息。
         * 
         * 详细说明请参考华为云API Explorer。
         * Please refer to Huawei cloud API Explorer for details.
         */
        showAllFaceSets() {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/face-sets",
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
         * 查询人脸库当前的状态。
         * 
         * 详细说明请参考华为云API Explorer。
         * Please refer to Huawei cloud API Explorer for details.
         */
        showFaceSet(showFaceSetRequest?: ShowFaceSetRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/face-sets/{face_set_name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let faceSetName;

            if (showFaceSetRequest !== null && showFaceSetRequest !== undefined) {
                if (showFaceSetRequest instanceof ShowFaceSetRequest) {
                    faceSetName = showFaceSetRequest.faceSetName;
                } else {
                    faceSetName = showFaceSetRequest['face_set_name'];
                }
            }

        
            if (faceSetName === null || faceSetName === undefined) {
            throw new RequiredError('faceSetName','Required parameter faceSetName was null or undefined when calling showFaceSet.');
            }

            options.pathParams = { 'face_set_name': faceSetName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定人脸库中人脸信息。
         * 
         * 详细说明请参考华为云API Explorer。
         * Please refer to Huawei cloud API Explorer for details.
         */
        showFacesByFaceId(showFacesByFaceIdRequest?: ShowFacesByFaceIdRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/face-sets/{face_set_name}/faces",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let faceSetName;
            let faceId;

            if (showFacesByFaceIdRequest !== null && showFacesByFaceIdRequest !== undefined) {
                if (showFacesByFaceIdRequest instanceof ShowFacesByFaceIdRequest) {
                    faceSetName = showFacesByFaceIdRequest.faceSetName;
                    faceId = showFacesByFaceIdRequest.faceId;
                } else {
                    faceSetName = showFacesByFaceIdRequest['face_set_name'];
                    faceId = showFacesByFaceIdRequest['face_id'];
                }
            }

        
            if (faceSetName === null || faceSetName === undefined) {
            throw new RequiredError('faceSetName','Required parameter faceSetName was null or undefined when calling showFacesByFaceId.');
            }
            if (faceId === null || faceId === undefined) {
                throw new RequiredError('faceId','Required parameter faceId was null or undefined when calling showFacesByFaceId.');
            }
            if (faceId !== null && faceId !== undefined) {
                localVarQueryParameter['face_id'] = faceId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'face_set_name': faceSetName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定人脸库中人脸信息。
         * 
         * 详细说明请参考华为云API Explorer。
         * Please refer to Huawei cloud API Explorer for details.
         */
        showFacesByLimit(showFacesByLimitRequest?: ShowFacesByLimitRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/face-sets/{face_set_name}/faces",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let faceSetName;
            let offset;
            let limit;

            if (showFacesByLimitRequest !== null && showFacesByLimitRequest !== undefined) {
                if (showFacesByLimitRequest instanceof ShowFacesByLimitRequest) {
                    faceSetName = showFacesByLimitRequest.faceSetName;
                    offset = showFacesByLimitRequest.offset;
                    limit = showFacesByLimitRequest.limit;
                } else {
                    faceSetName = showFacesByLimitRequest['face_set_name'];
                    offset = showFacesByLimitRequest['offset'];
                    limit = showFacesByLimitRequest['limit'];
                }
            }

        
            if (faceSetName === null || faceSetName === undefined) {
            throw new RequiredError('faceSetName','Required parameter faceSetName was null or undefined when calling showFacesByLimit.');
            }
            if (offset === null || offset === undefined) {
                throw new RequiredError('offset','Required parameter offset was null or undefined when calling showFacesByLimit.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit === null || limit === undefined) {
                throw new RequiredError('limit','Required parameter limit was null or undefined when calling showFacesByLimit.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'face_set_name': faceSetName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据人脸ID（face_id）更新单张人脸信息。
         * 
         * 详细说明请参考华为云API Explorer。
         * Please refer to Huawei cloud API Explorer for details.
         */
        updateFace(updateFaceRequest?: UpdateFaceRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/face-sets/{face_set_name}/faces",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            let faceSetName;

            if (updateFaceRequest !== null && updateFaceRequest !== undefined) {
                if (updateFaceRequest instanceof UpdateFaceRequest) {
                    faceSetName = updateFaceRequest.faceSetName;
                    body = updateFaceRequest.body
                } else {
                    faceSetName = updateFaceRequest['face_set_name'];
                    body = updateFaceRequest['body'];
                }
            }

        
            if (faceSetName === null || faceSetName === undefined) {
            throw new RequiredError('faceSetName','Required parameter faceSetName was null or undefined when calling updateFace.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'face_set_name': faceSetName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
    }
};

function newClient(client: HcClient): FrsClient {
    return new FrsClient(client);
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