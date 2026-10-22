import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { AssociateAutoSnapshotPolicyRequest } from './model/AssociateAutoSnapshotPolicyRequest';
import { AssociateAutoSnapshotPolicyResponse } from './model/AssociateAutoSnapshotPolicyResponse';
import { Attachment } from './model/Attachment';
import { AzInfo } from './model/AzInfo';
import { BatchCreateResourceTagsRequestBody } from './model/BatchCreateResourceTagsRequestBody';
import { BatchCreateSnapshotGroupTagRequest } from './model/BatchCreateSnapshotGroupTagRequest';
import { BatchCreateSnapshotGroupTagResponse } from './model/BatchCreateSnapshotGroupTagResponse';
import { BatchCreateSnapshotTagsRequest } from './model/BatchCreateSnapshotTagsRequest';
import { BatchCreateSnapshotTagsResponse } from './model/BatchCreateSnapshotTagsResponse';
import { BatchCreateVolumeTagsRequest } from './model/BatchCreateVolumeTagsRequest';
import { BatchCreateVolumeTagsRequestBody } from './model/BatchCreateVolumeTagsRequestBody';
import { BatchCreateVolumeTagsResponse } from './model/BatchCreateVolumeTagsResponse';
import { BatchDeleteResourceTagsRequestBody } from './model/BatchDeleteResourceTagsRequestBody';
import { BatchDeleteSnapshotGroupTagRequest } from './model/BatchDeleteSnapshotGroupTagRequest';
import { BatchDeleteSnapshotGroupTagResponse } from './model/BatchDeleteSnapshotGroupTagResponse';
import { BatchDeleteSnapshotTagsRequest } from './model/BatchDeleteSnapshotTagsRequest';
import { BatchDeleteSnapshotTagsResponse } from './model/BatchDeleteSnapshotTagsResponse';
import { BatchDeleteVolumeTagsRequest } from './model/BatchDeleteVolumeTagsRequest';
import { BatchDeleteVolumeTagsRequestBody } from './model/BatchDeleteVolumeTagsRequestBody';
import { BatchDeleteVolumeTagsResponse } from './model/BatchDeleteVolumeTagsResponse';
import { BatchResizeVolumeRequestBody } from './model/BatchResizeVolumeRequestBody';
import { BatchResizeVolumesRequest } from './model/BatchResizeVolumesRequest';
import { BatchResizeVolumesResponse } from './model/BatchResizeVolumesResponse';
import { BssParam2 } from './model/BssParam2';
import { BssParamForCreateVolume } from './model/BssParamForCreateVolume';
import { BssParamForResizeVolume } from './model/BssParamForResizeVolume';
import { BssParamForRetypeVolume } from './model/BssParamForRetypeVolume';
import { ChangeVolumeChargeModeRequest } from './model/ChangeVolumeChargeModeRequest';
import { ChangeVolumeChargeModeRequestBody } from './model/ChangeVolumeChargeModeRequestBody';
import { ChangeVolumeChargeModeResponse } from './model/ChangeVolumeChargeModeResponse';
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
import { CinderUpdateSnapshotOptionV5 } from './model/CinderUpdateSnapshotOptionV5';
import { CountAutoSnapshotPoliciesRequest } from './model/CountAutoSnapshotPoliciesRequest';
import { CountAutoSnapshotPoliciesResponse } from './model/CountAutoSnapshotPoliciesResponse';
import { CountSnapshotChainsRequest } from './model/CountSnapshotChainsRequest';
import { CountSnapshotChainsResponse } from './model/CountSnapshotChainsResponse';
import { CountSnapshotsGroupRequest } from './model/CountSnapshotsGroupRequest';
import { CountSnapshotsGroupResponse } from './model/CountSnapshotsGroupResponse';
import { CountSnapshotsRequest } from './model/CountSnapshotsRequest';
import { CountSnapshotsResponse } from './model/CountSnapshotsResponse';
import { CreateAutoSnapshotPolicyRequest } from './model/CreateAutoSnapshotPolicyRequest';
import { CreateAutoSnapshotPolicyResponse } from './model/CreateAutoSnapshotPolicyResponse';
import { CreateResourceTag } from './model/CreateResourceTag';
import { CreateSnapshotGroupRequest } from './model/CreateSnapshotGroupRequest';
import { CreateSnapshotGroupRequestBody } from './model/CreateSnapshotGroupRequestBody';
import { CreateSnapshotGroupResponse } from './model/CreateSnapshotGroupResponse';
import { CreateSnapshotOption } from './model/CreateSnapshotOption';
import { CreateSnapshotPolicy } from './model/CreateSnapshotPolicy';
import { CreateSnapshotPolicyRequestBody } from './model/CreateSnapshotPolicyRequestBody';
import { CreateSnapshotRequest } from './model/CreateSnapshotRequest';
import { CreateSnapshotRequestBody } from './model/CreateSnapshotRequestBody';
import { CreateSnapshotResponse } from './model/CreateSnapshotResponse';
import { CreateStandardSnapshot } from './model/CreateStandardSnapshot';
import { CreateStandardSnapshotRequest } from './model/CreateStandardSnapshotRequest';
import { CreateStandardSnapshotRequestBody } from './model/CreateStandardSnapshotRequestBody';
import { CreateStandardSnapshotResponse } from './model/CreateStandardSnapshotResponse';
import { CreateVolumeOption } from './model/CreateVolumeOption';
import { CreateVolumeRequest } from './model/CreateVolumeRequest';
import { CreateVolumeRequestBody } from './model/CreateVolumeRequestBody';
import { CreateVolumeResponse } from './model/CreateVolumeResponse';
import { CreateVolumeSchedulerHints } from './model/CreateVolumeSchedulerHints';
import { CreateVolumeTransferDetail } from './model/CreateVolumeTransferDetail';
import { CreateVolumeTransferOption } from './model/CreateVolumeTransferOption';
import { DeleteAutoSnapshotPolicyRequest } from './model/DeleteAutoSnapshotPolicyRequest';
import { DeleteAutoSnapshotPolicyResponse } from './model/DeleteAutoSnapshotPolicyResponse';
import { DeleteResourceTag } from './model/DeleteResourceTag';
import { DeleteSnapshotGroupRequest } from './model/DeleteSnapshotGroupRequest';
import { DeleteSnapshotGroupResponse } from './model/DeleteSnapshotGroupResponse';
import { DeleteSnapshotRequest } from './model/DeleteSnapshotRequest';
import { DeleteSnapshotResponse } from './model/DeleteSnapshotResponse';
import { DeleteStandardSnapshotRequest } from './model/DeleteStandardSnapshotRequest';
import { DeleteStandardSnapshotResponse } from './model/DeleteStandardSnapshotResponse';
import { DeleteTagsOption } from './model/DeleteTagsOption';
import { DeleteVolumeInRecycleRequest } from './model/DeleteVolumeInRecycleRequest';
import { DeleteVolumeInRecycleResponse } from './model/DeleteVolumeInRecycleResponse';
import { DeleteVolumeRequest } from './model/DeleteVolumeRequest';
import { DeleteVolumeResponse } from './model/DeleteVolumeResponse';
import { DisassociateAutoSnapshotPolicyRequest } from './model/DisassociateAutoSnapshotPolicyRequest';
import { DisassociateAutoSnapshotPolicyResponse } from './model/DisassociateAutoSnapshotPolicyResponse';
import { GetSnapshotPolicy } from './model/GetSnapshotPolicy';
import { Iops } from './model/Iops';
import { JobEntities } from './model/JobEntities';
import { Link } from './model/Link';
import { ListAutoSnapshotPolicyRequest } from './model/ListAutoSnapshotPolicyRequest';
import { ListAutoSnapshotPolicyResponse } from './model/ListAutoSnapshotPolicyResponse';
import { ListResourceTagsResponseBodyTags } from './model/ListResourceTagsResponseBodyTags';
import { ListSnapshotChainsRequest } from './model/ListSnapshotChainsRequest';
import { ListSnapshotChainsResponse } from './model/ListSnapshotChainsResponse';
import { ListSnapshotChainsResponseBodySnapshotChains } from './model/ListSnapshotChainsResponseBodySnapshotChains';
import { ListSnapshotGroupRequest } from './model/ListSnapshotGroupRequest';
import { ListSnapshotGroupResponse } from './model/ListSnapshotGroupResponse';
import { ListSnapshotGroupTagsRequest } from './model/ListSnapshotGroupTagsRequest';
import { ListSnapshotGroupTagsResponse } from './model/ListSnapshotGroupTagsResponse';
import { ListSnapshotTagsRequest } from './model/ListSnapshotTagsRequest';
import { ListSnapshotTagsResponse } from './model/ListSnapshotTagsResponse';
import { ListSnapshotsDetailsRequest } from './model/ListSnapshotsDetailsRequest';
import { ListSnapshotsDetailsResponse } from './model/ListSnapshotsDetailsResponse';
import { ListSnapshotsRequest } from './model/ListSnapshotsRequest';
import { ListSnapshotsResponse } from './model/ListSnapshotsResponse';
import { ListVersionsRequest } from './model/ListVersionsRequest';
import { ListVersionsResponse } from './model/ListVersionsResponse';
import { ListVolumeTagsRequest } from './model/ListVolumeTagsRequest';
import { ListVolumeTagsResponse } from './model/ListVolumeTagsResponse';
import { ListVolumesByTagsRequest } from './model/ListVolumesByTagsRequest';
import { ListVolumesByTagsRequestBody } from './model/ListVolumesByTagsRequestBody';
import { ListVolumesByTagsResponse } from './model/ListVolumesByTagsResponse';
import { ListVolumesInRecycleRequest } from './model/ListVolumesInRecycleRequest';
import { ListVolumesInRecycleResponse } from './model/ListVolumesInRecycleResponse';
import { ListVolumesRequest } from './model/ListVolumesRequest';
import { ListVolumesResponse } from './model/ListVolumesResponse';
import { Match } from './model/Match';
import { MediaTypes } from './model/MediaTypes';
import { ModifyRecycleBinPolicyRequestBody } from './model/ModifyRecycleBinPolicyRequestBody';
import { ModifyVolumeQoSOption } from './model/ModifyVolumeQoSOption';
import { ModifyVolumeQoSRequest } from './model/ModifyVolumeQoSRequest';
import { ModifyVolumeQoSRequestBody } from './model/ModifyVolumeQoSRequestBody';
import { ModifyVolumeQoSResponse } from './model/ModifyVolumeQoSResponse';
import { OsExtend } from './model/OsExtend';
import { PrepaidParamForBatchResizeVolume } from './model/PrepaidParamForBatchResizeVolume';
import { QuotaDetail } from './model/QuotaDetail';
import { QuotaDetailBackupGigabytes } from './model/QuotaDetailBackupGigabytes';
import { QuotaDetailBackups } from './model/QuotaDetailBackups';
import { QuotaDetailGigabytes } from './model/QuotaDetailGigabytes';
import { QuotaDetailGigabytesSAS } from './model/QuotaDetailGigabytesSAS';
import { QuotaDetailGigabytesSATA } from './model/QuotaDetailGigabytesSATA';
import { QuotaDetailGigabytesSSD } from './model/QuotaDetailGigabytesSSD';
import { QuotaDetailPerVolumeGigabytes } from './model/QuotaDetailPerVolumeGigabytes';
import { QuotaDetailSnapshots } from './model/QuotaDetailSnapshots';
import { QuotaDetailSnapshotsSAS } from './model/QuotaDetailSnapshotsSAS';
import { QuotaDetailSnapshotsSATA } from './model/QuotaDetailSnapshotsSATA';
import { QuotaDetailSnapshotsSSD } from './model/QuotaDetailSnapshotsSSD';
import { QuotaDetailVolumes } from './model/QuotaDetailVolumes';
import { QuotaDetailVolumesSAS } from './model/QuotaDetailVolumesSAS';
import { QuotaDetailVolumesSATA } from './model/QuotaDetailVolumesSATA';
import { QuotaDetailVolumesSSD } from './model/QuotaDetailVolumesSSD';
import { QuotaList } from './model/QuotaList';
import { RecycleBinVolume } from './model/RecycleBinVolume';
import { ResizeVolumeRequest } from './model/ResizeVolumeRequest';
import { ResizeVolumeRequestBody } from './model/ResizeVolumeRequestBody';
import { ResizeVolumeResponse } from './model/ResizeVolumeResponse';
import { Resource } from './model/Resource';
import { RetypeVolume } from './model/RetypeVolume';
import { RetypeVolumeRequest } from './model/RetypeVolumeRequest';
import { RetypeVolumeRequestBody } from './model/RetypeVolumeRequestBody';
import { RetypeVolumeResponse } from './model/RetypeVolumeResponse';
import { RevertVolumeInRecycleRequest } from './model/RevertVolumeInRecycleRequest';
import { RevertVolumeInRecycleResponse } from './model/RevertVolumeInRecycleResponse';
import { RollbackInfo } from './model/RollbackInfo';
import { RollbackSnapshotOption } from './model/RollbackSnapshotOption';
import { RollbackSnapshotRequest } from './model/RollbackSnapshotRequest';
import { RollbackSnapshotRequestBody } from './model/RollbackSnapshotRequestBody';
import { RollbackSnapshotRequestBodyNew } from './model/RollbackSnapshotRequestBodyNew';
import { RollbackSnapshotRequestBodyV5 } from './model/RollbackSnapshotRequestBodyV5';
import { RollbackSnapshotResponse } from './model/RollbackSnapshotResponse';
import { RollbackStandardSnapshotRequest } from './model/RollbackStandardSnapshotRequest';
import { RollbackStandardSnapshotResponse } from './model/RollbackStandardSnapshotResponse';
import { ShowAutoSnapshotPolicyRequest } from './model/ShowAutoSnapshotPolicyRequest';
import { ShowAutoSnapshotPolicyResponse } from './model/ShowAutoSnapshotPolicyResponse';
import { ShowJobRequest } from './model/ShowJobRequest';
import { ShowJobResponse } from './model/ShowJobResponse';
import { ShowRecyclePolicyRequest } from './model/ShowRecyclePolicyRequest';
import { ShowRecyclePolicyResponse } from './model/ShowRecyclePolicyResponse';
import { ShowSnapshotGroupRequest } from './model/ShowSnapshotGroupRequest';
import { ShowSnapshotGroupResponse } from './model/ShowSnapshotGroupResponse';
import { ShowSnapshotRequest } from './model/ShowSnapshotRequest';
import { ShowSnapshotResponse } from './model/ShowSnapshotResponse';
import { ShowStandardSnapshotRequest } from './model/ShowStandardSnapshotRequest';
import { ShowStandardSnapshotResponse } from './model/ShowStandardSnapshotResponse';
import { ShowVersionRequest } from './model/ShowVersionRequest';
import { ShowVersionResponse } from './model/ShowVersionResponse';
import { ShowVolumeInRecycleRequest } from './model/ShowVolumeInRecycleRequest';
import { ShowVolumeInRecycleResponse } from './model/ShowVolumeInRecycleResponse';
import { ShowVolumeRequest } from './model/ShowVolumeRequest';
import { ShowVolumeResponse } from './model/ShowVolumeResponse';
import { ShowVolumeTagsRequest } from './model/ShowVolumeTagsRequest';
import { ShowVolumeTagsResponse } from './model/ShowVolumeTagsResponse';
import { SnapshotChains } from './model/SnapshotChains';
import { SnapshotDetailV5 } from './model/SnapshotDetailV5';
import { SnapshotDetails } from './model/SnapshotDetails';
import { SnapshotGroup } from './model/SnapshotGroup';
import { SnapshotGroupDetail } from './model/SnapshotGroupDetail';
import { SnapshotList } from './model/SnapshotList';
import { SubJob } from './model/SubJob';
import { SubJobEntities } from './model/SubJobEntities';
import { Tag } from './model/Tag';
import { TagsForListVolumes } from './model/TagsForListVolumes';
import { Throughput } from './model/Throughput';
import { UnsubscribePostpaidVolumeRequest } from './model/UnsubscribePostpaidVolumeRequest';
import { UnsubscribePostpaidVolumeResponse } from './model/UnsubscribePostpaidVolumeResponse';
import { UnsubscribeVolumeRequestBody } from './model/UnsubscribeVolumeRequestBody';
import { UpdateAutoSnapshotPolicyRequest } from './model/UpdateAutoSnapshotPolicyRequest';
import { UpdateAutoSnapshotPolicyResponse } from './model/UpdateAutoSnapshotPolicyResponse';
import { UpdateRecyclePolicyRequest } from './model/UpdateRecyclePolicyRequest';
import { UpdateRecyclePolicyResponse } from './model/UpdateRecyclePolicyResponse';
import { UpdateSnapshotGroupRequest } from './model/UpdateSnapshotGroupRequest';
import { UpdateSnapshotGroupRequestBody } from './model/UpdateSnapshotGroupRequestBody';
import { UpdateSnapshotGroupResponse } from './model/UpdateSnapshotGroupResponse';
import { UpdateSnapshotGroupResponseBody } from './model/UpdateSnapshotGroupResponseBody';
import { UpdateSnapshotOption } from './model/UpdateSnapshotOption';
import { UpdateSnapshotPolicy } from './model/UpdateSnapshotPolicy';
import { UpdateSnapshotPolicyRequestBody } from './model/UpdateSnapshotPolicyRequestBody';
import { UpdateSnapshotRequest } from './model/UpdateSnapshotRequest';
import { UpdateSnapshotRequestBody } from './model/UpdateSnapshotRequestBody';
import { UpdateSnapshotRequestBodyV5 } from './model/UpdateSnapshotRequestBodyV5';
import { UpdateSnapshotResponse } from './model/UpdateSnapshotResponse';
import { UpdateStandardSnapshotRequest } from './model/UpdateStandardSnapshotRequest';
import { UpdateStandardSnapshotResponse } from './model/UpdateStandardSnapshotResponse';
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
import { VolumesForBatchResizeVolume } from './model/VolumesForBatchResizeVolume';
import { ZoneState } from './model/ZoneState';

