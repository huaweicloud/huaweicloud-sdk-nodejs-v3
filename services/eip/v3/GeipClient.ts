import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { AddGeipSegmentTagsRequest } from './model/AddGeipSegmentTagsRequest';
import { AddGeipSegmentTagsResponse } from './model/AddGeipSegmentTagsResponse';
import { AddGlobalEipTagsRequest } from './model/AddGlobalEipTagsRequest';
import { AddGlobalEipTagsResponse } from './model/AddGlobalEipTagsResponse';
import { AddInternetBandwidthTagsRequest } from './model/AddInternetBandwidthTagsRequest';
import { AddInternetBandwidthTagsResponse } from './model/AddInternetBandwidthTagsResponse';
import { AllowedBandwidthTypes } from './model/AllowedBandwidthTypes';
import { AssociateGeipSegmentInstanceRequest } from './model/AssociateGeipSegmentInstanceRequest';
import { AssociateGeipSegmentInstanceResponse } from './model/AssociateGeipSegmentInstanceResponse';
import { AssociateInstanceGlobalEipRequestBody } from './model/AssociateInstanceGlobalEipRequestBody';
import { AssociateInstanceGlobalEipRequestBodyGlobalEip } from './model/AssociateInstanceGlobalEipRequestBodyGlobalEip';
import { AssociateInstanceGlobalEipRequestBodyGlobalEipAssociateInstanceInfo } from './model/AssociateInstanceGlobalEipRequestBodyGlobalEipAssociateInstanceInfo';
import { AssociateInstanceGlobalEipRequestBodyGlobalEipGcBandwidthInfo } from './model/AssociateInstanceGlobalEipRequestBodyGlobalEipGcBandwidthInfo';
import { AssociateInstanceGlobalEipSegmentRequestBody } from './model/AssociateInstanceGlobalEipSegmentRequestBody';
import { AssociateInstanceGlobalEipSegmentRequestBodyGlobalEipSegment } from './model/AssociateInstanceGlobalEipSegmentRequestBodyGlobalEipSegment';
import { AssociateInstanceRequest } from './model/AssociateInstanceRequest';
import { AssociateInstanceResponse } from './model/AssociateInstanceResponse';
import { AttachInternetBandwidth } from './model/AttachInternetBandwidth';
import { AttachInternetBandwidthGlobalEip } from './model/AttachInternetBandwidthGlobalEip';
import { AttachInternetBandwidthGlobalEipRequestBody } from './model/AttachInternetBandwidthGlobalEipRequestBody';
import { AttachInternetBandwidthGlobalEipRequestBodyGlobalEip } from './model/AttachInternetBandwidthGlobalEipRequestBodyGlobalEip';
import { AttachInternetBandwidthRequest } from './model/AttachInternetBandwidthRequest';
import { AttachInternetBandwidthResponse } from './model/AttachInternetBandwidthResponse';
import { BatchAttachGeipSegmentInternetBandwidthRequest } from './model/BatchAttachGeipSegmentInternetBandwidthRequest';
import { BatchAttachGeipSegmentInternetBandwidthResponse } from './model/BatchAttachGeipSegmentInternetBandwidthResponse';
import { BatchAttachInternetBandwidthRequest } from './model/BatchAttachInternetBandwidthRequest';
import { BatchAttachInternetBandwidthResponse } from './model/BatchAttachInternetBandwidthResponse';
import { BatchAttachInternetBandwidthsGlobalEipRequestBody } from './model/BatchAttachInternetBandwidthsGlobalEipRequestBody';
import { BatchAttachInternetBandwidthsGlobalEipSegmentRequestBody } from './model/BatchAttachInternetBandwidthsGlobalEipSegmentRequestBody';
import { BatchCreateGeipSegmentTagsRequest } from './model/BatchCreateGeipSegmentTagsRequest';
import { BatchCreateGeipSegmentTagsResponse } from './model/BatchCreateGeipSegmentTagsResponse';
import { BatchCreateGlobalEipJob } from './model/BatchCreateGlobalEipJob';
import { BatchCreateGlobalEipRequest } from './model/BatchCreateGlobalEipRequest';
import { BatchCreateGlobalEipRequestBody } from './model/BatchCreateGlobalEipRequestBody';
import { BatchCreateGlobalEipRequestBodyGlobalEip } from './model/BatchCreateGlobalEipRequestBodyGlobalEip';
import { BatchCreateGlobalEipRequestBodyGlobalEipInternetBandwidthInfo } from './model/BatchCreateGlobalEipRequestBodyGlobalEipInternetBandwidthInfo';
import { BatchCreateGlobalEipResponse } from './model/BatchCreateGlobalEipResponse';
import { BatchCreateGlobalEipTagsRequest } from './model/BatchCreateGlobalEipTagsRequest';
import { BatchCreateGlobalEipTagsResponse } from './model/BatchCreateGlobalEipTagsResponse';
import { BatchCreateInternetBandwidth } from './model/BatchCreateInternetBandwidth';
import { BatchCreateInternetBandwidthRequest } from './model/BatchCreateInternetBandwidthRequest';
import { BatchCreateInternetBandwidthRequestBody } from './model/BatchCreateInternetBandwidthRequestBody';
import { BatchCreateInternetBandwidthRequestBodyInternetBandwidth } from './model/BatchCreateInternetBandwidthRequestBodyInternetBandwidth';
import { BatchCreateInternetBandwidthResponse } from './model/BatchCreateInternetBandwidthResponse';
import { BatchCreateInternetBandwidthTagsRequest } from './model/BatchCreateInternetBandwidthTagsRequest';
import { BatchCreateInternetBandwidthTagsResponse } from './model/BatchCreateInternetBandwidthTagsResponse';
import { BatchCreateV2RequestBody } from './model/BatchCreateV2RequestBody';
import { BatchDeleteGeipSegmentTagsRequest } from './model/BatchDeleteGeipSegmentTagsRequest';
import { BatchDeleteGeipSegmentTagsResponse } from './model/BatchDeleteGeipSegmentTagsResponse';
import { BatchDeleteGlobalEipTagsRequest } from './model/BatchDeleteGlobalEipTagsRequest';
import { BatchDeleteGlobalEipTagsResponse } from './model/BatchDeleteGlobalEipTagsResponse';
import { BatchDeleteInternetBandwidthTagsRequest } from './model/BatchDeleteInternetBandwidthTagsRequest';
import { BatchDeleteInternetBandwidthTagsResponse } from './model/BatchDeleteInternetBandwidthTagsResponse';
import { BatchDeleteV2RequestBody } from './model/BatchDeleteV2RequestBody';
import { BatchDeleteV2RequestBodyTags } from './model/BatchDeleteV2RequestBodyTags';
import { BatchDetachGeipSegmentInternetBandwidthRequest } from './model/BatchDetachGeipSegmentInternetBandwidthRequest';
import { BatchDetachGeipSegmentInternetBandwidthResponse } from './model/BatchDetachGeipSegmentInternetBandwidthResponse';
import { BatchDetachInternetBandwidthRequest } from './model/BatchDetachInternetBandwidthRequest';
import { BatchDetachInternetBandwidthResponse } from './model/BatchDetachInternetBandwidthResponse';
import { BatchDetachInternetBandwidthsGlobalEipRequestBody } from './model/BatchDetachInternetBandwidthsGlobalEipRequestBody';
import { BatchDetachInternetBandwidthsGlobalEipSegmentRequestBody } from './model/BatchDetachInternetBandwidthsGlobalEipSegmentRequestBody';
import { BatchInternetBandwidthsGlobalEipResponseBody } from './model/BatchInternetBandwidthsGlobalEipResponseBody';
import { CountGeipSegments } from './model/CountGeipSegments';
import { CountGlobalEipSegmentRequest } from './model/CountGlobalEipSegmentRequest';
import { CountGlobalEipSegmentResponse } from './model/CountGlobalEipSegmentResponse';
import { CountGlobalEips } from './model/CountGlobalEips';
import { CountGlobalEipsRequest } from './model/CountGlobalEipsRequest';
import { CountGlobalEipsResponse } from './model/CountGlobalEipsResponse';
import { CountInternetBandwidthRequest } from './model/CountInternetBandwidthRequest';
import { CountInternetBandwidthResponse } from './model/CountInternetBandwidthResponse';
import { CountInternetBandwidths } from './model/CountInternetBandwidths';
import { CreateGlobalEip } from './model/CreateGlobalEip';
import { CreateGlobalEipRequest } from './model/CreateGlobalEipRequest';
import { CreateGlobalEipRequestBody } from './model/CreateGlobalEipRequestBody';
import { CreateGlobalEipRequestBodyGlobalEip } from './model/CreateGlobalEipRequestBodyGlobalEip';
import { CreateGlobalEipRequestBodyGlobalEipTags } from './model/CreateGlobalEipRequestBodyGlobalEipTags';
import { CreateGlobalEipResponse } from './model/CreateGlobalEipResponse';
import { CreateGlobalEipSegmentRequest } from './model/CreateGlobalEipSegmentRequest';
import { CreateGlobalEipSegmentRequestBody } from './model/CreateGlobalEipSegmentRequestBody';
import { CreateGlobalEipSegmentRequestBodyGlobalEipSegment } from './model/CreateGlobalEipSegmentRequestBodyGlobalEipSegment';
import { CreateGlobalEipSegmentRequestBodyGlobalEipSegmentInternetBandwidth } from './model/CreateGlobalEipSegmentRequestBodyGlobalEipSegmentInternetBandwidth';
import { CreateGlobalEipSegmentResponse } from './model/CreateGlobalEipSegmentResponse';
import { CreateInternetBandwidth } from './model/CreateInternetBandwidth';
import { CreateInternetBandwidthRequest } from './model/CreateInternetBandwidthRequest';
import { CreateInternetBandwidthRequestBody } from './model/CreateInternetBandwidthRequestBody';
import { CreateInternetBandwidthRequestBodyInternetBandwidth } from './model/CreateInternetBandwidthRequestBodyInternetBandwidth';
import { CreateInternetBandwidthResponse } from './model/CreateInternetBandwidthResponse';
import { CreateTag } from './model/CreateTag';
import { CreateUserDisclaimerRecord } from './model/CreateUserDisclaimerRecord';
import { CreateUserDisclaimerRequest } from './model/CreateUserDisclaimerRequest';
import { CreateUserDisclaimerResponse } from './model/CreateUserDisclaimerResponse';
import { CreateV2TagRequestBody } from './model/CreateV2TagRequestBody';
import { CreateV2TagRequestBodyTag } from './model/CreateV2TagRequestBodyTag';
import { DeleteGeipSegmentTagRequest } from './model/DeleteGeipSegmentTagRequest';
import { DeleteGeipSegmentTagResponse } from './model/DeleteGeipSegmentTagResponse';
import { DeleteGlobalEipRequest } from './model/DeleteGlobalEipRequest';
import { DeleteGlobalEipResponse } from './model/DeleteGlobalEipResponse';
import { DeleteGlobalEipSegmentRequest } from './model/DeleteGlobalEipSegmentRequest';
import { DeleteGlobalEipSegmentResponse } from './model/DeleteGlobalEipSegmentResponse';
import { DeleteGlobalEipTagRequest } from './model/DeleteGlobalEipTagRequest';
import { DeleteGlobalEipTagResponse } from './model/DeleteGlobalEipTagResponse';
import { DeleteInternetBandwidthRequest } from './model/DeleteInternetBandwidthRequest';
import { DeleteInternetBandwidthResponse } from './model/DeleteInternetBandwidthResponse';
import { DeleteInternetBandwidthTagRequest } from './model/DeleteInternetBandwidthTagRequest';
import { DeleteInternetBandwidthTagResponse } from './model/DeleteInternetBandwidthTagResponse';
import { DeleteUserDisclaimerRequest } from './model/DeleteUserDisclaimerRequest';
import { DeleteUserDisclaimerResponse } from './model/DeleteUserDisclaimerResponse';
import { DetachInternetBandwidth } from './model/DetachInternetBandwidth';
import { DetachInternetBandwidthGlobalEips } from './model/DetachInternetBandwidthGlobalEips';
import { DetachInternetBandwidthRequest } from './model/DetachInternetBandwidthRequest';
import { DetachInternetBandwidthResponse } from './model/DetachInternetBandwidthResponse';
import { DisassociateGeipSegmentInstanceRequest } from './model/DisassociateGeipSegmentInstanceRequest';
import { DisassociateGeipSegmentInstanceResponse } from './model/DisassociateGeipSegmentInstanceResponse';
import { DisassociateInstanceRequest } from './model/DisassociateInstanceRequest';
import { DisassociateInstanceResponse } from './model/DisassociateInstanceResponse';
import { ExtLimitPojo } from './model/ExtLimitPojo';
import { GeipResource } from './model/GeipResource';
import { GeipTags } from './model/GeipTags';
import { GetAccountTagsV2 } from './model/GetAccountTagsV2';
import { GlobalConnectionBandwidthInfo } from './model/GlobalConnectionBandwidthInfo';
import { InstanceInfo } from './model/InstanceInfo';
import { InternetBandwidthInfo } from './model/InternetBandwidthInfo';
import { ListAccessSites } from './model/ListAccessSites';
import { ListAccessSitesRequest } from './model/ListAccessSitesRequest';
import { ListAccessSitesResponse } from './model/ListAccessSitesResponse';
import { ListGeipPools } from './model/ListGeipPools';
import { ListGeipPoolsRequest } from './model/ListGeipPoolsRequest';
import { ListGeipPoolsResponse } from './model/ListGeipPoolsResponse';
import { ListGeipResourceQuotasRequest } from './model/ListGeipResourceQuotasRequest';
import { ListGeipResourceQuotasResponse } from './model/ListGeipResourceQuotasResponse';
import { ListGeipSegmentCountFilterTagsRequest } from './model/ListGeipSegmentCountFilterTagsRequest';
import { ListGeipSegmentCountFilterTagsResponse } from './model/ListGeipSegmentCountFilterTagsResponse';
import { ListGeipSegmentDomainTagsRequest } from './model/ListGeipSegmentDomainTagsRequest';
import { ListGeipSegmentDomainTagsResponse } from './model/ListGeipSegmentDomainTagsResponse';
import { ListGeipSegmentFilterTagsRequest } from './model/ListGeipSegmentFilterTagsRequest';
import { ListGeipSegmentFilterTagsResponse } from './model/ListGeipSegmentFilterTagsResponse';
import { ListGlobalEipCountFilterTagsRequest } from './model/ListGlobalEipCountFilterTagsRequest';
import { ListGlobalEipCountFilterTagsResponse } from './model/ListGlobalEipCountFilterTagsResponse';
import { ListGlobalEipDomainTagsRequest } from './model/ListGlobalEipDomainTagsRequest';
import { ListGlobalEipDomainTagsResponse } from './model/ListGlobalEipDomainTagsResponse';
import { ListGlobalEipFilterTagsRequest } from './model/ListGlobalEipFilterTagsRequest';
import { ListGlobalEipFilterTagsResponse } from './model/ListGlobalEipFilterTagsResponse';
import { ListGlobalEipSegments } from './model/ListGlobalEipSegments';
import { ListGlobalEipSegmentsRequest } from './model/ListGlobalEipSegmentsRequest';
import { ListGlobalEipSegmentsResponse } from './model/ListGlobalEipSegmentsResponse';
import { ListGlobalEips } from './model/ListGlobalEips';
import { ListGlobalEipsRequest } from './model/ListGlobalEipsRequest';
import { ListGlobalEipsResponse } from './model/ListGlobalEipsResponse';
import { ListGlobalEipsResponseBodyPageInfo } from './model/ListGlobalEipsResponseBodyPageInfo';
import { ListInternetBandwidthCountFilterTagsRequest } from './model/ListInternetBandwidthCountFilterTagsRequest';
import { ListInternetBandwidthCountFilterTagsResponse } from './model/ListInternetBandwidthCountFilterTagsResponse';
import { ListInternetBandwidthDomainTagsRequest } from './model/ListInternetBandwidthDomainTagsRequest';
import { ListInternetBandwidthDomainTagsResponse } from './model/ListInternetBandwidthDomainTagsResponse';
import { ListInternetBandwidthFilterTagsRequest } from './model/ListInternetBandwidthFilterTagsRequest';
import { ListInternetBandwidthFilterTagsResponse } from './model/ListInternetBandwidthFilterTagsResponse';
import { ListInternetBandwidthLimits } from './model/ListInternetBandwidthLimits';
import { ListInternetBandwidthLimitsRequest } from './model/ListInternetBandwidthLimitsRequest';
import { ListInternetBandwidthLimitsResponse } from './model/ListInternetBandwidthLimitsResponse';
import { ListInternetBandwidths } from './model/ListInternetBandwidths';
import { ListInternetBandwidthsRequest } from './model/ListInternetBandwidthsRequest';
import { ListInternetBandwidthsResponse } from './model/ListInternetBandwidthsResponse';
import { ListJobs } from './model/ListJobs';
import { ListJobsRequest } from './model/ListJobsRequest';
import { ListJobsResponse } from './model/ListJobsResponse';
import { ListQuotas } from './model/ListQuotas';
import { ListResourcesByTagsRequestBody } from './model/ListResourcesByTagsRequestBody';
import { ListSupportInstancesSupportRegions } from './model/ListSupportInstancesSupportRegions';
import { ListSupportMasks } from './model/ListSupportMasks';
import { ListSupportMasksRequest } from './model/ListSupportMasksRequest';
import { ListSupportMasksResponse } from './model/ListSupportMasksResponse';
import { ListSupportRegions } from './model/ListSupportRegions';
import { ListSupportRegionsRequest } from './model/ListSupportRegionsRequest';
import { ListSupportRegionsResponse } from './model/ListSupportRegionsResponse';
import { ListTenantGeipSupportInstancesRequest } from './model/ListTenantGeipSupportInstancesRequest';
import { ListTenantGeipSupportInstancesResponse } from './model/ListTenantGeipSupportInstancesResponse';
import { LockInfo } from './model/LockInfo';
import { NativeUUID } from './model/NativeUUID';
import { ResourcesInfo } from './model/ResourcesInfo';
import { ShortGlobalEipSegment } from './model/ShortGlobalEipSegment';
import { ShowGeipSegmentTagsRequest } from './model/ShowGeipSegmentTagsRequest';
import { ShowGeipSegmentTagsResponse } from './model/ShowGeipSegmentTagsResponse';
import { ShowGlobalEip } from './model/ShowGlobalEip';
import { ShowGlobalEipRequest } from './model/ShowGlobalEipRequest';
import { ShowGlobalEipResponse } from './model/ShowGlobalEipResponse';
import { ShowGlobalEipSegment } from './model/ShowGlobalEipSegment';
import { ShowGlobalEipSegmentRequest } from './model/ShowGlobalEipSegmentRequest';
import { ShowGlobalEipSegmentResponse } from './model/ShowGlobalEipSegmentResponse';
import { ShowGlobalEipTagsRequest } from './model/ShowGlobalEipTagsRequest';
import { ShowGlobalEipTagsResponse } from './model/ShowGlobalEipTagsResponse';
import { ShowInternetBandwidth } from './model/ShowInternetBandwidth';
import { ShowInternetBandwidthRequest } from './model/ShowInternetBandwidthRequest';
import { ShowInternetBandwidthResponse } from './model/ShowInternetBandwidthResponse';
import { ShowInternetBandwidthTagsRequest } from './model/ShowInternetBandwidthTagsRequest';
import { ShowInternetBandwidthTagsResponse } from './model/ShowInternetBandwidthTagsResponse';
import { ShowJob } from './model/ShowJob';
import { ShowJobsRequest } from './model/ShowJobsRequest';
import { ShowJobsResponse } from './model/ShowJobsResponse';
import { ShowUserDisclaimerRecord } from './model/ShowUserDisclaimerRecord';
import { ShowUserDisclaimerRequest } from './model/ShowUserDisclaimerRequest';
import { ShowUserDisclaimerResponse } from './model/ShowUserDisclaimerResponse';
import { SysTag } from './model/SysTag';
import { Tag } from './model/Tag';
import { UpdateGlobalEip } from './model/UpdateGlobalEip';
import { UpdateGlobalEipRequest } from './model/UpdateGlobalEipRequest';
import { UpdateGlobalEipRequestBody } from './model/UpdateGlobalEipRequestBody';
import { UpdateGlobalEipRequestBodyGlobalEip } from './model/UpdateGlobalEipRequestBodyGlobalEip';
import { UpdateGlobalEipResponse } from './model/UpdateGlobalEipResponse';
import { UpdateGlobalEipSegmentRequest } from './model/UpdateGlobalEipSegmentRequest';
import { UpdateGlobalEipSegmentRequestBody } from './model/UpdateGlobalEipSegmentRequestBody';
import { UpdateGlobalEipSegmentRequestBodyGlobalEipSegment } from './model/UpdateGlobalEipSegmentRequestBodyGlobalEipSegment';
import { UpdateGlobalEipSegmentResponse } from './model/UpdateGlobalEipSegmentResponse';
import { UpdateInternetBandwidth } from './model/UpdateInternetBandwidth';
import { UpdateInternetBandwidthRequest } from './model/UpdateInternetBandwidthRequest';
import { UpdateInternetBandwidthRequestBody } from './model/UpdateInternetBandwidthRequestBody';
import { UpdateInternetBandwidthRequestBodyInternetBandwidth } from './model/UpdateInternetBandwidthRequestBodyInternetBandwidth';
import { UpdateInternetBandwidthResponse } from './model/UpdateInternetBandwidthResponse';

