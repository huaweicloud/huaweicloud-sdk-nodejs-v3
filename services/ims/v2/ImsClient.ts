import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { AddImageTagRequest } from './model/AddImageTagRequest';
import { AddImageTagRequestBody } from './model/AddImageTagRequestBody';
import { AddImageTagResponse } from './model/AddImageTagResponse';
import { AddOrUpdateTagsRequestBody } from './model/AddOrUpdateTagsRequestBody';
import { AdditionalProperties } from './model/AdditionalProperties';
import { BatchAddMembersRequest } from './model/BatchAddMembersRequest';
import { BatchAddMembersRequestBody } from './model/BatchAddMembersRequestBody';
import { BatchAddMembersResponse } from './model/BatchAddMembersResponse';
import { BatchAddOrDeleteTagsRequest } from './model/BatchAddOrDeleteTagsRequest';
import { BatchAddOrDeleteTagsRequestBody } from './model/BatchAddOrDeleteTagsRequestBody';
import { BatchAddOrDeleteTagsResponse } from './model/BatchAddOrDeleteTagsResponse';
import { BatchDeleteMembersRequest } from './model/BatchDeleteMembersRequest';
import { BatchDeleteMembersResponse } from './model/BatchDeleteMembersResponse';
import { BatchUpdateMembersRequest } from './model/BatchUpdateMembersRequest';
import { BatchUpdateMembersRequestBody } from './model/BatchUpdateMembersRequestBody';
import { BatchUpdateMembersResponse } from './model/BatchUpdateMembersResponse';
import { CopyImageCrossRegionRequest } from './model/CopyImageCrossRegionRequest';
import { CopyImageCrossRegionRequestBody } from './model/CopyImageCrossRegionRequestBody';
import { CopyImageCrossRegionResponse } from './model/CopyImageCrossRegionResponse';
import { CopyImageInRegionRequest } from './model/CopyImageInRegionRequest';
import { CopyImageInRegionRequestBody } from './model/CopyImageInRegionRequestBody';
import { CopyImageInRegionResponse } from './model/CopyImageInRegionResponse';
import { CreateDataImage } from './model/CreateDataImage';
import { CreateDataImageRequest } from './model/CreateDataImageRequest';
import { CreateDataImageRequestBody } from './model/CreateDataImageRequestBody';
import { CreateDataImageResponse } from './model/CreateDataImageResponse';
import { CreateImageRequest } from './model/CreateImageRequest';
import { CreateImageRequestBody } from './model/CreateImageRequestBody';
import { CreateImageResponse } from './model/CreateImageResponse';
import { CreateOrUpdateTagsRequest } from './model/CreateOrUpdateTagsRequest';
import { CreateOrUpdateTagsResponse } from './model/CreateOrUpdateTagsResponse';
import { CreateWholeImageRequest } from './model/CreateWholeImageRequest';
import { CreateWholeImageRequestBody } from './model/CreateWholeImageRequestBody';
import { CreateWholeImageResponse } from './model/CreateWholeImageResponse';
import { DeleteImageTagRequest } from './model/DeleteImageTagRequest';
import { DeleteImageTagResponse } from './model/DeleteImageTagResponse';
import { ExportImageRequest } from './model/ExportImageRequest';
import { ExportImageRequestBody } from './model/ExportImageRequestBody';
import { ExportImageResponse } from './model/ExportImageResponse';
import { GlanceAddImageMemberRequest } from './model/GlanceAddImageMemberRequest';
import { GlanceAddImageMemberRequestBody } from './model/GlanceAddImageMemberRequestBody';
import { GlanceAddImageMemberResponse } from './model/GlanceAddImageMemberResponse';
import { GlanceCreateImageMetadataRequest } from './model/GlanceCreateImageMetadataRequest';
import { GlanceCreateImageMetadataRequestBody } from './model/GlanceCreateImageMetadataRequestBody';
import { GlanceCreateImageMetadataResponse } from './model/GlanceCreateImageMetadataResponse';
import { GlanceCreateTagRequest } from './model/GlanceCreateTagRequest';
import { GlanceCreateTagResponse } from './model/GlanceCreateTagResponse';
import { GlanceDeleteImageMemberRequest } from './model/GlanceDeleteImageMemberRequest';
import { GlanceDeleteImageMemberResponse } from './model/GlanceDeleteImageMemberResponse';
import { GlanceDeleteImageRequest } from './model/GlanceDeleteImageRequest';
import { GlanceDeleteImageRequestBody } from './model/GlanceDeleteImageRequestBody';
import { GlanceDeleteImageResponse } from './model/GlanceDeleteImageResponse';
import { GlanceDeleteTagRequest } from './model/GlanceDeleteTagRequest';
import { GlanceDeleteTagResponse } from './model/GlanceDeleteTagResponse';
import { GlanceImageMembers } from './model/GlanceImageMembers';
import { GlanceListImageMemberSchemasRequest } from './model/GlanceListImageMemberSchemasRequest';
import { GlanceListImageMemberSchemasResponse } from './model/GlanceListImageMemberSchemasResponse';
import { GlanceListImageMembersRequest } from './model/GlanceListImageMembersRequest';
import { GlanceListImageMembersResponse } from './model/GlanceListImageMembersResponse';
import { GlanceListImageSchemasRequest } from './model/GlanceListImageSchemasRequest';
import { GlanceListImageSchemasResponse } from './model/GlanceListImageSchemasResponse';
import { GlanceListImagesRequest } from './model/GlanceListImagesRequest';
import { GlanceListImagesResponse } from './model/GlanceListImagesResponse';
import { GlanceShowImageMemberRequest } from './model/GlanceShowImageMemberRequest';
import { GlanceShowImageMemberResponse } from './model/GlanceShowImageMemberResponse';
import { GlanceShowImageMemberSchemasRequest } from './model/GlanceShowImageMemberSchemasRequest';
import { GlanceShowImageMemberSchemasResponse } from './model/GlanceShowImageMemberSchemasResponse';
import { GlanceShowImageRequest } from './model/GlanceShowImageRequest';
import { GlanceShowImageResponse } from './model/GlanceShowImageResponse';
import { GlanceShowImageResponseBody } from './model/GlanceShowImageResponseBody';
import { GlanceShowImageSchemasRequest } from './model/GlanceShowImageSchemasRequest';
import { GlanceShowImageSchemasResponse } from './model/GlanceShowImageSchemasResponse';
import { GlanceUpdateImageMemberRequest } from './model/GlanceUpdateImageMemberRequest';
import { GlanceUpdateImageMemberRequestBody } from './model/GlanceUpdateImageMemberRequestBody';
import { GlanceUpdateImageMemberResponse } from './model/GlanceUpdateImageMemberResponse';
import { GlanceUpdateImageRequest } from './model/GlanceUpdateImageRequest';
import { GlanceUpdateImageRequestBody } from './model/GlanceUpdateImageRequestBody';
import { GlanceUpdateImageResponse } from './model/GlanceUpdateImageResponse';
import { ImageInfo } from './model/ImageInfo';
import { ImageTag } from './model/ImageTag';
import { ImportImageQuickRequest } from './model/ImportImageQuickRequest';
import { ImportImageQuickResponse } from './model/ImportImageQuickResponse';
import { JobEntities } from './model/JobEntities';
import { Links } from './model/Links';
import { ListImageByTagsRequest } from './model/ListImageByTagsRequest';
import { ListImageByTagsRequestBody } from './model/ListImageByTagsRequestBody';
import { ListImageByTagsResponse } from './model/ListImageByTagsResponse';
import { ListImageTagsRequest } from './model/ListImageTagsRequest';
import { ListImageTagsResponse } from './model/ListImageTagsResponse';
import { ListImagesRequest } from './model/ListImagesRequest';
import { ListImagesResponse } from './model/ListImagesResponse';
import { ListImagesTagsRequest } from './model/ListImagesTagsRequest';
import { ListImagesTagsResponse } from './model/ListImagesTagsResponse';
import { ListOsVersionsRequest } from './model/ListOsVersionsRequest';
import { ListOsVersionsResponse } from './model/ListOsVersionsResponse';
import { ListOsVersionsResponseBody } from './model/ListOsVersionsResponseBody';
import { ListTagsRequest } from './model/ListTagsRequest';
import { ListTagsResponse } from './model/ListTagsResponse';
import { OsVersionInfo } from './model/OsVersionInfo';
import { QueryImageByTagsResourceDetail } from './model/QueryImageByTagsResourceDetail';
import { QuickImportImageByFileRequestBody } from './model/QuickImportImageByFileRequestBody';
import { Quota } from './model/Quota';
import { QuotaInfo } from './model/QuotaInfo';
import { RegisterImageRequest } from './model/RegisterImageRequest';
import { RegisterImageRequestBody } from './model/RegisterImageRequestBody';
import { RegisterImageResponse } from './model/RegisterImageResponse';
import { ResourceTag } from './model/ResourceTag';
import { ShowImageByTagsResource } from './model/ShowImageByTagsResource';
import { ShowImageQuotaRequest } from './model/ShowImageQuotaRequest';
import { ShowImageQuotaResponse } from './model/ShowImageQuotaResponse';
import { ShowJobRequest } from './model/ShowJobRequest';
import { ShowJobResponse } from './model/ShowJobResponse';
import { TagKeyValue } from './model/TagKeyValue';
import { Tags } from './model/Tags';
import { UpdateImageRequest } from './model/UpdateImageRequest';
import { UpdateImageRequestBody } from './model/UpdateImageRequestBody';
import { UpdateImageResponse } from './model/UpdateImageResponse';

export class ImsClient {
    public static newBuilder(): ClientBuilder<ImsClient> {
        return new ClientBuilder<ImsClient>(newClient);
    }

    private hcClient: HcClient;
    public constructor(client: HcClient) {
        this.hcClient = client;
    }

    public getPath() {
        return __dirname;
    }