export class EvsClient {
    public static newBuilder(): ClientBuilder<EvsClient> {
            let client = new ClientBuilder<EvsClient>(newClient);
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
     * 绑定自动快照策略。标准快照当前只在部分区域支持，具体的区域列表请通过控制台查询。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 绑定自动快照策略
     * @param {string} snapshotPolicyId 自动快照策略ID。
     * @param {Array<string>} volumeIds 目标云硬盘 ID。当您需要取消多块云硬盘的自动快照策略时，多块云硬盘 ID 用一个格式类似 \&quot;d-xxxxxxxxx\&quot;, \&quot;d-yyyyyyyyy\&quot;, … \&quot;d-zzzzzzzzz\&quot; 的 JSON 数组表示，云硬盘 ID 之间用半角逗号（,）隔开。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public associateAutoSnapshotPolicy(associateAutoSnapshotPolicyRequest?: AssociateAutoSnapshotPolicyRequest): Promise<AssociateAutoSnapshotPolicyResponse> {
        const options = ParamCreater().associateAutoSnapshotPolicy(associateAutoSnapshotPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 为指定快照组添加标签。标准快照当前只在部分区域支持，具体的区域列表请通过控制台查询详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 为指定快照组添加标签
     * @param {string} snapshotGroupId **参数解释** 快照组ID。 **约束限制** 不涉及。 **取值范围** 不涉及。 **默认取值** 不涉及。
     * @param {BatchCreateResourceTagsRequestBody} batchCreateSnapshotGroupTagRequestBody 为指定快照组添加标签请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchCreateSnapshotGroupTag(batchCreateSnapshotGroupTagRequest?: BatchCreateSnapshotGroupTagRequest): Promise<BatchCreateSnapshotGroupTagResponse> {
        const options = ParamCreater().batchCreateSnapshotGroupTag(batchCreateSnapshotGroupTagRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 为指定快照添加标签。标准快照当前只在部分区域支持，具体的区域列表请通过控制台查询详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 为指定快照添加标签
     * @param {string} snapshotId **参数解释** 快照ID。 **约束限制** 不涉及。 **取值范围** 不涉及。 **默认取值** 不涉及。
     * @param {BatchCreateResourceTagsRequestBody} batchCreateSnapshotTagsRequestBody 为指定快照添加标签请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchCreateSnapshotTags(batchCreateSnapshotTagsRequest?: BatchCreateSnapshotTagsRequest): Promise<BatchCreateSnapshotTagsResponse> {
        const options = ParamCreater().batchCreateSnapshotTags(batchCreateSnapshotTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 为指定云硬盘批量添加标签。
     * 
     * 添加标签时，如果云硬盘的标签已存在相同key，则会覆盖已有标签。
     * 单个云硬盘最多支持创建10个标签。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 为指定云硬盘批量添加标签
     * @param {string} volumeId 云硬盘ID。
     * @param {BatchCreateVolumeTagsRequestBody} batchCreateVolumeTagsRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchCreateVolumeTags(batchCreateVolumeTagsRequest?: BatchCreateVolumeTagsRequest): Promise<BatchCreateVolumeTagsResponse> {
        const options = ParamCreater().batchCreateVolumeTags(batchCreateVolumeTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 为指定快照组删除标签。标准快照当前只在部分区域支持，具体的区域列表请通过控制台查询详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 为指定快照组删除标签
     * @param {string} snapshotGroupId **参数解释** 快照组ID。 **约束限制** 不涉及。 **取值范围** 不涉及。 **默认取值** 不涉及。
     * @param {BatchDeleteResourceTagsRequestBody} batchDeleteSnapshotGroupTagRequestBody 为指定快照组删除标签请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeleteSnapshotGroupTag(batchDeleteSnapshotGroupTagRequest?: BatchDeleteSnapshotGroupTagRequest): Promise<BatchDeleteSnapshotGroupTagResponse> {
        const options = ParamCreater().batchDeleteSnapshotGroupTag(batchDeleteSnapshotGroupTagRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 为指定快照删除标签。标准快照当前只在部分区域支持，具体的区域列表请通过控制台查询详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 为指定快照删除标签
     * @param {string} snapshotId **参数解释** 快照ID。 **约束限制** 不涉及。 **取值范围** 不涉及。 **默认取值** 不涉及。
     * @param {BatchDeleteResourceTagsRequestBody} batchDeleteSnapshotTagsRequestBody 为指定快照删除标签请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeleteSnapshotTags(batchDeleteSnapshotTagsRequest?: BatchDeleteSnapshotTagsRequest): Promise<BatchDeleteSnapshotTagsResponse> {
        const options = ParamCreater().batchDeleteSnapshotTags(batchDeleteSnapshotTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 为指定云硬盘批量删除标签。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 为指定云硬盘批量删除标签
     * @param {string} volumeId 磁盘ID。
     * @param {BatchDeleteVolumeTagsRequestBody} batchDeleteVolumeTagsRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeleteVolumeTags(batchDeleteVolumeTagsRequest?: BatchDeleteVolumeTagsRequest): Promise<BatchDeleteVolumeTagsResponse> {
        const options = ParamCreater().batchDeleteVolumeTags(batchDeleteVolumeTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 对按需或者包周期云硬盘进行批量扩容。
     * [在批量扩容存在包周期云硬盘的场景下：](tag:hws)
     * - [如果您需要查看订单可用的优惠券，请参考\&quot;[查询订单可用优惠券](https://support.huaweicloud.com/api-oce/zh-cn_topic_0092953630.html)\&quot;。](tag:hws)
     * - [如果您需要支付订单，请参考\&quot;[支付包周期产品订单](https://support.huaweicloud.com/api-oce/api_order_00030.html)\&quot;。](tag:hws)
     * - [如果您需要退订该包周期资源，请参考“[退订包周期资源](https://support.huaweicloud.com/api-oce/zh-cn_topic_0082522030.html)”。](tag:hws)
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量扩容云硬盘
     * @param {BatchResizeVolumeRequestBody} batchResizeVolumeRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchResizeVolumes(batchResizeVolumesRequest?: BatchResizeVolumesRequest): Promise<BatchResizeVolumesResponse> {
        const options = ParamCreater().batchResizeVolumes(batchResizeVolumesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 将挂载状态下的云硬盘的计费模式有按需转成包周期，且到期时间和挂载的虚拟机保持一致。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改云硬盘计费模式
     * @param {ChangeVolumeChargeModeRequestBody} changeVolumeChargeModeRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public changeVolumeChargeMode(changeVolumeChargeModeRequest?: ChangeVolumeChargeModeRequest): Promise<ChangeVolumeChargeModeResponse> {
        const options = ParamCreater().changeVolumeChargeMode(changeVolumeChargeModeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 通过云硬盘过户记录ID以及身份认证密钥来接受云硬盘过户。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 接受云硬盘过户
     * @param {string} transferId 云硬盘ID
     * @param {CinderAcceptVolumeTransferRequestBody} cinderAcceptVolumeTransferRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public cinderAcceptVolumeTransfer(cinderAcceptVolumeTransferRequest?: CinderAcceptVolumeTransferRequest): Promise<CinderAcceptVolumeTransferResponse> {
        const options = ParamCreater().cinderAcceptVolumeTransfer(cinderAcceptVolumeTransferRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 指定云硬盘来创建云硬盘过户记录，创建成功后，会返回过户记录ID以及身份认证密钥。
     * 云硬盘在过户过程中的状态变化如下：创建云硬盘过户后，云硬盘状态由“available”变为“awaiting-transfer”。当云硬盘过户被接收后，云硬盘状态变为“available”。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建云硬盘过户
     * @param {CinderCreateVolumeTransferRequestBody} cinderCreateVolumeTransferRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public cinderCreateVolumeTransfer(cinderCreateVolumeTransferRequest?: CinderCreateVolumeTransferRequest): Promise<CinderCreateVolumeTransferResponse> {
        const options = ParamCreater().cinderCreateVolumeTransfer(cinderCreateVolumeTransferRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 当云硬盘过户未被接受时，您可以删除云硬盘过户记录，接受后则无法执行删除操作。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除云硬盘过户
     * @param {string} transferId 云硬盘过户记录ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public cinderDeleteVolumeTransfer(cinderDeleteVolumeTransferRequest?: CinderDeleteVolumeTransferRequest): Promise<CinderDeleteVolumeTransferResponse> {
        const options = ParamCreater().cinderDeleteVolumeTransfer(cinderDeleteVolumeTransferRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询所有的可用分区信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询所有的可用分区信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public cinderListAvailabilityZones(cinderListAvailabilityZonesRequest?: CinderListAvailabilityZonesRequest): Promise<CinderListAvailabilityZonesResponse> {
        const options = ParamCreater().cinderListAvailabilityZones();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询租户的详细配额。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询租户的详细配额
     * @param {string} targetProjectId 目标的项目ID。与project_id保持一致即可。
     * @param {'True'} usage 是否查询配额详细信息。当前只支持传true。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public cinderListQuotas(cinderListQuotasRequest?: CinderListQuotasRequest): Promise<CinderListQuotasResponse> {
        const options = ParamCreater().cinderListQuotas(cinderListQuotasRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询当前租户下所有云硬盘的过户记录列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询云硬盘过户记录列表概要
     * @param {number} [limit] 返回结果个数限制，取值为大 于0的整数
     * @param {number} [offset] 偏移量，偏移量为一个大于0小 于云硬盘过户记录总个数的整 数，表示查询该偏移量后面的 所有的云硬盘过户记录
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public cinderListVolumeTransfers(cinderListVolumeTransfersRequest?: CinderListVolumeTransfersRequest): Promise<CinderListVolumeTransfersResponse> {
        const options = ParamCreater().cinderListVolumeTransfers(cinderListVolumeTransfersRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询云硬盘类型列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询云硬盘类型列表
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public cinderListVolumeTypes(cinderListVolumeTypesRequest?: CinderListVolumeTypesRequest): Promise<CinderListVolumeTypesResponse> {
        const options = ParamCreater().cinderListVolumeTypes();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询单个云硬盘的过户记录详情，比如过户记录创建时间、ID以及名称等信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询单个云硬盘过户记录详情
     * @param {string} transferId 云硬盘过户记录ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public cinderShowVolumeTransfer(cinderShowVolumeTransferRequest?: CinderShowVolumeTransferRequest): Promise<CinderShowVolumeTransferResponse> {
        const options = ParamCreater().cinderShowVolumeTransfer(cinderShowVolumeTransferRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询自动快照策略总数。标准快照当前只在部分区域支持，具体的区域列表请通过控制台查询。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询自动快照策略总数
     * @param {string} [id] 自动快照策略ID。
     * @param {string} [name] 自动快照策略名称。
     * @param {string} [tagKey] 自动快照策略的标签的key。
     * @param {string} [tags] 自动快照策略的标签的key/value对，例如[{\&quot;key1\&quot;:\&quot;value1\&quot;}]。
     * @param {string} [enterpriseProjectId] 自动快照策略的企业项目ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public countAutoSnapshotPolicies(countAutoSnapshotPoliciesRequest?: CountAutoSnapshotPoliciesRequest): Promise<CountAutoSnapshotPoliciesResponse> {
        const options = ParamCreater().countAutoSnapshotPolicies(countAutoSnapshotPoliciesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询快照链个数。标准快照当前只在部分区域支持，具体的区域列表请通过控制台查询。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询快照链个数
     * @param {string} [volumeId] **参数解释** 快照链所属的云硬盘ID。 可通过[查询所有云硬盘详情](evs_04_2006.xml)获取云硬盘ID。 **约束限制** 不涉及。 **取值范围** 不涉及。 **默认取值** 不涉及。
     * @param {string} [availabilityZone] **参数解释** 快照链对应的云硬盘所在的可用区。  **约束限制** 不涉及。 **取值范围** 不涉及。         **默认取值** 不涉及。
     * @param {string} [category] **参数解释** 快照链的类型。 **约束限制** 不涉及。 **取值范围** 当前快照链支持\&quot;standard\&quot;、\&quot;standard_copy\&quot;两种类型。  **默认取值** 不涉及。
     * @param {string} [id] **参数解释** 快照链ID。 可通过[查询快照链列表](ListSnapshotChains.xml)接口获取快照链ID。 **约束限制** 不涉及。 **取值范围** 不涉及。  **默认取值** 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public countSnapshotChains(countSnapshotChainsRequest?: CountSnapshotChainsRequest): Promise<CountSnapshotChainsResponse> {
        const options = ParamCreater().countSnapshotChains(countSnapshotChainsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询快照个数。标准快照当前只在部分区域支持，具体的区域列表请通过控制台查询。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询快照个数
     * @param {string} [volumeId] **参数解释** 快照对应的云硬盘ID。 可通过[查询所有云硬盘详情](evs_04_2006.xml)获取云硬盘ID。 **约束限制** 不涉及。 **取值范围** 不涉及。 **默认取值** 不涉及。
     * @param {string} [availabilityZone] **参数解释** 快照对应的云硬盘所在的可用区。 **约束限制** 不涉及。 **取值范围** 不涉及。 **默认取值** 不涉及。
     * @param {string} [name] **参数解释** 快照名称。 **约束限制** 不涉及。 **取值范围** 最大支持64个字符。 **默认取值** 不涉及。
     * @param {string} [status] **参数解释** 快照状态。 **约束限制** 最大支持255个字符。 **取值范围** [具体请参见[云硬盘快照状态](evs_04_0041.xml)。] **默认取值** 不涉及。
     * @param {string} [id] **参数解释** 快照ID。 可通过[查询云硬盘快照详情列表](evs_04_2021.xml)接口获取云硬盘快照ID。 **约束限制** 不涉及。 **取值范围** 不涉及。 **默认取值** 不涉及。
     * @param {string} [snapshotType] **参数解释** 快照来源。 **约束限制** 不涉及。 **取值范围** 不涉及。 **默认取值** 不涉及。
     * @param {string} [enterpriseProjectId] **参数解释** 快照的企业项目ID。  关于企业项目ID的获取及企业项目特性的详细信息，请参考：\&quot;[[企业管理用户指南](https://support.huaweicloud.com/usermanual-em/zh-cn_topic_0123692049.html)](tag:hws)[[企业管理用户指南](https://support.huaweicloud.com/intl/zh-cn/usermanual-em/zh-cn_topic_0123692049.html)](tag:hws_hk)\&quot;。 **约束限制** 不涉及。 **取值范围** 不涉及。 **默认取值** 不涉及。
     * @param {string} [tagKey] **参数解释** 快照标签的key。 **约束限制** 不涉及。 **取值范围** 不涉及。 **默认取值** 不涉及。
     * @param {string} [tags] **参数解释** 快照标签的key/value对，例如[{\&quot;key\&quot;:\&quot;bbb\&quot;,\&quot;value\&quot;:\&quot;bbb\&quot;}]。 **约束限制** 不涉及。 **取值范围** 不涉及。 **默认取值** 不涉及。
     * @param {string} [snapshotChainId] **参数解释** 快照链ID。 **约束限制** 不涉及。 **取值范围** 不涉及。 **默认取值** 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public countSnapshots(countSnapshotsRequest?: CountSnapshotsRequest): Promise<CountSnapshotsResponse> {
        const options = ParamCreater().countSnapshots(countSnapshotsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询快照一致性组个数。标准快照当前只在部分区域支持，具体的区域列表请通过控制台查询。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询快照一致性组个数
     * @param {string} [name] **参数解释** 快照一致性组的名称。 **约束限制** 不涉及。 **取值范围** 不涉及。 **默认取值** 不涉及。
     * @param {string} [status] **参数解释** 快照一致性组的状态。 **约束限制** 不涉及。 **取值范围** - creating：创建中。 - available：创建成功。 - error：创建失败。 - deleting: 删除中。 - deleted：删除成功。 - error_deleting：删除失败。 **默认取值** 不涉及。
     * @param {string} [id] **参数解释** 指定的快照一致性组ID。 **约束限制** 不涉及。 **取值范围** 不涉及。 **默认取值** 不涉及。
     * @param {string} [enterpriseProjectId] **参数解释** 快照一致性组的企业项目ID。 **约束限制** 不涉及。 **取值范围** 不涉及。 **默认取值** 不涉及。
     * @param {string} [tagKey] **参数解释** 快照一致性组的标签的key。 **约束限制** 不涉及。 **取值范围** 不涉及。 **默认取值** 不涉及。
     * @param {string} [tags] **参数解释** 快照一致性组的标签的key/value对，例如[{\&quot;key\&quot;:\&quot;bbb\&quot;,\&quot;value\&quot;:\&quot;bbb\&quot;}]。 **约束限制** 不涉及。 **取值范围** 不涉及。 **默认取值** 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public countSnapshotsGroup(countSnapshotsGroupRequest?: CountSnapshotsGroupRequest): Promise<CountSnapshotsGroupResponse> {
        const options = ParamCreater().countSnapshotsGroup(countSnapshotsGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建自动快照策略。标准快照当前只在部分区域支持，具体的区域列表请通过控制台查询。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建自动快照策略
     * @param {CreateSnapshotPolicyRequestBody} createSnapshotPolicyRequestBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createAutoSnapshotPolicy(createAutoSnapshotPolicyRequest?: CreateAutoSnapshotPolicyRequest): Promise<CreateAutoSnapshotPolicyResponse> {
        const options = ParamCreater().createAutoSnapshotPolicy(createAutoSnapshotPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建云硬盘快照。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建云硬盘快照
     * @param {CreateSnapshotRequestBody} createSnapshotRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createSnapshot(createSnapshotRequest?: CreateSnapshotRequest): Promise<CreateSnapshotResponse> {
        const options = ParamCreater().createSnapshot(createSnapshotRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建快照一致性组。标准快照当前只在部分区域支持，具体的区域列表请通过控制台查询。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建快照一致性组
     * @param {CreateSnapshotGroupRequestBody} createSnapshotGroupRequestBody 创建快照一致性组请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createSnapshotGroup(createSnapshotGroupRequest?: CreateSnapshotGroupRequest): Promise<CreateSnapshotGroupResponse> {
        const options = ParamCreater().createSnapshotGroup(createSnapshotGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建标准快照。标准快照当前只在部分区域支持，具体的区域列表请通过控制台查询。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建快照
     * @param {CreateStandardSnapshotRequestBody} [createStandardSnapshotRequestBody] **参数解释** 创建标准快照请求体。 **约束限制** 不涉及。 **取值范围** 不涉及。 **默认取值** 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createStandardSnapshot(createStandardSnapshotRequest?: CreateStandardSnapshotRequest): Promise<CreateStandardSnapshotResponse> {
        const options = ParamCreater().createStandardSnapshot(createStandardSnapshotRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

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
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建云硬盘
     * @param {CreateVolumeRequestBody} createVolumeRequestBody This is a auto create Body Object
     * @param {string} [xClientToken] 请求的幂等标识。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createVolume(createVolumeRequest?: CreateVolumeRequest): Promise<CreateVolumeResponse> {
        const options = ParamCreater().createVolume(createVolumeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除单个自动快照策略。标准快照当前只在部分区域支持，具体的区域列表请通过控制台查询。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除单个自动快照策略
     * @param {string} snapshotPolicyId 自动快照策略ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteAutoSnapshotPolicy(deleteAutoSnapshotPolicyRequest?: DeleteAutoSnapshotPolicyRequest): Promise<DeleteAutoSnapshotPolicyResponse> {
        const options = ParamCreater().deleteAutoSnapshotPolicy(deleteAutoSnapshotPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除云硬盘快照。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除云硬盘快照
     * @param {string} snapshotId 快照ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteSnapshot(deleteSnapshotRequest?: DeleteSnapshotRequest): Promise<DeleteSnapshotResponse> {
        const options = ParamCreater().deleteSnapshot(deleteSnapshotRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除快照一致性组。标准快照当前只在部分区域支持，具体的区域列表请通过控制台查询。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除快照一致性组
     * @param {string} snapshotGroupId **参数解释** 快照一致性组ID。 可通过[查询快照一致性组列表](ListSnapshotGroup.xml)接口获取快照一致性组ID。 **约束限制** 不涉及。 **取值范围** 不涉及。 **默认取值** 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteSnapshotGroup(deleteSnapshotGroupRequest?: DeleteSnapshotGroupRequest): Promise<DeleteSnapshotGroupResponse> {
        const options = ParamCreater().deleteSnapshotGroup(deleteSnapshotGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除快照。标准快照当前只在部分区域支持，具体的区域列表请通过控制台查询。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除快照
     * @param {string} snapshotId **参数解释** 快照ID。 可通过[查询云硬盘快照详情列表](evs_04_2021.xml)接口获取云硬盘快照ID。 **约束限制** 不涉及。 **取值范围** 不涉及。 **默认取值** 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteStandardSnapshot(deleteStandardSnapshotRequest?: DeleteStandardSnapshotRequest): Promise<DeleteStandardSnapshotResponse> {
        const options = ParamCreater().deleteStandardSnapshot(deleteStandardSnapshotRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除一个云硬盘。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除云硬盘
     * @param {string} volumeId 云硬盘ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteVolume(deleteVolumeRequest?: DeleteVolumeRequest): Promise<DeleteVolumeResponse> {
        const options = ParamCreater().deleteVolume(deleteVolumeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除回收站中单个云硬盘。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除回收站中单个云硬盘
     * @param {string} volumeId **参数解释** 云硬盘ID。 可通过[查询所有云硬盘详情](evs_04_2006.xml)获取云硬盘ID。 **约束限制** 不涉及。 **取值范围** 不涉及。 **默认取值** 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteVolumeInRecycle(deleteVolumeInRecycleRequest?: DeleteVolumeInRecycleRequest): Promise<DeleteVolumeInRecycleResponse> {
        const options = ParamCreater().deleteVolumeInRecycle(deleteVolumeInRecycleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 解绑自动快照策略。标准快照当前只在部分区域支持，具体的区域列表请通过控制台查询。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 解绑自动快照策略
     * @param {string} snapshotPolicyId 自动快照策略ID。
     * @param {Array<string>} volumeIds 目标云硬盘 ID。当您需要取消多块云硬盘的自动快照策略时，多块云硬盘 ID 用一个格式类似 \&quot;d-xxxxxxxxx\&quot;, \&quot;d-yyyyyyyyy\&quot;, … \&quot;d-zzzzzzzzz\&quot; 的 JSON 数组表示，云硬盘 ID 之间用半角逗号（,）隔开。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public disassociateAutoSnapshotPolicy(disassociateAutoSnapshotPolicyRequest?: DisassociateAutoSnapshotPolicyRequest): Promise<DisassociateAutoSnapshotPolicyResponse> {
        const options = ParamCreater().disassociateAutoSnapshotPolicy(disassociateAutoSnapshotPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询自动快照策略。标准快照当前只在部分区域支持，具体的区域列表请通过控制台查询。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询自动快照策略
     * @param {string} [id] 自动快照策略ID。
     * @param {string} [name] 自动快照策略名称。
     * @param {string} [tags] 自动快照策略的标签的key/value对，例如[{\&quot;key1\&quot;:\&quot;value1\&quot;}]。
     * @param {string} [tagKey] 自动快照策略的标签的key。
     * @param {string} [enterpriseProjectId] 自动快照策略的企业项目ID。
     * @param {number} [limit] 返回结果个数限制。
     * @param {number} [offset] 偏移量。
     * @param {string} [sortKey] 返回结果按该关键字排序，支持id，created_at等关键字，默认为“created_at”。
     * @param {string} [sortDir] 返回结果按照降序或升序排列，默认为“desc”。 降序：desc 升序：asc
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAutoSnapshotPolicy(listAutoSnapshotPolicyRequest?: ListAutoSnapshotPolicyRequest): Promise<ListAutoSnapshotPolicyResponse> {
        const options = ParamCreater().listAutoSnapshotPolicy(listAutoSnapshotPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询快照链的列表。标准快照当前只在部分区域支持，具体的区域列表请通过控制台查询。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询快照链列表
     * @param {string} [marker] **参数解释** 分页查询的起始资源ID，取值为上一页最后一条查询记录的资源ID。 **约束限制** 不涉及。 **取值范围** 不涉及。 **默认取值** 不涉及。
     * @param {number} [limit] **参数解释** 返回结果个数限制。 **约束限制** 不涉及。 **取值范围** 最小值1，最大值1000，默认为1000。返回的结果中记录数不超过limit值。 **默认取值** 不涉及。
     * @param {string} [id] **参数解释** 快照链ID。 **约束限制** 不涉及。 **取值范围** 不涉及。 **默认取值** 不涉及。
     * @param {string} [volumeId] **参数解释** 快照链所属的云硬盘ID。 可通过[查询所有云硬盘详情](evs_04_2006.xml)获取云硬盘ID。 **约束限制** 不涉及。 **取值范围** 不涉及。 **默认取值** 不涉及。
     * @param {string} [category] **参数解释** 快照链的类型。 **约束限制** 不涉及。 **取值范围** 当前快照链支持\&quot;standard\&quot;、\&quot;backup\&quot;和\&quot;server_backup\&quot;三种类型。 **默认取值** 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSnapshotChains(listSnapshotChainsRequest?: ListSnapshotChainsRequest): Promise<ListSnapshotChainsResponse> {
        const options = ParamCreater().listSnapshotChains(listSnapshotChainsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询快照一致性组列表。标准快照当前只在部分区域支持，具体的区域列表请通过控制台查询。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询快照一致性组列表
     * @param {string} [id] **参数解释** 指定的快照一致性组ID。 **约束限制** 不涉及。 **取值范围** 不涉及。 **默认取值** 不涉及。
     * @param {string} [name] **参数解释** 快照一致性组名称。 **约束限制** 最大支持255个字节。 最小长度：0 最大长度：255 **取值范围** 不涉及。 **默认取值** 不涉及。
     * @param {string} [status] **参数解释** 快照一致性组的状态。 **约束限制** 不涉及。 **取值范围** - creating：创建中。 - available：创建成功。 - error：创建失败。 - deleting: 删除中。 - deleted：删除成功。 - error_deleting：删除失败。 **默认取值** 不涉及。
     * @param {string} [tagKey] **参数解释** 快照一致性组的标签的key。 **约束限制** 不涉及。 **取值范围** 不涉及。 **默认取值** 不涉及。
     * @param {string} [tags] **参数解释** 快照一致性组的标签的key/value对，例如[{\&quot;key\&quot;:\&quot;bbb\&quot;,\&quot;value\&quot;:\&quot;bbb\&quot;}]。 **约束限制** 不涉及。 **取值范围** 不涉及。 **默认取值** 不涉及。
     * @param {string} [enterpriseProjectId] **参数解释** 快照一致性组的企业项目ID。 **约束限制** 不涉及。 **取值范围** 不涉及。 **默认取值** 不涉及。
     * @param {number} [limit] **参数解释** 返回结果个数限制。 **约束限制** 不涉及。 **取值范围** 不涉及。 **默认取值** 不涉及。
     * @param {number} [offset] **参数解释** 偏移量。 **约束限制** 不涉及。 **取值范围** 不涉及。 **默认取值** 不涉及。
     * @param {string} [sortKey] **参数解释** 返回结果按该关键字排序。 **约束限制** 不涉及。 **取值范围** - id：快照一致性组的ID。 - status：快照一致性组的状态。 - created_at：快照一致性组的创建时间。 **默认取值** created_at
     * @param {string} [sortDir] **参数解释** 返回结果按照降序或升序排列。 **约束限制** 不涉及。 **取值范围** - desc：降序。 - asc：升序。 **默认取值** desc
     * @param {string} [serverId] **参数解释** 云服务器ID。 **约束限制** 不涉及。 **取值范围** 不涉及。 **默认取值** 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSnapshotGroup(listSnapshotGroupRequest?: ListSnapshotGroupRequest): Promise<ListSnapshotGroupResponse> {
        const options = ParamCreater().listSnapshotGroup(listSnapshotGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询快照组的所有标签。标准快照当前只在部分区域支持，具体的区域列表请通过控制台查询详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询快照组的所有标签
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSnapshotGroupTags(listSnapshotGroupTagsRequest?: ListSnapshotGroupTagsRequest): Promise<ListSnapshotGroupTagsResponse> {
        const options = ParamCreater().listSnapshotGroupTags();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询快照资源的所有标签。标准快照当前只在部分区域支持，具体的区域列表请通过控制台查询详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询快照资源的所有标签
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSnapshotTags(listSnapshotTagsRequest?: ListSnapshotTagsRequest): Promise<ListSnapshotTagsResponse> {
        const options = ParamCreater().listSnapshotTags();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询云硬盘快照详细列表信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
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

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询快照详情列表。标准快照当前只在部分区域支持，具体的区域列表请通过控制台查询。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询快照详情列表
     * @param {string} [marker] **参数解释** 分页查询的起始资源id，取值为上一页最后一条查询记录的资源id。 **约束限制** 不涉及。 **取值范围** 不涉及。 **默认取值** 不涉及。
     * @param {string} [volumeId] **参数解释** 快照对应的云硬盘ID。 可通过[查询所有云硬盘详情](evs_04_2006.xml)获取云硬盘ID。 **约束限制** 不涉及。 **取值范围** 不涉及。 **默认取值** 不涉及。
     * @param {string} [availabilityZone] **参数解释** 快照对应的云硬盘所在的可用区。 **约束限制** 不涉及。 **取值范围** 不涉及。 **默认取值** 不涉及。
     * @param {string} [limit] **参数解释** 返回结果个数限制。  当租户所有的快照数量大于50个时，为了提升您的查询效率，建议查询的时候使用limit参数，并且参数值最大设置为50。查询示例：  GET /v2/xxx/snapshots/detail?limit&#x3D;50，表示查询第1~50个快照。GET /v2/xxx/snapshots/detail?offset&#x3D;50&amp;limit&#x3D;50，表示查询第51~100个快照。 **约束限制** 不涉及。 **取值范围** 最小值1，最大值1000，默认为1000。返回的结果中记录数不超过limit值。 **默认取值** 不涉及。
     * @param {string} [name] **参数解释** 快照名称。 **约束限制** 不涉及。 **取值范围** 最大支持255个字符。 **默认取值** 不涉及。
     * @param {string} [offset] **参数解释** 偏移量。  分页查询快照时使用，与limit配合使用。假如共有30个快照， 设置offset为11，limit为10，即为从第12个快照开始查询， 一次最多可读取10个快照。 **约束限制** 与limit配合使用。 **取值范围** 不涉及。 **默认取值** 不涉及。
     * @param {string} [status] **参数解释** 快照状态。 **约束限制** 不涉及。 **取值范围** [具体请参见[云硬盘快照状态](evs_04_0041.xml)。] **默认取值** 不涉及。
     * @param {string} [sortKey] **参数解释** 返回结果按该关键字排序。 **约束限制** 不涉及。 **取值范围** - id：云硬盘快照ID。 - status：云硬盘快照状态，取值可参考：\&quot;[云硬盘快照状态。](evs_04_0041.xml)\&quot;。 - size：云硬盘快照大小，单位为GiB。 - created_at：云硬盘快照创建时间。 **默认取值** created_at
     * @param {string} [sortDir] **参数解释** 返回结果按照降序或升序排列，默认为“desc”。  **约束限制** 不涉及。 **取值范围** - desc：降序。 - asc：升序。 **默认取值** desc
     * @param {string} [id] **参数解释** 快照ID。 **约束限制** 不涉及。 **取值范围** 不涉及。 **默认取值** 不涉及。
     * @param {string} [ids] **参数解释** 快照id列表，多个id直接用,号隔开，格式为ids&#x3D;id1,id2,...,idx。返回有效id对应的快照信息，无效的id会被忽略。 **约束限制** 最多支持一次查询60个id。 如果“id”和“ids”查询参数同时存在，“id”会被忽略。 **取值范围** 不涉及。 **默认取值** 不涉及。
     * @param {string} [snapshotType] **参数解释** 快照来源。 **约束限制** 不涉及。 **取值范围** 不涉及。 **默认取值** 不涉及。
     * @param {string} [enterpriseProjectId] **参数解释** 快照的企业项目ID。  关于企业项目ID的获取及企业项目特性的详细信息，请参考：\&quot;[[企业管理用户指南](https://support.huaweicloud.com/usermanual-em/zh-cn_topic_0123692049.html)](tag:hws)[[企业管理用户指南](https://support.huaweicloud.com/intl/zh-cn/usermanual-em/zh-cn_topic_0123692049.html)](tag:hws_hk)\&quot;。 **约束限制** 不涉及。 **取值范围** 不涉及。 **默认取值** 不涉及。
     * @param {string} [tagKey] **参数解释** 快照标签的key。 **约束限制** 不涉及。 **取值范围** 不涉及。 **默认取值** 不涉及。
     * @param {string} [tags] **参数解释** 快照标签的key/value对，例如[{\&quot;key\&quot;:\&quot;bbb\&quot;,\&quot;value\&quot;:\&quot;bbb\&quot;}]。 **约束限制** 不涉及。 **取值范围** 不涉及。 **默认取值** 不涉及。
     * @param {string} [snapshotChainId] **参数解释** 快照链ID。 **约束限制** 不涉及。 **取值范围** 不涉及。 **默认取值** 不涉及。
     * @param {string} [snapshotGroupId] **参数解释** 快照一致性组ID。 **约束限制** 不涉及。 **取值范围** 不涉及。 **默认取值** 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSnapshotsDetails(listSnapshotsDetailsRequest?: ListSnapshotsDetailsRequest): Promise<ListSnapshotsDetailsResponse> {
        const options = ParamCreater().listSnapshotsDetails(listSnapshotsDetailsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取某个租户的所有云硬盘资源的标签信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取云硬盘资源的所有标签
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listVolumeTags(listVolumeTagsRequest?: ListVolumeTagsRequest): Promise<ListVolumeTagsResponse> {
        const options = ParamCreater().listVolumeTags();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询所有云硬盘的详细信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
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
     * @param {'{\"hw:passthrough\":true}' | '{\"hw:passthrough\":false}' | '{\"__system__encrypted\":1}' | '{\"__system__encrypted\":0}'} [notMetadata] 查询不包含所选元数据的云硬盘
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listVolumes(listVolumesRequest?: ListVolumesRequest): Promise<ListVolumesResponse> {
        const options = ParamCreater().listVolumes(listVolumesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 通过标签查询云硬盘资源实例详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 通过标签查询云硬盘资源实例详情
     * @param {ListVolumesByTagsRequestBody} listVolumesByTagsRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listVolumesByTags(listVolumesByTagsRequest?: ListVolumesByTagsRequest): Promise<ListVolumesByTagsResponse> {
        const options = ParamCreater().listVolumesByTags(listVolumesByTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询回收站中所有云硬盘的详细信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询回收站中所有云硬盘详情
     * @param {string} [name] **参数解释** 云硬盘名称。 可通过[查询所有云硬盘详情](evs_04_2006.xml)获取云硬盘名称。 **约束限制** 最大支持64个字符。 **取值范围** 不涉及。 **默认取值** 不涉及。
     * @param {string} [status] **参数解释** 云硬盘状态，取值可参考：\&quot;[云硬盘状态](evs_04_0040.xml)\&quot;。 **约束限制** 不涉及。 **取值范围** 不涉及。 **默认取值** 不涉及。
     * @param {number} [limit] **参数解释** 返回结果个数限制。 **约束限制** 不涉及。 **取值范围** 1-1000 **默认取值** 1000
     * @param {string} [availabilityZone] **参数解释** 可用区信息。 可通过接口[查询所有的可用分区信息](evs_04_2081.xml)获取，也可参考[地区和终端节点](https://console.huaweicloud.com/apiexplorer/#/endpoint)获取。 **约束限制** 不涉及。 **取值范围** 不涉及。 **默认取值** 不涉及。
     * @param {string} [serviceType] **参数解释** 服务类型。 **约束限制** 不涉及。 **取值范围** - EVS：云硬盘。 - DSS：专属分布式存储服务。 **默认取值** 不涉及。
     * @param {number} [offset] **参数解释** 分页查询时的偏移量。 **约束限制** 不涉及。 **取值范围** 取值为一个大于0小于磁盘总个数的整数。 **默认取值** 0
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listVolumesInRecycle(listVolumesInRecycleRequest?: ListVolumesInRecycleRequest): Promise<ListVolumesInRecycleResponse> {
        const options = ParamCreater().listVolumesInRecycle(listVolumesInRecycleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 调整云硬盘的iops或者吞吐量。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改云硬盘QoS
     * @param {string} volumeId 云硬盘ID。
     * @param {ModifyVolumeQoSRequestBody} modifyVolumeQoSRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public modifyVolumeQoS(modifyVolumeQoSRequest?: ModifyVolumeQoSRequest): Promise<ModifyVolumeQoSResponse> {
        const options = ParamCreater().modifyVolumeQoS(modifyVolumeQoSRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

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
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 扩容云硬盘
     * @param {string} volumeId 云硬盘ID。
     * @param {ResizeVolumeRequestBody} resizeVolumeRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public resizeVolume(resizeVolumeRequest?: ResizeVolumeRequest): Promise<ResizeVolumeResponse> {
        const options = ParamCreater().resizeVolume(resizeVolumeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 对按需或者包周期云硬盘进行磁盘类型变更。
     * [在磁盘类型变更包周期云硬盘的场景下：](tag:hws)
     * - [如果您需要查看订单可用的优惠券，请参考\&quot;[查询订单可用优惠券](https://support.huaweicloud.com/api-oce/zh-cn_topic_0092953630.html)\&quot;。](tag:hws)
     * - [如果您需要支付订单，请参考\&quot;[支付包周期产品订单](https://support.huaweicloud.com/api-oce/api_order_00030.html)\&quot;。](tag:hws)
     * - [如果您需要查询订单的资源开通详情，请参考\&quot;[查询订单的资源开通详情](https://support.huaweicloud.com/api-oce/api_order_00001.html)\&quot;。](tag:hws)
     * - [如果您需要退订该包周期资源，请参考“[退订包周期资源](https://support.huaweicloud.com/api-oce/zh-cn_topic_0082522030.html)”。](tag:hws)
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 磁盘类型变更
     * @param {string} volumeId 磁盘ID。
     * @param {RetypeVolumeRequestBody} retypeVolumeRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public retypeVolume(retypeVolumeRequest?: RetypeVolumeRequest): Promise<RetypeVolumeResponse> {
        const options = ParamCreater().retypeVolume(retypeVolumeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 还原回收站中单个云硬盘。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 还原回收站中单个云硬盘
     * @param {string} volumeId **参数解释** 云硬盘ID。 可通过[查询所有云硬盘详情](evs_04_2006.xml)获取云硬盘ID。 **约束限制** 不涉及。 **取值范围** 不涉及。 **默认取值** 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public revertVolumeInRecycle(revertVolumeInRecycleRequest?: RevertVolumeInRecycleRequest): Promise<RevertVolumeInRecycleResponse> {
        const options = ParamCreater().revertVolumeInRecycle(revertVolumeInRecycleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 将快照数据回滚到云硬盘。支持企业项目授权功能。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 回滚快照到云硬盘
     * @param {string} snapshotId 快照ID
     * @param {RollbackSnapshotRequestBody} rollbackSnapshotRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public rollbackSnapshot(rollbackSnapshotRequest?: RollbackSnapshotRequest): Promise<RollbackSnapshotResponse> {
        const options = ParamCreater().rollbackSnapshot(rollbackSnapshotRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 将快照数据回滚到云硬盘。标准快照当前只在部分区域支持，具体的区域列表请通过控制台查询。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 快照回滚
     * @param {string} snapshotId **参数解释** 快照ID。 可通过[查询云硬盘快照详情列表](evs_04_2021.xml)接口获取云硬盘快照ID。 **约束限制** 不涉及。 **取值范围** 不涉及。 **默认取值** 不涉及。
     * @param {RollbackSnapshotRequestBodyV5} rollbackStandardSnapshotRequestBody 快照回滚请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public rollbackStandardSnapshot(rollbackStandardSnapshotRequest?: RollbackStandardSnapshotRequest): Promise<RollbackStandardSnapshotResponse> {
        const options = ParamCreater().rollbackStandardSnapshot(rollbackStandardSnapshotRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询单个自动快照策略。标准快照当前只在部分区域支持，具体的区域列表请通过控制台查询。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询单个自动快照策略
     * @param {string} snapshotPolicyId 自动快照策略ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAutoSnapshotPolicy(showAutoSnapshotPolicyRequest?: ShowAutoSnapshotPolicyRequest): Promise<ShowAutoSnapshotPolicyResponse> {
        const options = ParamCreater().showAutoSnapshotPolicy(showAutoSnapshotPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询Job的执行状态。
     * 可用于查询创建云硬盘，扩容云硬盘，删除云硬盘等API的执行状态。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询job的状态
     * @param {string} jobId job ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showJob(showJobRequest?: ShowJobRequest): Promise<ShowJobResponse> {
        const options = ParamCreater().showJob(showJobRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询回收站策略。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询回收站策略
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showRecyclePolicy(showRecyclePolicyRequest?: ShowRecyclePolicyRequest): Promise<ShowRecyclePolicyResponse> {
        const options = ParamCreater().showRecyclePolicy();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询单个云硬盘快照信息。支持企业项目授权功能。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询单个云硬盘快照详情
     * @param {string} snapshotId 快照ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showSnapshot(showSnapshotRequest?: ShowSnapshotRequest): Promise<ShowSnapshotResponse> {
        const options = ParamCreater().showSnapshot(showSnapshotRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询单个快照一致性组。标准快照当前只在部分区域支持，具体的区域列表请通过控制台查询。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询单个快照一致性组
     * @param {string} snapshotGroupId **参数解释** 快照一致性组ID。 可通过[查询快照一致性组列表](ListSnapshotGroup.xml)接口获取快照一致性组ID。 **约束限制** 不涉及。 **取值范围** 不涉及。 **默认取值** 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showSnapshotGroup(showSnapshotGroupRequest?: ShowSnapshotGroupRequest): Promise<ShowSnapshotGroupResponse> {
        const options = ParamCreater().showSnapshotGroup(showSnapshotGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询单个快照信息。标准快照当前只在部分区域支持，具体的区域列表请通过控制台查询。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询单个快照信息
     * @param {string} snapshotId **参数解释** 快照ID。 可通过[查询云硬盘快照详情列表](evs_04_2021.xml)接口获取云硬盘快照ID。 **约束限制** 不涉及。 **取值范围** 不涉及。 **默认取值** 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showStandardSnapshot(showStandardSnapshotRequest?: ShowStandardSnapshotRequest): Promise<ShowStandardSnapshotResponse> {
        const options = ParamCreater().showStandardSnapshot(showStandardSnapshotRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询单个云硬盘的详细信息。支持企业项目授权功能。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询单个云硬盘详情
     * @param {string} volumeId 云硬盘ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showVolume(showVolumeRequest?: ShowVolumeRequest): Promise<ShowVolumeResponse> {
        const options = ParamCreater().showVolume(showVolumeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询回收站中单个云硬盘的详细信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询回收站中单个云硬盘详情
     * @param {string} volumeId **参数解释** 云硬盘ID。 可通过[查询所有云硬盘详情](evs_04_2006.xml)获取云硬盘ID。 **约束限制** 不涉及。 **取值范围** 不涉及。 **默认取值** 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showVolumeInRecycle(showVolumeInRecycleRequest?: ShowVolumeInRecycleRequest): Promise<ShowVolumeInRecycleResponse> {
        const options = ParamCreater().showVolumeInRecycle(showVolumeInRecycleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定云硬盘的标签信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询云硬盘标签
     * @param {string} volumeId 云硬盘ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showVolumeTags(showVolumeTagsRequest?: ShowVolumeTagsRequest): Promise<ShowVolumeTagsResponse> {
        const options = ParamCreater().showVolumeTags(showVolumeTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 退订包周期计费模式的云硬盘，有如下约束：
     * -  系统盘、启动盘不可使用当前接口退订，必须和弹性云服务器一起退订
     * -  接口的请求body体最多可以传60个云硬盘id
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 退订包周期计费模式的云硬盘
     * @param {UnsubscribeVolumeRequestBody} unsubscribePostpaidVolumeRequestBody 要退订的包周期云硬盘列表
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public unsubscribePostpaidVolume(unsubscribePostpaidVolumeRequest?: UnsubscribePostpaidVolumeRequest): Promise<UnsubscribePostpaidVolumeResponse> {
        const options = ParamCreater().unsubscribePostpaidVolume(unsubscribePostpaidVolumeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新自动快照策略。标准快照当前只在部分区域支持，具体的区域列表请通过控制台查询。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新自动快照策略
     * @param {string} snapshotPolicyId 自动快照策略ID。
     * @param {UpdateSnapshotPolicyRequestBody} updateAutoSnapshotPolicyRequestBody 更新快照策略请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateAutoSnapshotPolicy(updateAutoSnapshotPolicyRequest?: UpdateAutoSnapshotPolicyRequest): Promise<UpdateAutoSnapshotPolicyResponse> {
        const options = ParamCreater().updateAutoSnapshotPolicy(updateAutoSnapshotPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新回收站策略。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新回收站策略
     * @param {ModifyRecycleBinPolicyRequestBody} [updateRecycleBinPolicyRequestBody] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateRecyclePolicy(updateRecyclePolicyRequest?: UpdateRecyclePolicyRequest): Promise<UpdateRecyclePolicyResponse> {
        const options = ParamCreater().updateRecyclePolicy(updateRecyclePolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新云硬盘快照。支持企业项目授权功能。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新云硬盘快照
     * @param {string} snapshotId 快照ID
     * @param {UpdateSnapshotRequestBody} updateSnapshotRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateSnapshot(updateSnapshotRequest?: UpdateSnapshotRequest): Promise<UpdateSnapshotResponse> {
        const options = ParamCreater().updateSnapshot(updateSnapshotRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新快照一致性组。标准快照当前只在部分区域支持，具体的区域列表请通过控制台查询。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新快照一致性组
     * @param {string} snapshotGroupId **参数解释** 快照一致性组ID。 可通过[查询快照一致性组列表](ListSnapshotGroup.xml)接口获取快照一致性组ID。 **约束限制** 不涉及。 **取值范围** 不涉及。 **默认取值** 不涉及。
     * @param {UpdateSnapshotGroupRequestBody} updateSnapshotGroupRequestBody 更新快照一致性组请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateSnapshotGroup(updateSnapshotGroupRequest?: UpdateSnapshotGroupRequest): Promise<UpdateSnapshotGroupResponse> {
        const options = ParamCreater().updateSnapshotGroup(updateSnapshotGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新快照信息。标准快照当前只在部分区域支持，具体的区域列表请通过控制台查询。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新快照信息
     * @param {string} snapshotId **参数解释** 快照ID。 可通过[查询云硬盘快照详情列表](evs_04_2021.xml)接口获取云硬盘快照ID。 **约束限制** 不涉及。 **取值范围** 不涉及。 **默认取值** 不涉及。
     * @param {UpdateSnapshotRequestBodyV5} updateStandardSnapshotRequestBody **参数解释** 更新快照信息请求体。 **约束限制** 不涉及。 **取值范围** 不涉及。 **默认取值** 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateStandardSnapshot(updateStandardSnapshotRequest?: UpdateStandardSnapshotRequest): Promise<UpdateStandardSnapshotResponse> {
        const options = ParamCreater().updateStandardSnapshot(updateStandardSnapshotRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新一个云硬盘的名称和描述。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新云硬盘
     * @param {string} volumeId 云硬盘ID。
     * @param {UpdateVolumeRequestBody} updateVolumeRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateVolume(updateVolumeRequest?: UpdateVolumeRequest): Promise<UpdateVolumeResponse> {
        const options = ParamCreater().updateVolume(updateVolumeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询接口版本信息列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询接口版本信息列表
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listVersions(listVersionsRequest?: ListVersionsRequest): Promise<ListVersionsResponse> {
        const options = ParamCreater().listVersions();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询接口的指定版本信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询API接口的版本信息
     * @param {'v1' | 'v2' | 'v3'} version 查询的目标版本号。 取值为：v1、v2、v3。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showVersion(showVersionRequest?: ShowVersionRequest): Promise<ShowVersionResponse> {
        const options = ParamCreater().showVersion(showVersionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 绑定自动快照策略。标准快照当前只在部分区域支持，具体的区域列表请通过控制台查询。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        associateAutoSnapshotPolicy(associateAutoSnapshotPolicyRequest?: AssociateAutoSnapshotPolicyRequest) {
            const options = {
                method: "POST",
                url: "/v5/{project_id}/snapshot-policies/{snapshot_policy_id}/associate",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let snapshotPolicyId;

            if (associateAutoSnapshotPolicyRequest !== null && associateAutoSnapshotPolicyRequest !== undefined) {
                if (associateAutoSnapshotPolicyRequest instanceof AssociateAutoSnapshotPolicyRequest) {
                    snapshotPolicyId = associateAutoSnapshotPolicyRequest.snapshotPolicyId;
                    body = associateAutoSnapshotPolicyRequest.body
                } else {
                    snapshotPolicyId = associateAutoSnapshotPolicyRequest['snapshot_policy_id'];
                    body = associateAutoSnapshotPolicyRequest['body'];
                }
            }

        
            if (snapshotPolicyId === null || snapshotPolicyId === undefined) {
            throw new RequiredError('snapshotPolicyId','Required parameter snapshotPolicyId was null or undefined when calling associateAutoSnapshotPolicy.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'snapshot_policy_id': snapshotPolicyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 为指定快照组添加标签。标准快照当前只在部分区域支持，具体的区域列表请通过控制台查询详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchCreateSnapshotGroupTag(batchCreateSnapshotGroupTagRequest?: BatchCreateSnapshotGroupTagRequest) {
            const options = {
                method: "POST",
                url: "/v5/{project_id}/snapshot-groups/{snapshot_group_id}/tags/create",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let snapshotGroupId;

            if (batchCreateSnapshotGroupTagRequest !== null && batchCreateSnapshotGroupTagRequest !== undefined) {
                if (batchCreateSnapshotGroupTagRequest instanceof BatchCreateSnapshotGroupTagRequest) {
                    snapshotGroupId = batchCreateSnapshotGroupTagRequest.snapshotGroupId;
                    body = batchCreateSnapshotGroupTagRequest.body
                } else {
                    snapshotGroupId = batchCreateSnapshotGroupTagRequest['snapshot_group_id'];
                    body = batchCreateSnapshotGroupTagRequest['body'];
                }
            }

        
            if (snapshotGroupId === null || snapshotGroupId === undefined) {
            throw new RequiredError('snapshotGroupId','Required parameter snapshotGroupId was null or undefined when calling batchCreateSnapshotGroupTag.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'snapshot_group_id': snapshotGroupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 为指定快照添加标签。标准快照当前只在部分区域支持，具体的区域列表请通过控制台查询详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchCreateSnapshotTags(batchCreateSnapshotTagsRequest?: BatchCreateSnapshotTagsRequest) {
            const options = {
                method: "POST",
                url: "/v5/{project_id}/snapshots/{snapshot_id}/tags/create",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let snapshotId;

            if (batchCreateSnapshotTagsRequest !== null && batchCreateSnapshotTagsRequest !== undefined) {
                if (batchCreateSnapshotTagsRequest instanceof BatchCreateSnapshotTagsRequest) {
                    snapshotId = batchCreateSnapshotTagsRequest.snapshotId;
                    body = batchCreateSnapshotTagsRequest.body
                } else {
                    snapshotId = batchCreateSnapshotTagsRequest['snapshot_id'];
                    body = batchCreateSnapshotTagsRequest['body'];
                }
            }

        
            if (snapshotId === null || snapshotId === undefined) {
            throw new RequiredError('snapshotId','Required parameter snapshotId was null or undefined when calling batchCreateSnapshotTags.');
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
         * 为指定云硬盘批量添加标签。
         * 
         * 添加标签时，如果云硬盘的标签已存在相同key，则会覆盖已有标签。
         * 单个云硬盘最多支持创建10个标签。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
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

            let body: any;
            
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
         * 为指定快照组删除标签。标准快照当前只在部分区域支持，具体的区域列表请通过控制台查询详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDeleteSnapshotGroupTag(batchDeleteSnapshotGroupTagRequest?: BatchDeleteSnapshotGroupTagRequest) {
            const options = {
                method: "POST",
                url: "/v5/{project_id}/snapshot-groups/{snapshot_group_id}/tags/delete",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let snapshotGroupId;

            if (batchDeleteSnapshotGroupTagRequest !== null && batchDeleteSnapshotGroupTagRequest !== undefined) {
                if (batchDeleteSnapshotGroupTagRequest instanceof BatchDeleteSnapshotGroupTagRequest) {
                    snapshotGroupId = batchDeleteSnapshotGroupTagRequest.snapshotGroupId;
                    body = batchDeleteSnapshotGroupTagRequest.body
                } else {
                    snapshotGroupId = batchDeleteSnapshotGroupTagRequest['snapshot_group_id'];
                    body = batchDeleteSnapshotGroupTagRequest['body'];
                }
            }

        
            if (snapshotGroupId === null || snapshotGroupId === undefined) {
            throw new RequiredError('snapshotGroupId','Required parameter snapshotGroupId was null or undefined when calling batchDeleteSnapshotGroupTag.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'snapshot_group_id': snapshotGroupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 为指定快照删除标签。标准快照当前只在部分区域支持，具体的区域列表请通过控制台查询详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDeleteSnapshotTags(batchDeleteSnapshotTagsRequest?: BatchDeleteSnapshotTagsRequest) {
            const options = {
                method: "POST",
                url: "/v5/{project_id}/snapshots/{snapshot_id}/tags/delete",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let snapshotId;

            if (batchDeleteSnapshotTagsRequest !== null && batchDeleteSnapshotTagsRequest !== undefined) {
                if (batchDeleteSnapshotTagsRequest instanceof BatchDeleteSnapshotTagsRequest) {
                    snapshotId = batchDeleteSnapshotTagsRequest.snapshotId;
                    body = batchDeleteSnapshotTagsRequest.body
                } else {
                    snapshotId = batchDeleteSnapshotTagsRequest['snapshot_id'];
                    body = batchDeleteSnapshotTagsRequest['body'];
                }
            }

        
            if (snapshotId === null || snapshotId === undefined) {
            throw new RequiredError('snapshotId','Required parameter snapshotId was null or undefined when calling batchDeleteSnapshotTags.');
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
         * 为指定云硬盘批量删除标签。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
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

            let body: any;
            
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
         * 对按需或者包周期云硬盘进行批量扩容。
         * [在批量扩容存在包周期云硬盘的场景下：](tag:hws)
         * - [如果您需要查看订单可用的优惠券，请参考\&quot;[查询订单可用优惠券](https://support.huaweicloud.com/api-oce/zh-cn_topic_0092953630.html)\&quot;。](tag:hws)
         * - [如果您需要支付订单，请参考\&quot;[支付包周期产品订单](https://support.huaweicloud.com/api-oce/api_order_00030.html)\&quot;。](tag:hws)
         * - [如果您需要退订该包周期资源，请参考“[退订包周期资源](https://support.huaweicloud.com/api-oce/zh-cn_topic_0082522030.html)”。](tag:hws)
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchResizeVolumes(batchResizeVolumesRequest?: BatchResizeVolumesRequest) {
            const options = {
                method: "POST",
                url: "/v5/{project_id}/volumes/batch-extend",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (batchResizeVolumesRequest !== null && batchResizeVolumesRequest !== undefined) {
                if (batchResizeVolumesRequest instanceof BatchResizeVolumesRequest) {
                    body = batchResizeVolumesRequest.body
                } else {
                    body = batchResizeVolumesRequest['body'];
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
         * 将挂载状态下的云硬盘的计费模式有按需转成包周期，且到期时间和挂载的虚拟机保持一致。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        changeVolumeChargeMode(changeVolumeChargeModeRequest?: ChangeVolumeChargeModeRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/cloudvolumes/change-charge-mode",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (changeVolumeChargeModeRequest !== null && changeVolumeChargeModeRequest !== undefined) {
                if (changeVolumeChargeModeRequest instanceof ChangeVolumeChargeModeRequest) {
                    body = changeVolumeChargeModeRequest.body
                } else {
                    body = changeVolumeChargeModeRequest['body'];
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
         * 通过云硬盘过户记录ID以及身份认证密钥来接受云硬盘过户。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
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

            let body: any;
            
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
         * Please refer to HUAWEI cloud API Explorer for details.
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

            let body: any;

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
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        cinderDeleteVolumeTransfer(cinderDeleteVolumeTransferRequest?: CinderDeleteVolumeTransferRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/os-volume-transfer/{transfer_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
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
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        cinderListAvailabilityZones() {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/os-availability-zone",
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
         * 查询租户的详细配额。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        cinderListQuotas(cinderListQuotasRequest?: CinderListQuotasRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/os-quota-sets/{target_project_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
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
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        cinderListVolumeTransfers(cinderListVolumeTransfersRequest?: CinderListVolumeTransfersRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/os-volume-transfer",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
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
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        cinderListVolumeTypes() {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/types",
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
         * 查询单个云硬盘的过户记录详情，比如过户记录创建时间、ID以及名称等信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        cinderShowVolumeTransfer(cinderShowVolumeTransferRequest?: CinderShowVolumeTransferRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/os-volume-transfer/{transfer_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
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
         * 查询自动快照策略总数。标准快照当前只在部分区域支持，具体的区域列表请通过控制台查询。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        countAutoSnapshotPolicies(countAutoSnapshotPoliciesRequest?: CountAutoSnapshotPoliciesRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/snapshot-policies/count",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let id;
            
            let name;
            
            let tagKey;
            
            let tags;
            
            let enterpriseProjectId;

            if (countAutoSnapshotPoliciesRequest !== null && countAutoSnapshotPoliciesRequest !== undefined) {
                if (countAutoSnapshotPoliciesRequest instanceof CountAutoSnapshotPoliciesRequest) {
                    id = countAutoSnapshotPoliciesRequest.id;
                    name = countAutoSnapshotPoliciesRequest.name;
                    tagKey = countAutoSnapshotPoliciesRequest.tagKey;
                    tags = countAutoSnapshotPoliciesRequest.tags;
                    enterpriseProjectId = countAutoSnapshotPoliciesRequest.enterpriseProjectId;
                } else {
                    id = countAutoSnapshotPoliciesRequest['id'];
                    name = countAutoSnapshotPoliciesRequest['name'];
                    tagKey = countAutoSnapshotPoliciesRequest['tag_key'];
                    tags = countAutoSnapshotPoliciesRequest['tags'];
                    enterpriseProjectId = countAutoSnapshotPoliciesRequest['enterprise_project_id'];
                }
            }

        
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (tagKey !== null && tagKey !== undefined) {
                localVarQueryParameter['tag_key'] = tagKey;
            }
            if (tags !== null && tags !== undefined) {
                localVarQueryParameter['tags'] = tags;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询快照链个数。标准快照当前只在部分区域支持，具体的区域列表请通过控制台查询。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        countSnapshotChains(countSnapshotChainsRequest?: CountSnapshotChainsRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/snapshot-chains/count",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let volumeId;
            
            let availabilityZone;
            
            let category;
            
            let id;

            if (countSnapshotChainsRequest !== null && countSnapshotChainsRequest !== undefined) {
                if (countSnapshotChainsRequest instanceof CountSnapshotChainsRequest) {
                    volumeId = countSnapshotChainsRequest.volumeId;
                    availabilityZone = countSnapshotChainsRequest.availabilityZone;
                    category = countSnapshotChainsRequest.category;
                    id = countSnapshotChainsRequest.id;
                } else {
                    volumeId = countSnapshotChainsRequest['volume_id'];
                    availabilityZone = countSnapshotChainsRequest['availability_zone'];
                    category = countSnapshotChainsRequest['category'];
                    id = countSnapshotChainsRequest['id'];
                }
            }

        
            if (volumeId !== null && volumeId !== undefined) {
                localVarQueryParameter['volume_id'] = volumeId;
            }
            if (availabilityZone !== null && availabilityZone !== undefined) {
                localVarQueryParameter['availability_zone'] = availabilityZone;
            }
            if (category !== null && category !== undefined) {
                localVarQueryParameter['category'] = category;
            }
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询快照个数。标准快照当前只在部分区域支持，具体的区域列表请通过控制台查询。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        countSnapshots(countSnapshotsRequest?: CountSnapshotsRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/snapshots/count",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let volumeId;
            
            let availabilityZone;
            
            let name;
            
            let status;
            
            let id;
            
            let snapshotType;
            
            let enterpriseProjectId;
            
            let tagKey;
            
            let tags;
            
            let snapshotChainId;

            if (countSnapshotsRequest !== null && countSnapshotsRequest !== undefined) {
                if (countSnapshotsRequest instanceof CountSnapshotsRequest) {
                    volumeId = countSnapshotsRequest.volumeId;
                    availabilityZone = countSnapshotsRequest.availabilityZone;
                    name = countSnapshotsRequest.name;
                    status = countSnapshotsRequest.status;
                    id = countSnapshotsRequest.id;
                    snapshotType = countSnapshotsRequest.snapshotType;
                    enterpriseProjectId = countSnapshotsRequest.enterpriseProjectId;
                    tagKey = countSnapshotsRequest.tagKey;
                    tags = countSnapshotsRequest.tags;
                    snapshotChainId = countSnapshotsRequest.snapshotChainId;
                } else {
                    volumeId = countSnapshotsRequest['volume_id'];
                    availabilityZone = countSnapshotsRequest['availability_zone'];
                    name = countSnapshotsRequest['name'];
                    status = countSnapshotsRequest['status'];
                    id = countSnapshotsRequest['id'];
                    snapshotType = countSnapshotsRequest['snapshot_type'];
                    enterpriseProjectId = countSnapshotsRequest['enterprise_project_id'];
                    tagKey = countSnapshotsRequest['tag_key'];
                    tags = countSnapshotsRequest['tags'];
                    snapshotChainId = countSnapshotsRequest['snapshot_chain_id'];
                }
            }

        
            if (volumeId !== null && volumeId !== undefined) {
                localVarQueryParameter['volume_id'] = volumeId;
            }
            if (availabilityZone !== null && availabilityZone !== undefined) {
                localVarQueryParameter['availability_zone'] = availabilityZone;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (snapshotType !== null && snapshotType !== undefined) {
                localVarQueryParameter['snapshot_type'] = snapshotType;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (tagKey !== null && tagKey !== undefined) {
                localVarQueryParameter['tag_key'] = tagKey;
            }
            if (tags !== null && tags !== undefined) {
                localVarQueryParameter['tags'] = tags;
            }
            if (snapshotChainId !== null && snapshotChainId !== undefined) {
                localVarQueryParameter['snapshot_chain_id'] = snapshotChainId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询快照一致性组个数。标准快照当前只在部分区域支持，具体的区域列表请通过控制台查询。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        countSnapshotsGroup(countSnapshotsGroupRequest?: CountSnapshotsGroupRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/snapshot-groups/count",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let name;
            
            let status;
            
            let id;
            
            let enterpriseProjectId;
            
            let tagKey;
            
            let tags;

            if (countSnapshotsGroupRequest !== null && countSnapshotsGroupRequest !== undefined) {
                if (countSnapshotsGroupRequest instanceof CountSnapshotsGroupRequest) {
                    name = countSnapshotsGroupRequest.name;
                    status = countSnapshotsGroupRequest.status;
                    id = countSnapshotsGroupRequest.id;
                    enterpriseProjectId = countSnapshotsGroupRequest.enterpriseProjectId;
                    tagKey = countSnapshotsGroupRequest.tagKey;
                    tags = countSnapshotsGroupRequest.tags;
                } else {
                    name = countSnapshotsGroupRequest['name'];
                    status = countSnapshotsGroupRequest['status'];
                    id = countSnapshotsGroupRequest['id'];
                    enterpriseProjectId = countSnapshotsGroupRequest['enterprise_project_id'];
                    tagKey = countSnapshotsGroupRequest['tag_key'];
                    tags = countSnapshotsGroupRequest['tags'];
                }
            }

        
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (tagKey !== null && tagKey !== undefined) {
                localVarQueryParameter['tag_key'] = tagKey;
            }
            if (tags !== null && tags !== undefined) {
                localVarQueryParameter['tags'] = tags;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建自动快照策略。标准快照当前只在部分区域支持，具体的区域列表请通过控制台查询。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createAutoSnapshotPolicy(createAutoSnapshotPolicyRequest?: CreateAutoSnapshotPolicyRequest) {
            const options = {
                method: "POST",
                url: "/v5/{project_id}/snapshot-policies",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createAutoSnapshotPolicyRequest !== null && createAutoSnapshotPolicyRequest !== undefined) {
                if (createAutoSnapshotPolicyRequest instanceof CreateAutoSnapshotPolicyRequest) {
                    body = createAutoSnapshotPolicyRequest.body
                } else {
                    body = createAutoSnapshotPolicyRequest['body'];
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
         * 创建云硬盘快照。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
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

            let body: any;

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
         * 创建快照一致性组。标准快照当前只在部分区域支持，具体的区域列表请通过控制台查询。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createSnapshotGroup(createSnapshotGroupRequest?: CreateSnapshotGroupRequest) {
            const options = {
                method: "POST",
                url: "/v5/{project_id}/snapshot-groups",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createSnapshotGroupRequest !== null && createSnapshotGroupRequest !== undefined) {
                if (createSnapshotGroupRequest instanceof CreateSnapshotGroupRequest) {
                    body = createSnapshotGroupRequest.body
                } else {
                    body = createSnapshotGroupRequest['body'];
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
         * 创建标准快照。标准快照当前只在部分区域支持，具体的区域列表请通过控制台查询。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createStandardSnapshot(createStandardSnapshotRequest?: CreateStandardSnapshotRequest) {
            const options = {
                method: "POST",
                url: "/v5/{project_id}/snapshots",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createStandardSnapshotRequest !== null && createStandardSnapshotRequest !== undefined) {
                if (createStandardSnapshotRequest instanceof CreateStandardSnapshotRequest) {
                    body = createStandardSnapshotRequest.body
                } else {
                    body = createStandardSnapshotRequest['body'];
                }
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
         * Please refer to HUAWEI cloud API Explorer for details.
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

            let body: any;
            
            let xClientToken;

            if (createVolumeRequest !== null && createVolumeRequest !== undefined) {
                if (createVolumeRequest instanceof CreateVolumeRequest) {
                    body = createVolumeRequest.body
                    xClientToken = createVolumeRequest.xClientToken;
                } else {
                    body = createVolumeRequest['body'];
                    xClientToken = createVolumeRequest['X-Client-Token'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xClientToken !== undefined && xClientToken !== null) {
                localVarHeaderParameter['X-Client-Token'] = String(xClientToken);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除单个自动快照策略。标准快照当前只在部分区域支持，具体的区域列表请通过控制台查询。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteAutoSnapshotPolicy(deleteAutoSnapshotPolicyRequest?: DeleteAutoSnapshotPolicyRequest) {
            const options = {
                method: "DELETE",
                url: "/v5/{project_id}/snapshot-policies/{snapshot_policy_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let snapshotPolicyId;

            if (deleteAutoSnapshotPolicyRequest !== null && deleteAutoSnapshotPolicyRequest !== undefined) {
                if (deleteAutoSnapshotPolicyRequest instanceof DeleteAutoSnapshotPolicyRequest) {
                    snapshotPolicyId = deleteAutoSnapshotPolicyRequest.snapshotPolicyId;
                } else {
                    snapshotPolicyId = deleteAutoSnapshotPolicyRequest['snapshot_policy_id'];
                }
            }

        
            if (snapshotPolicyId === null || snapshotPolicyId === undefined) {
            throw new RequiredError('snapshotPolicyId','Required parameter snapshotPolicyId was null or undefined when calling deleteAutoSnapshotPolicy.');
            }

            options.pathParams = { 'snapshot_policy_id': snapshotPolicyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除云硬盘快照。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteSnapshot(deleteSnapshotRequest?: DeleteSnapshotRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/cloudsnapshots/{snapshot_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
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
         * 删除快照一致性组。标准快照当前只在部分区域支持，具体的区域列表请通过控制台查询。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteSnapshotGroup(deleteSnapshotGroupRequest?: DeleteSnapshotGroupRequest) {
            const options = {
                method: "DELETE",
                url: "/v5/{project_id}/snapshot-groups/{snapshot_group_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let snapshotGroupId;

            if (deleteSnapshotGroupRequest !== null && deleteSnapshotGroupRequest !== undefined) {
                if (deleteSnapshotGroupRequest instanceof DeleteSnapshotGroupRequest) {
                    snapshotGroupId = deleteSnapshotGroupRequest.snapshotGroupId;
                } else {
                    snapshotGroupId = deleteSnapshotGroupRequest['snapshot_group_id'];
                }
            }

        
            if (snapshotGroupId === null || snapshotGroupId === undefined) {
            throw new RequiredError('snapshotGroupId','Required parameter snapshotGroupId was null or undefined when calling deleteSnapshotGroup.');
            }

            options.pathParams = { 'snapshot_group_id': snapshotGroupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除快照。标准快照当前只在部分区域支持，具体的区域列表请通过控制台查询。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteStandardSnapshot(deleteStandardSnapshotRequest?: DeleteStandardSnapshotRequest) {
            const options = {
                method: "DELETE",
                url: "/v5/{project_id}/snapshots/{snapshot_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let snapshotId;

            if (deleteStandardSnapshotRequest !== null && deleteStandardSnapshotRequest !== undefined) {
                if (deleteStandardSnapshotRequest instanceof DeleteStandardSnapshotRequest) {
                    snapshotId = deleteStandardSnapshotRequest.snapshotId;
                } else {
                    snapshotId = deleteStandardSnapshotRequest['snapshot_id'];
                }
            }

        
            if (snapshotId === null || snapshotId === undefined) {
            throw new RequiredError('snapshotId','Required parameter snapshotId was null or undefined when calling deleteStandardSnapshot.');
            }

            options.pathParams = { 'snapshot_id': snapshotId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除一个云硬盘。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteVolume(deleteVolumeRequest?: DeleteVolumeRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/cloudvolumes/{volume_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
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
         * 删除回收站中单个云硬盘。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteVolumeInRecycle(deleteVolumeInRecycleRequest?: DeleteVolumeInRecycleRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/recycle-bin-volumes/{volume_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let volumeId;

            if (deleteVolumeInRecycleRequest !== null && deleteVolumeInRecycleRequest !== undefined) {
                if (deleteVolumeInRecycleRequest instanceof DeleteVolumeInRecycleRequest) {
                    volumeId = deleteVolumeInRecycleRequest.volumeId;
                } else {
                    volumeId = deleteVolumeInRecycleRequest['volume_id'];
                }
            }

        
            if (volumeId === null || volumeId === undefined) {
            throw new RequiredError('volumeId','Required parameter volumeId was null or undefined when calling deleteVolumeInRecycle.');
            }

            options.pathParams = { 'volume_id': volumeId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 解绑自动快照策略。标准快照当前只在部分区域支持，具体的区域列表请通过控制台查询。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        disassociateAutoSnapshotPolicy(disassociateAutoSnapshotPolicyRequest?: DisassociateAutoSnapshotPolicyRequest) {
            const options = {
                method: "POST",
                url: "/v5/{project_id}/snapshot-policies/{snapshot_policy_id}/disassociate",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let snapshotPolicyId;

            if (disassociateAutoSnapshotPolicyRequest !== null && disassociateAutoSnapshotPolicyRequest !== undefined) {
                if (disassociateAutoSnapshotPolicyRequest instanceof DisassociateAutoSnapshotPolicyRequest) {
                    snapshotPolicyId = disassociateAutoSnapshotPolicyRequest.snapshotPolicyId;
                    body = disassociateAutoSnapshotPolicyRequest.body
                } else {
                    snapshotPolicyId = disassociateAutoSnapshotPolicyRequest['snapshot_policy_id'];
                    body = disassociateAutoSnapshotPolicyRequest['body'];
                }
            }

        
            if (snapshotPolicyId === null || snapshotPolicyId === undefined) {
            throw new RequiredError('snapshotPolicyId','Required parameter snapshotPolicyId was null or undefined when calling disassociateAutoSnapshotPolicy.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'snapshot_policy_id': snapshotPolicyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询自动快照策略。标准快照当前只在部分区域支持，具体的区域列表请通过控制台查询。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAutoSnapshotPolicy(listAutoSnapshotPolicyRequest?: ListAutoSnapshotPolicyRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/snapshot-policies",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let id;
            
            let name;
            
            let tags;
            
            let tagKey;
            
            let enterpriseProjectId;
            
            let limit;
            
            let offset;
            
            let sortKey;
            
            let sortDir;

            if (listAutoSnapshotPolicyRequest !== null && listAutoSnapshotPolicyRequest !== undefined) {
                if (listAutoSnapshotPolicyRequest instanceof ListAutoSnapshotPolicyRequest) {
                    id = listAutoSnapshotPolicyRequest.id;
                    name = listAutoSnapshotPolicyRequest.name;
                    tags = listAutoSnapshotPolicyRequest.tags;
                    tagKey = listAutoSnapshotPolicyRequest.tagKey;
                    enterpriseProjectId = listAutoSnapshotPolicyRequest.enterpriseProjectId;
                    limit = listAutoSnapshotPolicyRequest.limit;
                    offset = listAutoSnapshotPolicyRequest.offset;
                    sortKey = listAutoSnapshotPolicyRequest.sortKey;
                    sortDir = listAutoSnapshotPolicyRequest.sortDir;
                } else {
                    id = listAutoSnapshotPolicyRequest['id'];
                    name = listAutoSnapshotPolicyRequest['name'];
                    tags = listAutoSnapshotPolicyRequest['tags'];
                    tagKey = listAutoSnapshotPolicyRequest['tag_key'];
                    enterpriseProjectId = listAutoSnapshotPolicyRequest['enterprise_project_id'];
                    limit = listAutoSnapshotPolicyRequest['limit'];
                    offset = listAutoSnapshotPolicyRequest['offset'];
                    sortKey = listAutoSnapshotPolicyRequest['sort_key'];
                    sortDir = listAutoSnapshotPolicyRequest['sort_dir'];
                }
            }

        
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (tags !== null && tags !== undefined) {
                localVarQueryParameter['tags'] = tags;
            }
            if (tagKey !== null && tagKey !== undefined) {
                localVarQueryParameter['tag_key'] = tagKey;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (sortKey !== null && sortKey !== undefined) {
                localVarQueryParameter['sort_key'] = sortKey;
            }
            if (sortDir !== null && sortDir !== undefined) {
                localVarQueryParameter['sort_dir'] = sortDir;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询快照链的列表。标准快照当前只在部分区域支持，具体的区域列表请通过控制台查询。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSnapshotChains(listSnapshotChainsRequest?: ListSnapshotChainsRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/snapshot-chains",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let marker;
            
            let limit;
            
            let id;
            
            let volumeId;
            
            let category;

            if (listSnapshotChainsRequest !== null && listSnapshotChainsRequest !== undefined) {
                if (listSnapshotChainsRequest instanceof ListSnapshotChainsRequest) {
                    marker = listSnapshotChainsRequest.marker;
                    limit = listSnapshotChainsRequest.limit;
                    id = listSnapshotChainsRequest.id;
                    volumeId = listSnapshotChainsRequest.volumeId;
                    category = listSnapshotChainsRequest.category;
                } else {
                    marker = listSnapshotChainsRequest['marker'];
                    limit = listSnapshotChainsRequest['limit'];
                    id = listSnapshotChainsRequest['id'];
                    volumeId = listSnapshotChainsRequest['volume_id'];
                    category = listSnapshotChainsRequest['category'];
                }
            }

        
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (volumeId !== null && volumeId !== undefined) {
                localVarQueryParameter['volume_id'] = volumeId;
            }
            if (category !== null && category !== undefined) {
                localVarQueryParameter['category'] = category;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询快照一致性组列表。标准快照当前只在部分区域支持，具体的区域列表请通过控制台查询。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSnapshotGroup(listSnapshotGroupRequest?: ListSnapshotGroupRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/snapshot-groups/detail",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let id;
            
            let name;
            
            let status;
            
            let tagKey;
            
            let tags;
            
            let enterpriseProjectId;
            
            let limit;
            
            let offset;
            
            let sortKey;
            
            let sortDir;
            
            let serverId;

            if (listSnapshotGroupRequest !== null && listSnapshotGroupRequest !== undefined) {
                if (listSnapshotGroupRequest instanceof ListSnapshotGroupRequest) {
                    id = listSnapshotGroupRequest.id;
                    name = listSnapshotGroupRequest.name;
                    status = listSnapshotGroupRequest.status;
                    tagKey = listSnapshotGroupRequest.tagKey;
                    tags = listSnapshotGroupRequest.tags;
                    enterpriseProjectId = listSnapshotGroupRequest.enterpriseProjectId;
                    limit = listSnapshotGroupRequest.limit;
                    offset = listSnapshotGroupRequest.offset;
                    sortKey = listSnapshotGroupRequest.sortKey;
                    sortDir = listSnapshotGroupRequest.sortDir;
                    serverId = listSnapshotGroupRequest.serverId;
                } else {
                    id = listSnapshotGroupRequest['id'];
                    name = listSnapshotGroupRequest['name'];
                    status = listSnapshotGroupRequest['status'];
                    tagKey = listSnapshotGroupRequest['tag_key'];
                    tags = listSnapshotGroupRequest['tags'];
                    enterpriseProjectId = listSnapshotGroupRequest['enterprise_project_id'];
                    limit = listSnapshotGroupRequest['limit'];
                    offset = listSnapshotGroupRequest['offset'];
                    sortKey = listSnapshotGroupRequest['sort_key'];
                    sortDir = listSnapshotGroupRequest['sort_dir'];
                    serverId = listSnapshotGroupRequest['server_id'];
                }
            }

        
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (tagKey !== null && tagKey !== undefined) {
                localVarQueryParameter['tag_key'] = tagKey;
            }
            if (tags !== null && tags !== undefined) {
                localVarQueryParameter['tags'] = tags;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (sortKey !== null && sortKey !== undefined) {
                localVarQueryParameter['sort_key'] = sortKey;
            }
            if (sortDir !== null && sortDir !== undefined) {
                localVarQueryParameter['sort_dir'] = sortDir;
            }
            if (serverId !== null && serverId !== undefined) {
                localVarQueryParameter['server_id'] = serverId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询快照组的所有标签。标准快照当前只在部分区域支持，具体的区域列表请通过控制台查询详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSnapshotGroupTags() {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/snapshot-groups/tags",
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
         * 查询快照资源的所有标签。标准快照当前只在部分区域支持，具体的区域列表请通过控制台查询详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSnapshotTags() {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/snapshots/tags",
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
         * 查询云硬盘快照详细列表信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSnapshots(listSnapshotsRequest?: ListSnapshotsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/cloudsnapshots/detail",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
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
         * 查询快照详情列表。标准快照当前只在部分区域支持，具体的区域列表请通过控制台查询。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSnapshotsDetails(listSnapshotsDetailsRequest?: ListSnapshotsDetailsRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/snapshots/detail",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let marker;
            
            let volumeId;
            
            let availabilityZone;
            
            let limit;
            
            let name;
            
            let offset;
            
            let status;
            
            let sortKey;
            
            let sortDir;
            
            let id;
            
            let ids;
            
            let snapshotType;
            
            let enterpriseProjectId;
            
            let tagKey;
            
            let tags;
            
            let snapshotChainId;
            
            let snapshotGroupId;

            if (listSnapshotsDetailsRequest !== null && listSnapshotsDetailsRequest !== undefined) {
                if (listSnapshotsDetailsRequest instanceof ListSnapshotsDetailsRequest) {
                    marker = listSnapshotsDetailsRequest.marker;
                    volumeId = listSnapshotsDetailsRequest.volumeId;
                    availabilityZone = listSnapshotsDetailsRequest.availabilityZone;
                    limit = listSnapshotsDetailsRequest.limit;
                    name = listSnapshotsDetailsRequest.name;
                    offset = listSnapshotsDetailsRequest.offset;
                    status = listSnapshotsDetailsRequest.status;
                    sortKey = listSnapshotsDetailsRequest.sortKey;
                    sortDir = listSnapshotsDetailsRequest.sortDir;
                    id = listSnapshotsDetailsRequest.id;
                    ids = listSnapshotsDetailsRequest.ids;
                    snapshotType = listSnapshotsDetailsRequest.snapshotType;
                    enterpriseProjectId = listSnapshotsDetailsRequest.enterpriseProjectId;
                    tagKey = listSnapshotsDetailsRequest.tagKey;
                    tags = listSnapshotsDetailsRequest.tags;
                    snapshotChainId = listSnapshotsDetailsRequest.snapshotChainId;
                    snapshotGroupId = listSnapshotsDetailsRequest.snapshotGroupId;
                } else {
                    marker = listSnapshotsDetailsRequest['marker'];
                    volumeId = listSnapshotsDetailsRequest['volume_id'];
                    availabilityZone = listSnapshotsDetailsRequest['availability_zone'];
                    limit = listSnapshotsDetailsRequest['limit'];
                    name = listSnapshotsDetailsRequest['name'];
                    offset = listSnapshotsDetailsRequest['offset'];
                    status = listSnapshotsDetailsRequest['status'];
                    sortKey = listSnapshotsDetailsRequest['sort_key'];
                    sortDir = listSnapshotsDetailsRequest['sort_dir'];
                    id = listSnapshotsDetailsRequest['id'];
                    ids = listSnapshotsDetailsRequest['ids'];
                    snapshotType = listSnapshotsDetailsRequest['snapshot_type'];
                    enterpriseProjectId = listSnapshotsDetailsRequest['enterprise_project_id'];
                    tagKey = listSnapshotsDetailsRequest['tag_key'];
                    tags = listSnapshotsDetailsRequest['tags'];
                    snapshotChainId = listSnapshotsDetailsRequest['snapshot_chain_id'];
                    snapshotGroupId = listSnapshotsDetailsRequest['snapshot_group_id'];
                }
            }

        
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (volumeId !== null && volumeId !== undefined) {
                localVarQueryParameter['volume_id'] = volumeId;
            }
            if (availabilityZone !== null && availabilityZone !== undefined) {
                localVarQueryParameter['availability_zone'] = availabilityZone;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (sortKey !== null && sortKey !== undefined) {
                localVarQueryParameter['sort_key'] = sortKey;
            }
            if (sortDir !== null && sortDir !== undefined) {
                localVarQueryParameter['sort_dir'] = sortDir;
            }
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (ids !== null && ids !== undefined) {
                localVarQueryParameter['ids'] = ids;
            }
            if (snapshotType !== null && snapshotType !== undefined) {
                localVarQueryParameter['snapshot_type'] = snapshotType;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (tagKey !== null && tagKey !== undefined) {
                localVarQueryParameter['tag_key'] = tagKey;
            }
            if (tags !== null && tags !== undefined) {
                localVarQueryParameter['tags'] = tags;
            }
            if (snapshotChainId !== null && snapshotChainId !== undefined) {
                localVarQueryParameter['snapshot_chain_id'] = snapshotChainId;
            }
            if (snapshotGroupId !== null && snapshotGroupId !== undefined) {
                localVarQueryParameter['snapshot_group_id'] = snapshotGroupId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取某个租户的所有云硬盘资源的标签信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listVolumeTags() {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/cloudvolumes/tags",
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
         * 查询所有云硬盘的详细信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listVolumes(listVolumesRequest?: ListVolumesRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/cloudvolumes/detail",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
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
            
            let notMetadata;

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
                    notMetadata = listVolumesRequest.notMetadata;
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
                    notMetadata = listVolumesRequest['not_metadata'];
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
            if (notMetadata !== null && notMetadata !== undefined) {
                localVarQueryParameter['not_metadata'] = notMetadata;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 通过标签查询云硬盘资源实例详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
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

            let body: any;

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
         * 查询回收站中所有云硬盘的详细信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listVolumesInRecycle(listVolumesInRecycleRequest?: ListVolumesInRecycleRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/recycle-bin-volumes/detail",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let name;
            
            let status;
            
            let limit;
            
            let availabilityZone;
            
            let serviceType;
            
            let offset;

            if (listVolumesInRecycleRequest !== null && listVolumesInRecycleRequest !== undefined) {
                if (listVolumesInRecycleRequest instanceof ListVolumesInRecycleRequest) {
                    name = listVolumesInRecycleRequest.name;
                    status = listVolumesInRecycleRequest.status;
                    limit = listVolumesInRecycleRequest.limit;
                    availabilityZone = listVolumesInRecycleRequest.availabilityZone;
                    serviceType = listVolumesInRecycleRequest.serviceType;
                    offset = listVolumesInRecycleRequest.offset;
                } else {
                    name = listVolumesInRecycleRequest['name'];
                    status = listVolumesInRecycleRequest['status'];
                    limit = listVolumesInRecycleRequest['limit'];
                    availabilityZone = listVolumesInRecycleRequest['availability_zone'];
                    serviceType = listVolumesInRecycleRequest['service_type'];
                    offset = listVolumesInRecycleRequest['offset'];
                }
            }

        
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (availabilityZone !== null && availabilityZone !== undefined) {
                localVarQueryParameter['availability_zone'] = availabilityZone;
            }
            if (serviceType !== null && serviceType !== undefined) {
                localVarQueryParameter['service_type'] = serviceType;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 调整云硬盘的iops或者吞吐量。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        modifyVolumeQoS(modifyVolumeQoSRequest?: ModifyVolumeQoSRequest) {
            const options = {
                method: "PUT",
                url: "/v5/{project_id}/cloudvolumes/{volume_id}/qos",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let volumeId;

            if (modifyVolumeQoSRequest !== null && modifyVolumeQoSRequest !== undefined) {
                if (modifyVolumeQoSRequest instanceof ModifyVolumeQoSRequest) {
                    volumeId = modifyVolumeQoSRequest.volumeId;
                    body = modifyVolumeQoSRequest.body
                } else {
                    volumeId = modifyVolumeQoSRequest['volume_id'];
                    body = modifyVolumeQoSRequest['body'];
                }
            }

        
            if (volumeId === null || volumeId === undefined) {
            throw new RequiredError('volumeId','Required parameter volumeId was null or undefined when calling modifyVolumeQoS.');
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
         * 对按需或者包周期云硬盘进行扩容。
         * 在扩容包周期云硬盘的场景下：
         * - 如果您需要查看订单可用的优惠券，请参考\&quot;[查询订单可用优惠券](https://support.huaweicloud.com/api-oce/zh-cn_topic_0092953630.html)\&quot;。
         * - 如果您需要支付订单，请参考\&quot;[支付包周期产品订单](https://support.huaweicloud.com/api-oce/zh-cn_topic_0075746561.html)\&quot;。
         * - 如果您需要查询订单的资源开通详情，请参考\&quot;[查询订单的资源开通详情](https://support.huaweicloud.com/api-oce/api_order_00001.html)\&quot;。
         * - 如果您需要退订该包周期资源，请参考“[退订包周期资源](https://support.huaweicloud.com/api-oce/zh-cn_topic_0082522030.html)”。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
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

            let body: any;
            
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
         * 对按需或者包周期云硬盘进行磁盘类型变更。
         * [在磁盘类型变更包周期云硬盘的场景下：](tag:hws)
         * - [如果您需要查看订单可用的优惠券，请参考\&quot;[查询订单可用优惠券](https://support.huaweicloud.com/api-oce/zh-cn_topic_0092953630.html)\&quot;。](tag:hws)
         * - [如果您需要支付订单，请参考\&quot;[支付包周期产品订单](https://support.huaweicloud.com/api-oce/api_order_00030.html)\&quot;。](tag:hws)
         * - [如果您需要查询订单的资源开通详情，请参考\&quot;[查询订单的资源开通详情](https://support.huaweicloud.com/api-oce/api_order_00001.html)\&quot;。](tag:hws)
         * - [如果您需要退订该包周期资源，请参考“[退订包周期资源](https://support.huaweicloud.com/api-oce/zh-cn_topic_0082522030.html)”。](tag:hws)
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        retypeVolume(retypeVolumeRequest?: RetypeVolumeRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/volumes/{volume_id}/retype",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let volumeId;

            if (retypeVolumeRequest !== null && retypeVolumeRequest !== undefined) {
                if (retypeVolumeRequest instanceof RetypeVolumeRequest) {
                    volumeId = retypeVolumeRequest.volumeId;
                    body = retypeVolumeRequest.body
                } else {
                    volumeId = retypeVolumeRequest['volume_id'];
                    body = retypeVolumeRequest['body'];
                }
            }

        
            if (volumeId === null || volumeId === undefined) {
            throw new RequiredError('volumeId','Required parameter volumeId was null or undefined when calling retypeVolume.');
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
         * 还原回收站中单个云硬盘。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        revertVolumeInRecycle(revertVolumeInRecycleRequest?: RevertVolumeInRecycleRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/recycle-bin-volumes/{volume_id}/revert",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let volumeId;

            if (revertVolumeInRecycleRequest !== null && revertVolumeInRecycleRequest !== undefined) {
                if (revertVolumeInRecycleRequest instanceof RevertVolumeInRecycleRequest) {
                    volumeId = revertVolumeInRecycleRequest.volumeId;
                } else {
                    volumeId = revertVolumeInRecycleRequest['volume_id'];
                }
            }

        
            if (volumeId === null || volumeId === undefined) {
            throw new RequiredError('volumeId','Required parameter volumeId was null or undefined when calling revertVolumeInRecycle.');
            }

            options.pathParams = { 'volume_id': volumeId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 将快照数据回滚到云硬盘。支持企业项目授权功能。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
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

            let body: any;
            
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
         * 将快照数据回滚到云硬盘。标准快照当前只在部分区域支持，具体的区域列表请通过控制台查询。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        rollbackStandardSnapshot(rollbackStandardSnapshotRequest?: RollbackStandardSnapshotRequest) {
            const options = {
                method: "POST",
                url: "/v5/{project_id}/snapshots/{snapshot_id}/rollback",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let snapshotId;

            if (rollbackStandardSnapshotRequest !== null && rollbackStandardSnapshotRequest !== undefined) {
                if (rollbackStandardSnapshotRequest instanceof RollbackStandardSnapshotRequest) {
                    snapshotId = rollbackStandardSnapshotRequest.snapshotId;
                    body = rollbackStandardSnapshotRequest.body
                } else {
                    snapshotId = rollbackStandardSnapshotRequest['snapshot_id'];
                    body = rollbackStandardSnapshotRequest['body'];
                }
            }

        
            if (snapshotId === null || snapshotId === undefined) {
            throw new RequiredError('snapshotId','Required parameter snapshotId was null or undefined when calling rollbackStandardSnapshot.');
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
         * 查询单个自动快照策略。标准快照当前只在部分区域支持，具体的区域列表请通过控制台查询。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAutoSnapshotPolicy(showAutoSnapshotPolicyRequest?: ShowAutoSnapshotPolicyRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/snapshot-policies/{snapshot_policy_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let snapshotPolicyId;

            if (showAutoSnapshotPolicyRequest !== null && showAutoSnapshotPolicyRequest !== undefined) {
                if (showAutoSnapshotPolicyRequest instanceof ShowAutoSnapshotPolicyRequest) {
                    snapshotPolicyId = showAutoSnapshotPolicyRequest.snapshotPolicyId;
                } else {
                    snapshotPolicyId = showAutoSnapshotPolicyRequest['snapshot_policy_id'];
                }
            }

        
            if (snapshotPolicyId === null || snapshotPolicyId === undefined) {
            throw new RequiredError('snapshotPolicyId','Required parameter snapshotPolicyId was null or undefined when calling showAutoSnapshotPolicy.');
            }

            options.pathParams = { 'snapshot_policy_id': snapshotPolicyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询Job的执行状态。
         * 可用于查询创建云硬盘，扩容云硬盘，删除云硬盘等API的执行状态。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showJob(showJobRequest?: ShowJobRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/jobs/{job_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
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
         * 查询回收站策略。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showRecyclePolicy() {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/recycle-bin-volumes/policy",
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
         * 查询单个云硬盘快照信息。支持企业项目授权功能。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showSnapshot(showSnapshotRequest?: ShowSnapshotRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/cloudsnapshots/{snapshot_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
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
         * 查询单个快照一致性组。标准快照当前只在部分区域支持，具体的区域列表请通过控制台查询。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showSnapshotGroup(showSnapshotGroupRequest?: ShowSnapshotGroupRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/snapshot-groups/{snapshot_group_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let snapshotGroupId;

            if (showSnapshotGroupRequest !== null && showSnapshotGroupRequest !== undefined) {
                if (showSnapshotGroupRequest instanceof ShowSnapshotGroupRequest) {
                    snapshotGroupId = showSnapshotGroupRequest.snapshotGroupId;
                } else {
                    snapshotGroupId = showSnapshotGroupRequest['snapshot_group_id'];
                }
            }

        
            if (snapshotGroupId === null || snapshotGroupId === undefined) {
            throw new RequiredError('snapshotGroupId','Required parameter snapshotGroupId was null or undefined when calling showSnapshotGroup.');
            }

            options.pathParams = { 'snapshot_group_id': snapshotGroupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询单个快照信息。标准快照当前只在部分区域支持，具体的区域列表请通过控制台查询。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showStandardSnapshot(showStandardSnapshotRequest?: ShowStandardSnapshotRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/snapshots/{snapshot_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let snapshotId;

            if (showStandardSnapshotRequest !== null && showStandardSnapshotRequest !== undefined) {
                if (showStandardSnapshotRequest instanceof ShowStandardSnapshotRequest) {
                    snapshotId = showStandardSnapshotRequest.snapshotId;
                } else {
                    snapshotId = showStandardSnapshotRequest['snapshot_id'];
                }
            }

        
            if (snapshotId === null || snapshotId === undefined) {
            throw new RequiredError('snapshotId','Required parameter snapshotId was null or undefined when calling showStandardSnapshot.');
            }

            options.pathParams = { 'snapshot_id': snapshotId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询单个云硬盘的详细信息。支持企业项目授权功能。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showVolume(showVolumeRequest?: ShowVolumeRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/cloudvolumes/{volume_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
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
         * 查询回收站中单个云硬盘的详细信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showVolumeInRecycle(showVolumeInRecycleRequest?: ShowVolumeInRecycleRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/recycle-bin-volumes/{volume_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let volumeId;

            if (showVolumeInRecycleRequest !== null && showVolumeInRecycleRequest !== undefined) {
                if (showVolumeInRecycleRequest instanceof ShowVolumeInRecycleRequest) {
                    volumeId = showVolumeInRecycleRequest.volumeId;
                } else {
                    volumeId = showVolumeInRecycleRequest['volume_id'];
                }
            }

        
            if (volumeId === null || volumeId === undefined) {
            throw new RequiredError('volumeId','Required parameter volumeId was null or undefined when calling showVolumeInRecycle.');
            }

            options.pathParams = { 'volume_id': volumeId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定云硬盘的标签信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showVolumeTags(showVolumeTagsRequest?: ShowVolumeTagsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/cloudvolumes/{volume_id}/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
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
         * 退订包周期计费模式的云硬盘，有如下约束：
         * -  系统盘、启动盘不可使用当前接口退订，必须和弹性云服务器一起退订
         * -  接口的请求body体最多可以传60个云硬盘id
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        unsubscribePostpaidVolume(unsubscribePostpaidVolumeRequest?: UnsubscribePostpaidVolumeRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/cloudvolumes/unsubscribe",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (unsubscribePostpaidVolumeRequest !== null && unsubscribePostpaidVolumeRequest !== undefined) {
                if (unsubscribePostpaidVolumeRequest instanceof UnsubscribePostpaidVolumeRequest) {
                    body = unsubscribePostpaidVolumeRequest.body
                } else {
                    body = unsubscribePostpaidVolumeRequest['body'];
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
         * 更新自动快照策略。标准快照当前只在部分区域支持，具体的区域列表请通过控制台查询。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateAutoSnapshotPolicy(updateAutoSnapshotPolicyRequest?: UpdateAutoSnapshotPolicyRequest) {
            const options = {
                method: "PUT",
                url: "/v5/{project_id}/snapshot-policies/{snapshot_policy_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let snapshotPolicyId;

            if (updateAutoSnapshotPolicyRequest !== null && updateAutoSnapshotPolicyRequest !== undefined) {
                if (updateAutoSnapshotPolicyRequest instanceof UpdateAutoSnapshotPolicyRequest) {
                    snapshotPolicyId = updateAutoSnapshotPolicyRequest.snapshotPolicyId;
                    body = updateAutoSnapshotPolicyRequest.body
                } else {
                    snapshotPolicyId = updateAutoSnapshotPolicyRequest['snapshot_policy_id'];
                    body = updateAutoSnapshotPolicyRequest['body'];
                }
            }

        
            if (snapshotPolicyId === null || snapshotPolicyId === undefined) {
            throw new RequiredError('snapshotPolicyId','Required parameter snapshotPolicyId was null or undefined when calling updateAutoSnapshotPolicy.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'snapshot_policy_id': snapshotPolicyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新回收站策略。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateRecyclePolicy(updateRecyclePolicyRequest?: UpdateRecyclePolicyRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/recycle-bin-volumes/policy",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (updateRecyclePolicyRequest !== null && updateRecyclePolicyRequest !== undefined) {
                if (updateRecyclePolicyRequest instanceof UpdateRecyclePolicyRequest) {
                    body = updateRecyclePolicyRequest.body
                } else {
                    body = updateRecyclePolicyRequest['body'];
                }
            }

        
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新云硬盘快照。支持企业项目授权功能。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
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

            let body: any;
            
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
         * 更新快照一致性组。标准快照当前只在部分区域支持，具体的区域列表请通过控制台查询。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateSnapshotGroup(updateSnapshotGroupRequest?: UpdateSnapshotGroupRequest) {
            const options = {
                method: "PUT",
                url: "/v5/{project_id}/snapshot-groups/{snapshot_group_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let snapshotGroupId;

            if (updateSnapshotGroupRequest !== null && updateSnapshotGroupRequest !== undefined) {
                if (updateSnapshotGroupRequest instanceof UpdateSnapshotGroupRequest) {
                    snapshotGroupId = updateSnapshotGroupRequest.snapshotGroupId;
                    body = updateSnapshotGroupRequest.body
                } else {
                    snapshotGroupId = updateSnapshotGroupRequest['snapshot_group_id'];
                    body = updateSnapshotGroupRequest['body'];
                }
            }

        
            if (snapshotGroupId === null || snapshotGroupId === undefined) {
            throw new RequiredError('snapshotGroupId','Required parameter snapshotGroupId was null or undefined when calling updateSnapshotGroup.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'snapshot_group_id': snapshotGroupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新快照信息。标准快照当前只在部分区域支持，具体的区域列表请通过控制台查询。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateStandardSnapshot(updateStandardSnapshotRequest?: UpdateStandardSnapshotRequest) {
            const options = {
                method: "PUT",
                url: "/v5/{project_id}/snapshots/{snapshot_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let snapshotId;

            if (updateStandardSnapshotRequest !== null && updateStandardSnapshotRequest !== undefined) {
                if (updateStandardSnapshotRequest instanceof UpdateStandardSnapshotRequest) {
                    snapshotId = updateStandardSnapshotRequest.snapshotId;
                    body = updateStandardSnapshotRequest.body
                } else {
                    snapshotId = updateStandardSnapshotRequest['snapshot_id'];
                    body = updateStandardSnapshotRequest['body'];
                }
            }

        
            if (snapshotId === null || snapshotId === undefined) {
            throw new RequiredError('snapshotId','Required parameter snapshotId was null or undefined when calling updateStandardSnapshot.');
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
         * Please refer to HUAWEI cloud API Explorer for details.
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

            let body: any;
            
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
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listVersions() {
            const options = {
                method: "GET",
                url: "/",
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
         * 查询接口的指定版本信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showVersion(showVersionRequest?: ShowVersionRequest) {
            const options = {
                method: "GET",
                url: "/{version}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
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