export class GeipClient {
    public static newBuilder(): ClientBuilder<GeipClient> {
            let client = new ClientBuilder<GeipClient>(newClient, 'GlobalCredentials');
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
     * 添加全域公网带宽标签
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 添加全域公网带宽标签
     * @param {string} resourceId 
     * @param {CreateV2TagRequestBody} createV2TagRequestBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addInternetBandwidthTags(addInternetBandwidthTagsRequest?: AddInternetBandwidthTagsRequest): Promise<AddInternetBandwidthTagsResponse> {
        const options = ParamCreater().addInternetBandwidthTags(addInternetBandwidthTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量创建全域公网带宽
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量创建全域公网带宽
     * @param {BatchCreateInternetBandwidthRequestBody} batchCreateInternetBandwidthRequestBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchCreateInternetBandwidth(batchCreateInternetBandwidthRequest?: BatchCreateInternetBandwidthRequest): Promise<BatchCreateInternetBandwidthResponse> {
        const options = ParamCreater().batchCreateInternetBandwidth(batchCreateInternetBandwidthRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量添加全域公网带宽标签
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量添加全域公网带宽标签
     * @param {string} resourceId 
     * @param {BatchCreateV2RequestBody} batchCreateV2RequestBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchCreateInternetBandwidthTags(batchCreateInternetBandwidthTagsRequest?: BatchCreateInternetBandwidthTagsRequest): Promise<BatchCreateInternetBandwidthTagsResponse> {
        const options = ParamCreater().batchCreateInternetBandwidthTags(batchCreateInternetBandwidthTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量删除全域公网带宽标签
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量删除全域公网带宽标签
     * @param {string} resourceId 
     * @param {BatchDeleteV2RequestBody} batchDeleteV2RequestBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeleteInternetBandwidthTags(batchDeleteInternetBandwidthTagsRequest?: BatchDeleteInternetBandwidthTagsRequest): Promise<BatchDeleteInternetBandwidthTagsResponse> {
        const options = ParamCreater().batchDeleteInternetBandwidthTags(batchDeleteInternetBandwidthTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询全域公网带宽个数
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询全域公网带宽个数
     * @param {Array<string>} [id] 
     * @param {Array<number>} [size] 
     * @param {Array<string>} [name] 
     * @param {string} [nameLike] 
     * @param {Array<string>} [accessSite] 
     * @param {Array<'freezed' | 'normal'>} [status] 
     * @param {Array<string>} [enterpriseProjectId] 
     * @param {Array<string>} [tags] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public countInternetBandwidth(countInternetBandwidthRequest?: CountInternetBandwidthRequest): Promise<CountInternetBandwidthResponse> {
        const options = ParamCreater().countInternetBandwidth(countInternetBandwidthRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建全域公网带宽
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建全域公网带宽
     * @param {CreateInternetBandwidthRequestBody} createInternetBandwidthRequestBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createInternetBandwidth(createInternetBandwidthRequest?: CreateInternetBandwidthRequest): Promise<CreateInternetBandwidthResponse> {
        const options = ParamCreater().createInternetBandwidth(createInternetBandwidthRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建租户签署免责条款
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建租户签署免责条款
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createUserDisclaimer(createUserDisclaimerRequest?: CreateUserDisclaimerRequest): Promise<CreateUserDisclaimerResponse> {
        const options = ParamCreater().createUserDisclaimer();

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除全域公网带宽
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除全域公网带宽
     * @param {string} internetBandwidthId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteInternetBandwidth(deleteInternetBandwidthRequest?: DeleteInternetBandwidthRequest): Promise<DeleteInternetBandwidthResponse> {
        const options = ParamCreater().deleteInternetBandwidth(deleteInternetBandwidthRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除全域公网带宽标签
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除全域公网带宽标签
     * @param {string} resourceId 
     * @param {string} tagKey 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteInternetBandwidthTag(deleteInternetBandwidthTagRequest?: DeleteInternetBandwidthTagRequest): Promise<DeleteInternetBandwidthTagResponse> {
        const options = ParamCreater().deleteInternetBandwidthTag(deleteInternetBandwidthTagRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除租户撤销免责条款
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除租户撤销免责条款
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteUserDisclaimer(deleteUserDisclaimerRequest?: DeleteUserDisclaimerRequest): Promise<DeleteUserDisclaimerResponse> {
        const options = ParamCreater().deleteUserDisclaimer();

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询接入点列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询接入点列表
     * @param {number} [limit] 每页条数
     * @param {number} [offset] 分页起始点
     * @param {string} [marker] 分页起始点
     * @param {boolean} [pageReverse] 翻页方向
     * @param {Array<'id' | 'name' | 'proxy_region' | 'en_name' | 'cn_name' | 'created_at' | 'updated_at'>} [fields] 
     * @param {Array<'id' | 'name' | 'created_at' | 'updated_at'>} [sortKey] 按照sort_key指定的字段排序
     * @param {Array<'asc' | 'desc'>} [sortDir] 排序的方向，倒序或者正序
     * @param {Array<string>} [id] 
     * @param {Array<string>} [name] 
     * @param {Array<string>} [proxyRegion] 
     * @param {Array<string>} [iecAzCode] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAccessSites(listAccessSitesRequest?: ListAccessSitesRequest): Promise<ListAccessSitesResponse> {
        const options = ParamCreater().listAccessSites(listAccessSitesRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询租户全域弹性公网IP配额
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询租户全域弹性公网IP配额
     * @param {number} [limit] 每页条数
     * @param {number} [offset] 分页起始点
     * @param {string} [marker] 分页起始点
     * @param {boolean} [pageReverse] 翻页方向
     * @param {Array<string>} [fields] 
     * @param {Array<'geip' | 'geip_segment' | 'internetBandwidthIP' | 'internetBandwidth'>} [type] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listGeipResourceQuotas(listGeipResourceQuotasRequest?: ListGeipResourceQuotasRequest): Promise<ListGeipResourceQuotasResponse> {
        const options = ParamCreater().listGeipResourceQuotas(listGeipResourceQuotasRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询资源实例列表数目
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询资源实例列表数目
     * @param {ListResourcesByTagsRequestBody} [listResourcesByTagsRequestBody] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listInternetBandwidthCountFilterTags(listInternetBandwidthCountFilterTagsRequest?: ListInternetBandwidthCountFilterTagsRequest): Promise<ListInternetBandwidthCountFilterTagsResponse> {
        const options = ParamCreater().listInternetBandwidthCountFilterTags(listInternetBandwidthCountFilterTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询全域公网带宽项目标签
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询全域公网带宽项目标签
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listInternetBandwidthDomainTags(listInternetBandwidthDomainTagsRequest?: ListInternetBandwidthDomainTagsRequest): Promise<ListInternetBandwidthDomainTagsResponse> {
        const options = ParamCreater().listInternetBandwidthDomainTags();

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询资源实例列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询资源实例列表
     * @param {Array<number>} [limit] 
     * @param {Array<number>} [offset] 
     * @param {ListResourcesByTagsRequestBody} [listResourcesByTagsRequestBody] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listInternetBandwidthFilterTags(listInternetBandwidthFilterTagsRequest?: ListInternetBandwidthFilterTagsRequest): Promise<ListInternetBandwidthFilterTagsResponse> {
        const options = ParamCreater().listInternetBandwidthFilterTags(listInternetBandwidthFilterTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询全域公网带宽限制列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 全域公网带宽限制列表
     * @param {Array<'id' | 'charge_mode' | 'min_size' | 'ext_limit' | 'max_size'>} [fields] 
     * @param {Array<'id'>} [sortKey] 按照sort_key指定的字段排序
     * @param {Array<'asc' | 'desc'>} [sortDir] 排序的方向，倒序或者正序
     * @param {Array<'bandwidth' | '95peak_bidirection' | '95peak_plus_1000' | '95peak_guar'>} [chargeMode] 
     * @param {string} [type] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listInternetBandwidthLimits(listInternetBandwidthLimitsRequest?: ListInternetBandwidthLimitsRequest): Promise<ListInternetBandwidthLimitsResponse> {
        const options = ParamCreater().listInternetBandwidthLimits(listInternetBandwidthLimitsRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询全域公网带宽列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询全域公网带宽列表
     * @param {number} [limit] 每页条数
     * @param {number} [offset] 分页起始点
     * @param {string} [marker] 分页起始点
     * @param {boolean} [pageReverse] 翻页方向
     * @param {Array<'id' | 'name' | 'isp' | 'ingress_size' | 'access_site' | 'size' | 'description' | 'charge_mode' | 'ratio_95peak' | 'freezen_info' | 'domain_id' | 'status' | 'created_at' | 'updated_at' | 'is_pre_paid' | 'type' | 'tags' | 'sys_tags' | 'enterprise_project_id'>} [fields] 
     * @param {Array<'geip_count' | 'geip_segment_count'>} [extFields] 
     * @param {Array<'id' | 'size' | 'created_at' | 'updated_at'>} [sortKey] 按照sort_key指定的字段排序
     * @param {Array<'asc' | 'desc'>} [sortDir] 排序的方向，倒序或者正序
     * @param {Array<string>} [id] 
     * @param {Array<number>} [size] 
     * @param {Array<string>} [name] 
     * @param {string} [nameLike] 
     * @param {Array<string>} [accessSite] 
     * @param {Array<'freezed' | 'normal'>} [status] 
     * @param {Array<string>} [enterpriseProjectId] 
     * @param {Array<string>} [tags] 
     * @param {Array<string>} [type] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listInternetBandwidths(listInternetBandwidthsRequest?: ListInternetBandwidthsRequest): Promise<ListInternetBandwidthsResponse> {
        const options = ParamCreater().listInternetBandwidths(listInternetBandwidthsRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询全域弹性公网IP段支持的掩码列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询全域弹性公网IP段支持的掩码列表
     * @param {number} [limit] 每页条数
     * @param {number} [offset] 分页起始点
     * @param {string} [marker] 分页起始点
     * @param {boolean} [pageReverse] 翻页方向
     * @param {Array<'id' | 'ip_version' | 'mask' | 'created_at' | 'updated_at'>} [fields] 
     * @param {Array<'id' | 'ip_version' | 'mask' | 'created_at' | 'updated_at'>} [sortKey] 按照sort_key指定的字段排序
     * @param {Array<'asc' | 'desc'>} [sortDir] 排序的方向，倒序或者正序
     * @param {Array<string>} [id] 
     * @param {Array<4 | 6>} [ipVersion] 
     * @param {number} [mask] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSupportMasks(listSupportMasksRequest?: ListSupportMasksRequest): Promise<ListSupportMasksResponse> {
        const options = ParamCreater().listSupportMasks(listSupportMasksRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询全域公网带宽详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询全域公网带宽详情
     * @param {string} internetBandwidthId 
     * @param {Array<'id' | 'name' | 'isp' | 'ingress_size' | 'access_site' | 'size' | 'description' | 'charge_mode' | 'ratio_95peak' | 'freezen_info' | 'domain_id' | 'status' | 'created_at' | 'updated_at' | 'is_pre_paid' | 'type' | 'tags' | 'sys_tags' | 'enterprise_project_id'>} [fields] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showInternetBandwidth(showInternetBandwidthRequest?: ShowInternetBandwidthRequest): Promise<ShowInternetBandwidthResponse> {
        const options = ParamCreater().showInternetBandwidth(showInternetBandwidthRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询全域公网带宽标签
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询全域公网带宽标签
     * @param {string} resourceId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showInternetBandwidthTags(showInternetBandwidthTagsRequest?: ShowInternetBandwidthTagsRequest): Promise<ShowInternetBandwidthTagsResponse> {
        const options = ParamCreater().showInternetBandwidthTags(showInternetBandwidthTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询租户签署免责条款详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询租户签署免责条款详情
     * @param {Array<'domain_id' | 'created_at' | 'updated_at'>} [fields] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showUserDisclaimer(showUserDisclaimerRequest?: ShowUserDisclaimerRequest): Promise<ShowUserDisclaimerResponse> {
        const options = ParamCreater().showUserDisclaimer(showUserDisclaimerRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新全域公网带宽
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新全域公网带宽
     * @param {string} internetBandwidthId 
     * @param {UpdateInternetBandwidthRequestBody} updateInternetBandwidthRequestBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateInternetBandwidth(updateInternetBandwidthRequest?: UpdateInternetBandwidthRequest): Promise<UpdateInternetBandwidthResponse> {
        const options = ParamCreater().updateInternetBandwidth(updateInternetBandwidthRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 添加全域弹性公网IP段的标签
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 添加全域弹性公网IP段标签
     * @param {string} resourceId 
     * @param {CreateV2TagRequestBody} createV2TagRequestBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addGeipSegmentTags(addGeipSegmentTagsRequest?: AddGeipSegmentTagsRequest): Promise<AddGeipSegmentTagsResponse> {
        const options = ParamCreater().addGeipSegmentTags(addGeipSegmentTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 添加全域弹性公网IP的标签
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 添加全域弹性公网IP标签
     * @param {string} resourceId 
     * @param {CreateV2TagRequestBody} createV2TagRequestBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addGlobalEipTags(addGlobalEipTagsRequest?: AddGlobalEipTagsRequest): Promise<AddGlobalEipTagsResponse> {
        const options = ParamCreater().addGlobalEipTags(addGlobalEipTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 全域弹性公网IP段绑定后端实例
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 全域弹性公网IP段绑定后端实例
     * @param {string} globalEipSegmentId 
     * @param {AssociateInstanceGlobalEipSegmentRequestBody} associateInstanceGlobalEipSegmentRequestBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public associateGeipSegmentInstance(associateGeipSegmentInstanceRequest?: AssociateGeipSegmentInstanceRequest): Promise<AssociateGeipSegmentInstanceResponse> {
        const options = ParamCreater().associateGeipSegmentInstance(associateGeipSegmentInstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 绑定后端实例
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 绑定后端实例
     * @param {string} globalEipId 
     * @param {AssociateInstanceGlobalEipRequestBody} associateInstanceGlobalEipRequestBody 
     * @param {string} [bindingInstanceService] 绑定接口可以加，标识请求是从哪个服务调过来的
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public associateInstance(associateInstanceRequest?: AssociateInstanceRequest): Promise<AssociateInstanceResponse> {
        const options = ParamCreater().associateInstance(associateInstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 绑定全域公网带宽
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 绑定全域公网带宽
     * @param {string} globalEipId 
     * @param {AttachInternetBandwidthGlobalEipRequestBody} attachInternetBandwidthGlobalEipRequestBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public attachInternetBandwidth(attachInternetBandwidthRequest?: AttachInternetBandwidthRequest): Promise<AttachInternetBandwidthResponse> {
        const options = ParamCreater().attachInternetBandwidth(attachInternetBandwidthRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 全域弹性公网IP段批量绑定全域公网带宽
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 全域弹性公网IP段批量绑定全域公网带宽
     * @param {BatchAttachInternetBandwidthsGlobalEipSegmentRequestBody} batchAttachInternetBandwidthsGlobalEipSegmentRequestBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchAttachGeipSegmentInternetBandwidth(batchAttachGeipSegmentInternetBandwidthRequest?: BatchAttachGeipSegmentInternetBandwidthRequest): Promise<BatchAttachGeipSegmentInternetBandwidthResponse> {
        const options = ParamCreater().batchAttachGeipSegmentInternetBandwidth(batchAttachGeipSegmentInternetBandwidthRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量绑定全域公网带宽
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量绑定全域公网带宽
     * @param {BatchAttachInternetBandwidthsGlobalEipRequestBody} batchAttachInternetBandwidthsGlobalEipRequestBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchAttachInternetBandwidth(batchAttachInternetBandwidthRequest?: BatchAttachInternetBandwidthRequest): Promise<BatchAttachInternetBandwidthResponse> {
        const options = ParamCreater().batchAttachInternetBandwidth(batchAttachInternetBandwidthRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量添加全域弹性公网IP段的标签
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量添加全域弹性公网IP段标签
     * @param {string} resourceId 
     * @param {BatchCreateV2RequestBody} batchCreateV2RequestBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchCreateGeipSegmentTags(batchCreateGeipSegmentTagsRequest?: BatchCreateGeipSegmentTagsRequest): Promise<BatchCreateGeipSegmentTagsResponse> {
        const options = ParamCreater().batchCreateGeipSegmentTags(batchCreateGeipSegmentTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量创建全域弹性公网IP
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量创建全域弹性公网IP
     * @param {BatchCreateGlobalEipRequestBody} batchCreateGlobalEipRequestBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchCreateGlobalEip(batchCreateGlobalEipRequest?: BatchCreateGlobalEipRequest): Promise<BatchCreateGlobalEipResponse> {
        const options = ParamCreater().batchCreateGlobalEip(batchCreateGlobalEipRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量添加全域弹性公网IP的标签
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量添加全域弹性公网IP标签
     * @param {string} resourceId 
     * @param {BatchCreateV2RequestBody} batchCreateV2RequestBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchCreateGlobalEipTags(batchCreateGlobalEipTagsRequest?: BatchCreateGlobalEipTagsRequest): Promise<BatchCreateGlobalEipTagsResponse> {
        const options = ParamCreater().batchCreateGlobalEipTags(batchCreateGlobalEipTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量删除全域弹性公网IP段的标签
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量删除全域弹性公网IP段标签
     * @param {string} resourceId 
     * @param {BatchDeleteV2RequestBody} batchDeleteV2RequestBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeleteGeipSegmentTags(batchDeleteGeipSegmentTagsRequest?: BatchDeleteGeipSegmentTagsRequest): Promise<BatchDeleteGeipSegmentTagsResponse> {
        const options = ParamCreater().batchDeleteGeipSegmentTags(batchDeleteGeipSegmentTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量删除全域弹性公网IP的标签
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量删除全域弹性公网IP标签
     * @param {string} resourceId 
     * @param {BatchDeleteV2RequestBody} batchDeleteV2RequestBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeleteGlobalEipTags(batchDeleteGlobalEipTagsRequest?: BatchDeleteGlobalEipTagsRequest): Promise<BatchDeleteGlobalEipTagsResponse> {
        const options = ParamCreater().batchDeleteGlobalEipTags(batchDeleteGlobalEipTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 全域弹性公网IP段批量解绑全域公网带宽
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 全域弹性公网IP段批量解绑全域公网带宽
     * @param {BatchDetachInternetBandwidthsGlobalEipSegmentRequestBody} [batchDetachInternetBandwidthsGlobalEipSegmentRequestBody] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDetachGeipSegmentInternetBandwidth(batchDetachGeipSegmentInternetBandwidthRequest?: BatchDetachGeipSegmentInternetBandwidthRequest): Promise<BatchDetachGeipSegmentInternetBandwidthResponse> {
        const options = ParamCreater().batchDetachGeipSegmentInternetBandwidth(batchDetachGeipSegmentInternetBandwidthRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量解绑全域公网带宽
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量解绑全域公网带宽
     * @param {BatchDetachInternetBandwidthsGlobalEipRequestBody} [batchDetachInternetBandwidthsGlobalEipRequestBody] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDetachInternetBandwidth(batchDetachInternetBandwidthRequest?: BatchDetachInternetBandwidthRequest): Promise<BatchDetachInternetBandwidthResponse> {
        const options = ParamCreater().batchDetachInternetBandwidth(batchDetachInternetBandwidthRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询全域弹性公网IP段个数
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询全域弹性公网IP段个数
     * @param {Array<'count'>} [fields] 
     * @param {Array<string>} [id] 
     * @param {Array<string>} [internetBandwidthId] 
     * @param {Array<string>} [name] 
     * @param {string} [nameLike] 
     * @param {Array<string>} [accessSite] 
     * @param {Array<string>} [geipPoolName] 
     * @param {Array<string>} [isp] 
     * @param {Array<4 | 6>} [ipVersion] 
     * @param {Array<string>} [cidr] 
     * @param {Array<string>} [cidrV6] 
     * @param {Array<boolean>} [freezen] 
     * @param {Array<boolean>} [internetBandwidthIsNull] 
     * @param {Array<'idle' | 'inuse' | 'pending_create' | 'pending_update'>} [status] 
     * @param {Array<string>} [associateInstanceRegion] 
     * @param {Array<string>} [associateInstancePublicBorderGroup] 
     * @param {Array<string>} [associateInstanceInstanceSite] 
     * @param {Array<string>} [associateInstanceInstanceType] 
     * @param {Array<string>} [associateInstanceInstanceId] 
     * @param {Array<string>} [associateInstanceProjectId] 
     * @param {Array<string>} [enterpriseProjectId] 
     * @param {Array<string>} [tags] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public countGlobalEipSegment(countGlobalEipSegmentRequest?: CountGlobalEipSegmentRequest): Promise<CountGlobalEipSegmentResponse> {
        const options = ParamCreater().countGlobalEipSegment(countGlobalEipSegmentRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询全域弹性公网IP个数
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询全域弹性公网IP个数
     * @param {Array<string>} [id] 
     * @param {Array<string>} [internetBandwidthId] 
     * @param {Array<string>} [name] 
     * @param {string} [nameLike] 
     * @param {Array<string>} [accessSite] 
     * @param {Array<string>} [geipPoolName] 
     * @param {Array<string>} [isp] 
     * @param {Array<4 | 6>} [ipVersion] 
     * @param {Array<string>} [ipAddress] 
     * @param {Array<string>} [ipv6Address] 
     * @param {Array<boolean>} [freezen] 
     * @param {Array<boolean>} [polluted] 
     * @param {Array<boolean>} [internetBandwidthIsNull] 
     * @param {Array<boolean>} [gcbBandwidthIsNull] 
     * @param {Array<'idle' | 'inuse' | 'pending_create' | 'pending_update'>} [status] 
     * @param {Array<string>} [associateInstanceInfoRegion] 
     * @param {Array<string>} [associateInstanceInfoPublicBorderGroup] 
     * @param {Array<string>} [associateInstanceInfoInstanceSite] 
     * @param {Array<string>} [associateInstanceInfoInstanceType] 
     * @param {Array<string>} [associateInstanceInfoInstanceId] 
     * @param {Array<string>} [associateInstanceInfoProjectId] 
     * @param {Array<string>} [enterpriseProjectId] 
     * @param {Array<string>} [tags] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public countGlobalEips(countGlobalEipsRequest?: CountGlobalEipsRequest): Promise<CountGlobalEipsResponse> {
        const options = ParamCreater().countGlobalEips(countGlobalEipsRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建全域弹性公网IP
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建全域弹性公网IP
     * @param {CreateGlobalEipRequestBody} createGlobalEipRequestBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createGlobalEip(createGlobalEipRequest?: CreateGlobalEipRequest): Promise<CreateGlobalEipResponse> {
        const options = ParamCreater().createGlobalEip(createGlobalEipRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建全域弹性公网IP段
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建全域弹性公网IP段
     * @param {CreateGlobalEipSegmentRequestBody} createGlobalEipSegmentRequestBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createGlobalEipSegment(createGlobalEipSegmentRequest?: CreateGlobalEipSegmentRequest): Promise<CreateGlobalEipSegmentResponse> {
        const options = ParamCreater().createGlobalEipSegment(createGlobalEipSegmentRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除全域弹性公网IP段的标签
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除全域弹性公网IP段标签
     * @param {string} resourceId 
     * @param {string} tagKey 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteGeipSegmentTag(deleteGeipSegmentTagRequest?: DeleteGeipSegmentTagRequest): Promise<DeleteGeipSegmentTagResponse> {
        const options = ParamCreater().deleteGeipSegmentTag(deleteGeipSegmentTagRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除全域弹性公网IP
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除全域弹性公网IP
     * @param {string} globalEipId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteGlobalEip(deleteGlobalEipRequest?: DeleteGlobalEipRequest): Promise<DeleteGlobalEipResponse> {
        const options = ParamCreater().deleteGlobalEip(deleteGlobalEipRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除全域弹性公网IP段
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除全域弹性公网IP段
     * @param {string} globalEipSegmentId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteGlobalEipSegment(deleteGlobalEipSegmentRequest?: DeleteGlobalEipSegmentRequest): Promise<DeleteGlobalEipSegmentResponse> {
        const options = ParamCreater().deleteGlobalEipSegment(deleteGlobalEipSegmentRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除全域弹性公网IP的标签
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除全域弹性公网IP标签
     * @param {string} resourceId 
     * @param {string} tagKey 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteGlobalEipTag(deleteGlobalEipTagRequest?: DeleteGlobalEipTagRequest): Promise<DeleteGlobalEipTagResponse> {
        const options = ParamCreater().deleteGlobalEipTag(deleteGlobalEipTagRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 解绑全域公网带宽
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 解绑全域公网带宽
     * @param {string} globalEipId 
     * @param {boolean} [forceUnbind] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public detachInternetBandwidth(detachInternetBandwidthRequest?: DetachInternetBandwidthRequest): Promise<DetachInternetBandwidthResponse> {
        const options = ParamCreater().detachInternetBandwidth(detachInternetBandwidthRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 全域弹性公网IP段解绑后端实例
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 全域弹性公网IP段解绑后端实例
     * @param {string} globalEipSegmentId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public disassociateGeipSegmentInstance(disassociateGeipSegmentInstanceRequest?: DisassociateGeipSegmentInstanceRequest): Promise<DisassociateGeipSegmentInstanceResponse> {
        const options = ParamCreater().disassociateGeipSegmentInstance(disassociateGeipSegmentInstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 解绑后端实例
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 解绑后端实例
     * @param {boolean} isReserveGcb 解绑实例后是否保留GCB，false表示解绑实例后会同时删除GCB
     * @param {string} globalEipId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public disassociateInstance(disassociateInstanceRequest?: DisassociateInstanceRequest): Promise<DisassociateInstanceResponse> {
        const options = ParamCreater().disassociateInstance(disassociateInstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询全域弹性公网IP池列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询全域弹性公网IP池列表
     * @param {number} [limit] 每页条数
     * @param {number} [offset] 分页起始点
     * @param {string} [marker] 分页起始点
     * @param {boolean} [pageReverse] 翻页方向
     * @param {Array<'id' | 'name' | 'isp' | 'access_site' | 'type' | 'ip_version' | 'en_name' | 'cn_name' | 'status' | 'created_at' | 'updated_at' | 'description'>} [fields] 
     * @param {Array<'id' | 'name' | 'type' | 'access_site' | 'created_at' | 'updated_at'>} [sortKey] 按照sort_key指定的字段排序
     * @param {Array<'asc' | 'desc'>} [sortDir] 排序的方向，倒序或者正序
     * @param {Array<string>} [id] 
     * @param {Array<string>} [name] 
     * @param {Array<string>} [accessSite] 
     * @param {Array<string>} [isp] 
     * @param {Array<'4' | '6'>} [ipVersion] 
     * @param {Array<'active' | 'inactive' | 'soldout'>} [status] 
     * @param {Array<'GEIP' | 'GEIP_SEGMENT'>} [type] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listGeipPools(listGeipPoolsRequest?: ListGeipPoolsRequest): Promise<ListGeipPoolsResponse> {
        const options = ParamCreater().listGeipPools(listGeipPoolsRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询资源实例列表的数目
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询资源实例列表数目
     * @param {ListResourcesByTagsRequestBody} [listResourcesByTagsRequestBody] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listGeipSegmentCountFilterTags(listGeipSegmentCountFilterTagsRequest?: ListGeipSegmentCountFilterTagsRequest): Promise<ListGeipSegmentCountFilterTagsResponse> {
        const options = ParamCreater().listGeipSegmentCountFilterTags(listGeipSegmentCountFilterTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询全域弹性公网IP段的项目标签
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询全域弹性公网IP段项目标签
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listGeipSegmentDomainTags(listGeipSegmentDomainTagsRequest?: ListGeipSegmentDomainTagsRequest): Promise<ListGeipSegmentDomainTagsResponse> {
        const options = ParamCreater().listGeipSegmentDomainTags();

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询资源实例的列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询资源实例列表
     * @param {Array<number>} [limit] 每页条数
     * @param {Array<number>} [offset] 分页起始点
     * @param {ListResourcesByTagsRequestBody} [listResourcesByTagsRequestBody] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listGeipSegmentFilterTags(listGeipSegmentFilterTagsRequest?: ListGeipSegmentFilterTagsRequest): Promise<ListGeipSegmentFilterTagsResponse> {
        const options = ParamCreater().listGeipSegmentFilterTags(listGeipSegmentFilterTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询资源实例列表数目
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询资源实例列表数目
     * @param {ListResourcesByTagsRequestBody} [listResourcesByTagsRequestBody] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listGlobalEipCountFilterTags(listGlobalEipCountFilterTagsRequest?: ListGlobalEipCountFilterTagsRequest): Promise<ListGlobalEipCountFilterTagsResponse> {
        const options = ParamCreater().listGlobalEipCountFilterTags(listGlobalEipCountFilterTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询全域弹性公网IP的项目标签
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询全域弹性公网IP项目标签
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listGlobalEipDomainTags(listGlobalEipDomainTagsRequest?: ListGlobalEipDomainTagsRequest): Promise<ListGlobalEipDomainTagsResponse> {
        const options = ParamCreater().listGlobalEipDomainTags();

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询资源实例列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询资源实例列表
     * @param {Array<number>} [limit] 
     * @param {Array<number>} [offset] 
     * @param {ListResourcesByTagsRequestBody} [listResourcesByTagsRequestBody] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listGlobalEipFilterTags(listGlobalEipFilterTagsRequest?: ListGlobalEipFilterTagsRequest): Promise<ListGlobalEipFilterTagsResponse> {
        const options = ParamCreater().listGlobalEipFilterTags(listGlobalEipFilterTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询全域弹性公网IP段列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询全域弹性公网IP段列表
     * @param {number} [limit] 每页条数
     * @param {number} [offset] 分页起始点
     * @param {string} [marker] 分页起始点
     * @param {boolean} [pageReverse] 翻页方向
     * @param {Array<'id' | 'name' | 'description' | 'domain_id' | 'access_site' | 'geip_pool_name' | 'isp' | 'ip_version' | 'cidr' | 'cidr_v6' | 'freezen' | 'freezen_info' | 'status' | 'created_at' | 'updated_at' | 'internet_bandwidth' | 'associate_instance' | 'is_pre_paid' | 'tags' | 'sys_tags' | 'enterprise_project_id'>} [fields] 
     * @param {Array<'id' | 'cidr' | 'created_at' | 'updated_at'>} [sortKey] 按照sort_key指定的字段排序
     * @param {Array<'asc' | 'desc'>} [sortDir] 排序的方向，倒序或者正序
     * @param {Array<string>} [id] 
     * @param {Array<string>} [internetBandwidthId] 
     * @param {Array<string>} [name] 
     * @param {string} [nameLike] 
     * @param {Array<string>} [accessSite] 
     * @param {Array<string>} [geipPoolName] 
     * @param {Array<string>} [isp] 
     * @param {Array<4 | 6>} [ipVersion] 
     * @param {Array<string>} [cidr] 
     * @param {Array<string>} [cidrV6] 
     * @param {Array<boolean>} [freezen] 
     * @param {Array<boolean>} [internetBandwidthIsNull] 
     * @param {Array<'idle' | 'inuse'>} [status] 
     * @param {Array<string>} [associateInstanceRegion] 
     * @param {Array<string>} [associateInstanceInstanceType] 
     * @param {Array<string>} [associateInstancePublicBorderGroup] 
     * @param {Array<string>} [associateInstanceInstanceSite] 
     * @param {Array<string>} [associateInstanceInstanceId] 
     * @param {Array<string>} [associateInstanceProjectId] 
     * @param {Array<string>} [associateInstanceServiceId] 
     * @param {Array<string>} [associateInstanceServiceType] 
     * @param {Array<string>} [enterpriseProjectId] 
     * @param {Array<string>} [tags] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listGlobalEipSegments(listGlobalEipSegmentsRequest?: ListGlobalEipSegmentsRequest): Promise<ListGlobalEipSegmentsResponse> {
        const options = ParamCreater().listGlobalEipSegments(listGlobalEipSegmentsRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询全域弹性公网IP列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询全域弹性公网IP列表
     * @param {number} [limit] 每页条数
     * @param {number} [offset] 分页起始点
     * @param {string} [marker] 分页起始点
     * @param {boolean} [pageReverse] 翻页方向
     * @param {Array<'id' | 'name' | 'description' | 'domain_id' | 'access_site' | 'geip_pool_name' | 'isp' | 'ip_version' | 'ip_address' | 'ipv6_address' | 'freezen' | 'freezen_info' | 'polluted' | 'status' | 'created_at' | 'updated_at' | 'internet_bandwidth_info' | 'global_connection_bandwidth_info' | 'associate_instance_info' | 'is_pre_paid' | 'tags' | 'sys_tags' | 'enterprise_project_id'>} [fields] 
     * @param {Array<'id' | 'ip_address' | 'created_at' | 'updated_at'>} [sortKey] 按照sort_key指定的字段排序
     * @param {Array<'asc' | 'desc'>} [sortDir] 排序的方向，倒序或者正序
     * @param {Array<string>} [id] 
     * @param {Array<string>} [internetBandwidthId] 
     * @param {Array<string>} [name] 
     * @param {string} [nameLike] 
     * @param {Array<string>} [accessSite] 
     * @param {Array<string>} [geipPoolName] 
     * @param {Array<string>} [isp] 
     * @param {Array<4 | 6>} [ipVersion] 
     * @param {Array<string>} [ipAddress] 
     * @param {Array<string>} [ipv6Address] 
     * @param {Array<boolean>} [freezen] 
     * @param {Array<boolean>} [polluted] 
     * @param {Array<boolean>} [internetBandwidthIsNull] 
     * @param {Array<boolean>} [gcbBandwidthIsNull] 
     * @param {Array<'idle' | 'inuse' | 'pending_create' | 'pending_update'>} [status] 
     * @param {Array<string>} [associateInstanceInfoRegion] 
     * @param {Array<string>} [associateInstanceInfoInstanceType] 
     * @param {Array<string>} [associateInstanceInfoPublicBorderGroup] 
     * @param {Array<string>} [associateInstanceInfoInstanceSite] 
     * @param {Array<string>} [associateInstanceInfoInstanceId] 
     * @param {Array<string>} [associateInstanceInfoProjectId] 
     * @param {Array<string>} [associateInstanceInfoServiceId] 
     * @param {Array<string>} [associateInstanceInfoServiceType] 
     * @param {Array<string>} [enterpriseProjectId] 
     * @param {Array<string>} [tags] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listGlobalEips(listGlobalEipsRequest?: ListGlobalEipsRequest): Promise<ListGlobalEipsResponse> {
        const options = ParamCreater().listGlobalEips(listGlobalEipsRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询全域弹性公网IP段的标签
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询全域弹性公网IP段标签
     * @param {string} resourceId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showGeipSegmentTags(showGeipSegmentTagsRequest?: ShowGeipSegmentTagsRequest): Promise<ShowGeipSegmentTagsResponse> {
        const options = ParamCreater().showGeipSegmentTags(showGeipSegmentTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询全域弹性公网IP详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询全域弹性公网IP详情
     * @param {string} globalEipId 
     * @param {Array<'id' | 'name' | 'description' | 'domain_id' | 'access_site' | 'geip_pool_name' | 'isp' | 'ip_version' | 'ip_address' | 'ipv6_address' | 'freezen' | 'freezen_info' | 'polluted' | 'status' | 'created_at' | 'updated_at' | 'internet_bandwidth_info' | 'global_connection_bandwidth_info' | 'associate_instance_info' | 'is_pre_paid' | 'tags' | 'sys_tags' | 'enterprise_project_id'>} [fields] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showGlobalEip(showGlobalEipRequest?: ShowGlobalEipRequest): Promise<ShowGlobalEipResponse> {
        const options = ParamCreater().showGlobalEip(showGlobalEipRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询全域弹性公网IP段详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询全域弹性公网IP段详情
     * @param {string} globalEipSegmentId 
     * @param {Array<'id' | 'name' | 'description' | 'domain_id' | 'access_site' | 'geip_pool_name' | 'isp' | 'ip_version' | 'cidr' | 'cidr_v6' | 'freezen' | 'freezen_info' | 'status' | 'created_at' | 'updated_at' | 'internet_bandwidth' | 'associate_instance' | 'is_pre_paid' | 'tags' | 'sys_tags' | 'enterprise_project_id'>} [fields] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showGlobalEipSegment(showGlobalEipSegmentRequest?: ShowGlobalEipSegmentRequest): Promise<ShowGlobalEipSegmentResponse> {
        const options = ParamCreater().showGlobalEipSegment(showGlobalEipSegmentRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询全域弹性公网IP的标签
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询全域弹性公网IP标签
     * @param {string} resourceId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showGlobalEipTags(showGlobalEipTagsRequest?: ShowGlobalEipTagsRequest): Promise<ShowGlobalEipTagsResponse> {
        const options = ParamCreater().showGlobalEipTags(showGlobalEipTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新全域弹性公网IP信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新全域弹性公网IP信息
     * @param {string} globalEipId 
     * @param {UpdateGlobalEipRequestBody} updateGlobalEipRequestBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateGlobalEip(updateGlobalEipRequest?: UpdateGlobalEipRequest): Promise<UpdateGlobalEipResponse> {
        const options = ParamCreater().updateGlobalEip(updateGlobalEipRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新全域弹性公网IP段
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新全域弹性公网IP段
     * @param {string} globalEipSegmentId 
     * @param {UpdateGlobalEipSegmentRequestBody} updateGlobalEipSegmentRequestBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateGlobalEipSegment(updateGlobalEipSegmentRequest?: UpdateGlobalEipSegmentRequest): Promise<UpdateGlobalEipSegmentResponse> {
        const options = ParamCreater().updateGlobalEipSegment(updateGlobalEipSegmentRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询Job列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询Job列表
     * @param {number} [limit] 每页条数
     * @param {number} [offset] 分页起始点
     * @param {string} [marker] 分页起始点
     * @param {boolean} [pageReverse] 翻页方向
     * @param {Array<'id' | 'action' | 'status' | 'error_task' | 'error_code' | 'error_message' | 'start_time' | 'end_time'>} [fields] 
     * @param {Array<'id' | 'start_time' | 'end_time'>} [sortKey] 按照sort_key指定的字段排序
     * @param {Array<'asc' | 'desc'>} [sortDir] 排序的方向，倒序或者正序
     * @param {Array<string>} [id] 
     * @param {Array<'CreateGEIPGraph' | 'UpdateGEIPGraph' | 'BindGEIPGraph' | 'UnBindGEIPGraph' | 'BatchAttachBandwidthGraph' | 'BatchDetachBandwidthGraph' | 'CreateGeipSegmentGraph' | 'BindGeipSegmentGraph'>} [action] 
     * @param {Array<'FINISH_SUCC' | 'FINISH_ROLLBACK_SUCC'>} [status] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listJobs(listJobsRequest?: ListJobsRequest): Promise<ListJobsResponse> {
        const options = ParamCreater().listJobs(listJobsRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询Job详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询Job详情
     * @param {string} jobId job_id
     * @param {Array<'id' | 'action' | 'status' | 'error_task' | 'error_code' | 'error_message' | 'start_time' | 'end_time'>} [fields] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showJobs(showJobsRequest?: ShowJobsRequest): Promise<ShowJobsResponse> {
        const options = ParamCreater().showJobs(showJobsRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 全域弹性公网IP支持绑定的Region限制
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 全域弹性公网IP支持绑定的Region限制
     * @param {number} [limit] 每页条数
     * @param {number} [offset] 分页起始点
     * @param {string} [marker] 分页起始点
     * @param {boolean} [pageReverse] 翻页方向
     * @param {Array<'id' | 'instance_type' | 'access_site' | 'region_id' | 'public_border_group' | 'remote_endpoint' | 'status' | 'created_at' | 'updated_at'>} [fields] 
     * @param {Array<'id' | 'instance_type' | 'access_site' | 'public_border_group' | 'region_id' | 'remote_endpoint' | 'status' | 'created_at' | 'updated_at'>} [sortKey] 按照sort_key指定的字段排序
     * @param {Array<'asc' | 'desc'>} [sortDir] 排序的方向，倒序或者正序
     * @param {Array<string>} [id] 
     * @param {Array<string>} [instanceType] 
     * @param {Array<string>} [publicBorderGroup] 
     * @param {Array<string>} [accessSite] 
     * @param {Array<string>} [regionId] 
     * @param {Array<string>} [remoteEndpoint] 
     * @param {Array<string>} [status] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSupportRegions(listSupportRegionsRequest?: ListSupportRegionsRequest): Promise<ListSupportRegionsResponse> {
        const options = ParamCreater().listSupportRegions(listSupportRegionsRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * console通过此接口获取指定pop点的全域弹性公网IP允许绑定的region实例信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定站点允许绑定的Region信息
     * @param {string} accessSite 
     * @param {Array<'id' | 'instance_type' | 'region_id' | 'public_border_group' | 'status' | 'created_at' | 'updated_at'>} [fields] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTenantGeipSupportInstances(listTenantGeipSupportInstancesRequest?: ListTenantGeipSupportInstancesRequest): Promise<ListTenantGeipSupportInstancesResponse> {
        const options = ParamCreater().listTenantGeipSupportInstances(listTenantGeipSupportInstancesRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 添加全域公网带宽标签
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        addInternetBandwidthTags(addInternetBandwidthTagsRequest?: AddInternetBandwidthTagsRequest) {
            const options = {
                method: "POST",
                url: "/v3/internet-bandwidth/{resource_id}/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let resourceId;

            if (addInternetBandwidthTagsRequest !== null && addInternetBandwidthTagsRequest !== undefined) {
                if (addInternetBandwidthTagsRequest instanceof AddInternetBandwidthTagsRequest) {
                    resourceId = addInternetBandwidthTagsRequest.resourceId;
                    body = addInternetBandwidthTagsRequest.body
                } else {
                    resourceId = addInternetBandwidthTagsRequest['resource_id'];
                    body = addInternetBandwidthTagsRequest['body'];
                }
            }

        
            if (resourceId === null || resourceId === undefined) {
            throw new RequiredError('resourceId','Required parameter resourceId was null or undefined when calling addInternetBandwidthTags.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'resource_id': resourceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量创建全域公网带宽
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchCreateInternetBandwidth(batchCreateInternetBandwidthRequest?: BatchCreateInternetBandwidthRequest) {
            const options = {
                method: "POST",
                url: "/v3/{domain_id}/geip/internet-bandwidths/batch-create",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (batchCreateInternetBandwidthRequest !== null && batchCreateInternetBandwidthRequest !== undefined) {
                if (batchCreateInternetBandwidthRequest instanceof BatchCreateInternetBandwidthRequest) {
                    body = batchCreateInternetBandwidthRequest.body
                } else {
                    body = batchCreateInternetBandwidthRequest['body'];
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
         * 批量添加全域公网带宽标签
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchCreateInternetBandwidthTags(batchCreateInternetBandwidthTagsRequest?: BatchCreateInternetBandwidthTagsRequest) {
            const options = {
                method: "POST",
                url: "/v3/internet-bandwidth/{resource_id}/tags/create",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let resourceId;

            if (batchCreateInternetBandwidthTagsRequest !== null && batchCreateInternetBandwidthTagsRequest !== undefined) {
                if (batchCreateInternetBandwidthTagsRequest instanceof BatchCreateInternetBandwidthTagsRequest) {
                    resourceId = batchCreateInternetBandwidthTagsRequest.resourceId;
                    body = batchCreateInternetBandwidthTagsRequest.body
                } else {
                    resourceId = batchCreateInternetBandwidthTagsRequest['resource_id'];
                    body = batchCreateInternetBandwidthTagsRequest['body'];
                }
            }

        
            if (resourceId === null || resourceId === undefined) {
            throw new RequiredError('resourceId','Required parameter resourceId was null or undefined when calling batchCreateInternetBandwidthTags.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'resource_id': resourceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量删除全域公网带宽标签
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDeleteInternetBandwidthTags(batchDeleteInternetBandwidthTagsRequest?: BatchDeleteInternetBandwidthTagsRequest) {
            const options = {
                method: "POST",
                url: "/v3/internet-bandwidth/{resource_id}/tags/delete",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let resourceId;

            if (batchDeleteInternetBandwidthTagsRequest !== null && batchDeleteInternetBandwidthTagsRequest !== undefined) {
                if (batchDeleteInternetBandwidthTagsRequest instanceof BatchDeleteInternetBandwidthTagsRequest) {
                    resourceId = batchDeleteInternetBandwidthTagsRequest.resourceId;
                    body = batchDeleteInternetBandwidthTagsRequest.body
                } else {
                    resourceId = batchDeleteInternetBandwidthTagsRequest['resource_id'];
                    body = batchDeleteInternetBandwidthTagsRequest['body'];
                }
            }

        
            if (resourceId === null || resourceId === undefined) {
            throw new RequiredError('resourceId','Required parameter resourceId was null or undefined when calling batchDeleteInternetBandwidthTags.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'resource_id': resourceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询全域公网带宽个数
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        countInternetBandwidth(countInternetBandwidthRequest?: CountInternetBandwidthRequest) {
            const options = {
                method: "GET",
                url: "/v3/{domain_id}/geip/internet-bandwidths/count",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let id;
            
            let size;
            
            let name;
            
            let nameLike;
            
            let accessSite;
            
            let status;
            
            let enterpriseProjectId;
            
            let tags;

            if (countInternetBandwidthRequest !== null && countInternetBandwidthRequest !== undefined) {
                if (countInternetBandwidthRequest instanceof CountInternetBandwidthRequest) {
                    id = countInternetBandwidthRequest.id;
                    size = countInternetBandwidthRequest.size;
                    name = countInternetBandwidthRequest.name;
                    nameLike = countInternetBandwidthRequest.nameLike;
                    accessSite = countInternetBandwidthRequest.accessSite;
                    status = countInternetBandwidthRequest.status;
                    enterpriseProjectId = countInternetBandwidthRequest.enterpriseProjectId;
                    tags = countInternetBandwidthRequest.tags;
                } else {
                    id = countInternetBandwidthRequest['id'];
                    size = countInternetBandwidthRequest['size'];
                    name = countInternetBandwidthRequest['name'];
                    nameLike = countInternetBandwidthRequest['name_like'];
                    accessSite = countInternetBandwidthRequest['access_site'];
                    status = countInternetBandwidthRequest['status'];
                    enterpriseProjectId = countInternetBandwidthRequest['enterprise_project_id'];
                    tags = countInternetBandwidthRequest['tags'];
                }
            }

        
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (size !== null && size !== undefined) {
                localVarQueryParameter['size'] = size;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (nameLike !== null && nameLike !== undefined) {
                localVarQueryParameter['name_like'] = nameLike;
            }
            if (accessSite !== null && accessSite !== undefined) {
                localVarQueryParameter['access_site'] = accessSite;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (tags !== null && tags !== undefined) {
                localVarQueryParameter['tags'] = tags;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建全域公网带宽
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createInternetBandwidth(createInternetBandwidthRequest?: CreateInternetBandwidthRequest) {
            const options = {
                method: "POST",
                url: "/v3/{domain_id}/geip/internet-bandwidths",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createInternetBandwidthRequest !== null && createInternetBandwidthRequest !== undefined) {
                if (createInternetBandwidthRequest instanceof CreateInternetBandwidthRequest) {
                    body = createInternetBandwidthRequest.body
                } else {
                    body = createInternetBandwidthRequest['body'];
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
         * 创建租户签署免责条款
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createUserDisclaimer() {
            const options = {
                method: "POST",
                url: "/v3/{domain_id}/geip/user-disclaimer-records",
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
         * 删除全域公网带宽
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteInternetBandwidth(deleteInternetBandwidthRequest?: DeleteInternetBandwidthRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{domain_id}/geip/internet-bandwidths/{internet_bandwidth_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let internetBandwidthId;

            if (deleteInternetBandwidthRequest !== null && deleteInternetBandwidthRequest !== undefined) {
                if (deleteInternetBandwidthRequest instanceof DeleteInternetBandwidthRequest) {
                    internetBandwidthId = deleteInternetBandwidthRequest.internetBandwidthId;
                } else {
                    internetBandwidthId = deleteInternetBandwidthRequest['internet_bandwidth_id'];
                }
            }

        
            if (internetBandwidthId === null || internetBandwidthId === undefined) {
            throw new RequiredError('internetBandwidthId','Required parameter internetBandwidthId was null or undefined when calling deleteInternetBandwidth.');
            }

            options.pathParams = { 'internet_bandwidth_id': internetBandwidthId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除全域公网带宽标签
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteInternetBandwidthTag(deleteInternetBandwidthTagRequest?: DeleteInternetBandwidthTagRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/internet-bandwidth/{resource_id}/tags/{tag_key}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let resourceId;
            
            let tagKey;

            if (deleteInternetBandwidthTagRequest !== null && deleteInternetBandwidthTagRequest !== undefined) {
                if (deleteInternetBandwidthTagRequest instanceof DeleteInternetBandwidthTagRequest) {
                    resourceId = deleteInternetBandwidthTagRequest.resourceId;
                    tagKey = deleteInternetBandwidthTagRequest.tagKey;
                } else {
                    resourceId = deleteInternetBandwidthTagRequest['resource_id'];
                    tagKey = deleteInternetBandwidthTagRequest['tag_key'];
                }
            }

        
            if (resourceId === null || resourceId === undefined) {
            throw new RequiredError('resourceId','Required parameter resourceId was null or undefined when calling deleteInternetBandwidthTag.');
            }
            if (tagKey === null || tagKey === undefined) {
            throw new RequiredError('tagKey','Required parameter tagKey was null or undefined when calling deleteInternetBandwidthTag.');
            }

            options.pathParams = { 'resource_id': resourceId,'tag_key': tagKey, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除租户撤销免责条款
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteUserDisclaimer() {
            const options = {
                method: "DELETE",
                url: "/v3/{domain_id}/geip/user-disclaimer-records",
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
         * 查询接入点列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAccessSites(listAccessSitesRequest?: ListAccessSitesRequest) {
            const options = {
                method: "GET",
                url: "/v3/{domain_id}/geip/access-sites",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let offset;
            
            let marker;
            
            let pageReverse;
            
            let fields;
            
            let sortKey;
            
            let sortDir;
            
            let id;
            
            let name;
            
            let proxyRegion;
            
            let iecAzCode;

            if (listAccessSitesRequest !== null && listAccessSitesRequest !== undefined) {
                if (listAccessSitesRequest instanceof ListAccessSitesRequest) {
                    limit = listAccessSitesRequest.limit;
                    offset = listAccessSitesRequest.offset;
                    marker = listAccessSitesRequest.marker;
                    pageReverse = listAccessSitesRequest.pageReverse;
                    fields = listAccessSitesRequest.fields;
                    sortKey = listAccessSitesRequest.sortKey;
                    sortDir = listAccessSitesRequest.sortDir;
                    id = listAccessSitesRequest.id;
                    name = listAccessSitesRequest.name;
                    proxyRegion = listAccessSitesRequest.proxyRegion;
                    iecAzCode = listAccessSitesRequest.iecAzCode;
                } else {
                    limit = listAccessSitesRequest['limit'];
                    offset = listAccessSitesRequest['offset'];
                    marker = listAccessSitesRequest['marker'];
                    pageReverse = listAccessSitesRequest['page_reverse'];
                    fields = listAccessSitesRequest['fields'];
                    sortKey = listAccessSitesRequest['sort_key'];
                    sortDir = listAccessSitesRequest['sort_dir'];
                    id = listAccessSitesRequest['id'];
                    name = listAccessSitesRequest['name'];
                    proxyRegion = listAccessSitesRequest['proxy_region'];
                    iecAzCode = listAccessSitesRequest['iec_az_code'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (pageReverse !== null && pageReverse !== undefined) {
                localVarQueryParameter['page_reverse'] = pageReverse;
            }
            if (fields !== null && fields !== undefined) {
                localVarQueryParameter['fields'] = fields;
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
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (proxyRegion !== null && proxyRegion !== undefined) {
                localVarQueryParameter['proxy_region'] = proxyRegion;
            }
            if (iecAzCode !== null && iecAzCode !== undefined) {
                localVarQueryParameter['iec_az_code'] = iecAzCode;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询租户全域弹性公网IP配额
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listGeipResourceQuotas(listGeipResourceQuotasRequest?: ListGeipResourceQuotasRequest) {
            const options = {
                method: "GET",
                url: "/v3/{domain_id}/geip/quotas",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let offset;
            
            let marker;
            
            let pageReverse;
            
            let fields;
            
            let type;

            if (listGeipResourceQuotasRequest !== null && listGeipResourceQuotasRequest !== undefined) {
                if (listGeipResourceQuotasRequest instanceof ListGeipResourceQuotasRequest) {
                    limit = listGeipResourceQuotasRequest.limit;
                    offset = listGeipResourceQuotasRequest.offset;
                    marker = listGeipResourceQuotasRequest.marker;
                    pageReverse = listGeipResourceQuotasRequest.pageReverse;
                    fields = listGeipResourceQuotasRequest.fields;
                    type = listGeipResourceQuotasRequest.type;
                } else {
                    limit = listGeipResourceQuotasRequest['limit'];
                    offset = listGeipResourceQuotasRequest['offset'];
                    marker = listGeipResourceQuotasRequest['marker'];
                    pageReverse = listGeipResourceQuotasRequest['page_reverse'];
                    fields = listGeipResourceQuotasRequest['fields'];
                    type = listGeipResourceQuotasRequest['type'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (pageReverse !== null && pageReverse !== undefined) {
                localVarQueryParameter['page_reverse'] = pageReverse;
            }
            if (fields !== null && fields !== undefined) {
                localVarQueryParameter['fields'] = fields;
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询资源实例列表数目
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listInternetBandwidthCountFilterTags(listInternetBandwidthCountFilterTagsRequest?: ListInternetBandwidthCountFilterTagsRequest) {
            const options = {
                method: "POST",
                url: "/v3/internet-bandwidth/resource-instances/count",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (listInternetBandwidthCountFilterTagsRequest !== null && listInternetBandwidthCountFilterTagsRequest !== undefined) {
                if (listInternetBandwidthCountFilterTagsRequest instanceof ListInternetBandwidthCountFilterTagsRequest) {
                    body = listInternetBandwidthCountFilterTagsRequest.body
                } else {
                    body = listInternetBandwidthCountFilterTagsRequest['body'];
                }
            }

        
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询全域公网带宽项目标签
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listInternetBandwidthDomainTags() {
            const options = {
                method: "GET",
                url: "/v3/internet-bandwidth/tags",
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
         * 查询资源实例列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listInternetBandwidthFilterTags(listInternetBandwidthFilterTagsRequest?: ListInternetBandwidthFilterTagsRequest) {
            const options = {
                method: "POST",
                url: "/v3/internet-bandwidth/resource-instances/filter",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let limit;
            
            let offset;

            if (listInternetBandwidthFilterTagsRequest !== null && listInternetBandwidthFilterTagsRequest !== undefined) {
                if (listInternetBandwidthFilterTagsRequest instanceof ListInternetBandwidthFilterTagsRequest) {
                    limit = listInternetBandwidthFilterTagsRequest.limit;
                    offset = listInternetBandwidthFilterTagsRequest.offset;
                    body = listInternetBandwidthFilterTagsRequest.body
                } else {
                    limit = listInternetBandwidthFilterTagsRequest['limit'];
                    offset = listInternetBandwidthFilterTagsRequest['offset'];
                    body = listInternetBandwidthFilterTagsRequest['body'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询全域公网带宽限制列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listInternetBandwidthLimits(listInternetBandwidthLimitsRequest?: ListInternetBandwidthLimitsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{domain_id}/geip/internet-bandwidth-limits",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let fields;
            
            let sortKey;
            
            let sortDir;
            
            let chargeMode;
            
            let type;

            if (listInternetBandwidthLimitsRequest !== null && listInternetBandwidthLimitsRequest !== undefined) {
                if (listInternetBandwidthLimitsRequest instanceof ListInternetBandwidthLimitsRequest) {
                    fields = listInternetBandwidthLimitsRequest.fields;
                    sortKey = listInternetBandwidthLimitsRequest.sortKey;
                    sortDir = listInternetBandwidthLimitsRequest.sortDir;
                    chargeMode = listInternetBandwidthLimitsRequest.chargeMode;
                    type = listInternetBandwidthLimitsRequest.type;
                } else {
                    fields = listInternetBandwidthLimitsRequest['fields'];
                    sortKey = listInternetBandwidthLimitsRequest['sort_key'];
                    sortDir = listInternetBandwidthLimitsRequest['sort_dir'];
                    chargeMode = listInternetBandwidthLimitsRequest['charge_mode'];
                    type = listInternetBandwidthLimitsRequest['type'];
                }
            }

        
            if (fields !== null && fields !== undefined) {
                localVarQueryParameter['fields'] = fields;
            }
            if (sortKey !== null && sortKey !== undefined) {
                localVarQueryParameter['sort_key'] = sortKey;
            }
            if (sortDir !== null && sortDir !== undefined) {
                localVarQueryParameter['sort_dir'] = sortDir;
            }
            if (chargeMode !== null && chargeMode !== undefined) {
                localVarQueryParameter['charge_mode'] = chargeMode;
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询全域公网带宽列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listInternetBandwidths(listInternetBandwidthsRequest?: ListInternetBandwidthsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{domain_id}/geip/internet-bandwidths",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let offset;
            
            let marker;
            
            let pageReverse;
            
            let fields;
            
            let extFields;
            
            let sortKey;
            
            let sortDir;
            
            let id;
            
            let size;
            
            let name;
            
            let nameLike;
            
            let accessSite;
            
            let status;
            
            let enterpriseProjectId;
            
            let tags;
            
            let type;

            if (listInternetBandwidthsRequest !== null && listInternetBandwidthsRequest !== undefined) {
                if (listInternetBandwidthsRequest instanceof ListInternetBandwidthsRequest) {
                    limit = listInternetBandwidthsRequest.limit;
                    offset = listInternetBandwidthsRequest.offset;
                    marker = listInternetBandwidthsRequest.marker;
                    pageReverse = listInternetBandwidthsRequest.pageReverse;
                    fields = listInternetBandwidthsRequest.fields;
                    extFields = listInternetBandwidthsRequest.extFields;
                    sortKey = listInternetBandwidthsRequest.sortKey;
                    sortDir = listInternetBandwidthsRequest.sortDir;
                    id = listInternetBandwidthsRequest.id;
                    size = listInternetBandwidthsRequest.size;
                    name = listInternetBandwidthsRequest.name;
                    nameLike = listInternetBandwidthsRequest.nameLike;
                    accessSite = listInternetBandwidthsRequest.accessSite;
                    status = listInternetBandwidthsRequest.status;
                    enterpriseProjectId = listInternetBandwidthsRequest.enterpriseProjectId;
                    tags = listInternetBandwidthsRequest.tags;
                    type = listInternetBandwidthsRequest.type;
                } else {
                    limit = listInternetBandwidthsRequest['limit'];
                    offset = listInternetBandwidthsRequest['offset'];
                    marker = listInternetBandwidthsRequest['marker'];
                    pageReverse = listInternetBandwidthsRequest['page_reverse'];
                    fields = listInternetBandwidthsRequest['fields'];
                    extFields = listInternetBandwidthsRequest['ext-fields'];
                    sortKey = listInternetBandwidthsRequest['sort_key'];
                    sortDir = listInternetBandwidthsRequest['sort_dir'];
                    id = listInternetBandwidthsRequest['id'];
                    size = listInternetBandwidthsRequest['size'];
                    name = listInternetBandwidthsRequest['name'];
                    nameLike = listInternetBandwidthsRequest['name_like'];
                    accessSite = listInternetBandwidthsRequest['access_site'];
                    status = listInternetBandwidthsRequest['status'];
                    enterpriseProjectId = listInternetBandwidthsRequest['enterprise_project_id'];
                    tags = listInternetBandwidthsRequest['tags'];
                    type = listInternetBandwidthsRequest['type'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (pageReverse !== null && pageReverse !== undefined) {
                localVarQueryParameter['page_reverse'] = pageReverse;
            }
            if (fields !== null && fields !== undefined) {
                localVarQueryParameter['fields'] = fields;
            }
            if (extFields !== null && extFields !== undefined) {
                localVarQueryParameter['ext-fields'] = extFields;
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
            if (size !== null && size !== undefined) {
                localVarQueryParameter['size'] = size;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (nameLike !== null && nameLike !== undefined) {
                localVarQueryParameter['name_like'] = nameLike;
            }
            if (accessSite !== null && accessSite !== undefined) {
                localVarQueryParameter['access_site'] = accessSite;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (tags !== null && tags !== undefined) {
                localVarQueryParameter['tags'] = tags;
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询全域弹性公网IP段支持的掩码列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSupportMasks(listSupportMasksRequest?: ListSupportMasksRequest) {
            const options = {
                method: "GET",
                url: "/v3/{domain_id}/global-eip-segments/support-masks",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let offset;
            
            let marker;
            
            let pageReverse;
            
            let fields;
            
            let sortKey;
            
            let sortDir;
            
            let id;
            
            let ipVersion;
            
            let mask;

            if (listSupportMasksRequest !== null && listSupportMasksRequest !== undefined) {
                if (listSupportMasksRequest instanceof ListSupportMasksRequest) {
                    limit = listSupportMasksRequest.limit;
                    offset = listSupportMasksRequest.offset;
                    marker = listSupportMasksRequest.marker;
                    pageReverse = listSupportMasksRequest.pageReverse;
                    fields = listSupportMasksRequest.fields;
                    sortKey = listSupportMasksRequest.sortKey;
                    sortDir = listSupportMasksRequest.sortDir;
                    id = listSupportMasksRequest.id;
                    ipVersion = listSupportMasksRequest.ipVersion;
                    mask = listSupportMasksRequest.mask;
                } else {
                    limit = listSupportMasksRequest['limit'];
                    offset = listSupportMasksRequest['offset'];
                    marker = listSupportMasksRequest['marker'];
                    pageReverse = listSupportMasksRequest['page_reverse'];
                    fields = listSupportMasksRequest['fields'];
                    sortKey = listSupportMasksRequest['sort_key'];
                    sortDir = listSupportMasksRequest['sort_dir'];
                    id = listSupportMasksRequest['id'];
                    ipVersion = listSupportMasksRequest['ip_version'];
                    mask = listSupportMasksRequest['mask'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (pageReverse !== null && pageReverse !== undefined) {
                localVarQueryParameter['page_reverse'] = pageReverse;
            }
            if (fields !== null && fields !== undefined) {
                localVarQueryParameter['fields'] = fields;
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
            if (ipVersion !== null && ipVersion !== undefined) {
                localVarQueryParameter['ip_version'] = ipVersion;
            }
            if (mask !== null && mask !== undefined) {
                localVarQueryParameter['mask'] = mask;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询全域公网带宽详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showInternetBandwidth(showInternetBandwidthRequest?: ShowInternetBandwidthRequest) {
            const options = {
                method: "GET",
                url: "/v3/{domain_id}/geip/internet-bandwidths/{internet_bandwidth_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let internetBandwidthId;
            
            let fields;

            if (showInternetBandwidthRequest !== null && showInternetBandwidthRequest !== undefined) {
                if (showInternetBandwidthRequest instanceof ShowInternetBandwidthRequest) {
                    internetBandwidthId = showInternetBandwidthRequest.internetBandwidthId;
                    fields = showInternetBandwidthRequest.fields;
                } else {
                    internetBandwidthId = showInternetBandwidthRequest['internet_bandwidth_id'];
                    fields = showInternetBandwidthRequest['fields'];
                }
            }

        
            if (internetBandwidthId === null || internetBandwidthId === undefined) {
            throw new RequiredError('internetBandwidthId','Required parameter internetBandwidthId was null or undefined when calling showInternetBandwidth.');
            }
            if (fields !== null && fields !== undefined) {
                localVarQueryParameter['fields'] = fields;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'internet_bandwidth_id': internetBandwidthId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询全域公网带宽标签
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showInternetBandwidthTags(showInternetBandwidthTagsRequest?: ShowInternetBandwidthTagsRequest) {
            const options = {
                method: "GET",
                url: "/v3/internet-bandwidth/{resource_id}/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let resourceId;

            if (showInternetBandwidthTagsRequest !== null && showInternetBandwidthTagsRequest !== undefined) {
                if (showInternetBandwidthTagsRequest instanceof ShowInternetBandwidthTagsRequest) {
                    resourceId = showInternetBandwidthTagsRequest.resourceId;
                } else {
                    resourceId = showInternetBandwidthTagsRequest['resource_id'];
                }
            }

        
            if (resourceId === null || resourceId === undefined) {
            throw new RequiredError('resourceId','Required parameter resourceId was null or undefined when calling showInternetBandwidthTags.');
            }

            options.pathParams = { 'resource_id': resourceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询租户签署免责条款详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showUserDisclaimer(showUserDisclaimerRequest?: ShowUserDisclaimerRequest) {
            const options = {
                method: "GET",
                url: "/v3/{domain_id}/geip/user-disclaimer-records",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let fields;

            if (showUserDisclaimerRequest !== null && showUserDisclaimerRequest !== undefined) {
                if (showUserDisclaimerRequest instanceof ShowUserDisclaimerRequest) {
                    fields = showUserDisclaimerRequest.fields;
                } else {
                    fields = showUserDisclaimerRequest['fields'];
                }
            }

        
            if (fields !== null && fields !== undefined) {
                localVarQueryParameter['fields'] = fields;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新全域公网带宽
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateInternetBandwidth(updateInternetBandwidthRequest?: UpdateInternetBandwidthRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{domain_id}/geip/internet-bandwidths/{internet_bandwidth_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let internetBandwidthId;

            if (updateInternetBandwidthRequest !== null && updateInternetBandwidthRequest !== undefined) {
                if (updateInternetBandwidthRequest instanceof UpdateInternetBandwidthRequest) {
                    internetBandwidthId = updateInternetBandwidthRequest.internetBandwidthId;
                    body = updateInternetBandwidthRequest.body
                } else {
                    internetBandwidthId = updateInternetBandwidthRequest['internet_bandwidth_id'];
                    body = updateInternetBandwidthRequest['body'];
                }
            }

        
            if (internetBandwidthId === null || internetBandwidthId === undefined) {
            throw new RequiredError('internetBandwidthId','Required parameter internetBandwidthId was null or undefined when calling updateInternetBandwidth.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'internet_bandwidth_id': internetBandwidthId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 添加全域弹性公网IP段的标签
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        addGeipSegmentTags(addGeipSegmentTagsRequest?: AddGeipSegmentTagsRequest) {
            const options = {
                method: "POST",
                url: "/v3/global-eip-segment/{resource_id}/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let resourceId;

            if (addGeipSegmentTagsRequest !== null && addGeipSegmentTagsRequest !== undefined) {
                if (addGeipSegmentTagsRequest instanceof AddGeipSegmentTagsRequest) {
                    resourceId = addGeipSegmentTagsRequest.resourceId;
                    body = addGeipSegmentTagsRequest.body
                } else {
                    resourceId = addGeipSegmentTagsRequest['resource_id'];
                    body = addGeipSegmentTagsRequest['body'];
                }
            }

        
            if (resourceId === null || resourceId === undefined) {
            throw new RequiredError('resourceId','Required parameter resourceId was null or undefined when calling addGeipSegmentTags.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'resource_id': resourceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 添加全域弹性公网IP的标签
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        addGlobalEipTags(addGlobalEipTagsRequest?: AddGlobalEipTagsRequest) {
            const options = {
                method: "POST",
                url: "/v3/global-eip/{resource_id}/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let resourceId;

            if (addGlobalEipTagsRequest !== null && addGlobalEipTagsRequest !== undefined) {
                if (addGlobalEipTagsRequest instanceof AddGlobalEipTagsRequest) {
                    resourceId = addGlobalEipTagsRequest.resourceId;
                    body = addGlobalEipTagsRequest.body
                } else {
                    resourceId = addGlobalEipTagsRequest['resource_id'];
                    body = addGlobalEipTagsRequest['body'];
                }
            }

        
            if (resourceId === null || resourceId === undefined) {
            throw new RequiredError('resourceId','Required parameter resourceId was null or undefined when calling addGlobalEipTags.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'resource_id': resourceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 全域弹性公网IP段绑定后端实例
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        associateGeipSegmentInstance(associateGeipSegmentInstanceRequest?: AssociateGeipSegmentInstanceRequest) {
            const options = {
                method: "POST",
                url: "/v3/{domain_id}/global-eip-segments/{global_eip_segment_id}/associate-instance",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let globalEipSegmentId;

            if (associateGeipSegmentInstanceRequest !== null && associateGeipSegmentInstanceRequest !== undefined) {
                if (associateGeipSegmentInstanceRequest instanceof AssociateGeipSegmentInstanceRequest) {
                    globalEipSegmentId = associateGeipSegmentInstanceRequest.globalEipSegmentId;
                    body = associateGeipSegmentInstanceRequest.body
                } else {
                    globalEipSegmentId = associateGeipSegmentInstanceRequest['global_eip_segment_id'];
                    body = associateGeipSegmentInstanceRequest['body'];
                }
            }

        
            if (globalEipSegmentId === null || globalEipSegmentId === undefined) {
            throw new RequiredError('globalEipSegmentId','Required parameter globalEipSegmentId was null or undefined when calling associateGeipSegmentInstance.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'global_eip_segment_id': globalEipSegmentId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 绑定后端实例
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        associateInstance(associateInstanceRequest?: AssociateInstanceRequest) {
            const options = {
                method: "POST",
                url: "/v3/{domain_id}/global-eips/{global_eip_id}/associate-instance",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let globalEipId;
            
            let bindingInstanceService;

            if (associateInstanceRequest !== null && associateInstanceRequest !== undefined) {
                if (associateInstanceRequest instanceof AssociateInstanceRequest) {
                    globalEipId = associateInstanceRequest.globalEipId;
                    body = associateInstanceRequest.body
                    bindingInstanceService = associateInstanceRequest.bindingInstanceService;
                } else {
                    globalEipId = associateInstanceRequest['global_eip_id'];
                    body = associateInstanceRequest['body'];
                    bindingInstanceService = associateInstanceRequest['binding-instance-service'];
                }
            }

        
            if (globalEipId === null || globalEipId === undefined) {
            throw new RequiredError('globalEipId','Required parameter globalEipId was null or undefined when calling associateInstance.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (bindingInstanceService !== undefined && bindingInstanceService !== null) {
                localVarHeaderParameter['binding-instance-service'] = String(bindingInstanceService);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'global_eip_id': globalEipId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 绑定全域公网带宽
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        attachInternetBandwidth(attachInternetBandwidthRequest?: AttachInternetBandwidthRequest) {
            const options = {
                method: "POST",
                url: "/v3/{domain_id}/global-eips/{global_eip_id}/attach-internet-bandwidth",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let globalEipId;

            if (attachInternetBandwidthRequest !== null && attachInternetBandwidthRequest !== undefined) {
                if (attachInternetBandwidthRequest instanceof AttachInternetBandwidthRequest) {
                    globalEipId = attachInternetBandwidthRequest.globalEipId;
                    body = attachInternetBandwidthRequest.body
                } else {
                    globalEipId = attachInternetBandwidthRequest['global_eip_id'];
                    body = attachInternetBandwidthRequest['body'];
                }
            }

        
            if (globalEipId === null || globalEipId === undefined) {
            throw new RequiredError('globalEipId','Required parameter globalEipId was null or undefined when calling attachInternetBandwidth.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'global_eip_id': globalEipId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 全域弹性公网IP段批量绑定全域公网带宽
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchAttachGeipSegmentInternetBandwidth(batchAttachGeipSegmentInternetBandwidthRequest?: BatchAttachGeipSegmentInternetBandwidthRequest) {
            const options = {
                method: "POST",
                url: "/v3/{domain_id}/global-eip-segments/batch-attach-internet-bandwidths",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (batchAttachGeipSegmentInternetBandwidthRequest !== null && batchAttachGeipSegmentInternetBandwidthRequest !== undefined) {
                if (batchAttachGeipSegmentInternetBandwidthRequest instanceof BatchAttachGeipSegmentInternetBandwidthRequest) {
                    body = batchAttachGeipSegmentInternetBandwidthRequest.body
                } else {
                    body = batchAttachGeipSegmentInternetBandwidthRequest['body'];
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
         * 批量绑定全域公网带宽
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchAttachInternetBandwidth(batchAttachInternetBandwidthRequest?: BatchAttachInternetBandwidthRequest) {
            const options = {
                method: "POST",
                url: "/v3/{domain_id}/global-eips/batch-attach-internet-bandwidths",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (batchAttachInternetBandwidthRequest !== null && batchAttachInternetBandwidthRequest !== undefined) {
                if (batchAttachInternetBandwidthRequest instanceof BatchAttachInternetBandwidthRequest) {
                    body = batchAttachInternetBandwidthRequest.body
                } else {
                    body = batchAttachInternetBandwidthRequest['body'];
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
         * 批量添加全域弹性公网IP段的标签
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchCreateGeipSegmentTags(batchCreateGeipSegmentTagsRequest?: BatchCreateGeipSegmentTagsRequest) {
            const options = {
                method: "POST",
                url: "/v3/global-eip-segment/{resource_id}/tags/create",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let resourceId;

            if (batchCreateGeipSegmentTagsRequest !== null && batchCreateGeipSegmentTagsRequest !== undefined) {
                if (batchCreateGeipSegmentTagsRequest instanceof BatchCreateGeipSegmentTagsRequest) {
                    resourceId = batchCreateGeipSegmentTagsRequest.resourceId;
                    body = batchCreateGeipSegmentTagsRequest.body
                } else {
                    resourceId = batchCreateGeipSegmentTagsRequest['resource_id'];
                    body = batchCreateGeipSegmentTagsRequest['body'];
                }
            }

        
            if (resourceId === null || resourceId === undefined) {
            throw new RequiredError('resourceId','Required parameter resourceId was null or undefined when calling batchCreateGeipSegmentTags.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'resource_id': resourceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量创建全域弹性公网IP
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchCreateGlobalEip(batchCreateGlobalEipRequest?: BatchCreateGlobalEipRequest) {
            const options = {
                method: "POST",
                url: "/v3/{domain_id}/global-eips/batch-create",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (batchCreateGlobalEipRequest !== null && batchCreateGlobalEipRequest !== undefined) {
                if (batchCreateGlobalEipRequest instanceof BatchCreateGlobalEipRequest) {
                    body = batchCreateGlobalEipRequest.body
                } else {
                    body = batchCreateGlobalEipRequest['body'];
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
         * 批量添加全域弹性公网IP的标签
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchCreateGlobalEipTags(batchCreateGlobalEipTagsRequest?: BatchCreateGlobalEipTagsRequest) {
            const options = {
                method: "POST",
                url: "/v3/global-eip/{resource_id}/tags/create",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let resourceId;

            if (batchCreateGlobalEipTagsRequest !== null && batchCreateGlobalEipTagsRequest !== undefined) {
                if (batchCreateGlobalEipTagsRequest instanceof BatchCreateGlobalEipTagsRequest) {
                    resourceId = batchCreateGlobalEipTagsRequest.resourceId;
                    body = batchCreateGlobalEipTagsRequest.body
                } else {
                    resourceId = batchCreateGlobalEipTagsRequest['resource_id'];
                    body = batchCreateGlobalEipTagsRequest['body'];
                }
            }

        
            if (resourceId === null || resourceId === undefined) {
            throw new RequiredError('resourceId','Required parameter resourceId was null or undefined when calling batchCreateGlobalEipTags.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'resource_id': resourceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量删除全域弹性公网IP段的标签
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDeleteGeipSegmentTags(batchDeleteGeipSegmentTagsRequest?: BatchDeleteGeipSegmentTagsRequest) {
            const options = {
                method: "POST",
                url: "/v3/global-eip-segment/{resource_id}/tags/delete",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let resourceId;

            if (batchDeleteGeipSegmentTagsRequest !== null && batchDeleteGeipSegmentTagsRequest !== undefined) {
                if (batchDeleteGeipSegmentTagsRequest instanceof BatchDeleteGeipSegmentTagsRequest) {
                    resourceId = batchDeleteGeipSegmentTagsRequest.resourceId;
                    body = batchDeleteGeipSegmentTagsRequest.body
                } else {
                    resourceId = batchDeleteGeipSegmentTagsRequest['resource_id'];
                    body = batchDeleteGeipSegmentTagsRequest['body'];
                }
            }

        
            if (resourceId === null || resourceId === undefined) {
            throw new RequiredError('resourceId','Required parameter resourceId was null or undefined when calling batchDeleteGeipSegmentTags.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'resource_id': resourceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量删除全域弹性公网IP的标签
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDeleteGlobalEipTags(batchDeleteGlobalEipTagsRequest?: BatchDeleteGlobalEipTagsRequest) {
            const options = {
                method: "POST",
                url: "/v3/global-eip/{resource_id}/tags/delete",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let resourceId;

            if (batchDeleteGlobalEipTagsRequest !== null && batchDeleteGlobalEipTagsRequest !== undefined) {
                if (batchDeleteGlobalEipTagsRequest instanceof BatchDeleteGlobalEipTagsRequest) {
                    resourceId = batchDeleteGlobalEipTagsRequest.resourceId;
                    body = batchDeleteGlobalEipTagsRequest.body
                } else {
                    resourceId = batchDeleteGlobalEipTagsRequest['resource_id'];
                    body = batchDeleteGlobalEipTagsRequest['body'];
                }
            }

        
            if (resourceId === null || resourceId === undefined) {
            throw new RequiredError('resourceId','Required parameter resourceId was null or undefined when calling batchDeleteGlobalEipTags.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'resource_id': resourceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 全域弹性公网IP段批量解绑全域公网带宽
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDetachGeipSegmentInternetBandwidth(batchDetachGeipSegmentInternetBandwidthRequest?: BatchDetachGeipSegmentInternetBandwidthRequest) {
            const options = {
                method: "POST",
                url: "/v3/{domain_id}/global-eip-segments/batch-detach-internet-bandwidths",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (batchDetachGeipSegmentInternetBandwidthRequest !== null && batchDetachGeipSegmentInternetBandwidthRequest !== undefined) {
                if (batchDetachGeipSegmentInternetBandwidthRequest instanceof BatchDetachGeipSegmentInternetBandwidthRequest) {
                    body = batchDetachGeipSegmentInternetBandwidthRequest.body
                } else {
                    body = batchDetachGeipSegmentInternetBandwidthRequest['body'];
                }
            }

        
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量解绑全域公网带宽
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDetachInternetBandwidth(batchDetachInternetBandwidthRequest?: BatchDetachInternetBandwidthRequest) {
            const options = {
                method: "POST",
                url: "/v3/{domain_id}/global-eips/batch-detach-internet-bandwidths",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (batchDetachInternetBandwidthRequest !== null && batchDetachInternetBandwidthRequest !== undefined) {
                if (batchDetachInternetBandwidthRequest instanceof BatchDetachInternetBandwidthRequest) {
                    body = batchDetachInternetBandwidthRequest.body
                } else {
                    body = batchDetachInternetBandwidthRequest['body'];
                }
            }

        
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询全域弹性公网IP段个数
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        countGlobalEipSegment(countGlobalEipSegmentRequest?: CountGlobalEipSegmentRequest) {
            const options = {
                method: "GET",
                url: "/v3/{domain_id}/global-eip-segments/count",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let fields;
            
            let id;
            
            let internetBandwidthId;
            
            let name;
            
            let nameLike;
            
            let accessSite;
            
            let geipPoolName;
            
            let isp;
            
            let ipVersion;
            
            let cidr;
            
            let cidrV6;
            
            let freezen;
            
            let internetBandwidthIsNull;
            
            let status;
            
            let associateInstanceRegion;
            
            let associateInstancePublicBorderGroup;
            
            let associateInstanceInstanceSite;
            
            let associateInstanceInstanceType;
            
            let associateInstanceInstanceId;
            
            let associateInstanceProjectId;
            
            let enterpriseProjectId;
            
            let tags;

            if (countGlobalEipSegmentRequest !== null && countGlobalEipSegmentRequest !== undefined) {
                if (countGlobalEipSegmentRequest instanceof CountGlobalEipSegmentRequest) {
                    fields = countGlobalEipSegmentRequest.fields;
                    id = countGlobalEipSegmentRequest.id;
                    internetBandwidthId = countGlobalEipSegmentRequest.internetBandwidthId;
                    name = countGlobalEipSegmentRequest.name;
                    nameLike = countGlobalEipSegmentRequest.nameLike;
                    accessSite = countGlobalEipSegmentRequest.accessSite;
                    geipPoolName = countGlobalEipSegmentRequest.geipPoolName;
                    isp = countGlobalEipSegmentRequest.isp;
                    ipVersion = countGlobalEipSegmentRequest.ipVersion;
                    cidr = countGlobalEipSegmentRequest.cidr;
                    cidrV6 = countGlobalEipSegmentRequest.cidrV6;
                    freezen = countGlobalEipSegmentRequest.freezen;
                    internetBandwidthIsNull = countGlobalEipSegmentRequest.internetBandwidthIsNull;
                    status = countGlobalEipSegmentRequest.status;
                    associateInstanceRegion = countGlobalEipSegmentRequest.associateInstanceRegion;
                    associateInstancePublicBorderGroup = countGlobalEipSegmentRequest.associateInstancePublicBorderGroup;
                    associateInstanceInstanceSite = countGlobalEipSegmentRequest.associateInstanceInstanceSite;
                    associateInstanceInstanceType = countGlobalEipSegmentRequest.associateInstanceInstanceType;
                    associateInstanceInstanceId = countGlobalEipSegmentRequest.associateInstanceInstanceId;
                    associateInstanceProjectId = countGlobalEipSegmentRequest.associateInstanceProjectId;
                    enterpriseProjectId = countGlobalEipSegmentRequest.enterpriseProjectId;
                    tags = countGlobalEipSegmentRequest.tags;
                } else {
                    fields = countGlobalEipSegmentRequest['fields'];
                    id = countGlobalEipSegmentRequest['id'];
                    internetBandwidthId = countGlobalEipSegmentRequest['internet_bandwidth_id'];
                    name = countGlobalEipSegmentRequest['name'];
                    nameLike = countGlobalEipSegmentRequest['name_like'];
                    accessSite = countGlobalEipSegmentRequest['access_site'];
                    geipPoolName = countGlobalEipSegmentRequest['geip_pool_name'];
                    isp = countGlobalEipSegmentRequest['isp'];
                    ipVersion = countGlobalEipSegmentRequest['ip_version'];
                    cidr = countGlobalEipSegmentRequest['cidr'];
                    cidrV6 = countGlobalEipSegmentRequest['cidr_v6'];
                    freezen = countGlobalEipSegmentRequest['freezen'];
                    internetBandwidthIsNull = countGlobalEipSegmentRequest['internet_bandwidth_is_null'];
                    status = countGlobalEipSegmentRequest['status'];
                    associateInstanceRegion = countGlobalEipSegmentRequest['associate_instance.region'];
                    associateInstancePublicBorderGroup = countGlobalEipSegmentRequest['associate_instance.public_border_group'];
                    associateInstanceInstanceSite = countGlobalEipSegmentRequest['associate_instance.instance_site'];
                    associateInstanceInstanceType = countGlobalEipSegmentRequest['associate_instance.instance_type'];
                    associateInstanceInstanceId = countGlobalEipSegmentRequest['associate_instance.instance_id'];
                    associateInstanceProjectId = countGlobalEipSegmentRequest['associate_instance.project_id'];
                    enterpriseProjectId = countGlobalEipSegmentRequest['enterprise_project_id'];
                    tags = countGlobalEipSegmentRequest['tags'];
                }
            }

        
            if (fields !== null && fields !== undefined) {
                localVarQueryParameter['fields'] = fields;
            }
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (internetBandwidthId !== null && internetBandwidthId !== undefined) {
                localVarQueryParameter['internet_bandwidth_id'] = internetBandwidthId;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (nameLike !== null && nameLike !== undefined) {
                localVarQueryParameter['name_like'] = nameLike;
            }
            if (accessSite !== null && accessSite !== undefined) {
                localVarQueryParameter['access_site'] = accessSite;
            }
            if (geipPoolName !== null && geipPoolName !== undefined) {
                localVarQueryParameter['geip_pool_name'] = geipPoolName;
            }
            if (isp !== null && isp !== undefined) {
                localVarQueryParameter['isp'] = isp;
            }
            if (ipVersion !== null && ipVersion !== undefined) {
                localVarQueryParameter['ip_version'] = ipVersion;
            }
            if (cidr !== null && cidr !== undefined) {
                localVarQueryParameter['cidr'] = cidr;
            }
            if (cidrV6 !== null && cidrV6 !== undefined) {
                localVarQueryParameter['cidr_v6'] = cidrV6;
            }
            if (freezen !== null && freezen !== undefined) {
                localVarQueryParameter['freezen'] = freezen;
            }
            if (internetBandwidthIsNull !== null && internetBandwidthIsNull !== undefined) {
                localVarQueryParameter['internet_bandwidth_is_null'] = internetBandwidthIsNull;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (associateInstanceRegion !== null && associateInstanceRegion !== undefined) {
                localVarQueryParameter['associate_instance.region'] = associateInstanceRegion;
            }
            if (associateInstancePublicBorderGroup !== null && associateInstancePublicBorderGroup !== undefined) {
                localVarQueryParameter['associate_instance.public_border_group'] = associateInstancePublicBorderGroup;
            }
            if (associateInstanceInstanceSite !== null && associateInstanceInstanceSite !== undefined) {
                localVarQueryParameter['associate_instance.instance_site'] = associateInstanceInstanceSite;
            }
            if (associateInstanceInstanceType !== null && associateInstanceInstanceType !== undefined) {
                localVarQueryParameter['associate_instance.instance_type'] = associateInstanceInstanceType;
            }
            if (associateInstanceInstanceId !== null && associateInstanceInstanceId !== undefined) {
                localVarQueryParameter['associate_instance.instance_id'] = associateInstanceInstanceId;
            }
            if (associateInstanceProjectId !== null && associateInstanceProjectId !== undefined) {
                localVarQueryParameter['associate_instance.project_id'] = associateInstanceProjectId;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (tags !== null && tags !== undefined) {
                localVarQueryParameter['tags'] = tags;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询全域弹性公网IP个数
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        countGlobalEips(countGlobalEipsRequest?: CountGlobalEipsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{domain_id}/global-eips/count",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let id;
            
            let internetBandwidthId;
            
            let name;
            
            let nameLike;
            
            let accessSite;
            
            let geipPoolName;
            
            let isp;
            
            let ipVersion;
            
            let ipAddress;
            
            let ipv6Address;
            
            let freezen;
            
            let polluted;
            
            let internetBandwidthIsNull;
            
            let gcbBandwidthIsNull;
            
            let status;
            
            let associateInstanceInfoRegion;
            
            let associateInstanceInfoPublicBorderGroup;
            
            let associateInstanceInfoInstanceSite;
            
            let associateInstanceInfoInstanceType;
            
            let associateInstanceInfoInstanceId;
            
            let associateInstanceInfoProjectId;
            
            let enterpriseProjectId;
            
            let tags;

            if (countGlobalEipsRequest !== null && countGlobalEipsRequest !== undefined) {
                if (countGlobalEipsRequest instanceof CountGlobalEipsRequest) {
                    id = countGlobalEipsRequest.id;
                    internetBandwidthId = countGlobalEipsRequest.internetBandwidthId;
                    name = countGlobalEipsRequest.name;
                    nameLike = countGlobalEipsRequest.nameLike;
                    accessSite = countGlobalEipsRequest.accessSite;
                    geipPoolName = countGlobalEipsRequest.geipPoolName;
                    isp = countGlobalEipsRequest.isp;
                    ipVersion = countGlobalEipsRequest.ipVersion;
                    ipAddress = countGlobalEipsRequest.ipAddress;
                    ipv6Address = countGlobalEipsRequest.ipv6Address;
                    freezen = countGlobalEipsRequest.freezen;
                    polluted = countGlobalEipsRequest.polluted;
                    internetBandwidthIsNull = countGlobalEipsRequest.internetBandwidthIsNull;
                    gcbBandwidthIsNull = countGlobalEipsRequest.gcbBandwidthIsNull;
                    status = countGlobalEipsRequest.status;
                    associateInstanceInfoRegion = countGlobalEipsRequest.associateInstanceInfoRegion;
                    associateInstanceInfoPublicBorderGroup = countGlobalEipsRequest.associateInstanceInfoPublicBorderGroup;
                    associateInstanceInfoInstanceSite = countGlobalEipsRequest.associateInstanceInfoInstanceSite;
                    associateInstanceInfoInstanceType = countGlobalEipsRequest.associateInstanceInfoInstanceType;
                    associateInstanceInfoInstanceId = countGlobalEipsRequest.associateInstanceInfoInstanceId;
                    associateInstanceInfoProjectId = countGlobalEipsRequest.associateInstanceInfoProjectId;
                    enterpriseProjectId = countGlobalEipsRequest.enterpriseProjectId;
                    tags = countGlobalEipsRequest.tags;
                } else {
                    id = countGlobalEipsRequest['id'];
                    internetBandwidthId = countGlobalEipsRequest['internet_bandwidth_id'];
                    name = countGlobalEipsRequest['name'];
                    nameLike = countGlobalEipsRequest['name_like'];
                    accessSite = countGlobalEipsRequest['access_site'];
                    geipPoolName = countGlobalEipsRequest['geip_pool_name'];
                    isp = countGlobalEipsRequest['isp'];
                    ipVersion = countGlobalEipsRequest['ip_version'];
                    ipAddress = countGlobalEipsRequest['ip_address'];
                    ipv6Address = countGlobalEipsRequest['ipv6_address'];
                    freezen = countGlobalEipsRequest['freezen'];
                    polluted = countGlobalEipsRequest['polluted'];
                    internetBandwidthIsNull = countGlobalEipsRequest['internet_bandwidth_is_null'];
                    gcbBandwidthIsNull = countGlobalEipsRequest['gcb_bandwidth_is_null'];
                    status = countGlobalEipsRequest['status'];
                    associateInstanceInfoRegion = countGlobalEipsRequest['associate_instance_info.region'];
                    associateInstanceInfoPublicBorderGroup = countGlobalEipsRequest['associate_instance_info.public_border_group'];
                    associateInstanceInfoInstanceSite = countGlobalEipsRequest['associate_instance_info.instance_site'];
                    associateInstanceInfoInstanceType = countGlobalEipsRequest['associate_instance_info.instance_type'];
                    associateInstanceInfoInstanceId = countGlobalEipsRequest['associate_instance_info.instance_id'];
                    associateInstanceInfoProjectId = countGlobalEipsRequest['associate_instance_info.project_id'];
                    enterpriseProjectId = countGlobalEipsRequest['enterprise_project_id'];
                    tags = countGlobalEipsRequest['tags'];
                }
            }

        
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (internetBandwidthId !== null && internetBandwidthId !== undefined) {
                localVarQueryParameter['internet_bandwidth_id'] = internetBandwidthId;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (nameLike !== null && nameLike !== undefined) {
                localVarQueryParameter['name_like'] = nameLike;
            }
            if (accessSite !== null && accessSite !== undefined) {
                localVarQueryParameter['access_site'] = accessSite;
            }
            if (geipPoolName !== null && geipPoolName !== undefined) {
                localVarQueryParameter['geip_pool_name'] = geipPoolName;
            }
            if (isp !== null && isp !== undefined) {
                localVarQueryParameter['isp'] = isp;
            }
            if (ipVersion !== null && ipVersion !== undefined) {
                localVarQueryParameter['ip_version'] = ipVersion;
            }
            if (ipAddress !== null && ipAddress !== undefined) {
                localVarQueryParameter['ip_address'] = ipAddress;
            }
            if (ipv6Address !== null && ipv6Address !== undefined) {
                localVarQueryParameter['ipv6_address'] = ipv6Address;
            }
            if (freezen !== null && freezen !== undefined) {
                localVarQueryParameter['freezen'] = freezen;
            }
            if (polluted !== null && polluted !== undefined) {
                localVarQueryParameter['polluted'] = polluted;
            }
            if (internetBandwidthIsNull !== null && internetBandwidthIsNull !== undefined) {
                localVarQueryParameter['internet_bandwidth_is_null'] = internetBandwidthIsNull;
            }
            if (gcbBandwidthIsNull !== null && gcbBandwidthIsNull !== undefined) {
                localVarQueryParameter['gcb_bandwidth_is_null'] = gcbBandwidthIsNull;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (associateInstanceInfoRegion !== null && associateInstanceInfoRegion !== undefined) {
                localVarQueryParameter['associate_instance_info.region'] = associateInstanceInfoRegion;
            }
            if (associateInstanceInfoPublicBorderGroup !== null && associateInstanceInfoPublicBorderGroup !== undefined) {
                localVarQueryParameter['associate_instance_info.public_border_group'] = associateInstanceInfoPublicBorderGroup;
            }
            if (associateInstanceInfoInstanceSite !== null && associateInstanceInfoInstanceSite !== undefined) {
                localVarQueryParameter['associate_instance_info.instance_site'] = associateInstanceInfoInstanceSite;
            }
            if (associateInstanceInfoInstanceType !== null && associateInstanceInfoInstanceType !== undefined) {
                localVarQueryParameter['associate_instance_info.instance_type'] = associateInstanceInfoInstanceType;
            }
            if (associateInstanceInfoInstanceId !== null && associateInstanceInfoInstanceId !== undefined) {
                localVarQueryParameter['associate_instance_info.instance_id'] = associateInstanceInfoInstanceId;
            }
            if (associateInstanceInfoProjectId !== null && associateInstanceInfoProjectId !== undefined) {
                localVarQueryParameter['associate_instance_info.project_id'] = associateInstanceInfoProjectId;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (tags !== null && tags !== undefined) {
                localVarQueryParameter['tags'] = tags;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建全域弹性公网IP
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createGlobalEip(createGlobalEipRequest?: CreateGlobalEipRequest) {
            const options = {
                method: "POST",
                url: "/v3/{domain_id}/global-eips",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createGlobalEipRequest !== null && createGlobalEipRequest !== undefined) {
                if (createGlobalEipRequest instanceof CreateGlobalEipRequest) {
                    body = createGlobalEipRequest.body
                } else {
                    body = createGlobalEipRequest['body'];
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
         * 创建全域弹性公网IP段
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createGlobalEipSegment(createGlobalEipSegmentRequest?: CreateGlobalEipSegmentRequest) {
            const options = {
                method: "POST",
                url: "/v3/{domain_id}/global-eip-segments",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createGlobalEipSegmentRequest !== null && createGlobalEipSegmentRequest !== undefined) {
                if (createGlobalEipSegmentRequest instanceof CreateGlobalEipSegmentRequest) {
                    body = createGlobalEipSegmentRequest.body
                } else {
                    body = createGlobalEipSegmentRequest['body'];
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
         * 删除全域弹性公网IP段的标签
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteGeipSegmentTag(deleteGeipSegmentTagRequest?: DeleteGeipSegmentTagRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/global-eip-segment/{resource_id}/tags/{tag_key}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let resourceId;
            
            let tagKey;

            if (deleteGeipSegmentTagRequest !== null && deleteGeipSegmentTagRequest !== undefined) {
                if (deleteGeipSegmentTagRequest instanceof DeleteGeipSegmentTagRequest) {
                    resourceId = deleteGeipSegmentTagRequest.resourceId;
                    tagKey = deleteGeipSegmentTagRequest.tagKey;
                } else {
                    resourceId = deleteGeipSegmentTagRequest['resource_id'];
                    tagKey = deleteGeipSegmentTagRequest['tag_key'];
                }
            }

        
            if (resourceId === null || resourceId === undefined) {
            throw new RequiredError('resourceId','Required parameter resourceId was null or undefined when calling deleteGeipSegmentTag.');
            }
            if (tagKey === null || tagKey === undefined) {
            throw new RequiredError('tagKey','Required parameter tagKey was null or undefined when calling deleteGeipSegmentTag.');
            }

            options.pathParams = { 'resource_id': resourceId,'tag_key': tagKey, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除全域弹性公网IP
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteGlobalEip(deleteGlobalEipRequest?: DeleteGlobalEipRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{domain_id}/global-eips/{global_eip_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let globalEipId;

            if (deleteGlobalEipRequest !== null && deleteGlobalEipRequest !== undefined) {
                if (deleteGlobalEipRequest instanceof DeleteGlobalEipRequest) {
                    globalEipId = deleteGlobalEipRequest.globalEipId;
                } else {
                    globalEipId = deleteGlobalEipRequest['global_eip_id'];
                }
            }

        
            if (globalEipId === null || globalEipId === undefined) {
            throw new RequiredError('globalEipId','Required parameter globalEipId was null or undefined when calling deleteGlobalEip.');
            }

            options.pathParams = { 'global_eip_id': globalEipId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除全域弹性公网IP段
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteGlobalEipSegment(deleteGlobalEipSegmentRequest?: DeleteGlobalEipSegmentRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{domain_id}/global-eip-segments/{global_eip_segment_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let globalEipSegmentId;

            if (deleteGlobalEipSegmentRequest !== null && deleteGlobalEipSegmentRequest !== undefined) {
                if (deleteGlobalEipSegmentRequest instanceof DeleteGlobalEipSegmentRequest) {
                    globalEipSegmentId = deleteGlobalEipSegmentRequest.globalEipSegmentId;
                } else {
                    globalEipSegmentId = deleteGlobalEipSegmentRequest['global_eip_segment_id'];
                }
            }

        
            if (globalEipSegmentId === null || globalEipSegmentId === undefined) {
            throw new RequiredError('globalEipSegmentId','Required parameter globalEipSegmentId was null or undefined when calling deleteGlobalEipSegment.');
            }

            options.pathParams = { 'global_eip_segment_id': globalEipSegmentId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除全域弹性公网IP的标签
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteGlobalEipTag(deleteGlobalEipTagRequest?: DeleteGlobalEipTagRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/global-eip/{resource_id}/tags/{tag_key}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let resourceId;
            
            let tagKey;

            if (deleteGlobalEipTagRequest !== null && deleteGlobalEipTagRequest !== undefined) {
                if (deleteGlobalEipTagRequest instanceof DeleteGlobalEipTagRequest) {
                    resourceId = deleteGlobalEipTagRequest.resourceId;
                    tagKey = deleteGlobalEipTagRequest.tagKey;
                } else {
                    resourceId = deleteGlobalEipTagRequest['resource_id'];
                    tagKey = deleteGlobalEipTagRequest['tag_key'];
                }
            }

        
            if (resourceId === null || resourceId === undefined) {
            throw new RequiredError('resourceId','Required parameter resourceId was null or undefined when calling deleteGlobalEipTag.');
            }
            if (tagKey === null || tagKey === undefined) {
            throw new RequiredError('tagKey','Required parameter tagKey was null or undefined when calling deleteGlobalEipTag.');
            }

            options.pathParams = { 'resource_id': resourceId,'tag_key': tagKey, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 解绑全域公网带宽
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        detachInternetBandwidth(detachInternetBandwidthRequest?: DetachInternetBandwidthRequest) {
            const options = {
                method: "POST",
                url: "/v3/{domain_id}/global-eips/{global_eip_id}/detach-internet-bandwidth",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let globalEipId;
            
            let forceUnbind;

            if (detachInternetBandwidthRequest !== null && detachInternetBandwidthRequest !== undefined) {
                if (detachInternetBandwidthRequest instanceof DetachInternetBandwidthRequest) {
                    globalEipId = detachInternetBandwidthRequest.globalEipId;
                    forceUnbind = detachInternetBandwidthRequest.forceUnbind;
                } else {
                    globalEipId = detachInternetBandwidthRequest['global_eip_id'];
                    forceUnbind = detachInternetBandwidthRequest['force_unbind'];
                }
            }

        
            if (globalEipId === null || globalEipId === undefined) {
            throw new RequiredError('globalEipId','Required parameter globalEipId was null or undefined when calling detachInternetBandwidth.');
            }
            if (forceUnbind !== null && forceUnbind !== undefined) {
                localVarQueryParameter['force_unbind'] = forceUnbind;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'global_eip_id': globalEipId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 全域弹性公网IP段解绑后端实例
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        disassociateGeipSegmentInstance(disassociateGeipSegmentInstanceRequest?: DisassociateGeipSegmentInstanceRequest) {
            const options = {
                method: "POST",
                url: "/v3/{domain_id}/global-eip-segments/{global_eip_segment_id}/disassociate-instance",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let globalEipSegmentId;

            if (disassociateGeipSegmentInstanceRequest !== null && disassociateGeipSegmentInstanceRequest !== undefined) {
                if (disassociateGeipSegmentInstanceRequest instanceof DisassociateGeipSegmentInstanceRequest) {
                    globalEipSegmentId = disassociateGeipSegmentInstanceRequest.globalEipSegmentId;
                } else {
                    globalEipSegmentId = disassociateGeipSegmentInstanceRequest['global_eip_segment_id'];
                }
            }

        
            if (globalEipSegmentId === null || globalEipSegmentId === undefined) {
            throw new RequiredError('globalEipSegmentId','Required parameter globalEipSegmentId was null or undefined when calling disassociateGeipSegmentInstance.');
            }

            options.pathParams = { 'global_eip_segment_id': globalEipSegmentId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 解绑后端实例
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        disassociateInstance(disassociateInstanceRequest?: DisassociateInstanceRequest) {
            const options = {
                method: "POST",
                url: "/v3/{domain_id}/global-eips/{global_eip_id}/disassociate-instance",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let isReserveGcb;
            
            let globalEipId;

            if (disassociateInstanceRequest !== null && disassociateInstanceRequest !== undefined) {
                if (disassociateInstanceRequest instanceof DisassociateInstanceRequest) {
                    isReserveGcb = disassociateInstanceRequest.isReserveGcb;
                    globalEipId = disassociateInstanceRequest.globalEipId;
                } else {
                    isReserveGcb = disassociateInstanceRequest['is_reserve_gcb'];
                    globalEipId = disassociateInstanceRequest['global_eip_id'];
                }
            }

        
            if (globalEipId === null || globalEipId === undefined) {
            throw new RequiredError('globalEipId','Required parameter globalEipId was null or undefined when calling disassociateInstance.');
            }
            if (isReserveGcb !== undefined && isReserveGcb !== null) {
                localVarHeaderParameter['is_reserve_gcb'] = String(isReserveGcb);
            }

            options.pathParams = { 'global_eip_id': globalEipId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询全域弹性公网IP池列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listGeipPools(listGeipPoolsRequest?: ListGeipPoolsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{domain_id}/geip/geip-pools",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let offset;
            
            let marker;
            
            let pageReverse;
            
            let fields;
            
            let sortKey;
            
            let sortDir;
            
            let id;
            
            let name;
            
            let accessSite;
            
            let isp;
            
            let ipVersion;
            
            let status;
            
            let type;

            if (listGeipPoolsRequest !== null && listGeipPoolsRequest !== undefined) {
                if (listGeipPoolsRequest instanceof ListGeipPoolsRequest) {
                    limit = listGeipPoolsRequest.limit;
                    offset = listGeipPoolsRequest.offset;
                    marker = listGeipPoolsRequest.marker;
                    pageReverse = listGeipPoolsRequest.pageReverse;
                    fields = listGeipPoolsRequest.fields;
                    sortKey = listGeipPoolsRequest.sortKey;
                    sortDir = listGeipPoolsRequest.sortDir;
                    id = listGeipPoolsRequest.id;
                    name = listGeipPoolsRequest.name;
                    accessSite = listGeipPoolsRequest.accessSite;
                    isp = listGeipPoolsRequest.isp;
                    ipVersion = listGeipPoolsRequest.ipVersion;
                    status = listGeipPoolsRequest.status;
                    type = listGeipPoolsRequest.type;
                } else {
                    limit = listGeipPoolsRequest['limit'];
                    offset = listGeipPoolsRequest['offset'];
                    marker = listGeipPoolsRequest['marker'];
                    pageReverse = listGeipPoolsRequest['page_reverse'];
                    fields = listGeipPoolsRequest['fields'];
                    sortKey = listGeipPoolsRequest['sort_key'];
                    sortDir = listGeipPoolsRequest['sort_dir'];
                    id = listGeipPoolsRequest['id'];
                    name = listGeipPoolsRequest['name'];
                    accessSite = listGeipPoolsRequest['access_site'];
                    isp = listGeipPoolsRequest['isp'];
                    ipVersion = listGeipPoolsRequest['ip_version'];
                    status = listGeipPoolsRequest['status'];
                    type = listGeipPoolsRequest['type'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (pageReverse !== null && pageReverse !== undefined) {
                localVarQueryParameter['page_reverse'] = pageReverse;
            }
            if (fields !== null && fields !== undefined) {
                localVarQueryParameter['fields'] = fields;
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
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (accessSite !== null && accessSite !== undefined) {
                localVarQueryParameter['access_site'] = accessSite;
            }
            if (isp !== null && isp !== undefined) {
                localVarQueryParameter['isp'] = isp;
            }
            if (ipVersion !== null && ipVersion !== undefined) {
                localVarQueryParameter['ip_version'] = ipVersion;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询资源实例列表的数目
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listGeipSegmentCountFilterTags(listGeipSegmentCountFilterTagsRequest?: ListGeipSegmentCountFilterTagsRequest) {
            const options = {
                method: "POST",
                url: "/v3/global-eip-segment/resource-instances/count",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (listGeipSegmentCountFilterTagsRequest !== null && listGeipSegmentCountFilterTagsRequest !== undefined) {
                if (listGeipSegmentCountFilterTagsRequest instanceof ListGeipSegmentCountFilterTagsRequest) {
                    body = listGeipSegmentCountFilterTagsRequest.body
                } else {
                    body = listGeipSegmentCountFilterTagsRequest['body'];
                }
            }

        
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询全域弹性公网IP段的项目标签
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listGeipSegmentDomainTags() {
            const options = {
                method: "GET",
                url: "/v3/global-eip-segment/tags",
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
         * 查询资源实例的列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listGeipSegmentFilterTags(listGeipSegmentFilterTagsRequest?: ListGeipSegmentFilterTagsRequest) {
            const options = {
                method: "POST",
                url: "/v3/global-eip-segment/resource-instances/filter",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let limit;
            
            let offset;

            if (listGeipSegmentFilterTagsRequest !== null && listGeipSegmentFilterTagsRequest !== undefined) {
                if (listGeipSegmentFilterTagsRequest instanceof ListGeipSegmentFilterTagsRequest) {
                    limit = listGeipSegmentFilterTagsRequest.limit;
                    offset = listGeipSegmentFilterTagsRequest.offset;
                    body = listGeipSegmentFilterTagsRequest.body
                } else {
                    limit = listGeipSegmentFilterTagsRequest['limit'];
                    offset = listGeipSegmentFilterTagsRequest['offset'];
                    body = listGeipSegmentFilterTagsRequest['body'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询资源实例列表数目
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listGlobalEipCountFilterTags(listGlobalEipCountFilterTagsRequest?: ListGlobalEipCountFilterTagsRequest) {
            const options = {
                method: "POST",
                url: "/v3/global-eip/resource-instances/count",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (listGlobalEipCountFilterTagsRequest !== null && listGlobalEipCountFilterTagsRequest !== undefined) {
                if (listGlobalEipCountFilterTagsRequest instanceof ListGlobalEipCountFilterTagsRequest) {
                    body = listGlobalEipCountFilterTagsRequest.body
                } else {
                    body = listGlobalEipCountFilterTagsRequest['body'];
                }
            }

        
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询全域弹性公网IP的项目标签
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listGlobalEipDomainTags() {
            const options = {
                method: "GET",
                url: "/v3/global-eip/tags",
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
         * 查询资源实例列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listGlobalEipFilterTags(listGlobalEipFilterTagsRequest?: ListGlobalEipFilterTagsRequest) {
            const options = {
                method: "POST",
                url: "/v3/global-eip/resource-instances/filter",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let limit;
            
            let offset;

            if (listGlobalEipFilterTagsRequest !== null && listGlobalEipFilterTagsRequest !== undefined) {
                if (listGlobalEipFilterTagsRequest instanceof ListGlobalEipFilterTagsRequest) {
                    limit = listGlobalEipFilterTagsRequest.limit;
                    offset = listGlobalEipFilterTagsRequest.offset;
                    body = listGlobalEipFilterTagsRequest.body
                } else {
                    limit = listGlobalEipFilterTagsRequest['limit'];
                    offset = listGlobalEipFilterTagsRequest['offset'];
                    body = listGlobalEipFilterTagsRequest['body'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询全域弹性公网IP段列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listGlobalEipSegments(listGlobalEipSegmentsRequest?: ListGlobalEipSegmentsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{domain_id}/global-eip-segments",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let offset;
            
            let marker;
            
            let pageReverse;
            
            let fields;
            
            let sortKey;
            
            let sortDir;
            
            let id;
            
            let internetBandwidthId;
            
            let name;
            
            let nameLike;
            
            let accessSite;
            
            let geipPoolName;
            
            let isp;
            
            let ipVersion;
            
            let cidr;
            
            let cidrV6;
            
            let freezen;
            
            let internetBandwidthIsNull;
            
            let status;
            
            let associateInstanceRegion;
            
            let associateInstanceInstanceType;
            
            let associateInstancePublicBorderGroup;
            
            let associateInstanceInstanceSite;
            
            let associateInstanceInstanceId;
            
            let associateInstanceProjectId;
            
            let associateInstanceServiceId;
            
            let associateInstanceServiceType;
            
            let enterpriseProjectId;
            
            let tags;

            if (listGlobalEipSegmentsRequest !== null && listGlobalEipSegmentsRequest !== undefined) {
                if (listGlobalEipSegmentsRequest instanceof ListGlobalEipSegmentsRequest) {
                    limit = listGlobalEipSegmentsRequest.limit;
                    offset = listGlobalEipSegmentsRequest.offset;
                    marker = listGlobalEipSegmentsRequest.marker;
                    pageReverse = listGlobalEipSegmentsRequest.pageReverse;
                    fields = listGlobalEipSegmentsRequest.fields;
                    sortKey = listGlobalEipSegmentsRequest.sortKey;
                    sortDir = listGlobalEipSegmentsRequest.sortDir;
                    id = listGlobalEipSegmentsRequest.id;
                    internetBandwidthId = listGlobalEipSegmentsRequest.internetBandwidthId;
                    name = listGlobalEipSegmentsRequest.name;
                    nameLike = listGlobalEipSegmentsRequest.nameLike;
                    accessSite = listGlobalEipSegmentsRequest.accessSite;
                    geipPoolName = listGlobalEipSegmentsRequest.geipPoolName;
                    isp = listGlobalEipSegmentsRequest.isp;
                    ipVersion = listGlobalEipSegmentsRequest.ipVersion;
                    cidr = listGlobalEipSegmentsRequest.cidr;
                    cidrV6 = listGlobalEipSegmentsRequest.cidrV6;
                    freezen = listGlobalEipSegmentsRequest.freezen;
                    internetBandwidthIsNull = listGlobalEipSegmentsRequest.internetBandwidthIsNull;
                    status = listGlobalEipSegmentsRequest.status;
                    associateInstanceRegion = listGlobalEipSegmentsRequest.associateInstanceRegion;
                    associateInstanceInstanceType = listGlobalEipSegmentsRequest.associateInstanceInstanceType;
                    associateInstancePublicBorderGroup = listGlobalEipSegmentsRequest.associateInstancePublicBorderGroup;
                    associateInstanceInstanceSite = listGlobalEipSegmentsRequest.associateInstanceInstanceSite;
                    associateInstanceInstanceId = listGlobalEipSegmentsRequest.associateInstanceInstanceId;
                    associateInstanceProjectId = listGlobalEipSegmentsRequest.associateInstanceProjectId;
                    associateInstanceServiceId = listGlobalEipSegmentsRequest.associateInstanceServiceId;
                    associateInstanceServiceType = listGlobalEipSegmentsRequest.associateInstanceServiceType;
                    enterpriseProjectId = listGlobalEipSegmentsRequest.enterpriseProjectId;
                    tags = listGlobalEipSegmentsRequest.tags;
                } else {
                    limit = listGlobalEipSegmentsRequest['limit'];
                    offset = listGlobalEipSegmentsRequest['offset'];
                    marker = listGlobalEipSegmentsRequest['marker'];
                    pageReverse = listGlobalEipSegmentsRequest['page_reverse'];
                    fields = listGlobalEipSegmentsRequest['fields'];
                    sortKey = listGlobalEipSegmentsRequest['sort_key'];
                    sortDir = listGlobalEipSegmentsRequest['sort_dir'];
                    id = listGlobalEipSegmentsRequest['id'];
                    internetBandwidthId = listGlobalEipSegmentsRequest['internet_bandwidth_id'];
                    name = listGlobalEipSegmentsRequest['name'];
                    nameLike = listGlobalEipSegmentsRequest['name_like'];
                    accessSite = listGlobalEipSegmentsRequest['access_site'];
                    geipPoolName = listGlobalEipSegmentsRequest['geip_pool_name'];
                    isp = listGlobalEipSegmentsRequest['isp'];
                    ipVersion = listGlobalEipSegmentsRequest['ip_version'];
                    cidr = listGlobalEipSegmentsRequest['cidr'];
                    cidrV6 = listGlobalEipSegmentsRequest['cidr_v6'];
                    freezen = listGlobalEipSegmentsRequest['freezen'];
                    internetBandwidthIsNull = listGlobalEipSegmentsRequest['internet_bandwidth_is_null'];
                    status = listGlobalEipSegmentsRequest['status'];
                    associateInstanceRegion = listGlobalEipSegmentsRequest['associate_instance.region'];
                    associateInstanceInstanceType = listGlobalEipSegmentsRequest['associate_instance.instance_type'];
                    associateInstancePublicBorderGroup = listGlobalEipSegmentsRequest['associate_instance.public_border_group'];
                    associateInstanceInstanceSite = listGlobalEipSegmentsRequest['associate_instance.instance_site'];
                    associateInstanceInstanceId = listGlobalEipSegmentsRequest['associate_instance.instance_id'];
                    associateInstanceProjectId = listGlobalEipSegmentsRequest['associate_instance.project_id'];
                    associateInstanceServiceId = listGlobalEipSegmentsRequest['associate_instance.service_id'];
                    associateInstanceServiceType = listGlobalEipSegmentsRequest['associate_instance.service_type'];
                    enterpriseProjectId = listGlobalEipSegmentsRequest['enterprise_project_id'];
                    tags = listGlobalEipSegmentsRequest['tags'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (pageReverse !== null && pageReverse !== undefined) {
                localVarQueryParameter['page_reverse'] = pageReverse;
            }
            if (fields !== null && fields !== undefined) {
                localVarQueryParameter['fields'] = fields;
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
            if (internetBandwidthId !== null && internetBandwidthId !== undefined) {
                localVarQueryParameter['internet_bandwidth_id'] = internetBandwidthId;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (nameLike !== null && nameLike !== undefined) {
                localVarQueryParameter['name_like'] = nameLike;
            }
            if (accessSite !== null && accessSite !== undefined) {
                localVarQueryParameter['access_site'] = accessSite;
            }
            if (geipPoolName !== null && geipPoolName !== undefined) {
                localVarQueryParameter['geip_pool_name'] = geipPoolName;
            }
            if (isp !== null && isp !== undefined) {
                localVarQueryParameter['isp'] = isp;
            }
            if (ipVersion !== null && ipVersion !== undefined) {
                localVarQueryParameter['ip_version'] = ipVersion;
            }
            if (cidr !== null && cidr !== undefined) {
                localVarQueryParameter['cidr'] = cidr;
            }
            if (cidrV6 !== null && cidrV6 !== undefined) {
                localVarQueryParameter['cidr_v6'] = cidrV6;
            }
            if (freezen !== null && freezen !== undefined) {
                localVarQueryParameter['freezen'] = freezen;
            }
            if (internetBandwidthIsNull !== null && internetBandwidthIsNull !== undefined) {
                localVarQueryParameter['internet_bandwidth_is_null'] = internetBandwidthIsNull;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (associateInstanceRegion !== null && associateInstanceRegion !== undefined) {
                localVarQueryParameter['associate_instance.region'] = associateInstanceRegion;
            }
            if (associateInstanceInstanceType !== null && associateInstanceInstanceType !== undefined) {
                localVarQueryParameter['associate_instance.instance_type'] = associateInstanceInstanceType;
            }
            if (associateInstancePublicBorderGroup !== null && associateInstancePublicBorderGroup !== undefined) {
                localVarQueryParameter['associate_instance.public_border_group'] = associateInstancePublicBorderGroup;
            }
            if (associateInstanceInstanceSite !== null && associateInstanceInstanceSite !== undefined) {
                localVarQueryParameter['associate_instance.instance_site'] = associateInstanceInstanceSite;
            }
            if (associateInstanceInstanceId !== null && associateInstanceInstanceId !== undefined) {
                localVarQueryParameter['associate_instance.instance_id'] = associateInstanceInstanceId;
            }
            if (associateInstanceProjectId !== null && associateInstanceProjectId !== undefined) {
                localVarQueryParameter['associate_instance.project_id'] = associateInstanceProjectId;
            }
            if (associateInstanceServiceId !== null && associateInstanceServiceId !== undefined) {
                localVarQueryParameter['associate_instance.service_id'] = associateInstanceServiceId;
            }
            if (associateInstanceServiceType !== null && associateInstanceServiceType !== undefined) {
                localVarQueryParameter['associate_instance.service_type'] = associateInstanceServiceType;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (tags !== null && tags !== undefined) {
                localVarQueryParameter['tags'] = tags;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询全域弹性公网IP列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listGlobalEips(listGlobalEipsRequest?: ListGlobalEipsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{domain_id}/global-eips",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let offset;
            
            let marker;
            
            let pageReverse;
            
            let fields;
            
            let sortKey;
            
            let sortDir;
            
            let id;
            
            let internetBandwidthId;
            
            let name;
            
            let nameLike;
            
            let accessSite;
            
            let geipPoolName;
            
            let isp;
            
            let ipVersion;
            
            let ipAddress;
            
            let ipv6Address;
            
            let freezen;
            
            let polluted;
            
            let internetBandwidthIsNull;
            
            let gcbBandwidthIsNull;
            
            let status;
            
            let associateInstanceInfoRegion;
            
            let associateInstanceInfoInstanceType;
            
            let associateInstanceInfoPublicBorderGroup;
            
            let associateInstanceInfoInstanceSite;
            
            let associateInstanceInfoInstanceId;
            
            let associateInstanceInfoProjectId;
            
            let associateInstanceInfoServiceId;
            
            let associateInstanceInfoServiceType;
            
            let enterpriseProjectId;
            
            let tags;

            if (listGlobalEipsRequest !== null && listGlobalEipsRequest !== undefined) {
                if (listGlobalEipsRequest instanceof ListGlobalEipsRequest) {
                    limit = listGlobalEipsRequest.limit;
                    offset = listGlobalEipsRequest.offset;
                    marker = listGlobalEipsRequest.marker;
                    pageReverse = listGlobalEipsRequest.pageReverse;
                    fields = listGlobalEipsRequest.fields;
                    sortKey = listGlobalEipsRequest.sortKey;
                    sortDir = listGlobalEipsRequest.sortDir;
                    id = listGlobalEipsRequest.id;
                    internetBandwidthId = listGlobalEipsRequest.internetBandwidthId;
                    name = listGlobalEipsRequest.name;
                    nameLike = listGlobalEipsRequest.nameLike;
                    accessSite = listGlobalEipsRequest.accessSite;
                    geipPoolName = listGlobalEipsRequest.geipPoolName;
                    isp = listGlobalEipsRequest.isp;
                    ipVersion = listGlobalEipsRequest.ipVersion;
                    ipAddress = listGlobalEipsRequest.ipAddress;
                    ipv6Address = listGlobalEipsRequest.ipv6Address;
                    freezen = listGlobalEipsRequest.freezen;
                    polluted = listGlobalEipsRequest.polluted;
                    internetBandwidthIsNull = listGlobalEipsRequest.internetBandwidthIsNull;
                    gcbBandwidthIsNull = listGlobalEipsRequest.gcbBandwidthIsNull;
                    status = listGlobalEipsRequest.status;
                    associateInstanceInfoRegion = listGlobalEipsRequest.associateInstanceInfoRegion;
                    associateInstanceInfoInstanceType = listGlobalEipsRequest.associateInstanceInfoInstanceType;
                    associateInstanceInfoPublicBorderGroup = listGlobalEipsRequest.associateInstanceInfoPublicBorderGroup;
                    associateInstanceInfoInstanceSite = listGlobalEipsRequest.associateInstanceInfoInstanceSite;
                    associateInstanceInfoInstanceId = listGlobalEipsRequest.associateInstanceInfoInstanceId;
                    associateInstanceInfoProjectId = listGlobalEipsRequest.associateInstanceInfoProjectId;
                    associateInstanceInfoServiceId = listGlobalEipsRequest.associateInstanceInfoServiceId;
                    associateInstanceInfoServiceType = listGlobalEipsRequest.associateInstanceInfoServiceType;
                    enterpriseProjectId = listGlobalEipsRequest.enterpriseProjectId;
                    tags = listGlobalEipsRequest.tags;
                } else {
                    limit = listGlobalEipsRequest['limit'];
                    offset = listGlobalEipsRequest['offset'];
                    marker = listGlobalEipsRequest['marker'];
                    pageReverse = listGlobalEipsRequest['page_reverse'];
                    fields = listGlobalEipsRequest['fields'];
                    sortKey = listGlobalEipsRequest['sort_key'];
                    sortDir = listGlobalEipsRequest['sort_dir'];
                    id = listGlobalEipsRequest['id'];
                    internetBandwidthId = listGlobalEipsRequest['internet_bandwidth_id'];
                    name = listGlobalEipsRequest['name'];
                    nameLike = listGlobalEipsRequest['name_like'];
                    accessSite = listGlobalEipsRequest['access_site'];
                    geipPoolName = listGlobalEipsRequest['geip_pool_name'];
                    isp = listGlobalEipsRequest['isp'];
                    ipVersion = listGlobalEipsRequest['ip_version'];
                    ipAddress = listGlobalEipsRequest['ip_address'];
                    ipv6Address = listGlobalEipsRequest['ipv6_address'];
                    freezen = listGlobalEipsRequest['freezen'];
                    polluted = listGlobalEipsRequest['polluted'];
                    internetBandwidthIsNull = listGlobalEipsRequest['internet_bandwidth_is_null'];
                    gcbBandwidthIsNull = listGlobalEipsRequest['gcb_bandwidth_is_null'];
                    status = listGlobalEipsRequest['status'];
                    associateInstanceInfoRegion = listGlobalEipsRequest['associate_instance_info.region'];
                    associateInstanceInfoInstanceType = listGlobalEipsRequest['associate_instance_info.instance_type'];
                    associateInstanceInfoPublicBorderGroup = listGlobalEipsRequest['associate_instance_info.public_border_group'];
                    associateInstanceInfoInstanceSite = listGlobalEipsRequest['associate_instance_info.instance_site'];
                    associateInstanceInfoInstanceId = listGlobalEipsRequest['associate_instance_info.instance_id'];
                    associateInstanceInfoProjectId = listGlobalEipsRequest['associate_instance_info.project_id'];
                    associateInstanceInfoServiceId = listGlobalEipsRequest['associate_instance_info.service_id'];
                    associateInstanceInfoServiceType = listGlobalEipsRequest['associate_instance_info.service_type'];
                    enterpriseProjectId = listGlobalEipsRequest['enterprise_project_id'];
                    tags = listGlobalEipsRequest['tags'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (pageReverse !== null && pageReverse !== undefined) {
                localVarQueryParameter['page_reverse'] = pageReverse;
            }
            if (fields !== null && fields !== undefined) {
                localVarQueryParameter['fields'] = fields;
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
            if (internetBandwidthId !== null && internetBandwidthId !== undefined) {
                localVarQueryParameter['internet_bandwidth_id'] = internetBandwidthId;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (nameLike !== null && nameLike !== undefined) {
                localVarQueryParameter['name_like'] = nameLike;
            }
            if (accessSite !== null && accessSite !== undefined) {
                localVarQueryParameter['access_site'] = accessSite;
            }
            if (geipPoolName !== null && geipPoolName !== undefined) {
                localVarQueryParameter['geip_pool_name'] = geipPoolName;
            }
            if (isp !== null && isp !== undefined) {
                localVarQueryParameter['isp'] = isp;
            }
            if (ipVersion !== null && ipVersion !== undefined) {
                localVarQueryParameter['ip_version'] = ipVersion;
            }
            if (ipAddress !== null && ipAddress !== undefined) {
                localVarQueryParameter['ip_address'] = ipAddress;
            }
            if (ipv6Address !== null && ipv6Address !== undefined) {
                localVarQueryParameter['ipv6_address'] = ipv6Address;
            }
            if (freezen !== null && freezen !== undefined) {
                localVarQueryParameter['freezen'] = freezen;
            }
            if (polluted !== null && polluted !== undefined) {
                localVarQueryParameter['polluted'] = polluted;
            }
            if (internetBandwidthIsNull !== null && internetBandwidthIsNull !== undefined) {
                localVarQueryParameter['internet_bandwidth_is_null'] = internetBandwidthIsNull;
            }
            if (gcbBandwidthIsNull !== null && gcbBandwidthIsNull !== undefined) {
                localVarQueryParameter['gcb_bandwidth_is_null'] = gcbBandwidthIsNull;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (associateInstanceInfoRegion !== null && associateInstanceInfoRegion !== undefined) {
                localVarQueryParameter['associate_instance_info.region'] = associateInstanceInfoRegion;
            }
            if (associateInstanceInfoInstanceType !== null && associateInstanceInfoInstanceType !== undefined) {
                localVarQueryParameter['associate_instance_info.instance_type'] = associateInstanceInfoInstanceType;
            }
            if (associateInstanceInfoPublicBorderGroup !== null && associateInstanceInfoPublicBorderGroup !== undefined) {
                localVarQueryParameter['associate_instance_info.public_border_group'] = associateInstanceInfoPublicBorderGroup;
            }
            if (associateInstanceInfoInstanceSite !== null && associateInstanceInfoInstanceSite !== undefined) {
                localVarQueryParameter['associate_instance_info.instance_site'] = associateInstanceInfoInstanceSite;
            }
            if (associateInstanceInfoInstanceId !== null && associateInstanceInfoInstanceId !== undefined) {
                localVarQueryParameter['associate_instance_info.instance_id'] = associateInstanceInfoInstanceId;
            }
            if (associateInstanceInfoProjectId !== null && associateInstanceInfoProjectId !== undefined) {
                localVarQueryParameter['associate_instance_info.project_id'] = associateInstanceInfoProjectId;
            }
            if (associateInstanceInfoServiceId !== null && associateInstanceInfoServiceId !== undefined) {
                localVarQueryParameter['associate_instance_info.service_id'] = associateInstanceInfoServiceId;
            }
            if (associateInstanceInfoServiceType !== null && associateInstanceInfoServiceType !== undefined) {
                localVarQueryParameter['associate_instance_info.service_type'] = associateInstanceInfoServiceType;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (tags !== null && tags !== undefined) {
                localVarQueryParameter['tags'] = tags;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询全域弹性公网IP段的标签
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showGeipSegmentTags(showGeipSegmentTagsRequest?: ShowGeipSegmentTagsRequest) {
            const options = {
                method: "GET",
                url: "/v3/global-eip-segment/{resource_id}/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let resourceId;

            if (showGeipSegmentTagsRequest !== null && showGeipSegmentTagsRequest !== undefined) {
                if (showGeipSegmentTagsRequest instanceof ShowGeipSegmentTagsRequest) {
                    resourceId = showGeipSegmentTagsRequest.resourceId;
                } else {
                    resourceId = showGeipSegmentTagsRequest['resource_id'];
                }
            }

        
            if (resourceId === null || resourceId === undefined) {
            throw new RequiredError('resourceId','Required parameter resourceId was null or undefined when calling showGeipSegmentTags.');
            }

            options.pathParams = { 'resource_id': resourceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询全域弹性公网IP详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showGlobalEip(showGlobalEipRequest?: ShowGlobalEipRequest) {
            const options = {
                method: "GET",
                url: "/v3/{domain_id}/global-eips/{global_eip_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let globalEipId;
            
            let fields;

            if (showGlobalEipRequest !== null && showGlobalEipRequest !== undefined) {
                if (showGlobalEipRequest instanceof ShowGlobalEipRequest) {
                    globalEipId = showGlobalEipRequest.globalEipId;
                    fields = showGlobalEipRequest.fields;
                } else {
                    globalEipId = showGlobalEipRequest['global_eip_id'];
                    fields = showGlobalEipRequest['fields'];
                }
            }

        
            if (globalEipId === null || globalEipId === undefined) {
            throw new RequiredError('globalEipId','Required parameter globalEipId was null or undefined when calling showGlobalEip.');
            }
            if (fields !== null && fields !== undefined) {
                localVarQueryParameter['fields'] = fields;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'global_eip_id': globalEipId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询全域弹性公网IP段详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showGlobalEipSegment(showGlobalEipSegmentRequest?: ShowGlobalEipSegmentRequest) {
            const options = {
                method: "GET",
                url: "/v3/{domain_id}/global-eip-segments/{global_eip_segment_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let globalEipSegmentId;
            
            let fields;

            if (showGlobalEipSegmentRequest !== null && showGlobalEipSegmentRequest !== undefined) {
                if (showGlobalEipSegmentRequest instanceof ShowGlobalEipSegmentRequest) {
                    globalEipSegmentId = showGlobalEipSegmentRequest.globalEipSegmentId;
                    fields = showGlobalEipSegmentRequest.fields;
                } else {
                    globalEipSegmentId = showGlobalEipSegmentRequest['global_eip_segment_id'];
                    fields = showGlobalEipSegmentRequest['fields'];
                }
            }

        
            if (globalEipSegmentId === null || globalEipSegmentId === undefined) {
            throw new RequiredError('globalEipSegmentId','Required parameter globalEipSegmentId was null or undefined when calling showGlobalEipSegment.');
            }
            if (fields !== null && fields !== undefined) {
                localVarQueryParameter['fields'] = fields;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'global_eip_segment_id': globalEipSegmentId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询全域弹性公网IP的标签
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showGlobalEipTags(showGlobalEipTagsRequest?: ShowGlobalEipTagsRequest) {
            const options = {
                method: "GET",
                url: "/v3/global-eip/{resource_id}/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let resourceId;

            if (showGlobalEipTagsRequest !== null && showGlobalEipTagsRequest !== undefined) {
                if (showGlobalEipTagsRequest instanceof ShowGlobalEipTagsRequest) {
                    resourceId = showGlobalEipTagsRequest.resourceId;
                } else {
                    resourceId = showGlobalEipTagsRequest['resource_id'];
                }
            }

        
            if (resourceId === null || resourceId === undefined) {
            throw new RequiredError('resourceId','Required parameter resourceId was null or undefined when calling showGlobalEipTags.');
            }

            options.pathParams = { 'resource_id': resourceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新全域弹性公网IP信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateGlobalEip(updateGlobalEipRequest?: UpdateGlobalEipRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{domain_id}/global-eips/{global_eip_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let globalEipId;

            if (updateGlobalEipRequest !== null && updateGlobalEipRequest !== undefined) {
                if (updateGlobalEipRequest instanceof UpdateGlobalEipRequest) {
                    globalEipId = updateGlobalEipRequest.globalEipId;
                    body = updateGlobalEipRequest.body
                } else {
                    globalEipId = updateGlobalEipRequest['global_eip_id'];
                    body = updateGlobalEipRequest['body'];
                }
            }

        
            if (globalEipId === null || globalEipId === undefined) {
            throw new RequiredError('globalEipId','Required parameter globalEipId was null or undefined when calling updateGlobalEip.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'global_eip_id': globalEipId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新全域弹性公网IP段
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateGlobalEipSegment(updateGlobalEipSegmentRequest?: UpdateGlobalEipSegmentRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{domain_id}/global-eip-segments/{global_eip_segment_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let globalEipSegmentId;

            if (updateGlobalEipSegmentRequest !== null && updateGlobalEipSegmentRequest !== undefined) {
                if (updateGlobalEipSegmentRequest instanceof UpdateGlobalEipSegmentRequest) {
                    globalEipSegmentId = updateGlobalEipSegmentRequest.globalEipSegmentId;
                    body = updateGlobalEipSegmentRequest.body
                } else {
                    globalEipSegmentId = updateGlobalEipSegmentRequest['global_eip_segment_id'];
                    body = updateGlobalEipSegmentRequest['body'];
                }
            }

        
            if (globalEipSegmentId === null || globalEipSegmentId === undefined) {
            throw new RequiredError('globalEipSegmentId','Required parameter globalEipSegmentId was null or undefined when calling updateGlobalEipSegment.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'global_eip_segment_id': globalEipSegmentId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询Job列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listJobs(listJobsRequest?: ListJobsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{domain_id}/geip/jobs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let offset;
            
            let marker;
            
            let pageReverse;
            
            let fields;
            
            let sortKey;
            
            let sortDir;
            
            let id;
            
            let action;
            
            let status;

            if (listJobsRequest !== null && listJobsRequest !== undefined) {
                if (listJobsRequest instanceof ListJobsRequest) {
                    limit = listJobsRequest.limit;
                    offset = listJobsRequest.offset;
                    marker = listJobsRequest.marker;
                    pageReverse = listJobsRequest.pageReverse;
                    fields = listJobsRequest.fields;
                    sortKey = listJobsRequest.sortKey;
                    sortDir = listJobsRequest.sortDir;
                    id = listJobsRequest.id;
                    action = listJobsRequest.action;
                    status = listJobsRequest.status;
                } else {
                    limit = listJobsRequest['limit'];
                    offset = listJobsRequest['offset'];
                    marker = listJobsRequest['marker'];
                    pageReverse = listJobsRequest['page_reverse'];
                    fields = listJobsRequest['fields'];
                    sortKey = listJobsRequest['sort_key'];
                    sortDir = listJobsRequest['sort_dir'];
                    id = listJobsRequest['id'];
                    action = listJobsRequest['action'];
                    status = listJobsRequest['status'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (pageReverse !== null && pageReverse !== undefined) {
                localVarQueryParameter['page_reverse'] = pageReverse;
            }
            if (fields !== null && fields !== undefined) {
                localVarQueryParameter['fields'] = fields;
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
            if (action !== null && action !== undefined) {
                localVarQueryParameter['action'] = action;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询Job详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showJobs(showJobsRequest?: ShowJobsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{domain_id}/geip/jobs/{job_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let jobId;
            
            let fields;

            if (showJobsRequest !== null && showJobsRequest !== undefined) {
                if (showJobsRequest instanceof ShowJobsRequest) {
                    jobId = showJobsRequest.jobId;
                    fields = showJobsRequest.fields;
                } else {
                    jobId = showJobsRequest['job_id'];
                    fields = showJobsRequest['fields'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling showJobs.');
            }
            if (fields !== null && fields !== undefined) {
                localVarQueryParameter['fields'] = fields;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 全域弹性公网IP支持绑定的Region限制
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSupportRegions(listSupportRegionsRequest?: ListSupportRegionsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{domain_id}/geip/support-regions",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let offset;
            
            let marker;
            
            let pageReverse;
            
            let fields;
            
            let sortKey;
            
            let sortDir;
            
            let id;
            
            let instanceType;
            
            let publicBorderGroup;
            
            let accessSite;
            
            let regionId;
            
            let remoteEndpoint;
            
            let status;

            if (listSupportRegionsRequest !== null && listSupportRegionsRequest !== undefined) {
                if (listSupportRegionsRequest instanceof ListSupportRegionsRequest) {
                    limit = listSupportRegionsRequest.limit;
                    offset = listSupportRegionsRequest.offset;
                    marker = listSupportRegionsRequest.marker;
                    pageReverse = listSupportRegionsRequest.pageReverse;
                    fields = listSupportRegionsRequest.fields;
                    sortKey = listSupportRegionsRequest.sortKey;
                    sortDir = listSupportRegionsRequest.sortDir;
                    id = listSupportRegionsRequest.id;
                    instanceType = listSupportRegionsRequest.instanceType;
                    publicBorderGroup = listSupportRegionsRequest.publicBorderGroup;
                    accessSite = listSupportRegionsRequest.accessSite;
                    regionId = listSupportRegionsRequest.regionId;
                    remoteEndpoint = listSupportRegionsRequest.remoteEndpoint;
                    status = listSupportRegionsRequest.status;
                } else {
                    limit = listSupportRegionsRequest['limit'];
                    offset = listSupportRegionsRequest['offset'];
                    marker = listSupportRegionsRequest['marker'];
                    pageReverse = listSupportRegionsRequest['page_reverse'];
                    fields = listSupportRegionsRequest['fields'];
                    sortKey = listSupportRegionsRequest['sort_key'];
                    sortDir = listSupportRegionsRequest['sort_dir'];
                    id = listSupportRegionsRequest['id'];
                    instanceType = listSupportRegionsRequest['instance_type'];
                    publicBorderGroup = listSupportRegionsRequest['public_border_group'];
                    accessSite = listSupportRegionsRequest['access_site'];
                    regionId = listSupportRegionsRequest['region_id'];
                    remoteEndpoint = listSupportRegionsRequest['remote_endpoint'];
                    status = listSupportRegionsRequest['status'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (pageReverse !== null && pageReverse !== undefined) {
                localVarQueryParameter['page_reverse'] = pageReverse;
            }
            if (fields !== null && fields !== undefined) {
                localVarQueryParameter['fields'] = fields;
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
            if (instanceType !== null && instanceType !== undefined) {
                localVarQueryParameter['instance_type'] = instanceType;
            }
            if (publicBorderGroup !== null && publicBorderGroup !== undefined) {
                localVarQueryParameter['public_border_group'] = publicBorderGroup;
            }
            if (accessSite !== null && accessSite !== undefined) {
                localVarQueryParameter['access_site'] = accessSite;
            }
            if (regionId !== null && regionId !== undefined) {
                localVarQueryParameter['region_id'] = regionId;
            }
            if (remoteEndpoint !== null && remoteEndpoint !== undefined) {
                localVarQueryParameter['remote_endpoint'] = remoteEndpoint;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * console通过此接口获取指定pop点的全域弹性公网IP允许绑定的region实例信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTenantGeipSupportInstances(listTenantGeipSupportInstancesRequest?: ListTenantGeipSupportInstancesRequest) {
            const options = {
                method: "GET",
                url: "/v3/{domain_id}/global-eips/support-instances/{access_site}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let accessSite;
            
            let fields;

            if (listTenantGeipSupportInstancesRequest !== null && listTenantGeipSupportInstancesRequest !== undefined) {
                if (listTenantGeipSupportInstancesRequest instanceof ListTenantGeipSupportInstancesRequest) {
                    accessSite = listTenantGeipSupportInstancesRequest.accessSite;
                    fields = listTenantGeipSupportInstancesRequest.fields;
                } else {
                    accessSite = listTenantGeipSupportInstancesRequest['access_site'];
                    fields = listTenantGeipSupportInstancesRequest['fields'];
                }
            }

        
            if (accessSite === null || accessSite === undefined) {
            throw new RequiredError('accessSite','Required parameter accessSite was null or undefined when calling listTenantGeipSupportInstances.');
            }
            if (fields !== null && fields !== undefined) {
                localVarQueryParameter['fields'] = fields;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'access_site': accessSite, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
    }
};

function newClient(client: HcClient): GeipClient {
    return new GeipClient(client);
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