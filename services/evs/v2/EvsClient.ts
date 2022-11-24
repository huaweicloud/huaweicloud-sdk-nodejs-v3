import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { Attachment } from './model/Attachment';
import { AzInfo } from './model/AzInfo';
import { BatchCreateVolumeTagsRequest } from './model/BatchCreateVolumeTagsRequest';
import { BatchCreateVolumeTagsRequestBody } from './model/BatchCreateVolumeTagsRequestBody';
import { BatchCreateVolumeTagsResponse } from './model/BatchCreateVolumeTagsResponse';
import { BatchDeleteVolumeTagsRequest } from './model/BatchDeleteVolumeTagsRequest';
import { BatchDeleteVolumeTagsRequestBody } from './model/BatchDeleteVolumeTagsRequestBody';
import { BatchDeleteVolumeTagsResponse } from './model/BatchDeleteVolumeTagsResponse';
import { BssParamForCreateVolume } from './model/BssParamForCreateVolume';
import { BssParamForResizeVolume } from './model/BssParamForResizeVolume';
import { CinderAcceptVolumeTransferOption } from './model/CinderAcceptVolumeTransferOption';
import { CinderAcceptVolumeTransferRequest } from './model/CinderAcceptVolumeTransferRequest';
import { CinderAcceptVolumeTransferRequestBody } from './model/CinderAcceptVolumeTransferRequestBody';
import { CinderAcceptVolumeTransferResponse } from './model/CinderAcceptVolumeTransferResponse';
import { CinderCreateVolumeTransferRequest } from './model/CinderCreateVolumeTransferRequest';
import { CinderCreateVolumeTransferRequestBody } from './model/CinderCreateVolumeTransferRequestBody';
import { CinderCreateVolumeTransferResponse } from './model/CinderCreateVolumeTransferResponse';
import { CinderDeleteVolumeTransferRequest } from './model/CinderDeleteVolumeTransferRequest';
import { CinderDeleteVolumeTransferResponse } from './model/CinderDeleteVolumeTransferResponse';
import { CinderListAvailabilityZonesRequest } from './model/CinderListAvailabilityZonesRequest';
import { CinderListAvailabilityZonesResponse } from './model/CinderListAvailabilityZonesResponse';
import { CinderListQuotasRequest } from './model/CinderListQuotasRequest';
import { CinderListQuotasResponse } from './model/CinderListQuotasResponse';
import { CinderListVolumeTransfersRequest } from './model/CinderListVolumeTransfersRequest';
import { CinderListVolumeTransfersResponse } from './model/CinderListVolumeTransfersResponse';
import { CinderListVolumeTypesRequest } from './model/CinderListVolumeTypesRequest';
import { CinderListVolumeTypesResponse } from './model/CinderListVolumeTypesResponse';
import { CinderShowVolumeTransferRequest } from './model/CinderShowVolumeTransferRequest';
import { CinderShowVolumeTransferResponse } from './model/CinderShowVolumeTransferResponse';
import { CreateSnapshotOption } from './model/CreateSnapshotOption';
import { CreateSnapshotRequest } from './model/CreateSnapshotRequest';
import { CreateSnapshotRequestBody } from './model/CreateSnapshotRequestBody';
import { CreateSnapshotResponse } from './model/CreateSnapshotResponse';
import { CreateVolumeOption } from './model/CreateVolumeOption';
import { CreateVolumeRequest } from './model/CreateVolumeRequest';
import { CreateVolumeRequestBody } from './model/CreateVolumeRequestBody';
import { CreateVolumeResponse } from './model/CreateVolumeResponse';
import { CreateVolumeSchedulerHints } from './model/CreateVolumeSchedulerHints';
import { CreateVolumeTransferDetail } from './model/CreateVolumeTransferDetail';
import { CreateVolumeTransferOption } from './model/CreateVolumeTransferOption';
import { DeleteSnapshotRequest } from './model/DeleteSnapshotRequest';
import { DeleteSnapshotResponse } from './model/DeleteSnapshotResponse';
import { DeleteTagsOption } from './model/DeleteTagsOption';
import { DeleteVolumeRequest } from './model/DeleteVolumeRequest';
import { DeleteVolumeResponse } from './model/DeleteVolumeResponse';
import { JobEntities } from './model/JobEntities';
import { Link } from './model/Link';
import { ListSnapshotsRequest } from './model/ListSnapshotsRequest';
import { ListSnapshotsResponse } from './model/ListSnapshotsResponse';
import { ListVersionsRequest } from './model/ListVersionsRequest';
import { ListVersionsResponse } from './model/ListVersionsResponse';
import { ListVolumeTagsRequest } from './model/ListVolumeTagsRequest';
import { ListVolumeTagsResponse } from './model/ListVolumeTagsResponse';
import { ListVolumesByTagsRequest } from './model/ListVolumesByTagsRequest';
import { ListVolumesByTagsRequestBody } from './model/ListVolumesByTagsRequestBody';
import { ListVolumesByTagsResponse } from './model/ListVolumesByTagsResponse';
import { ListVolumesRequest } from './model/ListVolumesRequest';
import { ListVolumesResponse } from './model/ListVolumesResponse';
import { Match } from './model/Match';
import { MediaTypes } from './model/MediaTypes';
import { OsExtend } from './model/OsExtend';
import { QuotaDetail } from './model/QuotaDetail';
import { QuotaDetailBackupGigabytes } from './model/QuotaDetailBackupGigabytes';
import { QuotaDetailBackups } from './model/QuotaDetailBackups';
import { QuotaDetailGigabytes } from './model/QuotaDetailGigabytes';
import { QuotaDetailGigabytesGPSSD } from './model/QuotaDetailGigabytesGPSSD';
import { QuotaDetailGigabytesSAS } from './model/QuotaDetailGigabytesSAS';
import { QuotaDetailGigabytesSATA } from './model/QuotaDetailGigabytesSATA';
import { QuotaDetailGigabytesSSD } from './model/QuotaDetailGigabytesSSD';
import { QuotaDetailPerVolumeGigabytes } from './model/QuotaDetailPerVolumeGigabytes';
import { QuotaDetailSnapshots } from './model/QuotaDetailSnapshots';
import { QuotaDetailSnapshotsGPSSD } from './model/QuotaDetailSnapshotsGPSSD';
import { QuotaDetailSnapshotsSAS } from './model/QuotaDetailSnapshotsSAS';
import { QuotaDetailSnapshotsSATA } from './model/QuotaDetailSnapshotsSATA';
import { QuotaDetailSnapshotsSSD } from './model/QuotaDetailSnapshotsSSD';
import { QuotaDetailVolumes } from './model/QuotaDetailVolumes';
import { QuotaDetailVolumesGPSSD } from './model/QuotaDetailVolumesGPSSD';
import { QuotaDetailVolumesSAS } from './model/QuotaDetailVolumesSAS';
import { QuotaDetailVolumesSATA } from './model/QuotaDetailVolumesSATA';
import { QuotaDetailVolumesSSD } from './model/QuotaDetailVolumesSSD';
import { QuotaList } from './model/QuotaList';
import { ResizeVolumeRequest } from './model/ResizeVolumeRequest';
import { ResizeVolumeRequestBody } from './model/ResizeVolumeRequestBody';
import { ResizeVolumeResponse } from './model/ResizeVolumeResponse';
import { Resource } from './model/Resource';
import { RollbackInfo } from './model/RollbackInfo';
import { RollbackSnapshotOption } from './model/RollbackSnapshotOption';
import { RollbackSnapshotRequest } from './model/RollbackSnapshotRequest';
import { RollbackSnapshotRequestBody } from './model/RollbackSnapshotRequestBody';
import { RollbackSnapshotResponse } from './model/RollbackSnapshotResponse';
import { ShowJobRequest } from './model/ShowJobRequest';
import { ShowJobResponse } from './model/ShowJobResponse';
import { ShowSnapshotRequest } from './model/ShowSnapshotRequest';
import { ShowSnapshotResponse } from './model/ShowSnapshotResponse';
import { ShowVersionRequest } from './model/ShowVersionRequest';
import { ShowVersionResponse } from './model/ShowVersionResponse';
import { ShowVolumeRequest } from './model/ShowVolumeRequest';
import { ShowVolumeResponse } from './model/ShowVolumeResponse';
import { ShowVolumeTagsRequest } from './model/ShowVolumeTagsRequest';
import { ShowVolumeTagsResponse } from './model/ShowVolumeTagsResponse';
import { SnapshotDetails } from './model/SnapshotDetails';
import { SnapshotList } from './model/SnapshotList';
import { SubJob } from './model/SubJob';
import { SubJobEntities } from './model/SubJobEntities';
import { Tag } from './model/Tag';
import { TagsForListVolumes } from './model/TagsForListVolumes';
import { UpdateSnapshotOption } from './model/UpdateSnapshotOption';
import { UpdateSnapshotRequest } from './model/UpdateSnapshotRequest';
import { UpdateSnapshotRequestBody } from './model/UpdateSnapshotRequestBody';
import { UpdateSnapshotResponse } from './model/UpdateSnapshotResponse';
import { UpdateVolumeOption } from './model/UpdateVolumeOption';
import { UpdateVolumeRequest } from './model/UpdateVolumeRequest';
import { UpdateVolumeRequestBody } from './model/UpdateVolumeRequestBody';
import { UpdateVolumeResponse } from './model/UpdateVolumeResponse';
import { Versions } from './model/Versions';
import { VolumeDetail } from './model/VolumeDetail';
import { VolumeDetailForTag } from './model/VolumeDetailForTag';
import { VolumeMetadata } from './model/VolumeMetadata';
import { VolumeTransfer } from './model/VolumeTransfer';
import { VolumeTransferSummary } from './model/VolumeTransferSummary';
import { VolumeType } from './model/VolumeType';
import { VolumeTypeExtraSpecs } from './model/VolumeTypeExtraSpecs';
import { ZoneState } from './model/ZoneState';

