import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";
import FormData from 'form-data';

import { AddBucketsRequest } from './model/AddBucketsRequest';
import { AddBucketsResponse } from './model/AddBucketsResponse';
import { AddRuleGroupRequest } from './model/AddRuleGroupRequest';
import { AddRuleGroupResponse } from './model/AddRuleGroupResponse';
import { AddRuleRequest } from './model/AddRuleRequest';
import { AddRuleResponse } from './model/AddRuleResponse';
import { AddScanJobRequest } from './model/AddScanJobRequest';
import { AddScanJobResponse } from './model/AddScanJobResponse';
import { AssetNameRequest } from './model/AssetNameRequest';
import { BatchAddDataMaskRequest } from './model/BatchAddDataMaskRequest';
import { BatchAddDataMaskResponse } from './model/BatchAddDataMaskResponse';
import { Bucket } from './model/Bucket';
import { BucketBean } from './model/BucketBean';
import { BucketsRequest } from './model/BucketsRequest';
import { ChangeDbTemplateOperationRequest } from './model/ChangeDbTemplateOperationRequest';
import { ChangeDbTemplateOperationResponse } from './model/ChangeDbTemplateOperationResponse';
import { ChangeRuleRequest } from './model/ChangeRuleRequest';
import { ChangeRuleResponse } from './model/ChangeRuleResponse';
import { Columns } from './model/Columns';
import { CreateDatabaseWaterMarkRequest } from './model/CreateDatabaseWaterMarkRequest';
import { CreateDatabaseWaterMarkResponse } from './model/CreateDatabaseWaterMarkResponse';
import { CreateDocWatermarkByAddressRequest } from './model/CreateDocWatermarkByAddressRequest';
import { CreateDocWatermarkByAddressRequestBody } from './model/CreateDocWatermarkByAddressRequestBody';
import { CreateDocWatermarkByAddressResponse } from './model/CreateDocWatermarkByAddressResponse';
import { CreateDocWatermarkRequest } from './model/CreateDocWatermarkRequest';
import { CreateDocWatermarkRequestBody } from './model/CreateDocWatermarkRequestBody';
import { CreateDocWatermarkResponse } from './model/CreateDocWatermarkResponse';
import { CreateImageWatermarkByAddressRequest } from './model/CreateImageWatermarkByAddressRequest';
import { CreateImageWatermarkByAddressRequestBody } from './model/CreateImageWatermarkByAddressRequestBody';
import { CreateImageWatermarkByAddressResponse } from './model/CreateImageWatermarkByAddressResponse';
import { CreateImageWatermarkRequest } from './model/CreateImageWatermarkRequest';
import { CreateImageWatermarkRequestBody } from './model/CreateImageWatermarkRequestBody';
import { CreateImageWatermarkResponse } from './model/CreateImageWatermarkResponse';
import { CreateProductOrderRequest } from './model/CreateProductOrderRequest';
import { CreateProductOrderResponse } from './model/CreateProductOrderResponse';
import { DBMaskTaskInfo } from './model/DBMaskTaskInfo';
import { DbMatchInfo } from './model/DbMatchInfo';
import { DbScanResult } from './model/DbScanResult';
import { DbScanResultInfo } from './model/DbScanResultInfo';
import { DefaultTopicRequest } from './model/DefaultTopicRequest';
import { DeleteBucketRequest } from './model/DeleteBucketRequest';
import { DeleteBucketResponse } from './model/DeleteBucketResponse';
import { DeleteRuleGroupRequest } from './model/DeleteRuleGroupRequest';
import { DeleteRuleGroupResponse } from './model/DeleteRuleGroupResponse';
import { DeleteRuleRequest } from './model/DeleteRuleRequest';
import { DeleteRuleResponse } from './model/DeleteRuleResponse';
import { DeleteScanJobRequest } from './model/DeleteScanJobRequest';
import { DeleteScanJobResponse } from './model/DeleteScanJobResponse';
import { DynamicDataMask } from './model/DynamicDataMask';
import { EmbeddedDatabaseWatermark } from './model/EmbeddedDatabaseWatermark';
import { EsMatchInfo } from './model/EsMatchInfo';
import { EsScanResult } from './model/EsScanResult';
import { EsScanResultInfo } from './model/EsScanResultInfo';
import { ExtractedDatabaseWatermark } from './model/ExtractedDatabaseWatermark';
import { ListBucketsRequest } from './model/ListBucketsRequest';
import { ListBucketsResponse } from './model/ListBucketsResponse';
import { ListDbMaskTaskRequest } from './model/ListDbMaskTaskRequest';
import { ListDbMaskTaskResponse } from './model/ListDbMaskTaskResponse';
import { ListRuleGroupsRequest } from './model/ListRuleGroupsRequest';
import { ListRuleGroupsResponse } from './model/ListRuleGroupsResponse';
import { MaskStrategies } from './model/MaskStrategies';
import { MaskSwitchRequest } from './model/MaskSwitchRequest';
import { ObsScanResult } from './model/ObsScanResult';
import { ObsScanResultInfo } from './model/ObsScanResultInfo';
import { OpenApiCalledRecord } from './model/OpenApiCalledRecord';
import { PeriodOrderRequest } from './model/PeriodOrderRequest';
import { ProductInfo } from './model/ProductInfo';
import { ProductInfoBean } from './model/ProductInfoBean';
import { ProductOrderInfo } from './model/ProductOrderInfo';
import { ResponseGroup } from './model/ResponseGroup';
import { ResponseRule } from './model/ResponseRule';
import { RuleChangeRequest } from './model/RuleChangeRequest';
import { RuleGroupRequest } from './model/RuleGroupRequest';
import { RuleRequest } from './model/RuleRequest';
import { ScanJob } from './model/ScanJob';
import { ScanJobRequest } from './model/ScanJobRequest';
import { ShowDatabaseWaterMarkRequest } from './model/ShowDatabaseWaterMarkRequest';
import { ShowDatabaseWaterMarkResponse } from './model/ShowDatabaseWaterMarkResponse';
import { ShowDocWatermarkByAddressRequest } from './model/ShowDocWatermarkByAddressRequest';
import { ShowDocWatermarkByAddressRequestBody } from './model/ShowDocWatermarkByAddressRequestBody';
import { ShowDocWatermarkByAddressResponse } from './model/ShowDocWatermarkByAddressResponse';
import { ShowDocWatermarkRequest } from './model/ShowDocWatermarkRequest';
import { ShowDocWatermarkRequestBody } from './model/ShowDocWatermarkRequestBody';
import { ShowDocWatermarkResponse } from './model/ShowDocWatermarkResponse';
import { ShowImageWatermarkByAddressRequest } from './model/ShowImageWatermarkByAddressRequest';
import { ShowImageWatermarkByAddressRequestBody } from './model/ShowImageWatermarkByAddressRequestBody';
import { ShowImageWatermarkByAddressResponse } from './model/ShowImageWatermarkByAddressResponse';
import { ShowImageWatermarkRequest } from './model/ShowImageWatermarkRequest';
import { ShowImageWatermarkRequestBody } from './model/ShowImageWatermarkRequestBody';
import { ShowImageWatermarkResponse } from './model/ShowImageWatermarkResponse';
import { ShowImageWatermarkWithImageByAddressRequest } from './model/ShowImageWatermarkWithImageByAddressRequest';
import { ShowImageWatermarkWithImageByAddressRequestBody } from './model/ShowImageWatermarkWithImageByAddressRequestBody';
import { ShowImageWatermarkWithImageByAddressResponse } from './model/ShowImageWatermarkWithImageByAddressResponse';
import { ShowImageWatermarkWithImageRequest } from './model/ShowImageWatermarkWithImageRequest';
import { ShowImageWatermarkWithImageRequestBody } from './model/ShowImageWatermarkWithImageRequestBody';
import { ShowImageWatermarkWithImageResponse } from './model/ShowImageWatermarkWithImageResponse';
import { ShowOpenApiCalledRecordsRequest } from './model/ShowOpenApiCalledRecordsRequest';
import { ShowOpenApiCalledRecordsResponse } from './model/ShowOpenApiCalledRecordsResponse';
import { ShowRulesRequest } from './model/ShowRulesRequest';
import { ShowRulesResponse } from './model/ShowRulesResponse';
import { ShowScanJobResultsRequest } from './model/ShowScanJobResultsRequest';
import { ShowScanJobResultsResponse } from './model/ShowScanJobResultsResponse';
import { ShowScanJobsRequest } from './model/ShowScanJobsRequest';
import { ShowScanJobsResponse } from './model/ShowScanJobsResponse';
import { ShowSpecificationRequest } from './model/ShowSpecificationRequest';
import { ShowSpecificationResponse } from './model/ShowSpecificationResponse';
import { ShowTopicsRequest } from './model/ShowTopicsRequest';
import { ShowTopicsResponse } from './model/ShowTopicsResponse';
import { TopicBean } from './model/TopicBean';
import { UpdateAssetNameRequest } from './model/UpdateAssetNameRequest';
import { UpdateAssetNameResponse } from './model/UpdateAssetNameResponse';
import { UpdateDefaultTopicRequest } from './model/UpdateDefaultTopicRequest';
import { UpdateDefaultTopicResponse } from './model/UpdateDefaultTopicResponse';