    /**
     * 该接口用于为指定镜像添加或更新指定的单个标签
     * @summary 添加镜像标签
     * @param {string} imageId 镜像ID。
     * @param {AddImageTagRequestBody} bodyparam 请求参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addImageTag(addImageTagRequest?: AddImageTagRequest): Promise<void> {
        const options = ParamCreater().addImageTag(addImageTagRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 该接口为扩展接口，主要用于镜像共享时用户将多个镜像共享给多个用户。 该接口为异步接口，返回job_id说明任务下发成功，查询异步任务状态，如果是success说明任务执行成功，如果是failed说明任务执行失败。如何查询异步任务，请参见异步任务查询。
     * @summary 批量添加镜像成员
     * @param {BatchAddMembersRequestBody} members 镜像ID列表
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchAddMembers(batchAddMembersRequest?: BatchAddMembersRequest): Promise<BatchAddMembersResponse> {
        const options = ParamCreater().batchAddMembers(batchAddMembersRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 该接口用于为指定镜像批量添加/更新、删除标签。
     * @summary 批量添加删除镜像标签
     * @param {string} imageId 镜像ID。
     * @param {BatchAddOrDeleteTagsRequestBody} bodyparam 请求参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchAddOrDeleteTags(batchAddOrDeleteTagsRequest?: BatchAddOrDeleteTagsRequest): Promise<void> {
        const options = ParamCreater().batchAddOrDeleteTags(batchAddOrDeleteTagsRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 该接口为扩展接口，主要用于取消镜像共享。 该接口为异步接口，返回job_id说明任务下发成功，查询异步任务状态，如果是success说明任务执行成功，如果是failed说明任务执行失败。如何查询异步任务，请参见异步任务查询。
     * @summary 批量删除镜像成员
     * @param {BatchAddMembersRequestBody} members 请求参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeleteMembers(batchDeleteMembersRequest?: BatchDeleteMembersRequest): Promise<BatchDeleteMembersResponse> {
        const options = ParamCreater().batchDeleteMembers(batchDeleteMembersRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 该接口为扩展接口，主要用于用户接受或者拒绝多个共享镜像时批量更新镜像成员的状态。 该接口为异步接口，返回job_id说明任务下发成功，查询异步任务状态，如果是success说明任务执行成功，如果是failed说明任务执行失败。如何查询异步任务，请参见异步任务查询。
     * @summary 批量更新镜像成员状态
     * @param {BatchUpdateMembersRequestBody} members 请求参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchUpdateMembers(batchUpdateMembersRequest?: BatchUpdateMembersRequest): Promise<BatchUpdateMembersResponse> {
        const options = ParamCreater().batchUpdateMembers(batchUpdateMembersRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 该接口为扩展接口，用户在一个区域制作的私有镜像，可以通过跨Region复制镜像将镜像复制到其他区域，在其他区域发放相同类型的云服务器，帮助用户实现区域间的业务迁移。 该接口为异步接口，返回job_id说明任务下发成功，查询异步任务状态，如果是success说明任务执行成功，如果是failed说明任务执行失败。 如何查询异步任务，请参见异步任务进度查询。
     * @summary 跨Region复制镜像
     * @param {string} imageId 镜像ID
     * @param {CopyImageCrossRegionRequestBody} bodyparam 请求参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public copyImageCrossRegion(copyImageCrossRegionRequest?: CopyImageCrossRegionRequest): Promise<CopyImageCrossRegionResponse> {
        const options = ParamCreater().copyImageCrossRegion(copyImageCrossRegionRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 该接口为扩展接口，主要用于用户将一个已有镜像复制为另一个镜像。复制镜像时，可以更改镜像的加密等属性，以满足不同的场景。 该接口为异步接口，返回job_id说明任务下发成功，查询异步任务状态，如果是success说明任务执行成功，如果是failed说明任务执行失败。如何查询异步任务，请参见异步任务查询。
     * @summary Region内复制镜像
     * @param {string} imageId 镜像ID
     * @param {CopyImageInRegionRequestBody} bodyparam 请求参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public copyImageInRegion(copyImageInRegionRequest?: CopyImageInRegionRequest): Promise<CopyImageInRegionResponse> {
        const options = ParamCreater().copyImageInRegion(copyImageInRegionRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 使用上传至OBS桶中的外部数据卷镜像文件制作数据镜像。作为异步接口，调用成功，只是说明后台收到了制作请求，镜像是否制作成功需要通过异步任务查询接口查询该任务的执行状态。具体请参考异步任务查询。
     * @summary 使用外部镜像文件制作数据镜像
     * @param {CreateDataImageRequestBody} bodyparam 请求参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createDataImage(createDataImageRequest?: CreateDataImageRequest): Promise<CreateDataImageResponse> {
        const options = ParamCreater().createDataImage(createDataImageRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 本接口用于制作私有镜像，支持： - 使用云服务器制作私有镜像。 - 使用上传至OBS桶中的外部镜像文件制作私有镜像。 - 使用数据卷制作系统盘镜像。  作为异步接口，调用成功，只是说明云平台收到了制作请求，镜像是否制作成功需要通过异步任务查询接口查询该任务的执行状态，具体请参考异步任务查询。  不同场景必选参数说明：  - 使用云服务器制作镜像时的请求的必选参数：name,instance_id。 - 使用上传至OBS桶中的外部镜像文件时的请求必选参数：name,image_url,min_disk。 - 使用数据卷制作系统盘镜像时的请求必选参数：name,volume_id,os_version
     * @summary 制作镜像
     * @param {CreateImageRequestBody} eCSbodyparam 使用云服务器制作镜像时的Request Body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createImage(createImageRequest?: CreateImageRequest): Promise<CreateImageResponse> {
        const options = ParamCreater().createImage(createImageRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 该接口主要用于为某个镜像增加或修改一个自定义标签。通过自定义标签，用户可以将镜像进行分类。
     * @summary 增加或修改标签
     * @param {AddOrUpdateTagsRequestBody} bodyparam 请求参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createOrUpdateTags(createOrUpdateTagsRequest?: CreateOrUpdateTagsRequest): Promise<void> {
        const options = ParamCreater().createOrUpdateTags(createOrUpdateTagsRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 使用云服务器或者云服务器备份制作整机镜像。作为异步接口，调用成功，只是说明后台收到了制作整机镜像的请求，镜像是否制作成功需要通过异步任务查询接口查询该任务的执行状态，具体请参考异步任务查询。
     * @summary 制作整机镜像
     * @param {CreateWholeImageRequestBody} eCSmakewholeimagebody 请求参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createWholeImage(createWholeImageRequest?: CreateWholeImageRequest): Promise<CreateWholeImageResponse> {
        const options = ParamCreater().createWholeImage(createWholeImageRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 该接口用于为镜像删除指定的标签
     * @summary 删除镜像标签
     * @param {string} imageId 镜像ID。
     * @param {string} key 要删除的标签的键。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteImageTag(deleteImageTagRequest?: DeleteImageTagRequest): Promise<void> {
        const options = ParamCreater().deleteImageTag(deleteImageTagRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 该接口为扩展接口，用于用户将自己的私有镜像导出到指定的OBS桶中。
     * @summary 导出镜像
     * @param {string} imageId 镜像ID。
     * @param {ExportImageRequestBody} bodyparam 请求参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public exportImage(exportImageRequest?: ExportImageRequest): Promise<ExportImageResponse> {
        const options = ParamCreater().exportImage(exportImageRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 使用上传至OBS桶中的超大外部镜像文件制作私有镜像，目前仅支持RAW或ZVHD2格式镜像文件。且要求镜像文件大小不能超过1TB。 由于快速导入功能要求提前转换镜像文件格式为RAW或ZVHD2格式，因此镜像文件小于128GB时推荐您优先使用常规的创建私有镜像的方式。 作为异步接口，调用成功，只是说明后台收到了制作请求，镜像是否制作成功需要通过异步任务查询接口查询该任务的执行状态，具体请参考异步任务查询。
     * @summary 镜像文件快速导入
     * @param {QuickImportImageByFileRequestBody} fileCreateIms 快速通道创建镜像的Request Body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public importImageQuick(importImageQuickRequest?: ImportImageQuickRequest): Promise<ImportImageQuickResponse> {
        const options = ParamCreater().importImageQuick(importImageQuickRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 该接口用于按标签或其他条件对镜像进行过滤或者计数使用。
     * @summary 按标签查询镜像
     * @param {ListImageByTagsRequestBody} bodyparam 请求参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listImageByTags(listImageByTagsRequest?: ListImageByTagsRequest): Promise<ListImageByTagsResponse> {
        const options = ParamCreater().listImageByTags(listImageByTagsRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 该接口用于为查询指定镜像上的所有标签
     * @summary 查询镜像标签
     * @param {string} imageId 镜像ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listImageTags(listImageTagsRequest?: ListImageTagsRequest): Promise<ListImageTagsResponse> {
        const options = ParamCreater().listImageTags(listImageTagsRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 根据不同条件查询镜像列表信息。 可以在URI后面用‘?’和‘&’添加不同的查询条件组合，请参考请求样例。
     * @summary 查询镜像列表
     * @param {'gold' | 'private' | 'shared'} [imagetype] 镜像类型，目前支持以下类型： 公共镜像：gold 私有镜像：private 共享镜像：shared
     * @param {'true' | 'false'} [isregistered] 镜像是否可用，取值为true，扩展接口会默认为true，普通用户只能查询取值为true的镜像。
     * @param {'32' | '64'} [osBit] 操作系统位数，一般取值为32或者64。
     * @param {'Linux' | 'Windows' | 'Other'} [osType] 镜像系统类型，取值为Linux，Windows，Other。
     * @param {'Windows' | 'Ubuntu' | 'RedHat' | 'SUSE' | 'CentOS' | 'Debian' | 'OpenSUSE' | 'Oracle Linux' | 'Fedora' | 'Other' | 'CoreOS' | 'EuleOS'} [platform] 镜像平台分类
     * @param {string} [supportDiskintensive] 表示该镜像支持密集存储。如果镜像支持密集存储性能，则值为true，否则无需增加该属性。
     * @param {string} [supportHighperformance] 表示该镜像支持高计算性能。如果镜像支持高计算性能，则值为true，否则无需增加该属性。
     * @param {string} [supportKvm] 如果镜像支持KVM，取值为true，否则无需增加该属性。
     * @param {string} [supportKvmGpuType] 表示该镜像是支持KVM虚拟化平台下的GPU类型，如果不支持KVM虚拟机下GPU类型，无需添加该属性。该属性与“__support_xen”和“__support_kvm”属性不共存。
     * @param {string} [supportKvmInfiniband] 如果镜像支持KVM虚拟化下Infiniband网卡类型，取值为true。否则，无需添加该属性。该属性与“__support_xen”属性不共存。
     * @param {string} [supportLargememory] 表示该镜像支持超大内存。如果镜像支持超大内存，取值为true，否则无需增加该属性。
     * @param {string} [supportXen] 如果镜像支持XEN，取值为true，否则无需增加该属性。
     * @param {string} [supportXenGpuType] 表示该镜像是支持XEN虚拟化平台下的GPU优化类型，如果不支持XEN虚拟化下GPU类型，无需添加该属性 。该属性与“__support_xen”和“__support_kvm”属性不共存。
     * @param {string} [supportXenHana] 如果镜像支持XEN虚拟化下HANA类型，取值为true。否则，无需添加该属性。该属性与“__support_xen”和“__support_kvm”属性不共存。
     * @param {string} [containerFormat] 容器类型
     * @param {'vhd' | 'zvhd' | 'raw' | 'qcow2' | 'zvhd2'} [diskFormat] 镜像格式，目前支持vhd，zvhd、raw，qcow2,zvhd2。默认值是vhd。
     * @param {string} [enterpriseProjectId] 表示查询某个企业项目下的镜像。 取值为0，表示查询属于default企业项目下的镜像。 取值为UUID，表示查询属于该UUID对应的企业项目下的镜像。取值为all_granted_eps，表示查询当前用户所有企业项目下的镜像。 关于企业项目ID的获取及企业项目特性的详细信息，请参考《企业管理用户指南》。
     * @param {string} [id] 镜像ID
     * @param {number} [limit] 用于分页，表示查询几条镜像记录，取值为整数，默认取值为500。
     * @param {string} [marker] 用于分页，表示从哪个镜像开始查询，取值为镜像ID。
     * @param {'accepted' | 'rejected' | 'pending'} [memberStatus] 成员状态。目前取值有accepted、rejected、pending。accepted表示已经接受共享的镜像，rejected表示已经拒绝了其他用户共享的镜像，pending表示需要确认的其他用户的共享镜像。需要在查询时设置“visibility”参数为“shared”。
     * @param {number} [minDisk] 镜像运行需要的最小磁盘，单位为GB 。取值为40～1024GB。
     * @param {number} [minRam] 镜像运行需要的最小内存，单位为MB。参数取值依据弹性云服务器的规格限制，一般设置为0。
     * @param {string} [name] 镜像名称
     * @param {string} [owner] 镜像属于哪个租户
     * @param {boolean} [_protected] 镜像是否是受保护，取值为true/false，一般查询公共镜像时候取值为true，查询私有镜像可以不指定。
     * @param {'asc' | 'desc'} [sortDir] 用于排序，表示升序还是降序，取值为asc和desc。与sort_key一起组合使用，默认为降序desc。
     * @param {'created_at' | 'name' | 'container_format' | 'disk_format' | 'status ' | 'id' | 'size'} [sortKey] 用于排序，表示按照哪个字段排序。取值为镜像属性name，container_format，disk_format，status ，id，size字段，默认为创建时间。
     * @param {'queued' | 'saving' | 'deleted' | 'killed' | 'active'} [status] 镜像状态。取值如下： queued：表示镜像元数据已经创建成功，等待上传镜像文件。 saving：表示镜像正在上传文件到后端存储。 deleted：表示镜像已经删除。 killed：表示镜像上传错误。 active：表示镜像可以正常使用。
     * @param {string} [tag] 标签，用户为镜像增加自定义标签后可以通过该参数过滤查询。
     * @param {'FusionCompute' | 'Ironic' | 'DataImage'} [virtualEnvType] 镜像使用环境类型：FusionCompute，Ironic，DataImage。如果弹性云服务器镜像，则取值为FusionCompute，如果是数据卷镜像则取值是DataImage，如果是裸金属服务器镜像，则取值是Ironic。
     * @param {'public' | 'private'} [visibility] 是否被其他租户可见，取值为public或private
     * @param {string} [xSdkDate] 请求的发生时间,格式为YYYYMMDDTHHMMSSZ。取值为当前系统的GMT时间。使用AK/SK认证时该字段必选
     * @param {string} [flavorId] 用于通过云服务器规格过滤出可用公共镜像，取值为规格ID。 当前仅支持通过单个规格进行过滤。
     * @param {string} [createdAt] 镜像创建时间。支持按照时间点过滤查询，取值格式为“操作符:UTC时间”。 其中操作符支持如下几种： gt：大于 gte：大于等于 lt：小于 lte：小于等于 eq：等于 neq：不等于 时间格式支持：yyyy-MM-ddThh:mm:ssZ或者yyyy-MM-dd hh:mm:ss 例如，查询创建时间在2018-10-28 10:00:00之前的镜像，可以通过如下条件过滤： created_at&#x3D;gt:2018-10-28T10:00:00Z
     * @param {string} [updatedAt] 镜像修改时间。支持按照时间点过滤查询，取值格式为“ 操作符:UTC时间”。 其中操作符支持如下几种： gt：大于 gte：大于等于 lt：小于 lte：小于等于 eq：等于 neq：不等于 时间格式支持：yyyy-MM-ddThh:mm:ssZ或者yyyy-MM-dd hh:mm:ss 例如，查询修改时间在2018-10-28 10:00:00之前的镜像，可以通过如下条件过滤： updated_at&#x3D;gt:2018-10-28T10:00:00Z
     * @param {'x86' | 'arm'} [architecture] 镜像架构类型。取值包括： x86 arm
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listImages(listImagesRequest?: ListImagesRequest): Promise<ListImagesResponse> {
        const options = ParamCreater().listImages(listImagesRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 该接口用于为查询租户的所有镜像上的标签。
     * @summary 查询租户所有镜像标签
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listImagesTags(): Promise<ListImagesTagsResponse> {
        const options = ParamCreater().listImagesTags();
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 查询当前区域弹性云服务器的OS兼容性列表。
     * @summary 查询镜像支持的OS列表
     * @param {string} [tag] OS的标签。 根据标签值可以过滤查询指定特性的OS信息。 取值范围： bms：表示该镜像支持BMS的os_version列表。 uefi：支持UEFI启动方式的os_version列表。 arm：显示基于arm架构的os_version列表。 x86：显示基于x86架构的os_version列表。不带tag查询条件则默认查询当前region支持的所有的OS列表。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listOsVersions(listOsVersionsRequest?: ListOsVersionsRequest): Promise<Array<ListOsVersionsResponseBody>> {
        const options = ParamCreater().listOsVersions(listOsVersionsRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 根据不同条件查询镜像标签列表信息。
     * @summary 按条件查询租户镜像标签列表
     * @param {number} [limit] 用于分页，表示查询几条记录，取值为整数，默认为所有。
     * @param {number} [page] 页码，表示需要查询第几页的数据。默认值为1。
     * @param {'gold' | 'private' | 'shared'} [imagetype] 镜像类型，目前支持以下类型：公共镜像：gold私有镜像：private共享镜像：shared
     * @param {string} [id] 镜像ID。
     * @param {'queued' | 'saving' | 'deleted' | 'killed' | 'active'} [status] 镜像状态。取值如下： queued：表示镜像元数据已经创建成功，等待上传镜像文件。 saving：表示镜像正在上传文件到后端存储。 deleted：表示镜像已经删除。 killed：表示镜像上传错误。 active：表示镜像可以正常使用。
     * @param {string} [name] 镜像名称。
     * @param {number} [minDisk] 镜像运行需要的最小磁盘，单位为GB 。
     * @param {string} [platform] 镜像平台分类。
     * @param {'Linux' | 'Windows' | 'Other'} [osType] 镜像系统类型，取值如下：Linux,Windows,Other
     * @param {'accepted' | 'rejected' | 'pending'} [memberStatus] 成员状态。目前取值有accepted、rejected、pending。
     * @param {'FusionCompute' | 'Ironic' | 'DataImage'} [virtualEnvType] 镜像使用环境类型：FusionCompute、Ironic、DataImage。
     * @param {string} [enterpriseProjectId] 表示查询某个企业项目下的镜像。
     * @param {'x86' | 'arm'} [architecture] 镜像架构类型。取值包括：x86，arm
     * @param {string} [createdAt] 镜像创建时间。支持按照时间点过滤查询，取值格式为“操作符:UTC时间”。 其中操作符支持如下几种： gt：大于 gte：大于等于 lt：小于 lte：小于等于 eq：等于 neq：不等于 时间格式支持：yyyy-MM-ddThh:mm:ssZ或者yyyy-MM-dd hh:mm:ss 例如，查询创建时间在2018-10-28 10:00:00之前的镜像，可以通过如下条件过滤： created_at&#x3D;gt:2018-10-28T10:00:00Z
     * @param {string} [updatedAt] 镜像修改时间。支持按照时间点过滤查询，取值格式为“ 操作符:UTC时间”。 其中操作符支持如下几种： gt：大于 gte：大于等于 lt：小于 lte：小于等于 eq：等于 neq：不等于 时间格式支持：yyyy-MM-ddThh:mm:ssZ或者yyyy-MM-dd hh:mm:ss 例如，查询修改时间在2018-10-28 10:00:00之前的镜像，可以通过如下条件过滤： updated_at&#x3D;gt:2018-10-28T10:00:00Z
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTags(listTagsRequest?: ListTagsRequest): Promise<ListTagsResponse> {
        const options = ParamCreater().listTags(listTagsRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 该接口用于将镜像文件注册为云平台未初始化的私有镜像。 使用该接口注册镜像的具体步骤如下： 将镜像文件上传到OBS个人桶中。具体操作请参见《对象存储服务客户端指南（OBS Browser）》或《对象存储服务API参考》。 使用创建镜像元数据接口创建镜像元数据。调用成功后，保存该镜像的ID。创建镜像元数据请参考创建镜像元数据（OpenStack原生）。 根据2得到的镜像ID，使用注册镜像接口注册OBS桶中的镜像文件。 注册镜像接口作为异步接口，调用成功后，说明后台收到了注册请求。需要根据镜像ID查询该镜像状态验证镜像注册是否成功。当镜像状态变为“active”时，表示镜像注册成功。 如何查询异步任务，请参见异步任务查询。
     * @summary 注册镜像
     * @param {string} imageId 镜像ID。 image_id为用户调用创建镜像元数据接口所创建出来镜像的id，使用其他方式创建的镜像id会导致注册失败。 注册接口调用成功后，请根据镜像id查询镜像的状态。镜像状态变为active表示镜像注册成功，详情请参见查询镜像详情（OpenStack原生）。
     * @param {RegisterImageRequestBody} bodyparam 请求参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public registerImage(registerImageRequest?: RegisterImageRequest): Promise<RegisterImageResponse> {
        const options = ParamCreater().registerImage(registerImageRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 该接口为扩展接口，主要用于查询租户在当前Region的私有镜像的配额数量。
     * @summary 查询镜像配额
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showImageQuota(): Promise<ShowImageQuotaResponse> {
        const options = ParamCreater().showImageQuota();
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 更新镜像信息接口，主要用于镜像属性的修改。当前仅支持可用（active）状态的镜像更新相关信息。
     * @summary 更新镜像信息
     * @param {string} imageId 镜像ID
     * @param {Array<UpdateImageRequestBody>} bodyparam 请求参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateImage(updateImageRequest?: UpdateImageRequest): Promise<UpdateImageResponse> {
        const options = ParamCreater().updateImage(updateImageRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 该接口为扩展接口，主要用于查询异步接口执行情况，比如查询导出镜像任务的执行状态。
     * @summary 查询job状态
     * @param {string} jobId 异步任务ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showJob(showJobRequest?: ShowJobRequest): Promise<ShowJobResponse> {
        const options = ParamCreater().showJob(showJobRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 用户共享镜像给其他用户时，使用该接口向该镜像成员中添加接受镜像用户的项目ID。
     * @summary 添加镜像成员（OpenStack原生）
     * @param {string} imageId 镜像id
     * @param {GlanceAddImageMemberRequestBody} addMemberBody 添加镜像成员请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public glanceAddImageMember(glanceAddImageMemberRequest?: GlanceAddImageMemberRequest): Promise<GlanceAddImageMemberResponse> {
        const options = ParamCreater().glanceAddImageMember(glanceAddImageMemberRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 创建镜像元数据。调用创建镜像元数据接口成功后，只是创建了镜像的元数据，镜像对应的实际镜像文件并不存在
     * @summary 创建镜像元数据（OpenStack原生）
     * @param {GlanceCreateImageMetadataRequestBody} bodyparam 创建镜像元数据body体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public glanceCreateImageMetadata(glanceCreateImageMetadataRequest?: GlanceCreateImageMetadataRequest): Promise<GlanceCreateImageMetadataResponse> {
        const options = ParamCreater().glanceCreateImageMetadata(glanceCreateImageMetadataRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 该接口主要用于为某个镜像添加一个自定义标签。通过自定义标签，用户可以将镜像进行分类。
     * @summary 增加标签（OpenStack原生）
     * @param {string} imageId 镜像id
     * @param {string} tag 新增的tag。字符串中不能包含“&#x3D;”和“.”。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public glanceCreateTag(glanceCreateTagRequest?: GlanceCreateTagRequest): Promise<void> {
        const options = ParamCreater().glanceCreateTag(glanceCreateTagRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 该接口主要用于删除镜像，用户可以通过该接口将自己的私有镜像删除。
     * @summary 删除镜像（OpenStack原生）
     * @param {string} imageId 镜像ID
     * @param {GlanceDeleteImageRequestBody} [deleteImageBody] 请求参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public glanceDeleteImage(glanceDeleteImageRequest?: GlanceDeleteImageRequest): Promise<void> {
        const options = ParamCreater().glanceDeleteImage(glanceDeleteImageRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 该接口用于取消对某个用户的镜像共享。
     * @summary 删除指定的镜像成员（OpenStack原生）
     * @param {string} imageId 镜像id
     * @param {string} memberId 成员id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public glanceDeleteImageMember(glanceDeleteImageMemberRequest?: GlanceDeleteImageMemberRequest): Promise<void> {
        const options = ParamCreater().glanceDeleteImageMember(glanceDeleteImageMemberRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 该接口主要用于删除某个镜像的自定义标签，通过该接口，用户可以将私有镜像中一些不用的标签删除。
     * @summary 删除标签（OpenStack原生）
     * @param {string} imageId 镜像id
     * @param {string} tag 新增的tag。字符串中不能包含“&#x3D;”和“.”。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public glanceDeleteTag(glanceDeleteTagRequest?: GlanceDeleteTagRequest): Promise<void> {
        const options = ParamCreater().glanceDeleteTag(glanceDeleteTagRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 该接口主要用于查询镜像成员列表视图，通过视图，用户可以了解到镜像成员包含哪些属性，同时也可以了解每个属性的数据类型。
     * @summary 查询镜像成员列表视图（OpenStack原生）
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public glanceListImageMemberSchemas(): Promise<GlanceListImageMemberSchemasResponse> {
        const options = ParamCreater().glanceListImageMemberSchemas();
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 该接口用于共享镜像过程中，获取接受该镜像的成员列表。
     * @summary 获取镜像成员列表（OpenStack原生）
     * @param {string} imageId 镜像id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public glanceListImageMembers(glanceListImageMembersRequest?: GlanceListImageMembersRequest): Promise<GlanceListImageMembersResponse> {
        const options = ParamCreater().glanceListImageMembers(glanceListImageMembersRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 该接口主要用于查询镜像列表视图，通过该接口用户可以了解到镜像列表的详细情况和数据结构。
     * @summary 查询镜像列表视图（OpenStack原生）
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public glanceListImageSchemas(): Promise<GlanceListImageSchemasResponse> {
        const options = ParamCreater().glanceListImageSchemas();
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 获取镜像列表。 使用本接口查询镜像列表时，需要使用分页查询才能返回全部的镜像列表。 分页说明 分页是指返回一组镜像的一个子集，在返回的时候会存在下个子集的链接和首个子集的链接，默认返回的子集中数量为25，用户也可以通过使用limit和marker两个参数自己分页，指定返回子集中需要返回的数量。 响应中的参数first是查询首页的URL。next是查询下一页的URL。当查询镜像列表最后一页时，不存在next。
     * @summary 查询镜像列表（OpenStack原生）
     * @param {'gold' | 'private' | 'shared'} [imagetype] 镜像类型，目前支持以下类型：公共镜像：gold私有镜像：private共享镜像：shared
     * @param {boolean} [isregistered] 镜像是否是受保护，取值为true/false。一般查询公共镜像时候取值为true，查询私有镜像可以不指定。
     * @param {'32' | '64'} [osBit] 操作系统位数，一般取值为32或者64
     * @param {'Linux' | 'Windows' | 'Other'} [osType] 镜像系统类型，取值为Linux，Windows，Other
     * @param {'Windows' | 'Ubuntu' | 'RedHat' | 'SUSE' | 'CentOS' | 'Debian' | 'OpenSUSE' | 'Oracle Linux' | 'Fedora' | 'Other' | 'CoreOS' | 'EuleOS'} [platform] 镜像平台分类，取值为Windows，Ubuntu，RedHat，SUSE，CentOS，Debian，OpenSUSE, Oracle Linux，Fedora，Other，CoreOS和EuleOS
     * @param {string} [supportDiskintensive] 表示该镜像支持密集存储。如果镜像支持密集存储性能，则值为true，否则无需增加该属性
     * @param {string} [supportHighperformance] 表示该镜像支持高计算性能。如果镜像支持高计算性能，则值为true，否则无需增加该属性
     * @param {string} [supportKvm] 如果镜像支持KVM，取值为true，否则无需增加该属性
     * @param {string} [supportKvmGpuType] 表示该镜像是支持KVM虚拟化平台下的GPU类型,如果不支持KVM虚拟机下GPU类型，无需添加该属性。该属性与“__support_xen”和“__support_kvm”属性不共存
     * @param {string} [supportKvmInfiniband] 如果镜像支持KVM虚拟化下Infiniband网卡类型，取值为true。否则，无需添加该属性。该属性与“__support_xen”属性不共存。
     * @param {string} [supportLargememory] 表示该镜像支持超大内存。如果镜像支持超大内存，取值为true，否则无需增加该属性
     * @param {string} [supportXen] 如果镜像支持XEN，取值为true，否则无需增加该属性
     * @param {string} [supportXenGpuType] 表示该镜像是支持XEN虚拟化平台下的GPU优化类型,如果不支持XEN虚拟化下GPU类型，无需添加该属性。该属性与“__support_xen”和“__support_kvm”属性不共存
     * @param {string} [supportXenHana] 如果镜像支持XEN虚拟化下HANA类型，取值为true。否则，无需添加该属性。该属性与“__support_xen”和“__support_kvm”属性不共存
     * @param {string} [containerFormat] 容器类型
     * @param {'vhd' | 'zvhd' | 'raw' | 'qcow2'} [diskFormat] 镜像格式，目前支持vhd，zvhd、raw，qcow2。默认值是vhd
     * @param {string} [id] 镜像ID
     * @param {number} [limit] 用于分页，表示查询几条镜像记录，取值为整数，默认返回25条镜像记录
     * @param {string} [marker] 用于分页，表示从哪个镜像开始查询，取值为镜像ID。
     * @param {string} [memberStatus] 成员状态。目前取值有accepted、rejected、pending。accepted表示已经接受共享的镜像，rejected表示已经拒绝了其他用户共享的镜像，pending表示需要确认的其他用户的共享镜像。需要在查询时，设置“visibility”参数为“shared”
     * @param {number} [minDisk] 镜像运行需要的最小磁盘，单位为GB 。取值为40～1024GB。取值为1～1024GB。取值为40～255GB
     * @param {number} [minRam] 镜像运行需要的最小内存，单位为MB。参数取值依据弹性云服务器的规格限制，一般设置为0。
     * @param {string} [name] 镜像名称
     * @param {string} [owner] 镜像属于哪个租户
     * @param {boolean} [_protected] 镜像是否是受保护，查询公共镜像时候取值为True，查询私有镜像可以不指定。
     * @param {string} [sortDir] 用于排序，表示升序还是降序，取值为asc和desc。与sort_key一起组合使用，默认为降序desc
     * @param {string} [sortKey] 用于排序，表示按照哪个字段排序。取值为镜像属性name，container_format，disk_format，status，id，size字段，默认为创建时间。
     * @param {'queued' | 'saving' | 'deleted' | 'killed' | 'active'} [status] 镜像状态。取值如下：queued：表示镜像元数据已经创建成功，等待上传镜像文件。saving：表示镜像正在上传文件到后端存储。deleted：表示镜像已经删除。killed：表示镜像上传错误。active：表示镜像可以正常使用
     * @param {string} [tag] 标签，用户为镜像增加自定义标签后可以通过该参数过滤查询
     * @param {'public' | 'private' | 'shared'} [visibility] 是否被其他租户可见，取值如下： public：公共镜像 private：私有镜像 shared：共享镜像
     * @param {string} [createdAt] 镜像创建时间。支持按照时间点过滤查询，取值格式为“ 操作符:UTC时间”。 其中操作符支持如下几种： gt：大于 gte：大于等于 lt：小于 lte：小于等于 eq：等于 neq：不等于 时间格式支持：yyyy-MM-ddThh:mm:ssZ或者yyyy-MM-dd hh:mm:ss 例如，查询创建时间在2018-10-28 10:00:00之前的镜像，可以通过如下条件过滤： created_at&#x3D;gt:2018-10-28T10:00:00Z
     * @param {string} [updatedAt] 镜像修改时间。支持按照时间点过滤查询，取值格式为 “ 操作符:UTC时间”。 其中操作符支持如下几种： gt：大于 gte：大于等于 lt：小于 lte：小于等于 eq：等于 neq：不等于 时间格式支持：yyyy-MM-ddThh:mm:ssZ或者yyyy-MM-dd hh:mm:ss 例如，查询修改时间在2018-10-28 10:00:00之前的镜像，可以通过如下条件过滤： updated_at&#x3D;gt:2018-10-28T10:00:00Z
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public glanceListImages(glanceListImagesRequest?: GlanceListImagesRequest): Promise<GlanceListImagesResponse> {
        const options = ParamCreater().glanceListImages(glanceListImagesRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 查询单个镜像详情，用户可以通过该接口查询单个私有或者公共镜像的详情
     * @summary 查询镜像详情（OpenStack原生）
     * @param {string} imageId 镜像ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public glanceShowImage(glanceShowImageRequest?: GlanceShowImageRequest): Promise<GlanceShowImageResponse> {
        const options = ParamCreater().glanceShowImage(glanceShowImageRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 该接口主要用于镜像共享中查询某个镜像成员的详情。
     * @summary 获取镜像成员详情（OpenStack原生）
     * @param {string} imageId 镜像id
     * @param {string} memberId 成员id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public glanceShowImageMember(glanceShowImageMemberRequest?: GlanceShowImageMemberRequest): Promise<GlanceShowImageMemberResponse> {
        const options = ParamCreater().glanceShowImageMember(glanceShowImageMemberRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 该接口主要用于查询镜像成员视图，通过视图，用户可以了解到镜像成员包含哪些属性，同时也可以了解每个属性的数据类型。
     * @summary 查询镜像成员视图（OpenStack原生）
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public glanceShowImageMemberSchemas(): Promise<GlanceShowImageMemberSchemasResponse> {
        const options = ParamCreater().glanceShowImageMemberSchemas();
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 该接口主要用于查询镜像视图，通过视图，用户可以了解到镜像包含哪些属性，同时也可以了解每个属性的数据类型等。
     * @summary 查询镜像视图（OpenStack原生）
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public glanceShowImageSchemas(): Promise<GlanceShowImageSchemasResponse> {
        const options = ParamCreater().glanceShowImageSchemas();
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 修改镜像信息
     * @summary 更新镜像信息（OpenStack原生）
     * @param {string} imageId 镜像ID
     * @param {Array<GlanceUpdateImageRequestBody>} bodyparam 更新镜像请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public glanceUpdateImage(glanceUpdateImageRequest?: GlanceUpdateImageRequest): Promise<GlanceUpdateImageResponse> {
        const options = ParamCreater().glanceUpdateImage(glanceUpdateImageRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 用户接受或者拒绝共享镜像时，使用该接口更新镜像成员的状态。
     * @summary 更新镜像成员状态（OpenStack原生）
     * @param {string} imageId 镜像id
     * @param {string} memberId 成员id
     * @param {GlanceUpdateImageMemberRequestBody} memberStatus 请求参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public glanceUpdateImageMember(glanceUpdateImageMemberRequest?: GlanceUpdateImageMemberRequest): Promise<GlanceUpdateImageMemberResponse> {
        const options = ParamCreater().glanceUpdateImageMember(glanceUpdateImageMemberRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 该接口用于为指定镜像添加或更新指定的单个标签
         */
        addImageTag(addImageTagRequest?: AddImageTagRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/images/{image_id}/tags",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            let imageId;

            if (addImageTagRequest !== null && addImageTagRequest !== undefined) {
                if (addImageTagRequest instanceof AddImageTagRequest) {
                    imageId = addImageTagRequest.imageId;
                    body = addImageTagRequest.body
                } else {
                    imageId = addImageTagRequest['image_id'];
                    body = addImageTagRequest['body'];
                }
            }
        
            if (imageId === null || imageId === undefined) {
                throw new RequiredError('imageId','Required parameter imageId was null or undefined when calling addImageTag.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'image_id': imageId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口为扩展接口，主要用于镜像共享时用户将多个镜像共享给多个用户。 该接口为异步接口，返回job_id说明任务下发成功，查询异步任务状态，如果是success说明任务执行成功，如果是failed说明任务执行失败。如何查询异步任务，请参见异步任务查询。
         */
        batchAddMembers(batchAddMembersRequest?: BatchAddMembersRequest) {
            const options = {
                method: "POST",
                url: "/v1/cloudimages/members",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (batchAddMembersRequest !== null && batchAddMembersRequest !== undefined) {
                if (batchAddMembersRequest instanceof BatchAddMembersRequest) {
                    body = batchAddMembersRequest.body
                } else {
                    body = batchAddMembersRequest['body'];
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
         * 该接口用于为指定镜像批量添加/更新、删除标签。
         */
        batchAddOrDeleteTags(batchAddOrDeleteTagsRequest?: BatchAddOrDeleteTagsRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/images/{image_id}/tags/action",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            let imageId;

            if (batchAddOrDeleteTagsRequest !== null && batchAddOrDeleteTagsRequest !== undefined) {
                if (batchAddOrDeleteTagsRequest instanceof BatchAddOrDeleteTagsRequest) {
                    imageId = batchAddOrDeleteTagsRequest.imageId;
                    body = batchAddOrDeleteTagsRequest.body
                } else {
                    imageId = batchAddOrDeleteTagsRequest['image_id'];
                    body = batchAddOrDeleteTagsRequest['body'];
                }
            }
        
            if (imageId === null || imageId === undefined) {
                throw new RequiredError('imageId','Required parameter imageId was null or undefined when calling batchAddOrDeleteTags.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'image_id': imageId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口为扩展接口，主要用于取消镜像共享。 该接口为异步接口，返回job_id说明任务下发成功，查询异步任务状态，如果是success说明任务执行成功，如果是failed说明任务执行失败。如何查询异步任务，请参见异步任务查询。
         */
        batchDeleteMembers(batchDeleteMembersRequest?: BatchDeleteMembersRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/cloudimages/members",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (batchDeleteMembersRequest !== null && batchDeleteMembersRequest !== undefined) {
                if (batchDeleteMembersRequest instanceof BatchDeleteMembersRequest) {
                    body = batchDeleteMembersRequest.body
                } else {
                    body = batchDeleteMembersRequest['body'];
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
         * 该接口为扩展接口，主要用于用户接受或者拒绝多个共享镜像时批量更新镜像成员的状态。 该接口为异步接口，返回job_id说明任务下发成功，查询异步任务状态，如果是success说明任务执行成功，如果是failed说明任务执行失败。如何查询异步任务，请参见异步任务查询。
         */
        batchUpdateMembers(batchUpdateMembersRequest?: BatchUpdateMembersRequest) {
            const options = {
                method: "PUT",
                url: "/v1/cloudimages/members",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (batchUpdateMembersRequest !== null && batchUpdateMembersRequest !== undefined) {
                if (batchUpdateMembersRequest instanceof BatchUpdateMembersRequest) {
                    body = batchUpdateMembersRequest.body
                } else {
                    body = batchUpdateMembersRequest['body'];
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
         * 该接口为扩展接口，用户在一个区域制作的私有镜像，可以通过跨Region复制镜像将镜像复制到其他区域，在其他区域发放相同类型的云服务器，帮助用户实现区域间的业务迁移。 该接口为异步接口，返回job_id说明任务下发成功，查询异步任务状态，如果是success说明任务执行成功，如果是failed说明任务执行失败。 如何查询异步任务，请参见异步任务进度查询。
         */
        copyImageCrossRegion(copyImageCrossRegionRequest?: CopyImageCrossRegionRequest) {
            const options = {
                method: "POST",
                url: "/v1/cloudimages/{image_id}/cross_region_copy",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            let imageId;

            if (copyImageCrossRegionRequest !== null && copyImageCrossRegionRequest !== undefined) {
                if (copyImageCrossRegionRequest instanceof CopyImageCrossRegionRequest) {
                    imageId = copyImageCrossRegionRequest.imageId;
                    body = copyImageCrossRegionRequest.body
                } else {
                    imageId = copyImageCrossRegionRequest['image_id'];
                    body = copyImageCrossRegionRequest['body'];
                }
            }
        
            if (imageId === null || imageId === undefined) {
                throw new RequiredError('imageId','Required parameter imageId was null or undefined when calling copyImageCrossRegion.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'image_id': imageId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口为扩展接口，主要用于用户将一个已有镜像复制为另一个镜像。复制镜像时，可以更改镜像的加密等属性，以满足不同的场景。 该接口为异步接口，返回job_id说明任务下发成功，查询异步任务状态，如果是success说明任务执行成功，如果是failed说明任务执行失败。如何查询异步任务，请参见异步任务查询。
         */
        copyImageInRegion(copyImageInRegionRequest?: CopyImageInRegionRequest) {
            const options = {
                method: "POST",
                url: "/v1/cloudimages/{image_id}/copy",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            let imageId;

            if (copyImageInRegionRequest !== null && copyImageInRegionRequest !== undefined) {
                if (copyImageInRegionRequest instanceof CopyImageInRegionRequest) {
                    imageId = copyImageInRegionRequest.imageId;
                    body = copyImageInRegionRequest.body
                } else {
                    imageId = copyImageInRegionRequest['image_id'];
                    body = copyImageInRegionRequest['body'];
                }
            }
        
            if (imageId === null || imageId === undefined) {
                throw new RequiredError('imageId','Required parameter imageId was null or undefined when calling copyImageInRegion.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'image_id': imageId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 使用上传至OBS桶中的外部数据卷镜像文件制作数据镜像。作为异步接口，调用成功，只是说明后台收到了制作请求，镜像是否制作成功需要通过异步任务查询接口查询该任务的执行状态。具体请参考异步任务查询。
         */
        createDataImage(createDataImageRequest?: CreateDataImageRequest) {
            const options = {
                method: "POST",
                url: "/v1/cloudimages/dataimages/action",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (createDataImageRequest !== null && createDataImageRequest !== undefined) {
                if (createDataImageRequest instanceof CreateDataImageRequest) {
                    body = createDataImageRequest.body
                } else {
                    body = createDataImageRequest['body'];
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
         * 本接口用于制作私有镜像，支持： - 使用云服务器制作私有镜像。 - 使用上传至OBS桶中的外部镜像文件制作私有镜像。 - 使用数据卷制作系统盘镜像。  作为异步接口，调用成功，只是说明云平台收到了制作请求，镜像是否制作成功需要通过异步任务查询接口查询该任务的执行状态，具体请参考异步任务查询。  不同场景必选参数说明：  - 使用云服务器制作镜像时的请求的必选参数：name,instance_id。 - 使用上传至OBS桶中的外部镜像文件时的请求必选参数：name,image_url,min_disk。 - 使用数据卷制作系统盘镜像时的请求必选参数：name,volume_id,os_version
         */
        createImage(createImageRequest?: CreateImageRequest) {
            const options = {
                method: "POST",
                url: "/v2/cloudimages/action",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (createImageRequest !== null && createImageRequest !== undefined) {
                if (createImageRequest instanceof CreateImageRequest) {
                    body = createImageRequest.body
                } else {
                    body = createImageRequest['body'];
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
         * 该接口主要用于为某个镜像增加或修改一个自定义标签。通过自定义标签，用户可以将镜像进行分类。
         */
        createOrUpdateTags(createOrUpdateTagsRequest?: CreateOrUpdateTagsRequest) {
            const options = {
                method: "PUT",
                url: "/v1/cloudimages/tags",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (createOrUpdateTagsRequest !== null && createOrUpdateTagsRequest !== undefined) {
                if (createOrUpdateTagsRequest instanceof CreateOrUpdateTagsRequest) {
                    body = createOrUpdateTagsRequest.body
                } else {
                    body = createOrUpdateTagsRequest['body'];
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
         * 使用云服务器或者云服务器备份制作整机镜像。作为异步接口，调用成功，只是说明后台收到了制作整机镜像的请求，镜像是否制作成功需要通过异步任务查询接口查询该任务的执行状态，具体请参考异步任务查询。
         */
        createWholeImage(createWholeImageRequest?: CreateWholeImageRequest) {
            const options = {
                method: "POST",
                url: "/v1/cloudimages/wholeimages/action",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (createWholeImageRequest !== null && createWholeImageRequest !== undefined) {
                if (createWholeImageRequest instanceof CreateWholeImageRequest) {
                    body = createWholeImageRequest.body
                } else {
                    body = createWholeImageRequest['body'];
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
         * 该接口用于为镜像删除指定的标签
         */
        deleteImageTag(deleteImageTagRequest?: DeleteImageTagRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/images/{image_id}/tags/{key}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let imageId;
            let key;

            if (deleteImageTagRequest !== null && deleteImageTagRequest !== undefined) {
                if (deleteImageTagRequest instanceof DeleteImageTagRequest) {
                    imageId = deleteImageTagRequest.imageId;
                    key = deleteImageTagRequest.key;
                } else {
                    imageId = deleteImageTagRequest['image_id'];
                    key = deleteImageTagRequest['key'];
                }
            }
        
            if (imageId === null || imageId === undefined) {
                throw new RequiredError('imageId','Required parameter imageId was null or undefined when calling deleteImageTag.');
            }
            if (key === null || key === undefined) {
                throw new RequiredError('key','Required parameter key was null or undefined when calling deleteImageTag.');
            }

            options.pathParams = { 'image_id': imageId,'key': key, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口为扩展接口，用于用户将自己的私有镜像导出到指定的OBS桶中。
         */
        exportImage(exportImageRequest?: ExportImageRequest) {
            const options = {
                method: "POST",
                url: "/v1/cloudimages/{image_id}/file",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            let imageId;

            if (exportImageRequest !== null && exportImageRequest !== undefined) {
                if (exportImageRequest instanceof ExportImageRequest) {
                    imageId = exportImageRequest.imageId;
                    body = exportImageRequest.body
                } else {
                    imageId = exportImageRequest['image_id'];
                    body = exportImageRequest['body'];
                }
            }
        
            if (imageId === null || imageId === undefined) {
                throw new RequiredError('imageId','Required parameter imageId was null or undefined when calling exportImage.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'image_id': imageId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 使用上传至OBS桶中的超大外部镜像文件制作私有镜像，目前仅支持RAW或ZVHD2格式镜像文件。且要求镜像文件大小不能超过1TB。 由于快速导入功能要求提前转换镜像文件格式为RAW或ZVHD2格式，因此镜像文件小于128GB时推荐您优先使用常规的创建私有镜像的方式。 作为异步接口，调用成功，只是说明后台收到了制作请求，镜像是否制作成功需要通过异步任务查询接口查询该任务的执行状态，具体请参考异步任务查询。
         */
        importImageQuick(importImageQuickRequest?: ImportImageQuickRequest) {
            const options = {
                method: "POST",
                url: "/v2/cloudimages/quickimport/action",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (importImageQuickRequest !== null && importImageQuickRequest !== undefined) {
                if (importImageQuickRequest instanceof ImportImageQuickRequest) {
                    body = importImageQuickRequest.body
                } else {
                    body = importImageQuickRequest['body'];
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
         * 该接口用于按标签或其他条件对镜像进行过滤或者计数使用。
         */
        listImageByTags(listImageByTagsRequest?: ListImageByTagsRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/images/resource_instances/action",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (listImageByTagsRequest !== null && listImageByTagsRequest !== undefined) {
                if (listImageByTagsRequest instanceof ListImageByTagsRequest) {
                    body = listImageByTagsRequest.body
                } else {
                    body = listImageByTagsRequest['body'];
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
         * 该接口用于为查询指定镜像上的所有标签
         */
        listImageTags(listImageTagsRequest?: ListImageTagsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/images/{image_id}/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let imageId;

            if (listImageTagsRequest !== null && listImageTagsRequest !== undefined) {
                if (listImageTagsRequest instanceof ListImageTagsRequest) {
                    imageId = listImageTagsRequest.imageId;
                } else {
                    imageId = listImageTagsRequest['image_id'];
                }
            }
        
            if (imageId === null || imageId === undefined) {
                throw new RequiredError('imageId','Required parameter imageId was null or undefined when calling listImageTags.');
            }

            options.pathParams = { 'image_id': imageId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据不同条件查询镜像列表信息。 可以在URI后面用‘?’和‘&amp;’添加不同的查询条件组合，请参考请求样例。
         */
        listImages(listImagesRequest?: ListImagesRequest) {
            const options = {
                method: "GET",
                url: "/v2/cloudimages",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let imagetype;
            let isregistered;
            let osBit;
            let osType;
            let platform;
            let supportDiskintensive;
            let supportHighperformance;
            let supportKvm;
            let supportKvmGpuType;
            let supportKvmInfiniband;
            let supportLargememory;
            let supportXen;
            let supportXenGpuType;
            let supportXenHana;
            let containerFormat;
            let diskFormat;
            let enterpriseProjectId;
            let id;
            let limit;
            let marker;
            let memberStatus;
            let minDisk;
            let minRam;
            let name;
            let owner;
            let _protected;
            let sortDir;
            let sortKey;
            let status;
            let tag;
            let virtualEnvType;
            let visibility;
            let xSdkDate;
            let flavorId;
            let createdAt;
            let updatedAt;
            let architecture;

            if (listImagesRequest !== null && listImagesRequest !== undefined) {
                if (listImagesRequest instanceof ListImagesRequest) {
                    imagetype = listImagesRequest.imagetype;
                    isregistered = listImagesRequest.isregistered;
                    osBit = listImagesRequest.osBit;
                    osType = listImagesRequest.osType;
                    platform = listImagesRequest.platform;
                    supportDiskintensive = listImagesRequest.supportDiskintensive;
                    supportHighperformance = listImagesRequest.supportHighperformance;
                    supportKvm = listImagesRequest.supportKvm;
                    supportKvmGpuType = listImagesRequest.supportKvmGpuType;
                    supportKvmInfiniband = listImagesRequest.supportKvmInfiniband;
                    supportLargememory = listImagesRequest.supportLargememory;
                    supportXen = listImagesRequest.supportXen;
                    supportXenGpuType = listImagesRequest.supportXenGpuType;
                    supportXenHana = listImagesRequest.supportXenHana;
                    containerFormat = listImagesRequest.containerFormat;
                    diskFormat = listImagesRequest.diskFormat;
                    enterpriseProjectId = listImagesRequest.enterpriseProjectId;
                    id = listImagesRequest.id;
                    limit = listImagesRequest.limit;
                    marker = listImagesRequest.marker;
                    memberStatus = listImagesRequest.memberStatus;
                    minDisk = listImagesRequest.minDisk;
                    minRam = listImagesRequest.minRam;
                    name = listImagesRequest.name;
                    owner = listImagesRequest.owner;
                    _protected = listImagesRequest._protected;
                    sortDir = listImagesRequest.sortDir;
                    sortKey = listImagesRequest.sortKey;
                    status = listImagesRequest.status;
                    tag = listImagesRequest.tag;
                    virtualEnvType = listImagesRequest.virtualEnvType;
                    visibility = listImagesRequest.visibility;
                    xSdkDate = listImagesRequest.xSdkDate;
                    flavorId = listImagesRequest.flavorId;
                    createdAt = listImagesRequest.createdAt;
                    updatedAt = listImagesRequest.updatedAt;
                    architecture = listImagesRequest.architecture;
                } else {
                    imagetype = listImagesRequest['__imagetype'];
                    isregistered = listImagesRequest['__isregistered'];
                    osBit = listImagesRequest['__os_bit'];
                    osType = listImagesRequest['__os_type'];
                    platform = listImagesRequest['__platform'];
                    supportDiskintensive = listImagesRequest['__support_diskintensive'];
                    supportHighperformance = listImagesRequest['__support_highperformance'];
                    supportKvm = listImagesRequest['__support_kvm'];
                    supportKvmGpuType = listImagesRequest['__support_kvm_gpu_type'];
                    supportKvmInfiniband = listImagesRequest['__support_kvm_infiniband'];
                    supportLargememory = listImagesRequest['__support_largememory'];
                    supportXen = listImagesRequest['__support_xen'];
                    supportXenGpuType = listImagesRequest['__support_xen_gpu_type'];
                    supportXenHana = listImagesRequest['__support_xen_hana'];
                    containerFormat = listImagesRequest['container_format'];
                    diskFormat = listImagesRequest['disk_format'];
                    enterpriseProjectId = listImagesRequest['enterprise_project_id'];
                    id = listImagesRequest['id'];
                    limit = listImagesRequest['limit'];
                    marker = listImagesRequest['marker'];
                    memberStatus = listImagesRequest['member_status'];
                    minDisk = listImagesRequest['min_disk'];
                    minRam = listImagesRequest['min_ram'];
                    name = listImagesRequest['name'];
                    owner = listImagesRequest['owner'];
                    _protected = listImagesRequest['protected'];
                    sortDir = listImagesRequest['sort_dir'];
                    sortKey = listImagesRequest['sort_key'];
                    status = listImagesRequest['status'];
                    tag = listImagesRequest['tag'];
                    virtualEnvType = listImagesRequest['virtual_env_type'];
                    visibility = listImagesRequest['visibility'];
                    xSdkDate = listImagesRequest['X-Sdk-Date'];
                    flavorId = listImagesRequest['flavor_id'];
                    createdAt = listImagesRequest['created_at'];
                    updatedAt = listImagesRequest['updated_at'];
                    architecture = listImagesRequest['architecture'];
                }
            }
        
            if (imagetype !== null && imagetype !== undefined) {
                localVarQueryParameter['__imagetype'] = imagetype;
            }
            if (isregistered !== null && isregistered !== undefined) {
                localVarQueryParameter['__isregistered'] = isregistered;
            }
            if (osBit !== null && osBit !== undefined) {
                localVarQueryParameter['__os_bit'] = osBit;
            }
            if (osType !== null && osType !== undefined) {
                localVarQueryParameter['__os_type'] = osType;
            }
            if (platform !== null && platform !== undefined) {
                localVarQueryParameter['__platform'] = platform;
            }
            if (supportDiskintensive !== null && supportDiskintensive !== undefined) {
                localVarQueryParameter['__support_diskintensive'] = supportDiskintensive;
            }
            if (supportHighperformance !== null && supportHighperformance !== undefined) {
                localVarQueryParameter['__support_highperformance'] = supportHighperformance;
            }
            if (supportKvm !== null && supportKvm !== undefined) {
                localVarQueryParameter['__support_kvm'] = supportKvm;
            }
            if (supportKvmGpuType !== null && supportKvmGpuType !== undefined) {
                localVarQueryParameter['__support_kvm_gpu_type'] = supportKvmGpuType;
            }
            if (supportKvmInfiniband !== null && supportKvmInfiniband !== undefined) {
                localVarQueryParameter['__support_kvm_infiniband'] = supportKvmInfiniband;
            }
            if (supportLargememory !== null && supportLargememory !== undefined) {
                localVarQueryParameter['__support_largememory'] = supportLargememory;
            }
            if (supportXen !== null && supportXen !== undefined) {
                localVarQueryParameter['__support_xen'] = supportXen;
            }
            if (supportXenGpuType !== null && supportXenGpuType !== undefined) {
                localVarQueryParameter['__support_xen_gpu_type'] = supportXenGpuType;
            }
            if (supportXenHana !== null && supportXenHana !== undefined) {
                localVarQueryParameter['__support_xen_hana'] = supportXenHana;
            }
            if (containerFormat !== null && containerFormat !== undefined) {
                localVarQueryParameter['container_format'] = containerFormat;
            }
            if (diskFormat !== null && diskFormat !== undefined) {
                localVarQueryParameter['disk_format'] = diskFormat;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (memberStatus !== null && memberStatus !== undefined) {
                localVarQueryParameter['member_status'] = memberStatus;
            }
            if (minDisk !== null && minDisk !== undefined) {
                localVarQueryParameter['min_disk'] = minDisk;
            }
            if (minRam !== null && minRam !== undefined) {
                localVarQueryParameter['min_ram'] = minRam;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (owner !== null && owner !== undefined) {
                localVarQueryParameter['owner'] = owner;
            }
            if (_protected !== null && _protected !== undefined) {
                localVarQueryParameter['protected'] = _protected;
            }
            if (sortDir !== null && sortDir !== undefined) {
                localVarQueryParameter['sort_dir'] = sortDir;
            }
            if (sortKey !== null && sortKey !== undefined) {
                localVarQueryParameter['sort_key'] = sortKey;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (tag !== null && tag !== undefined) {
                localVarQueryParameter['tag'] = tag;
            }
            if (virtualEnvType !== null && virtualEnvType !== undefined) {
                localVarQueryParameter['virtual_env_type'] = virtualEnvType;
            }
            if (visibility !== null && visibility !== undefined) {
                localVarQueryParameter['visibility'] = visibility;
            }
            if (flavorId !== null && flavorId !== undefined) {
                localVarQueryParameter['flavor_id'] = flavorId;
            }
            if (createdAt !== null && createdAt !== undefined) {
                localVarQueryParameter['created_at'] = createdAt;
            }
            if (updatedAt !== null && updatedAt !== undefined) {
                localVarQueryParameter['updated_at'] = updatedAt;
            }
            if (architecture !== null && architecture !== undefined) {
                localVarQueryParameter['architecture'] = architecture;
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于为查询租户的所有镜像上的标签。
         */
        listImagesTags() {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/images/tags",
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
         * 查询当前区域弹性云服务器的OS兼容性列表。
         */
        listOsVersions(listOsVersionsRequest?: ListOsVersionsRequest) {
            const options = {
                method: "GET",
                url: "/v1/cloudimages/os_version",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let tag;

            if (listOsVersionsRequest !== null && listOsVersionsRequest !== undefined) {
                if (listOsVersionsRequest instanceof ListOsVersionsRequest) {
                    tag = listOsVersionsRequest.tag;
                } else {
                    tag = listOsVersionsRequest['tag'];
                }
            }
        
            if (tag !== null && tag !== undefined) {
                localVarQueryParameter['tag'] = tag;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据不同条件查询镜像标签列表信息。
         */
        listTags(listTagsRequest?: ListTagsRequest) {
            const options = {
                method: "GET",
                url: "/v1/cloudimages/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let limit;
            let page;
            let imagetype;
            let id;
            let status;
            let name;
            let minDisk;
            let platform;
            let osType;
            let memberStatus;
            let virtualEnvType;
            let enterpriseProjectId;
            let architecture;
            let createdAt;
            let updatedAt;

            if (listTagsRequest !== null && listTagsRequest !== undefined) {
                if (listTagsRequest instanceof ListTagsRequest) {
                    limit = listTagsRequest.limit;
                    page = listTagsRequest.page;
                    imagetype = listTagsRequest.imagetype;
                    id = listTagsRequest.id;
                    status = listTagsRequest.status;
                    name = listTagsRequest.name;
                    minDisk = listTagsRequest.minDisk;
                    platform = listTagsRequest.platform;
                    osType = listTagsRequest.osType;
                    memberStatus = listTagsRequest.memberStatus;
                    virtualEnvType = listTagsRequest.virtualEnvType;
                    enterpriseProjectId = listTagsRequest.enterpriseProjectId;
                    architecture = listTagsRequest.architecture;
                    createdAt = listTagsRequest.createdAt;
                    updatedAt = listTagsRequest.updatedAt;
                } else {
                    limit = listTagsRequest['limit'];
                    page = listTagsRequest['page'];
                    imagetype = listTagsRequest['__imagetype'];
                    id = listTagsRequest['id'];
                    status = listTagsRequest['status'];
                    name = listTagsRequest['name'];
                    minDisk = listTagsRequest['min_disk'];
                    platform = listTagsRequest['__platform'];
                    osType = listTagsRequest['__os_type'];
                    memberStatus = listTagsRequest['member_status'];
                    virtualEnvType = listTagsRequest['virtual_env_type'];
                    enterpriseProjectId = listTagsRequest['enterprise_project_id'];
                    architecture = listTagsRequest['architecture'];
                    createdAt = listTagsRequest['created_at'];
                    updatedAt = listTagsRequest['updated_at'];
                }
            }
        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (page !== null && page !== undefined) {
                localVarQueryParameter['page'] = page;
            }
            if (imagetype !== null && imagetype !== undefined) {
                localVarQueryParameter['__imagetype'] = imagetype;
            }
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (minDisk !== null && minDisk !== undefined) {
                localVarQueryParameter['min_disk'] = minDisk;
            }
            if (platform !== null && platform !== undefined) {
                localVarQueryParameter['__platform'] = platform;
            }
            if (osType !== null && osType !== undefined) {
                localVarQueryParameter['__os_type'] = osType;
            }
            if (memberStatus !== null && memberStatus !== undefined) {
                localVarQueryParameter['member_status'] = memberStatus;
            }
            if (virtualEnvType !== null && virtualEnvType !== undefined) {
                localVarQueryParameter['virtual_env_type'] = virtualEnvType;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (architecture !== null && architecture !== undefined) {
                localVarQueryParameter['architecture'] = architecture;
            }
            if (createdAt !== null && createdAt !== undefined) {
                localVarQueryParameter['created_at'] = createdAt;
            }
            if (updatedAt !== null && updatedAt !== undefined) {
                localVarQueryParameter['updated_at'] = updatedAt;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于将镜像文件注册为云平台未初始化的私有镜像。 使用该接口注册镜像的具体步骤如下： 将镜像文件上传到OBS个人桶中。具体操作请参见《对象存储服务客户端指南（OBS Browser）》或《对象存储服务API参考》。 使用创建镜像元数据接口创建镜像元数据。调用成功后，保存该镜像的ID。创建镜像元数据请参考创建镜像元数据（OpenStack原生）。 根据2得到的镜像ID，使用注册镜像接口注册OBS桶中的镜像文件。 注册镜像接口作为异步接口，调用成功后，说明后台收到了注册请求。需要根据镜像ID查询该镜像状态验证镜像注册是否成功。当镜像状态变为“active”时，表示镜像注册成功。 如何查询异步任务，请参见异步任务查询。
         */
        registerImage(registerImageRequest?: RegisterImageRequest) {
            const options = {
                method: "PUT",
                url: "/v1/cloudimages/{image_id}/upload",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            let imageId;

            if (registerImageRequest !== null && registerImageRequest !== undefined) {
                if (registerImageRequest instanceof RegisterImageRequest) {
                    imageId = registerImageRequest.imageId;
                    body = registerImageRequest.body
                } else {
                    imageId = registerImageRequest['image_id'];
                    body = registerImageRequest['body'];
                }
            }
        
            if (imageId === null || imageId === undefined) {
                throw new RequiredError('imageId','Required parameter imageId was null or undefined when calling registerImage.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'image_id': imageId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口为扩展接口，主要用于查询租户在当前Region的私有镜像的配额数量。
         */
        showImageQuota() {
            const options = {
                method: "GET",
                url: "/v1/cloudimages/quota",
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
         * 更新镜像信息接口，主要用于镜像属性的修改。当前仅支持可用（active）状态的镜像更新相关信息。
         */
        updateImage(updateImageRequest?: UpdateImageRequest) {
            const options = {
                method: "PATCH",
                url: "/v2/cloudimages/{image_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            let imageId;

            if (updateImageRequest !== null && updateImageRequest !== undefined) {
                if (updateImageRequest instanceof UpdateImageRequest) {
                    imageId = updateImageRequest.imageId;
                    body = updateImageRequest.body
                } else {
                    imageId = updateImageRequest['image_id'];
                    body = updateImageRequest['body'];
                }
            }
        
            if (imageId === null || imageId === undefined) {
                throw new RequiredError('imageId','Required parameter imageId was null or undefined when calling updateImage.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'image_id': imageId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口为扩展接口，主要用于查询异步接口执行情况，比如查询导出镜像任务的执行状态。
         */
        showJob(showJobRequest?: ShowJobRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/jobs/{job_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let jobId;

            if (showJobRequest !== null && showJobRequest !== undefined) {
                if (showJobRequest instanceof ShowJobRequest) {
                    jobId = showJobRequest.jobId;
                } else {
                    jobId = showJobRequest['job_id'];
                }
            }
        
            if (jobId === null || jobId === undefined) {
                throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling showJob.');
            }

            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 用户共享镜像给其他用户时，使用该接口向该镜像成员中添加接受镜像用户的项目ID。
         */
        glanceAddImageMember(glanceAddImageMemberRequest?: GlanceAddImageMemberRequest) {
            const options = {
                method: "POST",
                url: "/v2/images/{image_id}/members",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            let imageId;

            if (glanceAddImageMemberRequest !== null && glanceAddImageMemberRequest !== undefined) {
                if (glanceAddImageMemberRequest instanceof GlanceAddImageMemberRequest) {
                    imageId = glanceAddImageMemberRequest.imageId;
                    body = glanceAddImageMemberRequest.body
                } else {
                    imageId = glanceAddImageMemberRequest['image_id'];
                    body = glanceAddImageMemberRequest['body'];
                }
            }
        
            if (imageId === null || imageId === undefined) {
                throw new RequiredError('imageId','Required parameter imageId was null or undefined when calling glanceAddImageMember.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'image_id': imageId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建镜像元数据。调用创建镜像元数据接口成功后，只是创建了镜像的元数据，镜像对应的实际镜像文件并不存在
         */
        glanceCreateImageMetadata(glanceCreateImageMetadataRequest?: GlanceCreateImageMetadataRequest) {
            const options = {
                method: "POST",
                url: "/v2/images",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (glanceCreateImageMetadataRequest !== null && glanceCreateImageMetadataRequest !== undefined) {
                if (glanceCreateImageMetadataRequest instanceof GlanceCreateImageMetadataRequest) {
                    body = glanceCreateImageMetadataRequest.body
                } else {
                    body = glanceCreateImageMetadataRequest['body'];
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
         * 该接口主要用于为某个镜像添加一个自定义标签。通过自定义标签，用户可以将镜像进行分类。
         */
        glanceCreateTag(glanceCreateTagRequest?: GlanceCreateTagRequest) {
            const options = {
                method: "PUT",
                url: "/v2/images/{image_id}/tags/{tag}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let imageId;
            let tag;

            if (glanceCreateTagRequest !== null && glanceCreateTagRequest !== undefined) {
                if (glanceCreateTagRequest instanceof GlanceCreateTagRequest) {
                    imageId = glanceCreateTagRequest.imageId;
                    tag = glanceCreateTagRequest.tag;
                } else {
                    imageId = glanceCreateTagRequest['image_id'];
                    tag = glanceCreateTagRequest['tag'];
                }
            }
        
            if (imageId === null || imageId === undefined) {
                throw new RequiredError('imageId','Required parameter imageId was null or undefined when calling glanceCreateTag.');
            }
            if (tag === null || tag === undefined) {
                throw new RequiredError('tag','Required parameter tag was null or undefined when calling glanceCreateTag.');
            }

            options.pathParams = { 'image_id': imageId,'tag': tag, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口主要用于删除镜像，用户可以通过该接口将自己的私有镜像删除。
         */
        glanceDeleteImage(glanceDeleteImageRequest?: GlanceDeleteImageRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/images/{image_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            let imageId;

            if (glanceDeleteImageRequest !== null && glanceDeleteImageRequest !== undefined) {
                if (glanceDeleteImageRequest instanceof GlanceDeleteImageRequest) {
                    imageId = glanceDeleteImageRequest.imageId;
                    body = glanceDeleteImageRequest.body
                } else {
                    imageId = glanceDeleteImageRequest['image_id'];
                    body = glanceDeleteImageRequest['body'];
                }
            }
        
            if (imageId === null || imageId === undefined) {
                throw new RequiredError('imageId','Required parameter imageId was null or undefined when calling glanceDeleteImage.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'image_id': imageId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于取消对某个用户的镜像共享。
         */
        glanceDeleteImageMember(glanceDeleteImageMemberRequest?: GlanceDeleteImageMemberRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/images/{image_id}/members/{member_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let imageId;
            let memberId;

            if (glanceDeleteImageMemberRequest !== null && glanceDeleteImageMemberRequest !== undefined) {
                if (glanceDeleteImageMemberRequest instanceof GlanceDeleteImageMemberRequest) {
                    imageId = glanceDeleteImageMemberRequest.imageId;
                    memberId = glanceDeleteImageMemberRequest.memberId;
                } else {
                    imageId = glanceDeleteImageMemberRequest['image_id'];
                    memberId = glanceDeleteImageMemberRequest['member_id'];
                }
            }
        
            if (imageId === null || imageId === undefined) {
                throw new RequiredError('imageId','Required parameter imageId was null or undefined when calling glanceDeleteImageMember.');
            }
            if (memberId === null || memberId === undefined) {
                throw new RequiredError('memberId','Required parameter memberId was null or undefined when calling glanceDeleteImageMember.');
            }

            options.pathParams = { 'image_id': imageId,'member_id': memberId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口主要用于删除某个镜像的自定义标签，通过该接口，用户可以将私有镜像中一些不用的标签删除。
         */
        glanceDeleteTag(glanceDeleteTagRequest?: GlanceDeleteTagRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/images/{image_id}/tags/{tag}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let imageId;
            let tag;

            if (glanceDeleteTagRequest !== null && glanceDeleteTagRequest !== undefined) {
                if (glanceDeleteTagRequest instanceof GlanceDeleteTagRequest) {
                    imageId = glanceDeleteTagRequest.imageId;
                    tag = glanceDeleteTagRequest.tag;
                } else {
                    imageId = glanceDeleteTagRequest['image_id'];
                    tag = glanceDeleteTagRequest['tag'];
                }
            }
        
            if (imageId === null || imageId === undefined) {
                throw new RequiredError('imageId','Required parameter imageId was null or undefined when calling glanceDeleteTag.');
            }
            if (tag === null || tag === undefined) {
                throw new RequiredError('tag','Required parameter tag was null or undefined when calling glanceDeleteTag.');
            }

            options.pathParams = { 'image_id': imageId,'tag': tag, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口主要用于查询镜像成员列表视图，通过视图，用户可以了解到镜像成员包含哪些属性，同时也可以了解每个属性的数据类型。
         */
        glanceListImageMemberSchemas() {
            const options = {
                method: "GET",
                url: "/v2/schemas/members",
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
         * 该接口用于共享镜像过程中，获取接受该镜像的成员列表。
         */
        glanceListImageMembers(glanceListImageMembersRequest?: GlanceListImageMembersRequest) {
            const options = {
                method: "GET",
                url: "/v2/images/{image_id}/members",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let imageId;

            if (glanceListImageMembersRequest !== null && glanceListImageMembersRequest !== undefined) {
                if (glanceListImageMembersRequest instanceof GlanceListImageMembersRequest) {
                    imageId = glanceListImageMembersRequest.imageId;
                } else {
                    imageId = glanceListImageMembersRequest['image_id'];
                }
            }
        
            if (imageId === null || imageId === undefined) {
                throw new RequiredError('imageId','Required parameter imageId was null or undefined when calling glanceListImageMembers.');
            }

            options.pathParams = { 'image_id': imageId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口主要用于查询镜像列表视图，通过该接口用户可以了解到镜像列表的详细情况和数据结构。
         */
        glanceListImageSchemas() {
            const options = {
                method: "GET",
                url: "/v2/schemas/images",
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
         * 获取镜像列表。 使用本接口查询镜像列表时，需要使用分页查询才能返回全部的镜像列表。 分页说明 分页是指返回一组镜像的一个子集，在返回的时候会存在下个子集的链接和首个子集的链接，默认返回的子集中数量为25，用户也可以通过使用limit和marker两个参数自己分页，指定返回子集中需要返回的数量。 响应中的参数first是查询首页的URL。next是查询下一页的URL。当查询镜像列表最后一页时，不存在next。
         */
        glanceListImages(glanceListImagesRequest?: GlanceListImagesRequest) {
            const options = {
                method: "GET",
                url: "/v2/images",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let imagetype;
            let isregistered;
            let osBit;
            let osType;
            let platform;
            let supportDiskintensive;
            let supportHighperformance;
            let supportKvm;
            let supportKvmGpuType;
            let supportKvmInfiniband;
            let supportLargememory;
            let supportXen;
            let supportXenGpuType;
            let supportXenHana;
            let containerFormat;
            let diskFormat;
            let id;
            let limit;
            let marker;
            let memberStatus;
            let minDisk;
            let minRam;
            let name;
            let owner;
            let _protected;
            let sortDir;
            let sortKey;
            let status;
            let tag;
            let visibility;
            let createdAt;
            let updatedAt;

            if (glanceListImagesRequest !== null && glanceListImagesRequest !== undefined) {
                if (glanceListImagesRequest instanceof GlanceListImagesRequest) {
                    imagetype = glanceListImagesRequest.imagetype;
                    isregistered = glanceListImagesRequest.isregistered;
                    osBit = glanceListImagesRequest.osBit;
                    osType = glanceListImagesRequest.osType;
                    platform = glanceListImagesRequest.platform;
                    supportDiskintensive = glanceListImagesRequest.supportDiskintensive;
                    supportHighperformance = glanceListImagesRequest.supportHighperformance;
                    supportKvm = glanceListImagesRequest.supportKvm;
                    supportKvmGpuType = glanceListImagesRequest.supportKvmGpuType;
                    supportKvmInfiniband = glanceListImagesRequest.supportKvmInfiniband;
                    supportLargememory = glanceListImagesRequest.supportLargememory;
                    supportXen = glanceListImagesRequest.supportXen;
                    supportXenGpuType = glanceListImagesRequest.supportXenGpuType;
                    supportXenHana = glanceListImagesRequest.supportXenHana;
                    containerFormat = glanceListImagesRequest.containerFormat;
                    diskFormat = glanceListImagesRequest.diskFormat;
                    id = glanceListImagesRequest.id;
                    limit = glanceListImagesRequest.limit;
                    marker = glanceListImagesRequest.marker;
                    memberStatus = glanceListImagesRequest.memberStatus;
                    minDisk = glanceListImagesRequest.minDisk;
                    minRam = glanceListImagesRequest.minRam;
                    name = glanceListImagesRequest.name;
                    owner = glanceListImagesRequest.owner;
                    _protected = glanceListImagesRequest._protected;
                    sortDir = glanceListImagesRequest.sortDir;
                    sortKey = glanceListImagesRequest.sortKey;
                    status = glanceListImagesRequest.status;
                    tag = glanceListImagesRequest.tag;
                    visibility = glanceListImagesRequest.visibility;
                    createdAt = glanceListImagesRequest.createdAt;
                    updatedAt = glanceListImagesRequest.updatedAt;
                } else {
                    imagetype = glanceListImagesRequest['__imagetype'];
                    isregistered = glanceListImagesRequest['__isregistered'];
                    osBit = glanceListImagesRequest['__os_bit'];
                    osType = glanceListImagesRequest['__os_type'];
                    platform = glanceListImagesRequest['__platform'];
                    supportDiskintensive = glanceListImagesRequest['__support_diskintensive'];
                    supportHighperformance = glanceListImagesRequest['__support_highperformance'];
                    supportKvm = glanceListImagesRequest['__support_kvm'];
                    supportKvmGpuType = glanceListImagesRequest['__support_kvm_gpu_type'];
                    supportKvmInfiniband = glanceListImagesRequest['__support_kvm_infiniband'];
                    supportLargememory = glanceListImagesRequest['__support_largememory'];
                    supportXen = glanceListImagesRequest['__support_xen'];
                    supportXenGpuType = glanceListImagesRequest['__support_xen_gpu_type'];
                    supportXenHana = glanceListImagesRequest['__support_xen_hana'];
                    containerFormat = glanceListImagesRequest['container_format'];
                    diskFormat = glanceListImagesRequest['disk_format'];
                    id = glanceListImagesRequest['id'];
                    limit = glanceListImagesRequest['limit'];
                    marker = glanceListImagesRequest['marker'];
                    memberStatus = glanceListImagesRequest['member_status'];
                    minDisk = glanceListImagesRequest['min_disk'];
                    minRam = glanceListImagesRequest['min_ram'];
                    name = glanceListImagesRequest['name'];
                    owner = glanceListImagesRequest['owner'];
                    _protected = glanceListImagesRequest['protected'];
                    sortDir = glanceListImagesRequest['sort_dir'];
                    sortKey = glanceListImagesRequest['sort_key'];
                    status = glanceListImagesRequest['status'];
                    tag = glanceListImagesRequest['tag'];
                    visibility = glanceListImagesRequest['visibility'];
                    createdAt = glanceListImagesRequest['created_at'];
                    updatedAt = glanceListImagesRequest['updated_at'];
                }
            }
        
            if (imagetype !== null && imagetype !== undefined) {
                localVarQueryParameter['__imagetype'] = imagetype;
            }
            if (isregistered !== null && isregistered !== undefined) {
                localVarQueryParameter['__isregistered'] = isregistered;
            }
            if (osBit !== null && osBit !== undefined) {
                localVarQueryParameter['__os_bit'] = osBit;
            }
            if (osType !== null && osType !== undefined) {
                localVarQueryParameter['__os_type'] = osType;
            }
            if (platform !== null && platform !== undefined) {
                localVarQueryParameter['__platform'] = platform;
            }
            if (supportDiskintensive !== null && supportDiskintensive !== undefined) {
                localVarQueryParameter['__support_diskintensive'] = supportDiskintensive;
            }
            if (supportHighperformance !== null && supportHighperformance !== undefined) {
                localVarQueryParameter['__support_highperformance'] = supportHighperformance;
            }
            if (supportKvm !== null && supportKvm !== undefined) {
                localVarQueryParameter['__support_kvm'] = supportKvm;
            }
            if (supportKvmGpuType !== null && supportKvmGpuType !== undefined) {
                localVarQueryParameter['__support_kvm_gpu_type'] = supportKvmGpuType;
            }
            if (supportKvmInfiniband !== null && supportKvmInfiniband !== undefined) {
                localVarQueryParameter['__support_kvm_infiniband'] = supportKvmInfiniband;
            }
            if (supportLargememory !== null && supportLargememory !== undefined) {
                localVarQueryParameter['__support_largememory'] = supportLargememory;
            }
            if (supportXen !== null && supportXen !== undefined) {
                localVarQueryParameter['__support_xen'] = supportXen;
            }
            if (supportXenGpuType !== null && supportXenGpuType !== undefined) {
                localVarQueryParameter['__support_xen_gpu_type'] = supportXenGpuType;
            }
            if (supportXenHana !== null && supportXenHana !== undefined) {
                localVarQueryParameter['__support_xen_hana'] = supportXenHana;
            }
            if (containerFormat !== null && containerFormat !== undefined) {
                localVarQueryParameter['container_format'] = containerFormat;
            }
            if (diskFormat !== null && diskFormat !== undefined) {
                localVarQueryParameter['disk_format'] = diskFormat;
            }
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (memberStatus !== null && memberStatus !== undefined) {
                localVarQueryParameter['member_status'] = memberStatus;
            }
            if (minDisk !== null && minDisk !== undefined) {
                localVarQueryParameter['min_disk'] = minDisk;
            }
            if (minRam !== null && minRam !== undefined) {
                localVarQueryParameter['min_ram'] = minRam;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (owner !== null && owner !== undefined) {
                localVarQueryParameter['owner'] = owner;
            }
            if (_protected !== null && _protected !== undefined) {
                localVarQueryParameter['protected'] = _protected;
            }
            if (sortDir !== null && sortDir !== undefined) {
                localVarQueryParameter['sort_dir'] = sortDir;
            }
            if (sortKey !== null && sortKey !== undefined) {
                localVarQueryParameter['sort_key'] = sortKey;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (tag !== null && tag !== undefined) {
                localVarQueryParameter['tag'] = tag;
            }
            if (visibility !== null && visibility !== undefined) {
                localVarQueryParameter['visibility'] = visibility;
            }
            if (createdAt !== null && createdAt !== undefined) {
                localVarQueryParameter['created_at'] = createdAt;
            }
            if (updatedAt !== null && updatedAt !== undefined) {
                localVarQueryParameter['updated_at'] = updatedAt;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询单个镜像详情，用户可以通过该接口查询单个私有或者公共镜像的详情
         */
        glanceShowImage(glanceShowImageRequest?: GlanceShowImageRequest) {
            const options = {
                method: "GET",
                url: "/v2/images/{image_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let imageId;

            if (glanceShowImageRequest !== null && glanceShowImageRequest !== undefined) {
                if (glanceShowImageRequest instanceof GlanceShowImageRequest) {
                    imageId = glanceShowImageRequest.imageId;
                } else {
                    imageId = glanceShowImageRequest['image_id'];
                }
            }
        
            if (imageId === null || imageId === undefined) {
                throw new RequiredError('imageId','Required parameter imageId was null or undefined when calling glanceShowImage.');
            }

            options.pathParams = { 'image_id': imageId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口主要用于镜像共享中查询某个镜像成员的详情。
         */
        glanceShowImageMember(glanceShowImageMemberRequest?: GlanceShowImageMemberRequest) {
            const options = {
                method: "GET",
                url: "/v2/images/{image_id}/members/{member_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let imageId;
            let memberId;

            if (glanceShowImageMemberRequest !== null && glanceShowImageMemberRequest !== undefined) {
                if (glanceShowImageMemberRequest instanceof GlanceShowImageMemberRequest) {
                    imageId = glanceShowImageMemberRequest.imageId;
                    memberId = glanceShowImageMemberRequest.memberId;
                } else {
                    imageId = glanceShowImageMemberRequest['image_id'];
                    memberId = glanceShowImageMemberRequest['member_id'];
                }
            }
        
            if (imageId === null || imageId === undefined) {
                throw new RequiredError('imageId','Required parameter imageId was null or undefined when calling glanceShowImageMember.');
            }
            if (memberId === null || memberId === undefined) {
                throw new RequiredError('memberId','Required parameter memberId was null or undefined when calling glanceShowImageMember.');
            }

            options.pathParams = { 'image_id': imageId,'member_id': memberId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口主要用于查询镜像成员视图，通过视图，用户可以了解到镜像成员包含哪些属性，同时也可以了解每个属性的数据类型。
         */
        glanceShowImageMemberSchemas() {
            const options = {
                method: "GET",
                url: "/v2/schemas/member",
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
         * 该接口主要用于查询镜像视图，通过视图，用户可以了解到镜像包含哪些属性，同时也可以了解每个属性的数据类型等。
         */
        glanceShowImageSchemas() {
            const options = {
                method: "GET",
                url: "/v2/schemas/image",
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
         * 修改镜像信息
         */
        glanceUpdateImage(glanceUpdateImageRequest?: GlanceUpdateImageRequest) {
            const options = {
                method: "PATCH",
                url: "/v2/images/{image_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            let imageId;

            if (glanceUpdateImageRequest !== null && glanceUpdateImageRequest !== undefined) {
                if (glanceUpdateImageRequest instanceof GlanceUpdateImageRequest) {
                    imageId = glanceUpdateImageRequest.imageId;
                    body = glanceUpdateImageRequest.body
                } else {
                    imageId = glanceUpdateImageRequest['image_id'];
                    body = glanceUpdateImageRequest['body'];
                }
            }
        
            if (imageId === null || imageId === undefined) {
                throw new RequiredError('imageId','Required parameter imageId was null or undefined when calling glanceUpdateImage.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'image_id': imageId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 用户接受或者拒绝共享镜像时，使用该接口更新镜像成员的状态。
         */
        glanceUpdateImageMember(glanceUpdateImageMemberRequest?: GlanceUpdateImageMemberRequest) {
            const options = {
                method: "PUT",
                url: "/v2/images/{image_id}/members/{member_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            let imageId;
            let memberId;

            if (glanceUpdateImageMemberRequest !== null && glanceUpdateImageMemberRequest !== undefined) {
                if (glanceUpdateImageMemberRequest instanceof GlanceUpdateImageMemberRequest) {
                    imageId = glanceUpdateImageMemberRequest.imageId;
                    memberId = glanceUpdateImageMemberRequest.memberId;
                    body = glanceUpdateImageMemberRequest.body
                } else {
                    imageId = glanceUpdateImageMemberRequest['image_id'];
                    memberId = glanceUpdateImageMemberRequest['member_id'];
                    body = glanceUpdateImageMemberRequest['body'];
                }
            }
        
            if (imageId === null || imageId === undefined) {
                throw new RequiredError('imageId','Required parameter imageId was null or undefined when calling glanceUpdateImageMember.');
            }
            if (memberId === null || memberId === undefined) {
                throw new RequiredError('memberId','Required parameter memberId was null or undefined when calling glanceUpdateImageMember.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'image_id': imageId,'member_id': memberId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
    }
};

function newClient(client: HcClient): ImsClient {
    return new ImsClient(client);
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