export class EvsClient {
    public static newBuilder(): ClientBuilder<EvsClient> {
        return new ClientBuilder<EvsClient>(newClient);
    }

    private hcClient: HcClient;
    public constructor(client: HcClient) {
        this.hcClient = client;
    }

    public getPath() {
        return __dirname;
    }


    /**
     * 为指定云硬盘批量添加标签。
     * 
     * 添加标签时，如果云硬盘的标签已存在相同key，则会覆盖已有标签。
     * 单个云硬盘最多支持创建10个标签。
     * 
     * 详细说明请参考华为云API Explorer。
     * Please refer to Huawei cloud API Explorer for details.
     *
     * @summary 为指定云硬盘批量添加标签
     * @param {string} volumeId 云硬盘ID。
     * @param {BatchCreateVolumeTagsRequestBody} batchCreateVolumeTagsRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchCreateVolumeTags(batchCreateVolumeTagsRequest?: BatchCreateVolumeTagsRequest): Promise<void> {
        const options = ParamCreater().batchCreateVolumeTags(batchCreateVolumeTagsRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 为指定云硬盘批量删除标签。
     * 
     * 详细说明请参考华为云API Explorer。
     * Please refer to Huawei cloud API Explorer for details.
     *
     * @summary 为指定云硬盘批量删除标签
     * @param {string} volumeId 磁盘ID。
     * @param {BatchDeleteVolumeTagsRequestBody} batchDeleteVolumeTagsRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeleteVolumeTags(batchDeleteVolumeTagsRequest?: BatchDeleteVolumeTagsRequest): Promise<void> {
        const options = ParamCreater().batchDeleteVolumeTags(batchDeleteVolumeTagsRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 通过云硬盘过户记录ID以及身份认证密钥来接受云硬盘过户。
     * 
     * 详细说明请参考华为云API Explorer。
     * Please refer to Huawei cloud API Explorer for details.
     *
     * @summary 接受云硬盘过户
     * @param {string} transferId 云硬盘ID
     * @param {CinderAcceptVolumeTransferRequestBody} cinderAcceptVolumeTransferRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public cinderAcceptVolumeTransfer(cinderAcceptVolumeTransferRequest?: CinderAcceptVolumeTransferRequest): Promise<CinderAcceptVolumeTransferResponse> {
        const options = ParamCreater().cinderAcceptVolumeTransfer(cinderAcceptVolumeTransferRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 指定云硬盘来创建云硬盘过户记录，创建成功后，会返回过户记录ID以及身份认证密钥。
     * 云硬盘在过户过程中的状态变化如下：创建云硬盘过户后，云硬盘状态由“available”变为“awaiting-transfer”。当云硬盘过户被接收后，云硬盘状态变为“available”。
     * 
     * 详细说明请参考华为云API Explorer。
     * Please refer to Huawei cloud API Explorer for details.
     *
     * @summary 创建云硬盘过户
     * @param {CinderCreateVolumeTransferRequestBody} cinderCreateVolumeTransferRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public cinderCreateVolumeTransfer(cinderCreateVolumeTransferRequest?: CinderCreateVolumeTransferRequest): Promise<CinderCreateVolumeTransferResponse> {
        const options = ParamCreater().cinderCreateVolumeTransfer(cinderCreateVolumeTransferRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 当云硬盘过户未被接受时，您可以删除云硬盘过户记录，接受后则无法执行删除操作。
     * 
     * 详细说明请参考华为云API Explorer。
     * Please refer to Huawei cloud API Explorer for details.
     *
     * @summary 删除云硬盘过户
     * @param {string} transferId 云硬盘过户记录ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public cinderDeleteVolumeTransfer(cinderDeleteVolumeTransferRequest?: CinderDeleteVolumeTransferRequest): Promise<void> {
        const options = ParamCreater().cinderDeleteVolumeTransfer(cinderDeleteVolumeTransferRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询所有的可用分区信息。
     * 
     * 详细说明请参考华为云API Explorer。
     * Please refer to Huawei cloud API Explorer for details.
     *
     * @summary 查询所有的可用分区信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public cinderListAvailabilityZones(): Promise<CinderListAvailabilityZonesResponse> {
        const options = ParamCreater().cinderListAvailabilityZones();
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询租户的详细配额。
     * 
     * 详细说明请参考华为云API Explorer。
     * Please refer to Huawei cloud API Explorer for details.
     *
     * @summary 查询租户的详细配额
     * @param {string} targetProjectId 目标的项目ID。与project_id保持一致即可。
     * @param {'True'} usage 是否查询配额详细信息。当前只支持传true。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public cinderListQuotas(cinderListQuotasRequest?: CinderListQuotasRequest): Promise<CinderListQuotasResponse> {
        const options = ParamCreater().cinderListQuotas(cinderListQuotasRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询当前租户下所有云硬盘的过户记录列表
     * 
     * 详细说明请参考华为云API Explorer。
     * Please refer to Huawei cloud API Explorer for details.
     *
     * @summary 查询云硬盘过户记录列表概要
     * @param {number} [limit] 返回结果个数限制，取值为大 于0的整数
     * @param {number} [offset] 偏移量，偏移量为一个大于0小 于云硬盘过户记录总个数的整 数，表示查询该偏移量后面的 所有的云硬盘过户记录
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public cinderListVolumeTransfers(cinderListVolumeTransfersRequest?: CinderListVolumeTransfersRequest): Promise<CinderListVolumeTransfersResponse> {
        const options = ParamCreater().cinderListVolumeTransfers(cinderListVolumeTransfersRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询云硬盘类型列表。
     * 
     * 详细说明请参考华为云API Explorer。
     * Please refer to Huawei cloud API Explorer for details.
     *
     * @summary 查询云硬盘类型列表
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public cinderListVolumeTypes(): Promise<CinderListVolumeTypesResponse> {
        const options = ParamCreater().cinderListVolumeTypes();
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询单个云硬盘的过户记录详情，比如过户记录创建时间、ID以及名称等信息。
     * 
     * 详细说明请参考华为云API Explorer。
     * Please refer to Huawei cloud API Explorer for details.
     *
     * @summary 查询单个云硬盘过户记录详情
     * @param {string} transferId 云硬盘过户记录ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public cinderShowVolumeTransfer(cinderShowVolumeTransferRequest?: CinderShowVolumeTransferRequest): Promise<CinderShowVolumeTransferResponse> {
        const options = ParamCreater().cinderShowVolumeTransfer(cinderShowVolumeTransferRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建云硬盘快照。
     * 
     * 详细说明请参考华为云API Explorer。
     * Please refer to Huawei cloud API Explorer for details.
     *
     * @summary 创建云硬盘快照
     * @param {CreateSnapshotRequestBody} createSnapshotRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createSnapshot(createSnapshotRequest?: CreateSnapshotRequest): Promise<CreateSnapshotResponse> {
        const options = ParamCreater().createSnapshot(createSnapshotRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建按需或包周期云硬盘。
     * 在创建包周期云硬盘的场景下：
     * - 如果您需要查看订单可用的优惠券，请参考\&quot;[查询订单可用优惠券](https://support.huaweicloud.com/api-oce/zh-cn_topic_0092953630.html)\&quot;。
     * - 如果您需要支付订单，请参考\&quot;[支付包周期产品订单](https://support.huaweicloud.com/api-oce/zh-cn_topic_0075746561.html)\&quot;。
     * - 如果您需要查询订单的资源开通详情，请参考\&quot;[查询订单的资源开通详情](https://support.huaweicloud.com/api-oce/api_order_00001.html)\&quot;。
     * - 如果您需要退订该包周期资源，请参考“[退订包周期资源](https://support.huaweicloud.com/api-oce/zh-cn_topic_0082522030.html)”。
     * 
     * 详细说明请参考华为云API Explorer。
     * Please refer to Huawei cloud API Explorer for details.
     *
     * @summary 创建云硬盘
     * @param {CreateVolumeRequestBody} createVolumeRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createVolume(createVolumeRequest?: CreateVolumeRequest): Promise<CreateVolumeResponse> {
        const options = ParamCreater().createVolume(createVolumeRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除云硬盘快照。
     * 
     * 详细说明请参考华为云API Explorer。
     * Please refer to Huawei cloud API Explorer for details.
     *
     * @summary 删除云硬盘快照
     * @param {string} snapshotId 快照ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteSnapshot(deleteSnapshotRequest?: DeleteSnapshotRequest): Promise<void> {
        const options = ParamCreater().deleteSnapshot(deleteSnapshotRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除一个云硬盘。
     * 
     * 详细说明请参考华为云API Explorer。
     * Please refer to Huawei cloud API Explorer for details.
     *
     * @summary 删除云硬盘
     * @param {string} volumeId 云硬盘ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteVolume(deleteVolumeRequest?: DeleteVolumeRequest): Promise<DeleteVolumeResponse> {
        const options = ParamCreater().deleteVolume(deleteVolumeRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询云硬盘快照详细列表信息。
     * 
     * 详细说明请参考华为云API Explorer。
     * Please refer to Huawei cloud API Explorer for details.
     *
     * @summary 查询云硬盘快照详情列表
     * @param {number} [offset] 偏移量。 说明:分页查询快照时使用，与limit配合使用。假如共有30个快照，设置offset为11，limit为10，即为从第12个快照开始查询，一次最多可读取10个快照。
     * @param {number} [limit] 返回结果个数限制，值为大于0的整数。默认值为1000。
     * @param {string} [name] 云硬盘快照名称。最大支持255个字节。
     * @param {string} [status] 云硬盘快照状态，具体请参见A.3 云硬盘快照状态。
     * @param {string} [volumeId] 快照所属云硬盘的ID。
     * @param {string} [availabilityZone] 快照所属云硬盘的可用区。
     * @param {string} [id] 指定快照id进行过滤。可以传入多个id过滤查询，格式：id&#x3D;id1&amp;id&#x3D;id2&amp;id&#x3D;id3
     * @param {string} [dedicatedStorageName] 专属存储的名称。
     * @param {string} [dedicatedStorageId] 专属存储ID。
     * @param {string} [serviceType] 服务类型。仅支持EVS、DSS、DESS。
     * @param {string} [enterpriseProjectId] 指定企业项目id进行过滤。 传入“all_granted_eps”，代表查询权限范围内的所有企业项目下的云硬盘。 &gt; 说明： &gt;  &gt; 关于企业项目ID的获取及企业项目特性的详细信息，请参考：\&quot;[企业管理用户指南](https://support.huaweicloud.com/usermanual-em/zh-cn_topic_0123692049.html)\&quot;。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSnapshots(listSnapshotsRequest?: ListSnapshotsRequest): Promise<ListSnapshotsResponse> {
        const options = ParamCreater().listSnapshots(listSnapshotsRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取某个租户的所有云硬盘资源的标签信息。
     * 
     * 详细说明请参考华为云API Explorer。
     * Please refer to Huawei cloud API Explorer for details.
     *
     * @summary 获取云硬盘资源的所有标签
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listVolumeTags(): Promise<ListVolumeTagsResponse> {
        const options = ParamCreater().listVolumeTags();
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询所有云硬盘的详细信息。
     * 
     * 详细说明请参考华为云API Explorer。
     * Please refer to Huawei cloud API Explorer for details.
     *
     * @summary 查询所有云硬盘详情
     * @param {string} [marker] 通过云硬盘ID进行分页查询。默认为查询第一页数据。
     * @param {string} [name] 磁盘名称。
     * @param {number} [limit] 返回结果个数限制。默认值为1000。
     * @param {string} [sortKey] 返回结果按该关键字排序，支持id，status，size，created_at等关键字，默认为“created_at”。
     * @param {number} [offset] 偏移量（偏移量为一个大于0小于磁盘总个数的整数，表示查询该偏移量后面的所有的磁盘）。
     * @param {string} [sortDir] 返回结果按照降序或升序排列，默认为“desc”。 降序：desc 升序：asc
     * @param {string} [status] 云硬盘状态，取值可参考：\&quot;[云硬盘状态](https://support.huaweicloud.com/api-evs/evs_04_0040.html)\&quot;。
     * @param {string} [metadata] 云硬盘元数据。
     * @param {string} [availabilityZone] 可用区信息。
     * @param {boolean} [multiattach] 是否为共享云硬盘。 true：表示为共享云硬盘。 false：表示为非共享云硬盘。
     * @param {string} [serviceType] 服务类型，仅支持EVS、DSS、DESS。
     * @param {string} [dedicatedStorageId] 专属存储池ID，可过滤出该专属存储池下的所有云硬盘，必须精确匹配。
     * @param {string} [dedicatedStorageName] 专属存储池的名字，可过滤出该专属存储池下的所有云硬盘，支持模糊匹配。
     * @param {string} [volumeTypeId] 云硬盘类型id。 通过\&quot;[查询云硬盘类型列表](https://support.huaweicloud.com/api-evs/evs_04_3035.html)\&quot;可以查到，即volume_types参数说明表格中的“id”
     * @param {string} [id] 云硬盘ID。
     * @param {string} [ids] 云硬盘id列表，格式为ids&#x3D;[\&#39;id1\&#39;,\&#39;id2\&#39;,...,\&#39;idx\&#39;]，返回“ids”中有效id的云硬盘详情，无效的id会被忽略。 支持查询最多60个id对应的云硬盘详情。 如果“id”和“ids”查询参数同时存在，“id”会被忽略。
     * @param {string} [enterpriseProjectId] 指定企业项目id进行过滤。 传入“all_granted_eps”，代表查询权限范围内的所有企业项目下的云硬盘。 &gt; 说明： &gt;  &gt; 关于企业项目ID的获取及企业项目特性的详细信息，请参考：\&quot;[企业管理用户指南](https://support.huaweicloud.com/usermanual-em/zh-cn_topic_0123692049.html)\&quot;。
     * @param {string} [serverId] 云服务器id。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listVolumes(listVolumesRequest?: ListVolumesRequest): Promise<ListVolumesResponse> {
        const options = ParamCreater().listVolumes(listVolumesRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 通过标签查询云硬盘资源实例详情。
     * 
     * 详细说明请参考华为云API Explorer。
     * Please refer to Huawei cloud API Explorer for details.
     *
     * @summary 通过标签查询云硬盘资源实例详情
     * @param {ListVolumesByTagsRequestBody} listVolumesByTagsRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listVolumesByTags(listVolumesByTagsRequest?: ListVolumesByTagsRequest): Promise<ListVolumesByTagsResponse> {
        const options = ParamCreater().listVolumesByTags(listVolumesByTagsRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 对按需或者包周期云硬盘进行扩容。
     * 在扩容包周期云硬盘的场景下：
     * - 如果您需要查看订单可用的优惠券，请参考\&quot;[查询订单可用优惠券](https://support.huaweicloud.com/api-oce/zh-cn_topic_0092953630.html)\&quot;。
     * - 如果您需要支付订单，请参考\&quot;[支付包周期产品订单](https://support.huaweicloud.com/api-oce/zh-cn_topic_0075746561.html)\&quot;。
     * - 如果您需要查询订单的资源开通详情，请参考\&quot;[查询订单的资源开通详情](https://support.huaweicloud.com/api-oce/api_order_00001.html)\&quot;。
     * - 如果您需要退订该包周期资源，请参考“[退订包周期资源](https://support.huaweicloud.com/api-oce/zh-cn_topic_0082522030.html)”。
     * 
     * 详细说明请参考华为云API Explorer。
     * Please refer to Huawei cloud API Explorer for details.
     *
     * @summary 扩容云硬盘
     * @param {string} volumeId 云硬盘ID。
     * @param {ResizeVolumeRequestBody} resizeVolumeRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public resizeVolume(resizeVolumeRequest?: ResizeVolumeRequest): Promise<ResizeVolumeResponse> {
        const options = ParamCreater().resizeVolume(resizeVolumeRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 将快照数据回滚到云硬盘。支持企业项目授权功能。
     * 
     * 详细说明请参考华为云API Explorer。
     * Please refer to Huawei cloud API Explorer for details.
     *
     * @summary 回滚快照到云硬盘
     * @param {string} snapshotId 快照ID
     * @param {RollbackSnapshotRequestBody} rollbackSnapshotRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public rollbackSnapshot(rollbackSnapshotRequest?: RollbackSnapshotRequest): Promise<RollbackSnapshotResponse> {
        const options = ParamCreater().rollbackSnapshot(rollbackSnapshotRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询Job的执行状态。
     * 可用于查询创建云硬盘，扩容云硬盘，删除云硬盘等API的执行状态。
     * 
     * 详细说明请参考华为云API Explorer。
     * Please refer to Huawei cloud API Explorer for details.
     *
     * @summary 查询job的状态
     * @param {string} jobId job ID。
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
     * 查询单个云硬盘快照信息。支持企业项目授权功能。
     * 
     * 详细说明请参考华为云API Explorer。
     * Please refer to Huawei cloud API Explorer for details.
     *
     * @summary 查询单个云硬盘快照详情
     * @param {string} snapshotId 快照ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showSnapshot(showSnapshotRequest?: ShowSnapshotRequest): Promise<ShowSnapshotResponse> {
        const options = ParamCreater().showSnapshot(showSnapshotRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询单个云硬盘的详细信息。支持企业项目授权功能。
     * 
     * 详细说明请参考华为云API Explorer。
     * Please refer to Huawei cloud API Explorer for details.
     *
     * @summary 查询单个云硬盘详情
     * @param {string} volumeId 云硬盘ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showVolume(showVolumeRequest?: ShowVolumeRequest): Promise<ShowVolumeResponse> {
        const options = ParamCreater().showVolume(showVolumeRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定云硬盘的标签信息。
     * 
     * 详细说明请参考华为云API Explorer。
     * Please refer to Huawei cloud API Explorer for details.
     *
     * @summary 查询云硬盘标签
     * @param {string} volumeId 云硬盘ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showVolumeTags(showVolumeTagsRequest?: ShowVolumeTagsRequest): Promise<ShowVolumeTagsResponse> {
        const options = ParamCreater().showVolumeTags(showVolumeTagsRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新云硬盘快照。支持企业项目授权功能。
     * 
     * 详细说明请参考华为云API Explorer。
     * Please refer to Huawei cloud API Explorer for details.
     *
     * @summary 更新云硬盘快照
     * @param {string} snapshotId 快照ID
     * @param {UpdateSnapshotRequestBody} updateSnapshotRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateSnapshot(updateSnapshotRequest?: UpdateSnapshotRequest): Promise<UpdateSnapshotResponse> {
        const options = ParamCreater().updateSnapshot(updateSnapshotRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新一个云硬盘的名称和描述。
     * 
     * 详细说明请参考华为云API Explorer。
     * Please refer to Huawei cloud API Explorer for details.
     *
     * @summary 更新云硬盘
     * @param {string} volumeId 云硬盘ID。
     * @param {UpdateVolumeRequestBody} updateVolumeRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateVolume(updateVolumeRequest?: UpdateVolumeRequest): Promise<UpdateVolumeResponse> {
        const options = ParamCreater().updateVolume(updateVolumeRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询接口版本信息列表。
     * 
     * 详细说明请参考华为云API Explorer。
     * Please refer to Huawei cloud API Explorer for details.
     *
     * @summary 查询接口版本信息列表
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listVersions(): Promise<void> {
        const options = ParamCreater().listVersions();
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询接口的指定版本信息。
     * 
     * 详细说明请参考华为云API Explorer。
     * Please refer to Huawei cloud API Explorer for details.
     *
     * @summary 查询API接口的版本信息
     * @param {'v1' | 'v2' | 'v3'} version 查询的目标版本号。 取值为：v1、v2、v3。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showVersion(showVersionRequest?: ShowVersionRequest): Promise<ShowVersionResponse> {
        const options = ParamCreater().showVersion(showVersionRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 为指定云硬盘批量添加标签。
         * 
         * 添加标签时，如果云硬盘的标签已存在相同key，则会覆盖已有标签。
         * 单个云硬盘最多支持创建10个标签。
         * 
         * 详细说明请参考华为云API Explorer。
         * Please refer to Huawei cloud API Explorer for details.
         */
        batchCreateVolumeTags(batchCreateVolumeTagsRequest?: BatchCreateVolumeTagsRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/cloudvolumes/{volume_id}/tags/action",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            let volumeId;

            if (batchCreateVolumeTagsRequest !== null && batchCreateVolumeTagsRequest !== undefined) {
                if (batchCreateVolumeTagsRequest instanceof BatchCreateVolumeTagsRequest) {
                    volumeId = batchCreateVolumeTagsRequest.volumeId;
                    body = batchCreateVolumeTagsRequest.body
                } else {
                    volumeId = batchCreateVolumeTagsRequest['volume_id'];
                    body = batchCreateVolumeTagsRequest['body'];
                }
            }

        
            if (volumeId === null || volumeId === undefined) {
            throw new RequiredError('volumeId','Required parameter volumeId was null or undefined when calling batchCreateVolumeTags.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'volume_id': volumeId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 为指定云硬盘批量删除标签。
         * 
         * 详细说明请参考华为云API Explorer。
         * Please refer to Huawei cloud API Explorer for details.
         */
        batchDeleteVolumeTags(batchDeleteVolumeTagsRequest?: BatchDeleteVolumeTagsRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/cloudvolumes/{volume_id}/tags/action",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            let volumeId;

            if (batchDeleteVolumeTagsRequest !== null && batchDeleteVolumeTagsRequest !== undefined) {
                if (batchDeleteVolumeTagsRequest instanceof BatchDeleteVolumeTagsRequest) {
                    volumeId = batchDeleteVolumeTagsRequest.volumeId;
                    body = batchDeleteVolumeTagsRequest.body
                } else {
                    volumeId = batchDeleteVolumeTagsRequest['volume_id'];
                    body = batchDeleteVolumeTagsRequest['body'];
                }
            }

        
            if (volumeId === null || volumeId === undefined) {
            throw new RequiredError('volumeId','Required parameter volumeId was null or undefined when calling batchDeleteVolumeTags.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'volume_id': volumeId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 通过云硬盘过户记录ID以及身份认证密钥来接受云硬盘过户。
         * 
         * 详细说明请参考华为云API Explorer。
         * Please refer to Huawei cloud API Explorer for details.
         */
        cinderAcceptVolumeTransfer(cinderAcceptVolumeTransferRequest?: CinderAcceptVolumeTransferRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/os-volume-transfer/{transfer_id}/accept",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            let transferId;

            if (cinderAcceptVolumeTransferRequest !== null && cinderAcceptVolumeTransferRequest !== undefined) {
                if (cinderAcceptVolumeTransferRequest instanceof CinderAcceptVolumeTransferRequest) {
                    transferId = cinderAcceptVolumeTransferRequest.transferId;
                    body = cinderAcceptVolumeTransferRequest.body
                } else {
                    transferId = cinderAcceptVolumeTransferRequest['transfer_id'];
                    body = cinderAcceptVolumeTransferRequest['body'];
                }
            }

        
            if (transferId === null || transferId === undefined) {
            throw new RequiredError('transferId','Required parameter transferId was null or undefined when calling cinderAcceptVolumeTransfer.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'transfer_id': transferId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 指定云硬盘来创建云硬盘过户记录，创建成功后，会返回过户记录ID以及身份认证密钥。
         * 云硬盘在过户过程中的状态变化如下：创建云硬盘过户后，云硬盘状态由“available”变为“awaiting-transfer”。当云硬盘过户被接收后，云硬盘状态变为“available”。
         * 
         * 详细说明请参考华为云API Explorer。
         * Please refer to Huawei cloud API Explorer for details.
         */
        cinderCreateVolumeTransfer(cinderCreateVolumeTransferRequest?: CinderCreateVolumeTransferRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/os-volume-transfer",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (cinderCreateVolumeTransferRequest !== null && cinderCreateVolumeTransferRequest !== undefined) {
                if (cinderCreateVolumeTransferRequest instanceof CinderCreateVolumeTransferRequest) {
                    body = cinderCreateVolumeTransferRequest.body
                } else {
                    body = cinderCreateVolumeTransferRequest['body'];
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
         * 当云硬盘过户未被接受时，您可以删除云硬盘过户记录，接受后则无法执行删除操作。
         * 
         * 详细说明请参考华为云API Explorer。
         * Please refer to Huawei cloud API Explorer for details.
         */
        cinderDeleteVolumeTransfer(cinderDeleteVolumeTransferRequest?: CinderDeleteVolumeTransferRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/os-volume-transfer/{transfer_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let transferId;

            if (cinderDeleteVolumeTransferRequest !== null && cinderDeleteVolumeTransferRequest !== undefined) {
                if (cinderDeleteVolumeTransferRequest instanceof CinderDeleteVolumeTransferRequest) {
                    transferId = cinderDeleteVolumeTransferRequest.transferId;
                } else {
                    transferId = cinderDeleteVolumeTransferRequest['transfer_id'];
                }
            }

        
            if (transferId === null || transferId === undefined) {
            throw new RequiredError('transferId','Required parameter transferId was null or undefined when calling cinderDeleteVolumeTransfer.');
            }

            options.pathParams = { 'transfer_id': transferId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询所有的可用分区信息。
         * 
         * 详细说明请参考华为云API Explorer。
         * Please refer to Huawei cloud API Explorer for details.
         */
        cinderListAvailabilityZones() {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/os-availability-zone",
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
         * 查询租户的详细配额。
         * 
         * 详细说明请参考华为云API Explorer。
         * Please refer to Huawei cloud API Explorer for details.
         */
        cinderListQuotas(cinderListQuotasRequest?: CinderListQuotasRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/os-quota-sets/{target_project_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let targetProjectId;
            let usage;

            if (cinderListQuotasRequest !== null && cinderListQuotasRequest !== undefined) {
                if (cinderListQuotasRequest instanceof CinderListQuotasRequest) {
                    targetProjectId = cinderListQuotasRequest.targetProjectId;
                    usage = cinderListQuotasRequest.usage;
                } else {
                    targetProjectId = cinderListQuotasRequest['target_project_id'];
                    usage = cinderListQuotasRequest['usage'];
                }
            }

        
            if (targetProjectId === null || targetProjectId === undefined) {
            throw new RequiredError('targetProjectId','Required parameter targetProjectId was null or undefined when calling cinderListQuotas.');
            }
            if (usage === null || usage === undefined) {
                throw new RequiredError('usage','Required parameter usage was null or undefined when calling cinderListQuotas.');
            }
            if (usage !== null && usage !== undefined) {
                localVarQueryParameter['usage'] = usage;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'target_project_id': targetProjectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询当前租户下所有云硬盘的过户记录列表
         * 
         * 详细说明请参考华为云API Explorer。
         * Please refer to Huawei cloud API Explorer for details.
         */
        cinderListVolumeTransfers(cinderListVolumeTransfersRequest?: CinderListVolumeTransfersRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/os-volume-transfer",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let limit;
            let offset;

            if (cinderListVolumeTransfersRequest !== null && cinderListVolumeTransfersRequest !== undefined) {
                if (cinderListVolumeTransfersRequest instanceof CinderListVolumeTransfersRequest) {
                    limit = cinderListVolumeTransfersRequest.limit;
                    offset = cinderListVolumeTransfersRequest.offset;
                } else {
                    limit = cinderListVolumeTransfersRequest['limit'];
                    offset = cinderListVolumeTransfersRequest['offset'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询云硬盘类型列表。
         * 
         * 详细说明请参考华为云API Explorer。
         * Please refer to Huawei cloud API Explorer for details.
         */
        cinderListVolumeTypes() {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/types",
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
         * 查询单个云硬盘的过户记录详情，比如过户记录创建时间、ID以及名称等信息。
         * 
         * 详细说明请参考华为云API Explorer。
         * Please refer to Huawei cloud API Explorer for details.
         */
        cinderShowVolumeTransfer(cinderShowVolumeTransferRequest?: CinderShowVolumeTransferRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/os-volume-transfer/{transfer_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let transferId;

            if (cinderShowVolumeTransferRequest !== null && cinderShowVolumeTransferRequest !== undefined) {
                if (cinderShowVolumeTransferRequest instanceof CinderShowVolumeTransferRequest) {
                    transferId = cinderShowVolumeTransferRequest.transferId;
                } else {
                    transferId = cinderShowVolumeTransferRequest['transfer_id'];
                }
            }

        
            if (transferId === null || transferId === undefined) {
            throw new RequiredError('transferId','Required parameter transferId was null or undefined when calling cinderShowVolumeTransfer.');
            }

            options.pathParams = { 'transfer_id': transferId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建云硬盘快照。
         * 
         * 详细说明请参考华为云API Explorer。
         * Please refer to Huawei cloud API Explorer for details.
         */
        createSnapshot(createSnapshotRequest?: CreateSnapshotRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/cloudsnapshots",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (createSnapshotRequest !== null && createSnapshotRequest !== undefined) {
                if (createSnapshotRequest instanceof CreateSnapshotRequest) {
                    body = createSnapshotRequest.body
                } else {
                    body = createSnapshotRequest['body'];
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
         * 创建按需或包周期云硬盘。
         * 在创建包周期云硬盘的场景下：
         * - 如果您需要查看订单可用的优惠券，请参考\&quot;[查询订单可用优惠券](https://support.huaweicloud.com/api-oce/zh-cn_topic_0092953630.html)\&quot;。
         * - 如果您需要支付订单，请参考\&quot;[支付包周期产品订单](https://support.huaweicloud.com/api-oce/zh-cn_topic_0075746561.html)\&quot;。
         * - 如果您需要查询订单的资源开通详情，请参考\&quot;[查询订单的资源开通详情](https://support.huaweicloud.com/api-oce/api_order_00001.html)\&quot;。
         * - 如果您需要退订该包周期资源，请参考“[退订包周期资源](https://support.huaweicloud.com/api-oce/zh-cn_topic_0082522030.html)”。
         * 
         * 详细说明请参考华为云API Explorer。
         * Please refer to Huawei cloud API Explorer for details.
         */
        createVolume(createVolumeRequest?: CreateVolumeRequest) {
            const options = {
                method: "POST",
                url: "/v2.1/{project_id}/cloudvolumes",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (createVolumeRequest !== null && createVolumeRequest !== undefined) {
                if (createVolumeRequest instanceof CreateVolumeRequest) {
                    body = createVolumeRequest.body
                } else {
                    body = createVolumeRequest['body'];
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
         * 删除云硬盘快照。
         * 
         * 详细说明请参考华为云API Explorer。
         * Please refer to Huawei cloud API Explorer for details.
         */
        deleteSnapshot(deleteSnapshotRequest?: DeleteSnapshotRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/cloudsnapshots/{snapshot_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let snapshotId;

            if (deleteSnapshotRequest !== null && deleteSnapshotRequest !== undefined) {
                if (deleteSnapshotRequest instanceof DeleteSnapshotRequest) {
                    snapshotId = deleteSnapshotRequest.snapshotId;
                } else {
                    snapshotId = deleteSnapshotRequest['snapshot_id'];
                }
            }

        
            if (snapshotId === null || snapshotId === undefined) {
            throw new RequiredError('snapshotId','Required parameter snapshotId was null or undefined when calling deleteSnapshot.');
            }

            options.pathParams = { 'snapshot_id': snapshotId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除一个云硬盘。
         * 
         * 详细说明请参考华为云API Explorer。
         * Please refer to Huawei cloud API Explorer for details.
         */
        deleteVolume(deleteVolumeRequest?: DeleteVolumeRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/cloudvolumes/{volume_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let volumeId;

            if (deleteVolumeRequest !== null && deleteVolumeRequest !== undefined) {
                if (deleteVolumeRequest instanceof DeleteVolumeRequest) {
                    volumeId = deleteVolumeRequest.volumeId;
                } else {
                    volumeId = deleteVolumeRequest['volume_id'];
                }
            }

        
            if (volumeId === null || volumeId === undefined) {
            throw new RequiredError('volumeId','Required parameter volumeId was null or undefined when calling deleteVolume.');
            }

            options.pathParams = { 'volume_id': volumeId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询云硬盘快照详细列表信息。
         * 
         * 详细说明请参考华为云API Explorer。
         * Please refer to Huawei cloud API Explorer for details.
         */
        listSnapshots(listSnapshotsRequest?: ListSnapshotsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/cloudsnapshots/detail",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let offset;
            let limit;
            let name;
            let status;
            let volumeId;
            let availabilityZone;
            let id;
            let dedicatedStorageName;
            let dedicatedStorageId;
            let serviceType;
            let enterpriseProjectId;

            if (listSnapshotsRequest !== null && listSnapshotsRequest !== undefined) {
                if (listSnapshotsRequest instanceof ListSnapshotsRequest) {
                    offset = listSnapshotsRequest.offset;
                    limit = listSnapshotsRequest.limit;
                    name = listSnapshotsRequest.name;
                    status = listSnapshotsRequest.status;
                    volumeId = listSnapshotsRequest.volumeId;
                    availabilityZone = listSnapshotsRequest.availabilityZone;
                    id = listSnapshotsRequest.id;
                    dedicatedStorageName = listSnapshotsRequest.dedicatedStorageName;
                    dedicatedStorageId = listSnapshotsRequest.dedicatedStorageId;
                    serviceType = listSnapshotsRequest.serviceType;
                    enterpriseProjectId = listSnapshotsRequest.enterpriseProjectId;
                } else {
                    offset = listSnapshotsRequest['offset'];
                    limit = listSnapshotsRequest['limit'];
                    name = listSnapshotsRequest['name'];
                    status = listSnapshotsRequest['status'];
                    volumeId = listSnapshotsRequest['volume_id'];
                    availabilityZone = listSnapshotsRequest['availability_zone'];
                    id = listSnapshotsRequest['id'];
                    dedicatedStorageName = listSnapshotsRequest['dedicated_storage_name'];
                    dedicatedStorageId = listSnapshotsRequest['dedicated_storage_id'];
                    serviceType = listSnapshotsRequest['service_type'];
                    enterpriseProjectId = listSnapshotsRequest['enterprise_project_id'];
                }
            }

        
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (volumeId !== null && volumeId !== undefined) {
                localVarQueryParameter['volume_id'] = volumeId;
            }
            if (availabilityZone !== null && availabilityZone !== undefined) {
                localVarQueryParameter['availability_zone'] = availabilityZone;
            }
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (dedicatedStorageName !== null && dedicatedStorageName !== undefined) {
                localVarQueryParameter['dedicated_storage_name'] = dedicatedStorageName;
            }
            if (dedicatedStorageId !== null && dedicatedStorageId !== undefined) {
                localVarQueryParameter['dedicated_storage_id'] = dedicatedStorageId;
            }
            if (serviceType !== null && serviceType !== undefined) {
                localVarQueryParameter['service_type'] = serviceType;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取某个租户的所有云硬盘资源的标签信息。
         * 
         * 详细说明请参考华为云API Explorer。
         * Please refer to Huawei cloud API Explorer for details.
         */
        listVolumeTags() {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/cloudvolumes/tags",
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
         * 查询所有云硬盘的详细信息。
         * 
         * 详细说明请参考华为云API Explorer。
         * Please refer to Huawei cloud API Explorer for details.
         */
        listVolumes(listVolumesRequest?: ListVolumesRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/cloudvolumes/detail",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let marker;
            let name;
            let limit;
            let sortKey;
            let offset;
            let sortDir;
            let status;
            let metadata;
            let availabilityZone;
            let multiattach;
            let serviceType;
            let dedicatedStorageId;
            let dedicatedStorageName;
            let volumeTypeId;
            let id;
            let ids;
            let enterpriseProjectId;
            let serverId;

            if (listVolumesRequest !== null && listVolumesRequest !== undefined) {
                if (listVolumesRequest instanceof ListVolumesRequest) {
                    marker = listVolumesRequest.marker;
                    name = listVolumesRequest.name;
                    limit = listVolumesRequest.limit;
                    sortKey = listVolumesRequest.sortKey;
                    offset = listVolumesRequest.offset;
                    sortDir = listVolumesRequest.sortDir;
                    status = listVolumesRequest.status;
                    metadata = listVolumesRequest.metadata;
                    availabilityZone = listVolumesRequest.availabilityZone;
                    multiattach = listVolumesRequest.multiattach;
                    serviceType = listVolumesRequest.serviceType;
                    dedicatedStorageId = listVolumesRequest.dedicatedStorageId;
                    dedicatedStorageName = listVolumesRequest.dedicatedStorageName;
                    volumeTypeId = listVolumesRequest.volumeTypeId;
                    id = listVolumesRequest.id;
                    ids = listVolumesRequest.ids;
                    enterpriseProjectId = listVolumesRequest.enterpriseProjectId;
                    serverId = listVolumesRequest.serverId;
                } else {
                    marker = listVolumesRequest['marker'];
                    name = listVolumesRequest['name'];
                    limit = listVolumesRequest['limit'];
                    sortKey = listVolumesRequest['sort_key'];
                    offset = listVolumesRequest['offset'];
                    sortDir = listVolumesRequest['sort_dir'];
                    status = listVolumesRequest['status'];
                    metadata = listVolumesRequest['metadata'];
                    availabilityZone = listVolumesRequest['availability_zone'];
                    multiattach = listVolumesRequest['multiattach'];
                    serviceType = listVolumesRequest['service_type'];
                    dedicatedStorageId = listVolumesRequest['dedicated_storage_id'];
                    dedicatedStorageName = listVolumesRequest['dedicated_storage_name'];
                    volumeTypeId = listVolumesRequest['volume_type_id'];
                    id = listVolumesRequest['id'];
                    ids = listVolumesRequest['ids'];
                    enterpriseProjectId = listVolumesRequest['enterprise_project_id'];
                    serverId = listVolumesRequest['server_id'];
                }
            }

        
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (sortKey !== null && sortKey !== undefined) {
                localVarQueryParameter['sort_key'] = sortKey;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (sortDir !== null && sortDir !== undefined) {
                localVarQueryParameter['sort_dir'] = sortDir;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (metadata !== null && metadata !== undefined) {
                localVarQueryParameter['metadata'] = metadata;
            }
            if (availabilityZone !== null && availabilityZone !== undefined) {
                localVarQueryParameter['availability_zone'] = availabilityZone;
            }
            if (multiattach !== null && multiattach !== undefined) {
                localVarQueryParameter['multiattach'] = multiattach;
            }
            if (serviceType !== null && serviceType !== undefined) {
                localVarQueryParameter['service_type'] = serviceType;
            }
            if (dedicatedStorageId !== null && dedicatedStorageId !== undefined) {
                localVarQueryParameter['dedicated_storage_id'] = dedicatedStorageId;
            }
            if (dedicatedStorageName !== null && dedicatedStorageName !== undefined) {
                localVarQueryParameter['dedicated_storage_name'] = dedicatedStorageName;
            }
            if (volumeTypeId !== null && volumeTypeId !== undefined) {
                localVarQueryParameter['volume_type_id'] = volumeTypeId;
            }
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (ids !== null && ids !== undefined) {
                localVarQueryParameter['ids'] = ids;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (serverId !== null && serverId !== undefined) {
                localVarQueryParameter['server_id'] = serverId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 通过标签查询云硬盘资源实例详情。
         * 
         * 详细说明请参考华为云API Explorer。
         * Please refer to Huawei cloud API Explorer for details.
         */
        listVolumesByTags(listVolumesByTagsRequest?: ListVolumesByTagsRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/cloudvolumes/resource_instances/action",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (listVolumesByTagsRequest !== null && listVolumesByTagsRequest !== undefined) {
                if (listVolumesByTagsRequest instanceof ListVolumesByTagsRequest) {
                    body = listVolumesByTagsRequest.body
                } else {
                    body = listVolumesByTagsRequest['body'];
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
         * 对按需或者包周期云硬盘进行扩容。
         * 在扩容包周期云硬盘的场景下：
         * - 如果您需要查看订单可用的优惠券，请参考\&quot;[查询订单可用优惠券](https://support.huaweicloud.com/api-oce/zh-cn_topic_0092953630.html)\&quot;。
         * - 如果您需要支付订单，请参考\&quot;[支付包周期产品订单](https://support.huaweicloud.com/api-oce/zh-cn_topic_0075746561.html)\&quot;。
         * - 如果您需要查询订单的资源开通详情，请参考\&quot;[查询订单的资源开通详情](https://support.huaweicloud.com/api-oce/api_order_00001.html)\&quot;。
         * - 如果您需要退订该包周期资源，请参考“[退订包周期资源](https://support.huaweicloud.com/api-oce/zh-cn_topic_0082522030.html)”。
         * 
         * 详细说明请参考华为云API Explorer。
         * Please refer to Huawei cloud API Explorer for details.
         */
        resizeVolume(resizeVolumeRequest?: ResizeVolumeRequest) {
            const options = {
                method: "POST",
                url: "/v2.1/{project_id}/cloudvolumes/{volume_id}/action",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            let volumeId;

            if (resizeVolumeRequest !== null && resizeVolumeRequest !== undefined) {
                if (resizeVolumeRequest instanceof ResizeVolumeRequest) {
                    volumeId = resizeVolumeRequest.volumeId;
                    body = resizeVolumeRequest.body
                } else {
                    volumeId = resizeVolumeRequest['volume_id'];
                    body = resizeVolumeRequest['body'];
                }
            }

        
            if (volumeId === null || volumeId === undefined) {
            throw new RequiredError('volumeId','Required parameter volumeId was null or undefined when calling resizeVolume.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'volume_id': volumeId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 将快照数据回滚到云硬盘。支持企业项目授权功能。
         * 
         * 详细说明请参考华为云API Explorer。
         * Please refer to Huawei cloud API Explorer for details.
         */
        rollbackSnapshot(rollbackSnapshotRequest?: RollbackSnapshotRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/cloudsnapshots/{snapshot_id}/rollback",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            let snapshotId;

            if (rollbackSnapshotRequest !== null && rollbackSnapshotRequest !== undefined) {
                if (rollbackSnapshotRequest instanceof RollbackSnapshotRequest) {
                    snapshotId = rollbackSnapshotRequest.snapshotId;
                    body = rollbackSnapshotRequest.body
                } else {
                    snapshotId = rollbackSnapshotRequest['snapshot_id'];
                    body = rollbackSnapshotRequest['body'];
                }
            }

        
            if (snapshotId === null || snapshotId === undefined) {
            throw new RequiredError('snapshotId','Required parameter snapshotId was null or undefined when calling rollbackSnapshot.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'snapshot_id': snapshotId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询Job的执行状态。
         * 可用于查询创建云硬盘，扩容云硬盘，删除云硬盘等API的执行状态。
         * 
         * 详细说明请参考华为云API Explorer。
         * Please refer to Huawei cloud API Explorer for details.
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
         * 查询单个云硬盘快照信息。支持企业项目授权功能。
         * 
         * 详细说明请参考华为云API Explorer。
         * Please refer to Huawei cloud API Explorer for details.
         */
        showSnapshot(showSnapshotRequest?: ShowSnapshotRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/cloudsnapshots/{snapshot_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let snapshotId;

            if (showSnapshotRequest !== null && showSnapshotRequest !== undefined) {
                if (showSnapshotRequest instanceof ShowSnapshotRequest) {
                    snapshotId = showSnapshotRequest.snapshotId;
                } else {
                    snapshotId = showSnapshotRequest['snapshot_id'];
                }
            }

        
            if (snapshotId === null || snapshotId === undefined) {
            throw new RequiredError('snapshotId','Required parameter snapshotId was null or undefined when calling showSnapshot.');
            }

            options.pathParams = { 'snapshot_id': snapshotId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询单个云硬盘的详细信息。支持企业项目授权功能。
         * 
         * 详细说明请参考华为云API Explorer。
         * Please refer to Huawei cloud API Explorer for details.
         */
        showVolume(showVolumeRequest?: ShowVolumeRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/cloudvolumes/{volume_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let volumeId;

            if (showVolumeRequest !== null && showVolumeRequest !== undefined) {
                if (showVolumeRequest instanceof ShowVolumeRequest) {
                    volumeId = showVolumeRequest.volumeId;
                } else {
                    volumeId = showVolumeRequest['volume_id'];
                }
            }

        
            if (volumeId === null || volumeId === undefined) {
            throw new RequiredError('volumeId','Required parameter volumeId was null or undefined when calling showVolume.');
            }

            options.pathParams = { 'volume_id': volumeId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定云硬盘的标签信息。
         * 
         * 详细说明请参考华为云API Explorer。
         * Please refer to Huawei cloud API Explorer for details.
         */
        showVolumeTags(showVolumeTagsRequest?: ShowVolumeTagsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/cloudvolumes/{volume_id}/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let volumeId;

            if (showVolumeTagsRequest !== null && showVolumeTagsRequest !== undefined) {
                if (showVolumeTagsRequest instanceof ShowVolumeTagsRequest) {
                    volumeId = showVolumeTagsRequest.volumeId;
                } else {
                    volumeId = showVolumeTagsRequest['volume_id'];
                }
            }

        
            if (volumeId === null || volumeId === undefined) {
            throw new RequiredError('volumeId','Required parameter volumeId was null or undefined when calling showVolumeTags.');
            }

            options.pathParams = { 'volume_id': volumeId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新云硬盘快照。支持企业项目授权功能。
         * 
         * 详细说明请参考华为云API Explorer。
         * Please refer to Huawei cloud API Explorer for details.
         */
        updateSnapshot(updateSnapshotRequest?: UpdateSnapshotRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/cloudsnapshots/{snapshot_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            let snapshotId;

            if (updateSnapshotRequest !== null && updateSnapshotRequest !== undefined) {
                if (updateSnapshotRequest instanceof UpdateSnapshotRequest) {
                    snapshotId = updateSnapshotRequest.snapshotId;
                    body = updateSnapshotRequest.body
                } else {
                    snapshotId = updateSnapshotRequest['snapshot_id'];
                    body = updateSnapshotRequest['body'];
                }
            }

        
            if (snapshotId === null || snapshotId === undefined) {
            throw new RequiredError('snapshotId','Required parameter snapshotId was null or undefined when calling updateSnapshot.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'snapshot_id': snapshotId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新一个云硬盘的名称和描述。
         * 
         * 详细说明请参考华为云API Explorer。
         * Please refer to Huawei cloud API Explorer for details.
         */
        updateVolume(updateVolumeRequest?: UpdateVolumeRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/cloudvolumes/{volume_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            let volumeId;

            if (updateVolumeRequest !== null && updateVolumeRequest !== undefined) {
                if (updateVolumeRequest instanceof UpdateVolumeRequest) {
                    volumeId = updateVolumeRequest.volumeId;
                    body = updateVolumeRequest.body
                } else {
                    volumeId = updateVolumeRequest['volume_id'];
                    body = updateVolumeRequest['body'];
                }
            }

        
            if (volumeId === null || volumeId === undefined) {
            throw new RequiredError('volumeId','Required parameter volumeId was null or undefined when calling updateVolume.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'volume_id': volumeId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询接口版本信息列表。
         * 
         * 详细说明请参考华为云API Explorer。
         * Please refer to Huawei cloud API Explorer for details.
         */
        listVersions() {
            const options = {
                method: "GET",
                url: "/",
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
         * 查询接口的指定版本信息。
         * 
         * 详细说明请参考华为云API Explorer。
         * Please refer to Huawei cloud API Explorer for details.
         */
        showVersion(showVersionRequest?: ShowVersionRequest) {
            const options = {
                method: "GET",
                url: "/{version}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let version;

            if (showVersionRequest !== null && showVersionRequest !== undefined) {
                if (showVersionRequest instanceof ShowVersionRequest) {
                    version = showVersionRequest.version;
                } else {
                    version = showVersionRequest['version'];
                }
            }

        
            if (version === null || version === undefined) {
            throw new RequiredError('version','Required parameter version was null or undefined when calling showVersion.');
            }

            options.pathParams = { 'version': version, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
    }
};

function newClient(client: HcClient): EvsClient {
    return new EvsClient(client);
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