export class DscClient {
    public static newBuilder(): ClientBuilder<DscClient> {
            let client = new ClientBuilder<DscClient>(newClient);
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
     * 添加数据资产扫描授权
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 添加资产授权
     * @param {BucketsRequest} addBucketsRequestBody 添加资产授权请求体
     * @param {string} [type] 资产类型
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addBuckets(addBucketsRequest?: AddBucketsRequest): Promise<AddBucketsResponse> {
        const options = ParamCreater().addBuckets(addBucketsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据指定的规则名称、规则类型、风险等级、最小匹配次数等参数创建自定义的敏感数据识别规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建扫描规则
     * @param {RuleRequest} addRuleRequestBody 创建扫描规则请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addRule(addRuleRequest?: AddRuleRequest): Promise<AddRuleResponse> {
        const options = ParamCreater().addRule(addRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据指定的规则组名称和扫描规则列表创建敏感数据扫描规则组
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建扫描规则组
     * @param {RuleGroupRequest} addRuleGroupRequestBody 创建扫描规则组请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addRuleGroup(addRuleGroupRequest?: AddRuleGroupRequest): Promise<AddRuleGroupResponse> {
        const options = ParamCreater().addRuleGroup(addRuleGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据指定的任务名称、扫描方式、扫描周期、扫描规则组、扫描时间创建扫描任务
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建扫描任务
     * @param {ScanJobRequest} addScanJobRequestBody 创建扫描任务请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addScanJob(addScanJobRequest?: AddScanJobRequest): Promise<AddScanJobResponse> {
        const options = ParamCreater().addScanJob(addScanJobRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 对数据进行脱敏
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 对数据进行脱敏
     * @param {DynamicDataMask} batchAddDataMaskRequestBody 数据脱敏请求体参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchAddDataMask(batchAddDataMaskRequest?: BatchAddDataMaskRequest): Promise<BatchAddDataMaskResponse> {
        const options = ParamCreater().batchAddDataMask(batchAddDataMaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 开启/停止脱敏任务
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 开启/停止脱敏任务
     * @param {string} templateId 模板ID
     * @param {MaskSwitchRequest} changeDBTemplateOperationRequestBody 开启/停止脱敏任务请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public changeDbTemplateOperation(changeDbTemplateOperationRequest?: ChangeDbTemplateOperationRequest): Promise<ChangeDbTemplateOperationResponse> {
        const options = ParamCreater().changeDbTemplateOperation(changeDbTemplateOperationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改自定义的敏感数据识别规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改扫描规则
     * @param {RuleChangeRequest} changeRuleRequestBody 修改扫描规则请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public changeRule(changeRuleRequest?: ChangeRuleRequest): Promise<ChangeRuleResponse> {
        const options = ParamCreater().changeRule(changeRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 对json体中数据动态添加水印
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 嵌入数据水印
     * @param {EmbeddedDatabaseWatermark} createDatabaseWaterMarkRequestBody 嵌入数据水印请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createDatabaseWaterMark(createDatabaseWaterMarkRequest?: CreateDatabaseWaterMarkRequest): Promise<CreateDatabaseWaterMarkResponse> {
        const options = ParamCreater().createDatabaseWaterMark(createDatabaseWaterMarkRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 对WORD(.docx)，PPT(.pptx)，EXCEL(.xlsx)，PDF(.pdf) 类型的文件嵌入文字暗水印、文字明水印或者图片明水印，用户以formData的格式传入待加水印的文件和水印相关信息，DSC服务给文件加完水印后返回给用户已嵌入水印的文件的二进制流。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 文档嵌入水印
     * @param {string} docType 要嵌入水印的文档类型
     * @param {any} file 要添加水印的文档
     * @param {string} [filePassword] 输入文件有密码时，读取文件的密码， 最大支持长度256。如果Office文档有读密码或域控的权限密码，请输入读密码，或者有读权限的域控密码。
     * @param {string} [markedFilePassword] 添加水印后给文件设置密码， 最大支持长度256。默认不加文档密码。
     * @param {string} [readonlyPassword] 添加水印后给文件设置只读密码， 最大支持长度256。默认不加只读密码。
     * @param {string} [visibleWatermark] 明水印内容，与“blind_watermark”字段至少有一个不为空
     * @param {string} [fontSize] 明水印字体大小，取值为[1,100]，默认值50
     * @param {string} [rotation] 明水印旋转角度，逆时针方向，取值为[0,90]，默认值45
     * @param {string} [opacity] 明水印的透明度，取值[0,1]，默认值为0.3；
     * @param {string} [blindWatermark] 暗水印内容，与“visible_watermark”字段至少有一个不为空
     * @param {any} [imageMark] 图形水印的字节流。图形文件的格式必须为“png”或“jpg”，否则返回参数错误；图像文件大小不超过1MB；在分段的请求体“Content-Disposition”部分，参数“name”的值必须为“image_mark”。
     * @param {string} [visibleType] 该字段为空时，默认为**TEXT**类型。  当该字段为**IMAGE**时: - 请求的表单中必须包含名为“image”的图像文件，图像格式必须为“png”或“jpg”，否则返回参数错误； - 图像文件大小不超过1MB； - “visible_watermark”，“font_size”，“rotation”和“opacity”字段无效。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createDocWatermark(createDocWatermarkRequest?: CreateDocWatermarkRequest): Promise<CreateDocWatermarkResponse> {
        const options = ParamCreater().createDocWatermark(createDocWatermarkRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 对WORD(.docx)，PPT(.pptx)，EXCEL(.xlsx)，PDF(.pdf)*类型的文档嵌入文字暗水印、文字明水印或者图片明水印，用户传入待加水印的文档地址（目前支持OBS)和水印相关信息，DSC服务对文档加完水印后返回给用户已嵌入水印的文档的存放地址。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 文档嵌入水印（文件地址版本）
     * @param {CreateDocWatermarkByAddressRequestBody} createDocWatermarkByAddressRequestBody 待嵌入水印的文档类型
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createDocWatermarkByAddress(createDocWatermarkByAddressRequest?: CreateDocWatermarkByAddressRequest): Promise<CreateDocWatermarkByAddressResponse> {
        const options = ParamCreater().createDocWatermarkByAddress(createDocWatermarkByAddressRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 对图片嵌入文字暗水印或者图片暗水印，用户以formData的格式传入待加水印图片和水印相关信息，DSC服务对图片加完水印后返回给用户已嵌入水印的图片二进制流，目前支持的图片格式为：*.jpg, *.jpeg, *.jpe, *.png, *.bmp, *.dib, *.rle, *.tiff, *.tif, *.ppm, *.webp, *.tga, *.tpic, *.gif。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 图片嵌入暗水印
     * @param {any} file 要添加水印的图片文件，添加的图片短边尺寸需要超过512像素。
     * @param {string} [blindWatermark] 待嵌入的文字暗水印内容，长度不超过32个字符。当前仅支持数字及英文大小写。与图片暗水印image_watermark二选一填充。
     * @param {any} [imageWatermark] 待嵌入的图片暗水印文件，与文字暗水印 blind_watermark 二选一填充。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createImageWatermark(createImageWatermarkRequest?: CreateImageWatermarkRequest): Promise<CreateImageWatermarkResponse> {
        const options = ParamCreater().createImageWatermark(createImageWatermarkRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 对指定存储地址信息（目前支持华为云OBS）的图片嵌入文字暗水印或者图片暗水印，已嵌入的水印的图片将存放在用户指定的位置（目前支持华为云OBS），支持的图片格式为：*.jpg, *.jpeg, *.jpe, *.png, *.bmp, *.dib, *.rle, *.tiff, *.tif, *.ppm, *.webp, *.tga, *.tpic, *.gif。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 图片嵌入暗水印（文件地址版本）
     * @param {CreateImageWatermarkByAddressRequestBody} createImageWatermarkByAddressRequestBody 图片地址嵌入水印请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createImageWatermarkByAddress(createImageWatermarkByAddressRequest?: CreateImageWatermarkByAddressRequest): Promise<CreateImageWatermarkByAddressResponse> {
        const options = ParamCreater().createImageWatermarkByAddress(createImageWatermarkByAddressRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据计费方式、计费周期等信息进行实例下单
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 实例下单
     * @param {PeriodOrderRequest} createProductOrderRequestBody 订购请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createProductOrder(createProductOrderRequest?: CreateProductOrderRequest): Promise<CreateProductOrderResponse> {
        const options = ParamCreater().createProductOrder(createProductOrderRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除数据资产扫描授权
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除资产授权
     * @param {string} bucketId 桶ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteBucket(deleteBucketRequest?: DeleteBucketRequest): Promise<DeleteBucketResponse> {
        const options = ParamCreater().deleteBucket(deleteBucketRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除指定的敏感数据识别规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除扫描规则
     * @param {string} ruleId 规则ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteRule(deleteRuleRequest?: DeleteRuleRequest): Promise<DeleteRuleResponse> {
        const options = ParamCreater().deleteRule(deleteRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据扫描规则组ID删除指定的扫描规则组
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除扫描规则组
     * @param {string} groupId 规则组ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteRuleGroup(deleteRuleGroupRequest?: DeleteRuleGroupRequest): Promise<DeleteRuleGroupResponse> {
        const options = ParamCreater().deleteRuleGroup(deleteRuleGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除扫描任务
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除扫描任务
     * @param {string} jobId 任务ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteScanJob(deleteScanJobRequest?: DeleteScanJobRequest): Promise<DeleteScanJobResponse> {
        const options = ParamCreater().deleteScanJob(deleteScanJobRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询数据资产扫描授权列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查看资产列表
     * @param {boolean} [added] 已授权
     * @param {number} [offset] 页码
     * @param {number} [limit] 分页大小
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listBuckets(listBucketsRequest?: ListBucketsRequest): Promise<ListBucketsResponse> {
        const options = ParamCreater().listBuckets(listBucketsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询脱敏任务执行列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询脱敏任务执行列表
     * @param {string} templateId 模板ID
     * @param {string} [workspaceId] 工作区ID
     * @param {number} [offset] 页码
     * @param {number} [limit] 分页大小
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDbMaskTask(listDbMaskTaskRequest?: ListDbMaskTaskRequest): Promise<ListDbMaskTaskResponse> {
        const options = ParamCreater().listDbMaskTask(listDbMaskTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据指定的项目ID查询扫描规则组列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询扫描规则组列表
     * @param {number} [offset] 页码
     * @param {number} [limit] 分页大小
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listRuleGroups(listRuleGroupsRequest?: ListRuleGroupsRequest): Promise<ListRuleGroupsResponse> {
        const options = ParamCreater().listRuleGroups(listRuleGroupsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 提取请求数据中水印内容
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 提取数据水印
     * @param {ExtractedDatabaseWatermark} showDatabaseWaterMarkRequestBody 提取数据的水印请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDatabaseWaterMark(showDatabaseWaterMarkRequest?: ShowDatabaseWaterMarkRequest): Promise<ShowDatabaseWaterMarkResponse> {
        const options = ParamCreater().showDatabaseWaterMark(showDatabaseWaterMarkRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 对已嵌入文字暗水印的WORD(.docx)，PPT(.pptx)，EXCEL(.xlsx)，PDF(.pdf)类型的文档进行文字暗水印提取，用户以formData的格式传入待提取水印的文件，DSC服务以JSON的格式返回从文档里提取的出的文字暗水印内容。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 文档提取暗水印
     * @param {string} docType 待提取水印的文档类型
     * @param {any} file 上传要提取水印的文档
     * @param {string} [filePassword] 解密文件的密码， 最大支持长度256。如果Office文档有读密码或域控的权限密码，请输入读密码，或者有读权限的域控密码。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDocWatermark(showDocWatermarkRequest?: ShowDocWatermarkRequest): Promise<ShowDocWatermarkResponse> {
        const options = ParamCreater().showDocWatermark(showDocWatermarkRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 支持对已嵌入文字暗水印的WORD(.docx)，PPT(.pptx)，EXCEL(.xlsx)，PDF(.pdf)类型的文档进行水印提取，用户传入待提取水印的文档地址（目前支持OBS），DSC服务以JSON的格式返回从文档里提取的出的文字暗水印内容。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 文档提取暗水印（文档地址版本）
     * @param {ShowDocWatermarkByAddressRequestBody} showDocWatermarkByAddressRequestBody 提取OBS文档水印请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDocWatermarkByAddress(showDocWatermarkByAddressRequest?: ShowDocWatermarkByAddressRequest): Promise<ShowDocWatermarkByAddressResponse> {
        const options = ParamCreater().showDocWatermarkByAddress(showDocWatermarkByAddressRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 对已嵌入文字暗水印的图片进行水印提取，用户以formData的格式传入待提取水印的图片，DSC服务以JSON的格式返回从图片里提取的出的文字暗水印。目前支持的图片格式为：*.jpg, *.jpeg, *.jpe, *.png, *.bmp, *.dib, *.rle, *.tiff, *.tif, *.ppm, *.webp, *.tga, *.tpic, *.gif。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 提取图片中的文字暗水印
     * @param {any} file 待提取暗水印的图片文件。
     * @param {string} [markLen] 指定待提取水印的长度，mark_len长度大于0，小于32。设置后可以提升水印提取性能
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showImageWatermark(showImageWatermarkRequest?: ShowImageWatermarkRequest): Promise<ShowImageWatermarkResponse> {
        const options = ParamCreater().showImageWatermark(showImageWatermarkRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 对指定存储地址信息（目前支持华为云OBS）的已嵌入文字暗水印的图片提取文字暗水印，支持的图片格式为：*.jpg, *.jpeg, *.jpe, *.png, *.bmp, *.dib, *.rle, *.tiff, *.tif, *.ppm, *.webp, *.tga, *.tpic, *.gif。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 提取图片中的文字暗水印（文件地址版本）
     * @param {ShowImageWatermarkByAddressRequestBody} showImageWatermarkByAddressRequestBody 图片提取文字暗水印请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showImageWatermarkByAddress(showImageWatermarkByAddressRequest?: ShowImageWatermarkByAddressRequest): Promise<ShowImageWatermarkByAddressResponse> {
        const options = ParamCreater().showImageWatermarkByAddress(showImageWatermarkByAddressRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 对已嵌入图片暗水印的图片进行水印提取，用户以formData的格式传入待提取水印的图片，DSC服务以图片二进制流的格式返回从图片里提取的出的图片暗水印。目前支持的图片格式为：*.jpg, *.jpeg, *.jpe, *.png, *.bmp, *.dib, *.rle, *.tiff, *.tif, *.ppm, *.webp, *.tga, *.tpic, *.gif。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 提取图片中的图片暗水印
     * @param {any} file 待提取暗水印的图片文件。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showImageWatermarkWithImage(showImageWatermarkWithImageRequest?: ShowImageWatermarkWithImageRequest): Promise<ShowImageWatermarkWithImageResponse> {
        const options = ParamCreater().showImageWatermarkWithImage(showImageWatermarkWithImageRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 对指定存储地址信息（目前支持华为云OBS）的已嵌入图片暗水印的图片提取图片暗水印，提取出的水印图片将存放在用户指定的位置（目前支持华为云OBS），支持的图片格式为：*.jpg, *.jpeg, *.jpe, *.png, *.bmp, *.dib, *.rle, *.tiff, *.tif, *.ppm, *.webp, *.tga, *.tpic, *.gif。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 提取图片中的图片暗水印（文件地址版本）
     * @param {ShowImageWatermarkWithImageByAddressRequestBody} showImageWatermarkWithImageByAddressRequestBody OBS图片提取图片暗水印请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showImageWatermarkWithImageByAddress(showImageWatermarkWithImageByAddressRequest?: ShowImageWatermarkWithImageByAddressRequest): Promise<ShowImageWatermarkWithImageByAddressResponse> {
        const options = ParamCreater().showImageWatermarkWithImageByAddress(showImageWatermarkWithImageByAddressRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询扫描规则列表，返回扫描规则总数和扫描规则列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查看规则列表
     * @param {number} [offset] 页码
     * @param {number} [limit] 分页大小
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showRules(showRulesRequest?: ShowRulesRequest): Promise<ShowRulesResponse> {
        const options = ParamCreater().showRules(showRulesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定任务扫描结果
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定任务扫描结果
     * @param {string} jobId 任务ID
     * @param {number} [offset] 页码
     * @param {number} [limit] 分页大小
     * @param {'DATABASE' | 'OBS' | 'BIGDATA'} [type] 资产类型
     * @param {string} [startTime] 起始时间（预留，待启用）
     * @param {string} [endTime] 结束时间（预留，待启用）
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showScanJobResults(showScanJobResultsRequest?: ShowScanJobResultsRequest): Promise<ShowScanJobResultsResponse> {
        const options = ParamCreater().showScanJobResults(showScanJobResultsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询扫描任务列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询扫描任务列表
     * @param {number} [offset] 页码
     * @param {number} [limit] 分页大小
     * @param {string} [content] 内容
     * @param {string} [startTime] 预留，待启用
     * @param {string} [endTime] 预留，待启用
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showScanJobs(showScanJobsRequest?: ShowScanJobsRequest): Promise<ShowScanJobsResponse> {
        const options = ParamCreater().showScanJobs(showScanJobsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询资源开通信息，根据项目ID查询订单详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询资源开通信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showSpecification(showSpecificationRequest?: ShowSpecificationRequest): Promise<ShowSpecificationResponse> {
        const options = ParamCreater().showSpecification();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询告警通知主题，返回默认主题、已确认主题数量及列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询告警通知主题
     * @param {number} [offset] 页码
     * @param {number} [limit] 分页大小
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showTopics(showTopicsRequest?: ShowTopicsRequest): Promise<ShowTopicsResponse> {
        const options = ParamCreater().showTopics(showTopicsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 编辑数据资产名称
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 编辑资产名称
     * @param {string} assetId 资产ID
     * @param {AssetNameRequest} updateAssetNameRequestBody 编辑数据资产名称请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateAssetName(updateAssetNameRequest?: UpdateAssetNameRequest): Promise<UpdateAssetNameResponse> {
        const options = ParamCreater().updateAssetName(updateAssetNameRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改告警通知的关联项目ID、通知主题、通知状态(0为关闭通知，1为开启通知)等通用配置
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改告警通知主题
     * @param {DefaultTopicRequest} updateDefaultTopicRequestBody 修改告警通知主题请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateDefaultTopic(updateDefaultTopicRequest?: UpdateDefaultTopicRequest): Promise<UpdateDefaultTopicResponse> {
        const options = ParamCreater().updateDefaultTopic(updateDefaultTopicRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询OpenApi调用记录
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询OpenApi调用记录
     * @param {number} [limit] 分页大小，默认1000，最大2000。
     * @param {string} [calledUrl] 需要查询调用记录的URL，例如：/v1/{project_id}/sdg/database/watermark/embed
     * @param {number} [startTime] 开始时间（Unix timestamp），单位：毫秒，例如：0
     * @param {number} [endTime] 结束时间（Unix timestamp），单位：毫秒，例如：1638515803572
     * @param {string} [marker] 指定一个标识符。获取第一页时不用赋值，获取下一页时取上页查询结果的返回值。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showOpenApiCalledRecords(showOpenApiCalledRecordsRequest?: ShowOpenApiCalledRecordsRequest): Promise<ShowOpenApiCalledRecordsResponse> {
        const options = ParamCreater().showOpenApiCalledRecords(showOpenApiCalledRecordsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 添加数据资产扫描授权
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        addBuckets(addBucketsRequest?: AddBucketsRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/sdg/asset/obs/buckets",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let type;

            if (addBucketsRequest !== null && addBucketsRequest !== undefined) {
                if (addBucketsRequest instanceof AddBucketsRequest) {
                    body = addBucketsRequest.body
                    type = addBucketsRequest.type;
                } else {
                    body = addBucketsRequest['body'];
                    type = addBucketsRequest['type'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据指定的规则名称、规则类型、风险等级、最小匹配次数等参数创建自定义的敏感数据识别规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        addRule(addRuleRequest?: AddRuleRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/sdg/server/scan/rules",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (addRuleRequest !== null && addRuleRequest !== undefined) {
                if (addRuleRequest instanceof AddRuleRequest) {
                    body = addRuleRequest.body
                } else {
                    body = addRuleRequest['body'];
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
         * 根据指定的规则组名称和扫描规则列表创建敏感数据扫描规则组
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        addRuleGroup(addRuleGroupRequest?: AddRuleGroupRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/sdg/server/scan/groups",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (addRuleGroupRequest !== null && addRuleGroupRequest !== undefined) {
                if (addRuleGroupRequest instanceof AddRuleGroupRequest) {
                    body = addRuleGroupRequest.body
                } else {
                    body = addRuleGroupRequest['body'];
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
         * 根据指定的任务名称、扫描方式、扫描周期、扫描规则组、扫描时间创建扫描任务
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        addScanJob(addScanJobRequest?: AddScanJobRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/sdg/scan/job",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (addScanJobRequest !== null && addScanJobRequest !== undefined) {
                if (addScanJobRequest instanceof AddScanJobRequest) {
                    body = addScanJobRequest.body
                } else {
                    body = addScanJobRequest['body'];
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
         * 对数据进行脱敏
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchAddDataMask(batchAddDataMaskRequest?: BatchAddDataMaskRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/data/mask",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (batchAddDataMaskRequest !== null && batchAddDataMaskRequest !== undefined) {
                if (batchAddDataMaskRequest instanceof BatchAddDataMaskRequest) {
                    body = batchAddDataMaskRequest.body
                } else {
                    body = batchAddDataMaskRequest['body'];
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
         * 开启/停止脱敏任务
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        changeDbTemplateOperation(changeDbTemplateOperationRequest?: ChangeDbTemplateOperationRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/sdg/server/mask/dbs/templates/{template_id}/operation",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let templateId;

            if (changeDbTemplateOperationRequest !== null && changeDbTemplateOperationRequest !== undefined) {
                if (changeDbTemplateOperationRequest instanceof ChangeDbTemplateOperationRequest) {
                    templateId = changeDbTemplateOperationRequest.templateId;
                    body = changeDbTemplateOperationRequest.body
                } else {
                    templateId = changeDbTemplateOperationRequest['template_id'];
                    body = changeDbTemplateOperationRequest['body'];
                }
            }

        
            if (templateId === null || templateId === undefined) {
            throw new RequiredError('templateId','Required parameter templateId was null or undefined when calling changeDbTemplateOperation.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'template_id': templateId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改自定义的敏感数据识别规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        changeRule(changeRuleRequest?: ChangeRuleRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/sdg/server/scan/rules",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (changeRuleRequest !== null && changeRuleRequest !== undefined) {
                if (changeRuleRequest instanceof ChangeRuleRequest) {
                    body = changeRuleRequest.body
                } else {
                    body = changeRuleRequest['body'];
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
         * 对json体中数据动态添加水印
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createDatabaseWaterMark(createDatabaseWaterMarkRequest?: CreateDatabaseWaterMarkRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/sdg/database/watermark/embed",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createDatabaseWaterMarkRequest !== null && createDatabaseWaterMarkRequest !== undefined) {
                if (createDatabaseWaterMarkRequest instanceof CreateDatabaseWaterMarkRequest) {
                    body = createDatabaseWaterMarkRequest.body
                } else {
                    body = createDatabaseWaterMarkRequest['body'];
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
         * 对WORD(.docx)，PPT(.pptx)，EXCEL(.xlsx)，PDF(.pdf) 类型的文件嵌入文字暗水印、文字明水印或者图片明水印，用户以formData的格式传入待加水印的文件和水印相关信息，DSC服务给文件加完水印后返回给用户已嵌入水印的文件的二进制流。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createDocWatermark(createDocWatermarkRequest?: CreateDocWatermarkRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/sdg/doc/watermark/embed",
                contentType: "multipart/form-data",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            const localVarFormParams = new FormData();
            let docType;
            
            let file;
            
            let filePassword;
            
            let markedFilePassword;
            
            let readonlyPassword;
            
            let visibleWatermark;
            
            let fontSize;
            
            let rotation;
            
            let opacity;
            
            let blindWatermark;
            
            let imageMark;
            
            let visibleType;
            

            if (createDocWatermarkRequest !== null && createDocWatermarkRequest !== undefined) {
                if (createDocWatermarkRequest instanceof CreateDocWatermarkRequest) {
                    docType = createDocWatermarkRequest.body?.docType;
                    file = createDocWatermarkRequest.body?.file;
                    filePassword = createDocWatermarkRequest.body?.filePassword;
                    markedFilePassword = createDocWatermarkRequest.body?.markedFilePassword;
                    readonlyPassword = createDocWatermarkRequest.body?.readonlyPassword;
                    visibleWatermark = createDocWatermarkRequest.body?.visibleWatermark;
                    fontSize = createDocWatermarkRequest.body?.fontSize;
                    rotation = createDocWatermarkRequest.body?.rotation;
                    opacity = createDocWatermarkRequest.body?.opacity;
                    blindWatermark = createDocWatermarkRequest.body?.blindWatermark;
                    imageMark = createDocWatermarkRequest.body?.imageMark;
                    visibleType = createDocWatermarkRequest.body?.visibleType;
                } else {
                    docType = createDocWatermarkRequest['body']['docType'];
                    file = createDocWatermarkRequest['body']['file'];
                    filePassword = createDocWatermarkRequest['body']['filePassword'];
                    markedFilePassword = createDocWatermarkRequest['body']['markedFilePassword'];
                    readonlyPassword = createDocWatermarkRequest['body']['readonlyPassword'];
                    visibleWatermark = createDocWatermarkRequest['body']['visibleWatermark'];
                    fontSize = createDocWatermarkRequest['body']['fontSize'];
                    rotation = createDocWatermarkRequest['body']['rotation'];
                    opacity = createDocWatermarkRequest['body']['opacity'];
                    blindWatermark = createDocWatermarkRequest['body']['blindWatermark'];
                    imageMark = createDocWatermarkRequest['body']['imageMark'];
                    visibleType = createDocWatermarkRequest['body']['visibleType'];
                }
            }

        
            if (docType === null || docType === undefined) {
            throw new RequiredError('docType','Required parameter docType was null or undefined when calling createDocWatermark.');
            }
            if (file === null || file === undefined) {
            throw new RequiredError('file','Required parameter file was null or undefined when calling createDocWatermark.');
            }
            if (docType !== undefined) { 
                localVarFormParams.append('doc_type', docType as any);
            }
            if (filePassword !== undefined) { 
                localVarFormParams.append('file_password', filePassword as any);
            }
            if (markedFilePassword !== undefined) { 
                localVarFormParams.append('marked_file_password', markedFilePassword as any);
            }
            if (readonlyPassword !== undefined) { 
                localVarFormParams.append('readonly_password', readonlyPassword as any);
            }
            if (visibleWatermark !== undefined) { 
                localVarFormParams.append('visible_watermark', visibleWatermark as any);
            }
            if (fontSize !== undefined) { 
                localVarFormParams.append('font_size', fontSize as any);
            }
            if (rotation !== undefined) { 
                localVarFormParams.append('rotation', rotation as any);
            }
            if (opacity !== undefined) { 
                localVarFormParams.append('opacity', opacity as any);
            }
            if (blindWatermark !== undefined) { 
                localVarFormParams.append('blind_watermark', blindWatermark as any);
            }
            if (visibleType !== undefined) { 
                localVarFormParams.append('visible_type', visibleType as any);
            }
            if (file !== undefined) { 
                localVarFormParams.append('file', file as any);
            }
            if (imageMark !== undefined) { 
                localVarFormParams.append('image_mark', imageMark as any);
            }
            localVarHeaderParameter['Content-Type'] = 'application/x-www-form-urlencoded';
            localVarHeaderParameter['Content-Type'] = 'multipart/form-data';
            options.data = localVarFormParams;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 对WORD(.docx)，PPT(.pptx)，EXCEL(.xlsx)，PDF(.pdf)*类型的文档嵌入文字暗水印、文字明水印或者图片明水印，用户传入待加水印的文档地址（目前支持OBS)和水印相关信息，DSC服务对文档加完水印后返回给用户已嵌入水印的文档的存放地址。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createDocWatermarkByAddress(createDocWatermarkByAddressRequest?: CreateDocWatermarkByAddressRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/doc-address/watermark/embed",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createDocWatermarkByAddressRequest !== null && createDocWatermarkByAddressRequest !== undefined) {
                if (createDocWatermarkByAddressRequest instanceof CreateDocWatermarkByAddressRequest) {
                    body = createDocWatermarkByAddressRequest.body
                } else {
                    body = createDocWatermarkByAddressRequest['body'];
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
         * 对图片嵌入文字暗水印或者图片暗水印，用户以formData的格式传入待加水印图片和水印相关信息，DSC服务对图片加完水印后返回给用户已嵌入水印的图片二进制流，目前支持的图片格式为：*.jpg, *.jpeg, *.jpe, *.png, *.bmp, *.dib, *.rle, *.tiff, *.tif, *.ppm, *.webp, *.tga, *.tpic, *.gif。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createImageWatermark(createImageWatermarkRequest?: CreateImageWatermarkRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/image/watermark/embed",
                contentType: "multipart/form-data",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            const localVarFormParams = new FormData();
            let file;
            
            let blindWatermark;
            
            let imageWatermark;
            

            if (createImageWatermarkRequest !== null && createImageWatermarkRequest !== undefined) {
                if (createImageWatermarkRequest instanceof CreateImageWatermarkRequest) {
                    file = createImageWatermarkRequest.body?.file;
                    blindWatermark = createImageWatermarkRequest.body?.blindWatermark;
                    imageWatermark = createImageWatermarkRequest.body?.imageWatermark;
                } else {
                    file = createImageWatermarkRequest['body']['file'];
                    blindWatermark = createImageWatermarkRequest['body']['blindWatermark'];
                    imageWatermark = createImageWatermarkRequest['body']['imageWatermark'];
                }
            }

        
            if (file === null || file === undefined) {
            throw new RequiredError('file','Required parameter file was null or undefined when calling createImageWatermark.');
            }
            if (blindWatermark !== undefined) { 
                localVarFormParams.append('blind_watermark', blindWatermark as any);
            }
            if (file !== undefined) { 
                localVarFormParams.append('file', file as any);
            }
            if (imageWatermark !== undefined) { 
                localVarFormParams.append('image_watermark', imageWatermark as any);
            }
            localVarHeaderParameter['Content-Type'] = 'application/x-www-form-urlencoded';
            localVarHeaderParameter['Content-Type'] = 'multipart/form-data';
            options.data = localVarFormParams;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 对指定存储地址信息（目前支持华为云OBS）的图片嵌入文字暗水印或者图片暗水印，已嵌入的水印的图片将存放在用户指定的位置（目前支持华为云OBS），支持的图片格式为：*.jpg, *.jpeg, *.jpe, *.png, *.bmp, *.dib, *.rle, *.tiff, *.tif, *.ppm, *.webp, *.tga, *.tpic, *.gif。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createImageWatermarkByAddress(createImageWatermarkByAddressRequest?: CreateImageWatermarkByAddressRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/image-address/watermark/embed",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createImageWatermarkByAddressRequest !== null && createImageWatermarkByAddressRequest !== undefined) {
                if (createImageWatermarkByAddressRequest instanceof CreateImageWatermarkByAddressRequest) {
                    body = createImageWatermarkByAddressRequest.body
                } else {
                    body = createImageWatermarkByAddressRequest['body'];
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
         * 根据计费方式、计费周期等信息进行实例下单
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createProductOrder(createProductOrderRequest?: CreateProductOrderRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/period/order",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createProductOrderRequest !== null && createProductOrderRequest !== undefined) {
                if (createProductOrderRequest instanceof CreateProductOrderRequest) {
                    body = createProductOrderRequest.body
                } else {
                    body = createProductOrderRequest['body'];
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
         * 删除数据资产扫描授权
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteBucket(deleteBucketRequest?: DeleteBucketRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/sdg/asset/obs/bucket/{bucket_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let bucketId;

            if (deleteBucketRequest !== null && deleteBucketRequest !== undefined) {
                if (deleteBucketRequest instanceof DeleteBucketRequest) {
                    bucketId = deleteBucketRequest.bucketId;
                } else {
                    bucketId = deleteBucketRequest['bucket_id'];
                }
            }

        
            if (bucketId === null || bucketId === undefined) {
            throw new RequiredError('bucketId','Required parameter bucketId was null or undefined when calling deleteBucket.');
            }

            options.pathParams = { 'bucket_id': bucketId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除指定的敏感数据识别规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteRule(deleteRuleRequest?: DeleteRuleRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/sdg/server/scan/rules/{rule_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let ruleId;

            if (deleteRuleRequest !== null && deleteRuleRequest !== undefined) {
                if (deleteRuleRequest instanceof DeleteRuleRequest) {
                    ruleId = deleteRuleRequest.ruleId;
                } else {
                    ruleId = deleteRuleRequest['rule_id'];
                }
            }

        
            if (ruleId === null || ruleId === undefined) {
            throw new RequiredError('ruleId','Required parameter ruleId was null or undefined when calling deleteRule.');
            }

            options.pathParams = { 'rule_id': ruleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据扫描规则组ID删除指定的扫描规则组
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteRuleGroup(deleteRuleGroupRequest?: DeleteRuleGroupRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/sdg/server/scan/groups/{group_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let groupId;

            if (deleteRuleGroupRequest !== null && deleteRuleGroupRequest !== undefined) {
                if (deleteRuleGroupRequest instanceof DeleteRuleGroupRequest) {
                    groupId = deleteRuleGroupRequest.groupId;
                } else {
                    groupId = deleteRuleGroupRequest['group_id'];
                }
            }

        
            if (groupId === null || groupId === undefined) {
            throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling deleteRuleGroup.');
            }

            options.pathParams = { 'group_id': groupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除扫描任务
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteScanJob(deleteScanJobRequest?: DeleteScanJobRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/sdg/scan/job/{job_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let jobId;

            if (deleteScanJobRequest !== null && deleteScanJobRequest !== undefined) {
                if (deleteScanJobRequest instanceof DeleteScanJobRequest) {
                    jobId = deleteScanJobRequest.jobId;
                } else {
                    jobId = deleteScanJobRequest['job_id'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling deleteScanJob.');
            }

            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询数据资产扫描授权列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listBuckets(listBucketsRequest?: ListBucketsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/sdg/asset/obs/buckets",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let added;
            
            let offset;
            
            let limit;

            if (listBucketsRequest !== null && listBucketsRequest !== undefined) {
                if (listBucketsRequest instanceof ListBucketsRequest) {
                    added = listBucketsRequest.added;
                    offset = listBucketsRequest.offset;
                    limit = listBucketsRequest.limit;
                } else {
                    added = listBucketsRequest['added'];
                    offset = listBucketsRequest['offset'];
                    limit = listBucketsRequest['limit'];
                }
            }

        
            if (added !== null && added !== undefined) {
                localVarQueryParameter['added'] = added;
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
         * 查询脱敏任务执行列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDbMaskTask(listDbMaskTaskRequest?: ListDbMaskTaskRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/sdg/server/mask/dbs/templates/{template_id}/tasks",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let templateId;
            
            let workspaceId;
            
            let offset;
            
            let limit;

            if (listDbMaskTaskRequest !== null && listDbMaskTaskRequest !== undefined) {
                if (listDbMaskTaskRequest instanceof ListDbMaskTaskRequest) {
                    templateId = listDbMaskTaskRequest.templateId;
                    workspaceId = listDbMaskTaskRequest.workspaceId;
                    offset = listDbMaskTaskRequest.offset;
                    limit = listDbMaskTaskRequest.limit;
                } else {
                    templateId = listDbMaskTaskRequest['template_id'];
                    workspaceId = listDbMaskTaskRequest['workspace_id'];
                    offset = listDbMaskTaskRequest['offset'];
                    limit = listDbMaskTaskRequest['limit'];
                }
            }

        
            if (templateId === null || templateId === undefined) {
            throw new RequiredError('templateId','Required parameter templateId was null or undefined when calling listDbMaskTask.');
            }
            if (workspaceId !== null && workspaceId !== undefined) {
                localVarQueryParameter['workspace_id'] = workspaceId;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'template_id': templateId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据指定的项目ID查询扫描规则组列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listRuleGroups(listRuleGroupsRequest?: ListRuleGroupsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/sdg/server/scan/groups",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let offset;
            
            let limit;

            if (listRuleGroupsRequest !== null && listRuleGroupsRequest !== undefined) {
                if (listRuleGroupsRequest instanceof ListRuleGroupsRequest) {
                    offset = listRuleGroupsRequest.offset;
                    limit = listRuleGroupsRequest.limit;
                } else {
                    offset = listRuleGroupsRequest['offset'];
                    limit = listRuleGroupsRequest['limit'];
                }
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
         * 提取请求数据中水印内容
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDatabaseWaterMark(showDatabaseWaterMarkRequest?: ShowDatabaseWaterMarkRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/sdg/database/watermark/extract",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (showDatabaseWaterMarkRequest !== null && showDatabaseWaterMarkRequest !== undefined) {
                if (showDatabaseWaterMarkRequest instanceof ShowDatabaseWaterMarkRequest) {
                    body = showDatabaseWaterMarkRequest.body
                } else {
                    body = showDatabaseWaterMarkRequest['body'];
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
         * 对已嵌入文字暗水印的WORD(.docx)，PPT(.pptx)，EXCEL(.xlsx)，PDF(.pdf)类型的文档进行文字暗水印提取，用户以formData的格式传入待提取水印的文件，DSC服务以JSON的格式返回从文档里提取的出的文字暗水印内容。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDocWatermark(showDocWatermarkRequest?: ShowDocWatermarkRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/sdg/doc/watermark/extract",
                contentType: "multipart/form-data",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            const localVarFormParams = new FormData();
            let docType;
            
            let file;
            
            let filePassword;
            

            if (showDocWatermarkRequest !== null && showDocWatermarkRequest !== undefined) {
                if (showDocWatermarkRequest instanceof ShowDocWatermarkRequest) {
                    docType = showDocWatermarkRequest.body?.docType;
                    file = showDocWatermarkRequest.body?.file;
                    filePassword = showDocWatermarkRequest.body?.filePassword;
                } else {
                    docType = showDocWatermarkRequest['body']['docType'];
                    file = showDocWatermarkRequest['body']['file'];
                    filePassword = showDocWatermarkRequest['body']['filePassword'];
                }
            }

        
            if (docType === null || docType === undefined) {
            throw new RequiredError('docType','Required parameter docType was null or undefined when calling showDocWatermark.');
            }
            if (file === null || file === undefined) {
            throw new RequiredError('file','Required parameter file was null or undefined when calling showDocWatermark.');
            }
            if (docType !== undefined) { 
                localVarFormParams.append('doc_type', docType as any);
            }
            if (filePassword !== undefined) { 
                localVarFormParams.append('file_password', filePassword as any);
            }
            if (file !== undefined) { 
                localVarFormParams.append('file', file as any);
            }
            localVarHeaderParameter['Content-Type'] = 'application/x-www-form-urlencoded';
            localVarHeaderParameter['Content-Type'] = 'multipart/form-data';
            options.data = localVarFormParams;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 支持对已嵌入文字暗水印的WORD(.docx)，PPT(.pptx)，EXCEL(.xlsx)，PDF(.pdf)类型的文档进行水印提取，用户传入待提取水印的文档地址（目前支持OBS），DSC服务以JSON的格式返回从文档里提取的出的文字暗水印内容。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDocWatermarkByAddress(showDocWatermarkByAddressRequest?: ShowDocWatermarkByAddressRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/doc-address/watermark/extract",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (showDocWatermarkByAddressRequest !== null && showDocWatermarkByAddressRequest !== undefined) {
                if (showDocWatermarkByAddressRequest instanceof ShowDocWatermarkByAddressRequest) {
                    body = showDocWatermarkByAddressRequest.body
                } else {
                    body = showDocWatermarkByAddressRequest['body'];
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
         * 对已嵌入文字暗水印的图片进行水印提取，用户以formData的格式传入待提取水印的图片，DSC服务以JSON的格式返回从图片里提取的出的文字暗水印。目前支持的图片格式为：*.jpg, *.jpeg, *.jpe, *.png, *.bmp, *.dib, *.rle, *.tiff, *.tif, *.ppm, *.webp, *.tga, *.tpic, *.gif。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showImageWatermark(showImageWatermarkRequest?: ShowImageWatermarkRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/image/watermark/extract",
                contentType: "multipart/form-data",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            const localVarFormParams = new FormData();
            let file;
            
            let markLen;
            

            if (showImageWatermarkRequest !== null && showImageWatermarkRequest !== undefined) {
                if (showImageWatermarkRequest instanceof ShowImageWatermarkRequest) {
                    file = showImageWatermarkRequest.body?.file;
                    markLen = showImageWatermarkRequest.body?.markLen;
                } else {
                    file = showImageWatermarkRequest['body']['file'];
                    markLen = showImageWatermarkRequest['body']['markLen'];
                }
            }

        
            if (file === null || file === undefined) {
            throw new RequiredError('file','Required parameter file was null or undefined when calling showImageWatermark.');
            }
            if (markLen !== undefined) { 
                localVarFormParams.append('mark_len', markLen as any);
            }
            if (file !== undefined) { 
                localVarFormParams.append('file', file as any);
            }
            localVarHeaderParameter['Content-Type'] = 'application/x-www-form-urlencoded';
            localVarHeaderParameter['Content-Type'] = 'multipart/form-data';
            options.data = localVarFormParams;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 对指定存储地址信息（目前支持华为云OBS）的已嵌入文字暗水印的图片提取文字暗水印，支持的图片格式为：*.jpg, *.jpeg, *.jpe, *.png, *.bmp, *.dib, *.rle, *.tiff, *.tif, *.ppm, *.webp, *.tga, *.tpic, *.gif。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showImageWatermarkByAddress(showImageWatermarkByAddressRequest?: ShowImageWatermarkByAddressRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/image-address/watermark/extract",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (showImageWatermarkByAddressRequest !== null && showImageWatermarkByAddressRequest !== undefined) {
                if (showImageWatermarkByAddressRequest instanceof ShowImageWatermarkByAddressRequest) {
                    body = showImageWatermarkByAddressRequest.body
                } else {
                    body = showImageWatermarkByAddressRequest['body'];
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
         * 对已嵌入图片暗水印的图片进行水印提取，用户以formData的格式传入待提取水印的图片，DSC服务以图片二进制流的格式返回从图片里提取的出的图片暗水印。目前支持的图片格式为：*.jpg, *.jpeg, *.jpe, *.png, *.bmp, *.dib, *.rle, *.tiff, *.tif, *.ppm, *.webp, *.tga, *.tpic, *.gif。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showImageWatermarkWithImage(showImageWatermarkWithImageRequest?: ShowImageWatermarkWithImageRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/image/watermark/extract-image",
                contentType: "multipart/form-data",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            const localVarFormParams = new FormData();
            let file;
            

            if (showImageWatermarkWithImageRequest !== null && showImageWatermarkWithImageRequest !== undefined) {
                if (showImageWatermarkWithImageRequest instanceof ShowImageWatermarkWithImageRequest) {
                    file = showImageWatermarkWithImageRequest.body?.file;
                } else {
                    file = showImageWatermarkWithImageRequest['body']['file'];
                }
            }

        
            if (file === null || file === undefined) {
            throw new RequiredError('file','Required parameter file was null or undefined when calling showImageWatermarkWithImage.');
            }
            if (file !== undefined) { 
                localVarFormParams.append('file', file as any);
            }
            localVarHeaderParameter['Content-Type'] = 'application/x-www-form-urlencoded';
            localVarHeaderParameter['Content-Type'] = 'multipart/form-data';
            options.data = localVarFormParams;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 对指定存储地址信息（目前支持华为云OBS）的已嵌入图片暗水印的图片提取图片暗水印，提取出的水印图片将存放在用户指定的位置（目前支持华为云OBS），支持的图片格式为：*.jpg, *.jpeg, *.jpe, *.png, *.bmp, *.dib, *.rle, *.tiff, *.tif, *.ppm, *.webp, *.tga, *.tpic, *.gif。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showImageWatermarkWithImageByAddress(showImageWatermarkWithImageByAddressRequest?: ShowImageWatermarkWithImageByAddressRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/image-address/watermark/extract-image",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (showImageWatermarkWithImageByAddressRequest !== null && showImageWatermarkWithImageByAddressRequest !== undefined) {
                if (showImageWatermarkWithImageByAddressRequest instanceof ShowImageWatermarkWithImageByAddressRequest) {
                    body = showImageWatermarkWithImageByAddressRequest.body
                } else {
                    body = showImageWatermarkWithImageByAddressRequest['body'];
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
         * 查询扫描规则列表，返回扫描规则总数和扫描规则列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showRules(showRulesRequest?: ShowRulesRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/sdg/server/scan/rules",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let offset;
            
            let limit;

            if (showRulesRequest !== null && showRulesRequest !== undefined) {
                if (showRulesRequest instanceof ShowRulesRequest) {
                    offset = showRulesRequest.offset;
                    limit = showRulesRequest.limit;
                } else {
                    offset = showRulesRequest['offset'];
                    limit = showRulesRequest['limit'];
                }
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
         * 查询指定任务扫描结果
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showScanJobResults(showScanJobResultsRequest?: ShowScanJobResultsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/sdg/scan/job/{job_id}/results",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let jobId;
            
            let offset;
            
            let limit;
            
            let type;
            
            let startTime;
            
            let endTime;

            if (showScanJobResultsRequest !== null && showScanJobResultsRequest !== undefined) {
                if (showScanJobResultsRequest instanceof ShowScanJobResultsRequest) {
                    jobId = showScanJobResultsRequest.jobId;
                    offset = showScanJobResultsRequest.offset;
                    limit = showScanJobResultsRequest.limit;
                    type = showScanJobResultsRequest.type;
                    startTime = showScanJobResultsRequest.startTime;
                    endTime = showScanJobResultsRequest.endTime;
                } else {
                    jobId = showScanJobResultsRequest['job_id'];
                    offset = showScanJobResultsRequest['offset'];
                    limit = showScanJobResultsRequest['limit'];
                    type = showScanJobResultsRequest['type'];
                    startTime = showScanJobResultsRequest['start_time'];
                    endTime = showScanJobResultsRequest['end_time'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling showScanJobResults.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询扫描任务列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showScanJobs(showScanJobsRequest?: ShowScanJobsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/sdg/scan/jobs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let offset;
            
            let limit;
            
            let content;
            
            let startTime;
            
            let endTime;

            if (showScanJobsRequest !== null && showScanJobsRequest !== undefined) {
                if (showScanJobsRequest instanceof ShowScanJobsRequest) {
                    offset = showScanJobsRequest.offset;
                    limit = showScanJobsRequest.limit;
                    content = showScanJobsRequest.content;
                    startTime = showScanJobsRequest.startTime;
                    endTime = showScanJobsRequest.endTime;
                } else {
                    offset = showScanJobsRequest['offset'];
                    limit = showScanJobsRequest['limit'];
                    content = showScanJobsRequest['content'];
                    startTime = showScanJobsRequest['start_time'];
                    endTime = showScanJobsRequest['end_time'];
                }
            }

        
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (content !== null && content !== undefined) {
                localVarQueryParameter['content'] = content;
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询资源开通信息，根据项目ID查询订单详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showSpecification() {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/period/product/specification",
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
         * 查询告警通知主题，返回默认主题、已确认主题数量及列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showTopics(showTopicsRequest?: ShowTopicsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/sdg/smn/topics",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let offset;
            
            let limit;

            if (showTopicsRequest !== null && showTopicsRequest !== undefined) {
                if (showTopicsRequest instanceof ShowTopicsRequest) {
                    offset = showTopicsRequest.offset;
                    limit = showTopicsRequest.limit;
                } else {
                    offset = showTopicsRequest['offset'];
                    limit = showTopicsRequest['limit'];
                }
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
         * 编辑数据资产名称
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateAssetName(updateAssetNameRequest?: UpdateAssetNameRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/sdg/asset/{asset_id}/name",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let assetId;

            if (updateAssetNameRequest !== null && updateAssetNameRequest !== undefined) {
                if (updateAssetNameRequest instanceof UpdateAssetNameRequest) {
                    assetId = updateAssetNameRequest.assetId;
                    body = updateAssetNameRequest.body
                } else {
                    assetId = updateAssetNameRequest['asset_id'];
                    body = updateAssetNameRequest['body'];
                }
            }

        
            if (assetId === null || assetId === undefined) {
            throw new RequiredError('assetId','Required parameter assetId was null or undefined when calling updateAssetName.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'asset_id': assetId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改告警通知的关联项目ID、通知主题、通知状态(0为关闭通知，1为开启通知)等通用配置
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateDefaultTopic(updateDefaultTopicRequest?: UpdateDefaultTopicRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/sdg/smn/topic",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (updateDefaultTopicRequest !== null && updateDefaultTopicRequest !== undefined) {
                if (updateDefaultTopicRequest instanceof UpdateDefaultTopicRequest) {
                    body = updateDefaultTopicRequest.body
                } else {
                    body = updateDefaultTopicRequest['body'];
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
         * 查询OpenApi调用记录
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showOpenApiCalledRecords(showOpenApiCalledRecordsRequest?: ShowOpenApiCalledRecordsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/openapi/called-records",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let calledUrl;
            
            let startTime;
            
            let endTime;
            
            let marker;

            if (showOpenApiCalledRecordsRequest !== null && showOpenApiCalledRecordsRequest !== undefined) {
                if (showOpenApiCalledRecordsRequest instanceof ShowOpenApiCalledRecordsRequest) {
                    limit = showOpenApiCalledRecordsRequest.limit;
                    calledUrl = showOpenApiCalledRecordsRequest.calledUrl;
                    startTime = showOpenApiCalledRecordsRequest.startTime;
                    endTime = showOpenApiCalledRecordsRequest.endTime;
                    marker = showOpenApiCalledRecordsRequest.marker;
                } else {
                    limit = showOpenApiCalledRecordsRequest['limit'];
                    calledUrl = showOpenApiCalledRecordsRequest['called_url'];
                    startTime = showOpenApiCalledRecordsRequest['start_time'];
                    endTime = showOpenApiCalledRecordsRequest['end_time'];
                    marker = showOpenApiCalledRecordsRequest['marker'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (calledUrl !== null && calledUrl !== undefined) {
                localVarQueryParameter['called_url'] = calledUrl;
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
    }
};

function newClient(client: HcClient): DscClient {
    return new DscClient(client);
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