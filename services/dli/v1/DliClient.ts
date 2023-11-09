import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { AssociateConnectionQueueReq } from './model/AssociateConnectionQueueReq';
import { AssociateConnectionQueueRequest } from './model/AssociateConnectionQueueRequest';
import { AssociateConnectionQueueResponse } from './model/AssociateConnectionQueueResponse';
import { AssociateQueueToElasticResourcePoolRequest } from './model/AssociateQueueToElasticResourcePoolRequest';
import { AssociateQueueToElasticResourcePoolRequestBody } from './model/AssociateQueueToElasticResourcePoolRequestBody';
import { AssociateQueueToElasticResourcePoolResponse } from './model/AssociateQueueToElasticResourcePoolResponse';
import { AuthInfos } from './model/AuthInfos';
import { AuthorizeResourceRequest } from './model/AuthorizeResourceRequest';
import { AuthorizeResourceRequestBody } from './model/AuthorizeResourceRequestBody';
import { AuthorizeResourceResponse } from './model/AuthorizeResourceResponse';
import { AvailableQueueInfo } from './model/AvailableQueueInfo';
import { BatchDeleteFlinkJobsRequest } from './model/BatchDeleteFlinkJobsRequest';
import { BatchDeleteFlinkJobsRequestBody } from './model/BatchDeleteFlinkJobsRequestBody';
import { BatchDeleteFlinkJobsResponse } from './model/BatchDeleteFlinkJobsResponse';
import { BatchDeleteQueuePlansRequest } from './model/BatchDeleteQueuePlansRequest';
import { BatchDeleteQueuePlansResponse } from './model/BatchDeleteQueuePlansResponse';
import { BatchJobInfo } from './model/BatchJobInfo';
import { BatchRunFlinkJobsRequest } from './model/BatchRunFlinkJobsRequest';
import { BatchRunFlinkJobsRequestBody } from './model/BatchRunFlinkJobsRequestBody';
import { BatchRunFlinkJobsResponse } from './model/BatchRunFlinkJobsResponse';
import { CancelBatchJobRequest } from './model/CancelBatchJobRequest';
import { CancelBatchJobResponse } from './model/CancelBatchJobResponse';
import { CancelSqlJobRequest } from './model/CancelSqlJobRequest';
import { CancelSqlJobResponse } from './model/CancelSqlJobResponse';
import { ChangeAuthorizationRequest } from './model/ChangeAuthorizationRequest';
import { ChangeAuthorizationResponse } from './model/ChangeAuthorizationResponse';
import { ChangeFlinkJobStatusReportRequest } from './model/ChangeFlinkJobStatusReportRequest';
import { ChangeFlinkJobStatusReportResponse } from './model/ChangeFlinkJobStatusReportResponse';
import { ChangeQueuePlanRequest } from './model/ChangeQueuePlanRequest';
import { ChangeQueuePlanResponse } from './model/ChangeQueuePlanResponse';
import { CheckConnectionRequest } from './model/CheckConnectionRequest';
import { CheckConnectionResponse } from './model/CheckConnectionResponse';
import { CheckSqlRequest } from './model/CheckSqlRequest';
import { CheckSqlRequestBody } from './model/CheckSqlRequestBody';
import { CheckSqlResponse } from './model/CheckSqlResponse';
import { CommonResp } from './model/CommonResp';
import { CreateAgencyRequest } from './model/CreateAgencyRequest';
import { CreateAuthInfoReq } from './model/CreateAuthInfoReq';
import { CreateAuthInfoRequest } from './model/CreateAuthInfoRequest';
import { CreateAuthInfoResponse } from './model/CreateAuthInfoResponse';
import { CreateBatchJobRequest } from './model/CreateBatchJobRequest';
import { CreateBatchJobResponse } from './model/CreateBatchJobResponse';
import { CreateDatabaseRequest } from './model/CreateDatabaseRequest';
import { CreateDatabaseRequestBody } from './model/CreateDatabaseRequestBody';
import { CreateDatabaseResponse } from './model/CreateDatabaseResponse';
import { CreateDatasourceConnectionReq } from './model/CreateDatasourceConnectionReq';
import { CreateDatasourceConnectionRequest } from './model/CreateDatasourceConnectionRequest';
import { CreateDatasourceConnectionResponse } from './model/CreateDatasourceConnectionResponse';
import { CreateDliAgencyRequest } from './model/CreateDliAgencyRequest';
import { CreateDliAgencyResponse } from './model/CreateDliAgencyResponse';
import { CreateElasticResourcePoolRequest } from './model/CreateElasticResourcePoolRequest';
import { CreateElasticResourcePoolRequestBody } from './model/CreateElasticResourcePoolRequestBody';
import { CreateElasticResourcePoolResponse } from './model/CreateElasticResourcePoolResponse';
import { CreateEnhancedConnectionRequest } from './model/CreateEnhancedConnectionRequest';
import { CreateEnhancedConnectionResponse } from './model/CreateEnhancedConnectionResponse';
import { CreateEnhancedConnectionRoutesRequest } from './model/CreateEnhancedConnectionRoutesRequest';
import { CreateEnhancedConnectionRoutesResponse } from './model/CreateEnhancedConnectionRoutesResponse';
import { CreateEnhancedConnectionsReq } from './model/CreateEnhancedConnectionsReq';
import { CreateFlinkJarRequest } from './model/CreateFlinkJarRequest';
import { CreateFlinkJarRequestBody } from './model/CreateFlinkJarRequestBody';
import { CreateFlinkJarResponse } from './model/CreateFlinkJarResponse';
import { CreateFlinkSqlJobRequest } from './model/CreateFlinkSqlJobRequest';
import { CreateFlinkSqlJobRequestBody } from './model/CreateFlinkSqlJobRequestBody';
import { CreateFlinkSqlJobResponse } from './model/CreateFlinkSqlJobResponse';
import { CreateFlinkTemplateRequest } from './model/CreateFlinkTemplateRequest';
import { CreateFlinkTemplateRequestBody } from './model/CreateFlinkTemplateRequestBody';
import { CreateFlinkTemplateResponse } from './model/CreateFlinkTemplateResponse';
import { CreateGlobalValueReq } from './model/CreateGlobalValueReq';
import { CreateGlobalValueRequest } from './model/CreateGlobalValueRequest';
import { CreateGlobalValueResponse } from './model/CreateGlobalValueResponse';
import { CreateIefMessageChannelReq } from './model/CreateIefMessageChannelReq';
import { CreateIefMessageChannelRequest } from './model/CreateIefMessageChannelRequest';
import { CreateIefMessageChannelResponse } from './model/CreateIefMessageChannelResponse';
import { CreateIefSystemEventsRequest } from './model/CreateIefSystemEventsRequest';
import { CreateIefSystemEventsResponse } from './model/CreateIefSystemEventsResponse';
import { CreateJobRespJob } from './model/CreateJobRespJob';
import { CreateJobTemplatesRequest } from './model/CreateJobTemplatesRequest';
import { CreateJobTemplatesRequestBody } from './model/CreateJobTemplatesRequestBody';
import { CreateJobTemplatesResponse } from './model/CreateJobTemplatesResponse';
import { CreateQueuePlanRequest } from './model/CreateQueuePlanRequest';
import { CreateQueuePlanResponse } from './model/CreateQueuePlanResponse';
import { CreateQueuePropertyRequest } from './model/CreateQueuePropertyRequest';
import { CreateQueuePropertyResponse } from './model/CreateQueuePropertyResponse';
import { CreateQueueReq } from './model/CreateQueueReq';
import { CreateQueueRequest } from './model/CreateQueueRequest';
import { CreateQueueResponse } from './model/CreateQueueResponse';
import { CreateRouteRequestBody } from './model/CreateRouteRequestBody';
import { CreateSessionReqGroup } from './model/CreateSessionReqGroup';
import { CreateSessionReqResource } from './model/CreateSessionReqResource';
import { CreateSqlJobRequest } from './model/CreateSqlJobRequest';
import { CreateSqlJobRequestBody } from './model/CreateSqlJobRequestBody';
import { CreateSqlJobResponse } from './model/CreateSqlJobResponse';
import { CreateSqlTemplatesRequest } from './model/CreateSqlTemplatesRequest';
import { CreateSqlTemplatesRequestBody } from './model/CreateSqlTemplatesRequestBody';
import { CreateSqlTemplatesResponse } from './model/CreateSqlTemplatesResponse';
import { CreateStreamGraphRequest } from './model/CreateStreamGraphRequest';
import { CreateStreamGraphResponse } from './model/CreateStreamGraphResponse';
import { CreateTableReq } from './model/CreateTableReq';
import { CreateTableReqColumn } from './model/CreateTableReqColumn';
import { CreateTableRequest } from './model/CreateTableRequest';
import { CreateTableResponse } from './model/CreateTableResponse';
import { Database } from './model/Database';
import { DeleteAuthInfoRequest } from './model/DeleteAuthInfoRequest';
import { DeleteAuthInfoResponse } from './model/DeleteAuthInfoResponse';
import { DeleteDatabaseRequest } from './model/DeleteDatabaseRequest';
import { DeleteDatabaseResponse } from './model/DeleteDatabaseResponse';
import { DeleteDatasourceConnectionRequest } from './model/DeleteDatasourceConnectionRequest';
import { DeleteDatasourceConnectionResponse } from './model/DeleteDatasourceConnectionResponse';
import { DeleteElasticResourcePoolRequest } from './model/DeleteElasticResourcePoolRequest';
import { DeleteElasticResourcePoolResponse } from './model/DeleteElasticResourcePoolResponse';
import { DeleteEnhancedConnectionRequest } from './model/DeleteEnhancedConnectionRequest';
import { DeleteEnhancedConnectionResponse } from './model/DeleteEnhancedConnectionResponse';
import { DeleteEnhancedConnectionRoutesRequest } from './model/DeleteEnhancedConnectionRoutesRequest';
import { DeleteEnhancedConnectionRoutesResponse } from './model/DeleteEnhancedConnectionRoutesResponse';
import { DeleteFlinkJobRequest } from './model/DeleteFlinkJobRequest';
import { DeleteFlinkJobResponse } from './model/DeleteFlinkJobResponse';
import { DeleteFlinkTemplateRequest } from './model/DeleteFlinkTemplateRequest';
import { DeleteFlinkTemplateResponse } from './model/DeleteFlinkTemplateResponse';
import { DeleteGlobalValueRequest } from './model/DeleteGlobalValueRequest';
import { DeleteGlobalValueResponse } from './model/DeleteGlobalValueResponse';
import { DeleteQueuePlanRequest } from './model/DeleteQueuePlanRequest';
import { DeleteQueuePlanResponse } from './model/DeleteQueuePlanResponse';
import { DeleteQueuePropertiesRequestBody } from './model/DeleteQueuePropertiesRequestBody';
import { DeleteQueuePropertyRequest } from './model/DeleteQueuePropertyRequest';
import { DeleteQueuePropertyResponse } from './model/DeleteQueuePropertyResponse';
import { DeleteQueueRequest } from './model/DeleteQueueRequest';
import { DeleteQueueResponse } from './model/DeleteQueueResponse';
import { DeleteResourceRequest } from './model/DeleteResourceRequest';
import { DeleteResourceResponse } from './model/DeleteResourceResponse';
import { DeleteSqlTemplatesRequest } from './model/DeleteSqlTemplatesRequest';
import { DeleteSqlTemplatesRequestBody } from './model/DeleteSqlTemplatesRequestBody';
import { DeleteSqlTemplatesResponse } from './model/DeleteSqlTemplatesResponse';
import { DeleteTableRequest } from './model/DeleteTableRequest';
import { DeleteTableResponse } from './model/DeleteTableResponse';
import { DeleteTemplateRespTemplate } from './model/DeleteTemplateRespTemplate';
import { DisassociateConnectionQueueReq } from './model/DisassociateConnectionQueueReq';
import { DisassociateConnectionQueueRequest } from './model/DisassociateConnectionQueueRequest';
import { DisassociateConnectionQueueResponse } from './model/DisassociateConnectionQueueResponse';
import { ElasticResourcePoolsResponse } from './model/ElasticResourcePoolsResponse';
import { EnhancedConnectionResourceInfo } from './model/EnhancedConnectionResourceInfo';
import { EnhancedConnectionsHost } from './model/EnhancedConnectionsHost';
import { ExportFlinkJobRequest } from './model/ExportFlinkJobRequest';
import { ExportFlinkJobRequestBody } from './model/ExportFlinkJobRequestBody';
import { ExportFlinkJobResponse } from './model/ExportFlinkJobResponse';
import { ExportSqlJobResultRequest } from './model/ExportSqlJobResultRequest';
import { ExportSqlJobResultResponse } from './model/ExportSqlJobResultResponse';
import { ExportSqlResultRequestBody } from './model/ExportSqlResultRequestBody';
import { ExportTableRequest } from './model/ExportTableRequest';
import { ExportTableRequestBody } from './model/ExportTableRequestBody';
import { ExportTableResponse } from './model/ExportTableResponse';
import { FlinkJobConfig } from './model/FlinkJobConfig';
import { FlinkJobDetail } from './model/FlinkJobDetail';
import { FlinkJobInfo } from './model/FlinkJobInfo';
import { FlinkJobList } from './model/FlinkJobList';
import { FlinkTemplate } from './model/FlinkTemplate';
import { FlinkTemplateDetail } from './model/FlinkTemplateDetail';
import { FlinkTemplateList } from './model/FlinkTemplateList';
import { GenStreamGraphReq } from './model/GenStreamGraphReq';
import { GrantDataPermissionReq } from './model/GrantDataPermissionReq';
import { GrantDataPermissionRespPrivilege } from './model/GrantDataPermissionRespPrivilege';
import { GrantQueuePermissionReq } from './model/GrantQueuePermissionReq';
import { IefEvents } from './model/IefEvents';
import { IefFlinkJobMessagesReq } from './model/IefFlinkJobMessagesReq';
import { IefFlinkJobStatusReportReq } from './model/IefFlinkJobStatusReportReq';
import { IefSystemEventsReq } from './model/IefSystemEventsReq';
import { ImportFlinkJobRequest } from './model/ImportFlinkJobRequest';
import { ImportFlinkJobRequestBody } from './model/ImportFlinkJobRequestBody';
import { ImportFlinkJobResponse } from './model/ImportFlinkJobResponse';
import { ImportTableRequest } from './model/ImportTableRequest';
import { ImportTableRequestBody } from './model/ImportTableRequestBody';
import { ImportTableResponse } from './model/ImportTableResponse';
import { InsertQueuePropertyRequestBody } from './model/InsertQueuePropertyRequestBody';
import { InsertQueuePropertyRequestBodyProperties } from './model/InsertQueuePropertyRequestBodyProperties';
import { JobMapInfo } from './model/JobMapInfo';
import { JobTemplateInfo } from './model/JobTemplateInfo';
import { Jobs } from './model/Jobs';
import { ListAllTablesRequest } from './model/ListAllTablesRequest';
import { ListAllTablesResponse } from './model/ListAllTablesResponse';
import { ListAuthInfoRequest } from './model/ListAuthInfoRequest';
import { ListAuthInfoResponse } from './model/ListAuthInfoResponse';
import { ListBatchesRequest } from './model/ListBatchesRequest';
import { ListBatchesResponse } from './model/ListBatchesResponse';
import { ListDatabaseUsersRequest } from './model/ListDatabaseUsersRequest';
import { ListDatabaseUsersResponse } from './model/ListDatabaseUsersResponse';
import { ListDatabasesRequest } from './model/ListDatabasesRequest';
import { ListDatabasesResponse } from './model/ListDatabasesResponse';
import { ListDatasourceConnectionsRequest } from './model/ListDatasourceConnectionsRequest';
import { ListDatasourceConnectionsResponse } from './model/ListDatasourceConnectionsResponse';
import { ListElasticResourcePoolQueuesRequest } from './model/ListElasticResourcePoolQueuesRequest';
import { ListElasticResourcePoolQueuesResponse } from './model/ListElasticResourcePoolQueuesResponse';
import { ListElasticResourcePoolScaleRecordsRequest } from './model/ListElasticResourcePoolScaleRecordsRequest';
import { ListElasticResourcePoolScaleRecordsResponse } from './model/ListElasticResourcePoolScaleRecordsResponse';
import { ListElasticResourcePoolsRequest } from './model/ListElasticResourcePoolsRequest';
import { ListElasticResourcePoolsResponse } from './model/ListElasticResourcePoolsResponse';
import { ListEnhancedConnectionsDetail } from './model/ListEnhancedConnectionsDetail';
import { ListEnhancedConnectionsRequest } from './model/ListEnhancedConnectionsRequest';
import { ListEnhancedConnectionsResponse } from './model/ListEnhancedConnectionsResponse';
import { ListFlinkJobsRequest } from './model/ListFlinkJobsRequest';
import { ListFlinkJobsResponse } from './model/ListFlinkJobsResponse';
import { ListFlinkTemplatesRequest } from './model/ListFlinkTemplatesRequest';
import { ListFlinkTemplatesResponse } from './model/ListFlinkTemplatesResponse';
import { ListGlobalValue } from './model/ListGlobalValue';
import { ListGlobalValuesRequest } from './model/ListGlobalValuesRequest';
import { ListGlobalValuesResponse } from './model/ListGlobalValuesResponse';
import { ListGroupPackagesResource } from './model/ListGroupPackagesResource';
import { ListJobTemplatesRequest } from './model/ListJobTemplatesRequest';
import { ListJobTemplatesResponse } from './model/ListJobTemplatesResponse';
import { ListJobsJobs } from './model/ListJobsJobs';
import { ListQueuePlansRequest } from './model/ListQueuePlansRequest';
import { ListQueuePlansResponse } from './model/ListQueuePlansResponse';
import { ListQueuePropertyRequest } from './model/ListQueuePropertyRequest';
import { ListQueuePropertyRespProperties } from './model/ListQueuePropertyRespProperties';
import { ListQueuePropertyResponse } from './model/ListQueuePropertyResponse';
import { ListQueueUsersRequest } from './model/ListQueueUsersRequest';
import { ListQueueUsersResponse } from './model/ListQueueUsersResponse';
import { ListQueuesRequest } from './model/ListQueuesRequest';
import { ListQueuesResponse } from './model/ListQueuesResponse';
import { ListResourcePackagesRespMoudle } from './model/ListResourcePackagesRespMoudle';
import { ListResourcesRequest } from './model/ListResourcesRequest';
import { ListResourcesResponse } from './model/ListResourcesResponse';
import { ListSqlJobsRequest } from './model/ListSqlJobsRequest';
import { ListSqlJobsResponse } from './model/ListSqlJobsResponse';
import { ListTablePrivilegesRequest } from './model/ListTablePrivilegesRequest';
import { ListTablePrivilegesResponse } from './model/ListTablePrivilegesResponse';
import { ListTableUsersRequest } from './model/ListTableUsersRequest';
import { ListTableUsersResponse } from './model/ListTableUsersResponse';
import { ObsBuckets } from './model/ObsBuckets';
import { PartitionInfos } from './model/PartitionInfos';
import { Partitions } from './model/Partitions';
import { PreviewJobResultRequest } from './model/PreviewJobResultRequest';
import { PreviewJobResultResponse } from './model/PreviewJobResultResponse';
import { Privilege } from './model/Privilege';
import { PrivilegesInfo } from './model/PrivilegesInfo';
import { ProjectPrivilege } from './model/ProjectPrivilege';
import { QueueDetails } from './model/QueueDetails';
import { QueueInfo } from './model/QueueInfo';
import { QueuePlanEntity } from './model/QueuePlanEntity';
import { QueuePlanIds } from './model/QueuePlanIds';
import { QueueScalingPoliciesResponse } from './model/QueueScalingPoliciesResponse';
import { QueueScalingPolicyInfo } from './model/QueueScalingPolicyInfo';
import { RegisterAuthorizedQueueRequest } from './model/RegisterAuthorizedQueueRequest';
import { RegisterAuthorizedQueueResponse } from './model/RegisterAuthorizedQueueResponse';
import { RegisterBucketRequest } from './model/RegisterBucketRequest';
import { RegisterBucketResponse } from './model/RegisterBucketResponse';
import { RunIefJobActionCallBackRequest } from './model/RunIefJobActionCallBackRequest';
import { RunIefJobActionCallBackResponse } from './model/RunIefJobActionCallBackResponse';
import { RunQueueActionReq } from './model/RunQueueActionReq';
import { RunQueueActionRequest } from './model/RunQueueActionRequest';
import { RunQueueActionResponse } from './model/RunQueueActionResponse';
import { SetQueuePlanReq } from './model/SetQueuePlanReq';
import { ShowBatchInfoRequest } from './model/ShowBatchInfoRequest';
import { ShowBatchInfoResponse } from './model/ShowBatchInfoResponse';
import { ShowBatchJobDetailResp } from './model/ShowBatchJobDetailResp';
import { ShowBatchLogRequest } from './model/ShowBatchLogRequest';
import { ShowBatchLogResponse } from './model/ShowBatchLogResponse';
import { ShowBatchStateRequest } from './model/ShowBatchStateRequest';
import { ShowBatchStateResponse } from './model/ShowBatchStateResponse';
import { ShowDatabaseUsersPrivilege } from './model/ShowDatabaseUsersPrivilege';
import { ShowDatasourceConnectionRequest } from './model/ShowDatasourceConnectionRequest';
import { ShowDatasourceConnectionResp } from './model/ShowDatasourceConnectionResp';
import { ShowDatasourceConnectionResponse } from './model/ShowDatasourceConnectionResponse';
import { ShowDescribeTableRequest } from './model/ShowDescribeTableRequest';
import { ShowDescribeTableResponse } from './model/ShowDescribeTableResponse';
import { ShowDliAgencyRequest } from './model/ShowDliAgencyRequest';
import { ShowDliAgencyResponse } from './model/ShowDliAgencyResponse';
import { ShowEnhancedConnectionRequest } from './model/ShowEnhancedConnectionRequest';
import { ShowEnhancedConnectionResponse } from './model/ShowEnhancedConnectionResponse';
import { ShowEnhancedPrivilegeRequest } from './model/ShowEnhancedPrivilegeRequest';
import { ShowEnhancedPrivilegeResponse } from './model/ShowEnhancedPrivilegeResponse';
import { ShowFlinkExecuteGraphRequest } from './model/ShowFlinkExecuteGraphRequest';
import { ShowFlinkExecuteGraphResponse } from './model/ShowFlinkExecuteGraphResponse';
import { ShowFlinkJobRequest } from './model/ShowFlinkJobRequest';
import { ShowFlinkJobResponse } from './model/ShowFlinkJobResponse';
import { ShowFlinkMetricRequest } from './model/ShowFlinkMetricRequest';
import { ShowFlinkMetricResponse } from './model/ShowFlinkMetricResponse';
import { ShowJobMonitorInfoReq } from './model/ShowJobMonitorInfoReq';
import { ShowJobMonitorInfoRespPayload } from './model/ShowJobMonitorInfoRespPayload';
import { ShowJobMonitorInfoRespPayloadJobs } from './model/ShowJobMonitorInfoRespPayloadJobs';
import { ShowJobMonitorInfoRespPayloadJobsMetrics } from './model/ShowJobMonitorInfoRespPayloadJobsMetrics';
import { ShowJobMonitorInfoRespPayloadJobsMetricsSources } from './model/ShowJobMonitorInfoRespPayloadJobsMetricsSources';
import { ShowJobProgressRequest } from './model/ShowJobProgressRequest';
import { ShowJobProgressResponse } from './model/ShowJobProgressResponse';
import { ShowJobTemplateRequest } from './model/ShowJobTemplateRequest';
import { ShowJobTemplateResponse } from './model/ShowJobTemplateResponse';
import { ShowNodeConnectivityRequest } from './model/ShowNodeConnectivityRequest';
import { ShowNodeConnectivityResponse } from './model/ShowNodeConnectivityResponse';
import { ShowObjectUserRequest } from './model/ShowObjectUserRequest';
import { ShowObjectUserResponse } from './model/ShowObjectUserResponse';
import { ShowPartitionsRequest } from './model/ShowPartitionsRequest';
import { ShowPartitionsResponse } from './model/ShowPartitionsResponse';
import { ShowQueueDetailRequest } from './model/ShowQueueDetailRequest';
import { ShowQueueDetailResponse } from './model/ShowQueueDetailResponse';
import { ShowResourceInfoRequest } from './model/ShowResourceInfoRequest';
import { ShowResourceInfoResponse } from './model/ShowResourceInfoResponse';
import { ShowSqlJobDetailRequest } from './model/ShowSqlJobDetailRequest';
import { ShowSqlJobDetailResponse } from './model/ShowSqlJobDetailResponse';
import { ShowSqlJobStatusRequest } from './model/ShowSqlJobStatusRequest';
import { ShowSqlJobStatusResponse } from './model/ShowSqlJobStatusResponse';
import { ShowSqlSampleTemplatesRequest } from './model/ShowSqlSampleTemplatesRequest';
import { ShowSqlSampleTemplatesResponse } from './model/ShowSqlSampleTemplatesResponse';
import { ShowSqlTemplatesRequest } from './model/ShowSqlTemplatesRequest';
import { ShowSqlTemplatesResponse } from './model/ShowSqlTemplatesResponse';
import { ShowStreamJobListJobConfig } from './model/ShowStreamJobListJobConfig';
import { ShowTableContentRequest } from './model/ShowTableContentRequest';
import { ShowTableContentResponse } from './model/ShowTableContentResponse';
import { ShowTableUsersRespPrivilege } from './model/ShowTableUsersRespPrivilege';
import { SqlsResp } from './model/SqlsResp';
import { SqlsSampleResp } from './model/SqlsSampleResp';
import { State } from './model/State';
import { StopFlinkJobsRequest } from './model/StopFlinkJobsRequest';
import { StopFlinkJobsRequestBody } from './model/StopFlinkJobsRequestBody';
import { StopFlinkJobsResponse } from './model/StopFlinkJobsResponse';
import { StreamGraphInfo } from './model/StreamGraphInfo';
import { SubJobDatas } from './model/SubJobDatas';
import { Table } from './model/Table';
import { TableUserPermissionsRespPrivilege } from './model/TableUserPermissionsRespPrivilege';
import { TmsTag } from './model/TmsTag';
import { TmsTagEntity } from './model/TmsTagEntity';
import { UpdateAuthInfoRequest } from './model/UpdateAuthInfoRequest';
import { UpdateAuthInfoRequestBody } from './model/UpdateAuthInfoRequestBody';
import { UpdateAuthInfoResponse } from './model/UpdateAuthInfoResponse';
import { UpdateDatabaseOwnerRequest } from './model/UpdateDatabaseOwnerRequest';
import { UpdateDatabaseOwnerResponse } from './model/UpdateDatabaseOwnerResponse';
import { UpdateElasticResourcePoolQueueInfoRequest } from './model/UpdateElasticResourcePoolQueueInfoRequest';
import { UpdateElasticResourcePoolQueueInfoResponse } from './model/UpdateElasticResourcePoolQueueInfoResponse';
import { UpdateElasticResourcePoolQueueScalingPolicyInfo } from './model/UpdateElasticResourcePoolQueueScalingPolicyInfo';
import { UpdateElasticResourcePoolRequest } from './model/UpdateElasticResourcePoolRequest';
import { UpdateElasticResourcePoolRequestBody } from './model/UpdateElasticResourcePoolRequestBody';
import { UpdateElasticResourcePoolResponse } from './model/UpdateElasticResourcePoolResponse';
import { UpdateFlinkJarRequest } from './model/UpdateFlinkJarRequest';
import { UpdateFlinkJarRequestBody } from './model/UpdateFlinkJarRequestBody';
import { UpdateFlinkJarResponse } from './model/UpdateFlinkJarResponse';
import { UpdateFlinkSqlRequest } from './model/UpdateFlinkSqlRequest';
import { UpdateFlinkSqlRequestBody } from './model/UpdateFlinkSqlRequestBody';
import { UpdateFlinkSqlResponse } from './model/UpdateFlinkSqlResponse';
import { UpdateFlinkTemplateRequest } from './model/UpdateFlinkTemplateRequest';
import { UpdateFlinkTemplateRequestBody } from './model/UpdateFlinkTemplateRequestBody';
import { UpdateFlinkTemplateResponse } from './model/UpdateFlinkTemplateResponse';
import { UpdateGlobalValueReq } from './model/UpdateGlobalValueReq';
import { UpdateGlobalValueRequest } from './model/UpdateGlobalValueRequest';
import { UpdateGlobalValueResponse } from './model/UpdateGlobalValueResponse';
import { UpdateGroupOrResourceOwnerRequest } from './model/UpdateGroupOrResourceOwnerRequest';
import { UpdateGroupOrResourceOwnerResponse } from './model/UpdateGroupOrResourceOwnerResponse';
import { UpdateHostMassageReq } from './model/UpdateHostMassageReq';
import { UpdateHostMassageRequest } from './model/UpdateHostMassageRequest';
import { UpdateHostMassageResponse } from './model/UpdateHostMassageResponse';
import { UpdateJobRespJob } from './model/UpdateJobRespJob';
import { UpdateJobTemplatesRequest } from './model/UpdateJobTemplatesRequest';
import { UpdateJobTemplatesRequestBody } from './model/UpdateJobTemplatesRequestBody';
import { UpdateJobTemplatesResponse } from './model/UpdateJobTemplatesResponse';
import { UpdateOwnerRequestBody } from './model/UpdateOwnerRequestBody';
import { UpdateQueueCidrReq } from './model/UpdateQueueCidrReq';
import { UpdateQueueCidrRequest } from './model/UpdateQueueCidrRequest';
import { UpdateQueueCidrResponse } from './model/UpdateQueueCidrResponse';
import { UpdateQueuePropertyRequest } from './model/UpdateQueuePropertyRequest';
import { UpdateQueuePropertyRequestBody } from './model/UpdateQueuePropertyRequestBody';
import { UpdateQueuePropertyRequestBodyProperties } from './model/UpdateQueuePropertyRequestBodyProperties';
import { UpdateQueuePropertyResponse } from './model/UpdateQueuePropertyResponse';
import { UpdateResourceOwner } from './model/UpdateResourceOwner';
import { UpdateSqlTemplatesRequest } from './model/UpdateSqlTemplatesRequest';
import { UpdateSqlTemplatesRequestBody } from './model/UpdateSqlTemplatesRequestBody';
import { UpdateSqlTemplatesResponse } from './model/UpdateSqlTemplatesResponse';
import { UpdateTableOwnerRequest } from './model/UpdateTableOwnerRequest';
import { UpdateTableOwnerResponse } from './model/UpdateTableOwnerResponse';
import { UploadFilesRequest } from './model/UploadFilesRequest';
import { UploadFilesResponse } from './model/UploadFilesResponse';
import { UploadGroupPackageReq } from './model/UploadGroupPackageReq';
import { UploadJarsRequest } from './model/UploadJarsRequest';
import { UploadJarsResponse } from './model/UploadJarsResponse';
import { UploadPackageGroupDetailsResp } from './model/UploadPackageGroupDetailsResp';
import { UploadPackageGroupReq } from './model/UploadPackageGroupReq';
import { UploadPythonFilesRequest } from './model/UploadPythonFilesRequest';
import { UploadPythonFilesResponse } from './model/UploadPythonFilesResponse';
import { UploadResourcesRequest } from './model/UploadResourcesRequest';
import { UploadResourcesResponse } from './model/UploadResourcesResponse';
import { VerityConnectivityReq } from './model/VerityConnectivityReq';

export class DliClient {
    public static newBuilder(): ClientBuilder<DliClient> {
            return new ClientBuilder<DliClient>(newClient);
    }

    private hcClient: HcClient;
    public constructor(client: HcClient) {
        this.hcClient = client;
    }

    public getPath() {
        return __dirname;
    }


    /**
     * 该API用于创建作业模板。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建作业模板
     * @param {CreateJobTemplatesRequestBody} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createJobTemplates(createJobTemplatesRequest?: CreateJobTemplatesRequest): Promise<CreateJobTemplatesResponse> {
        const options = ParamCreater().createJobTemplates(createJobTemplatesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API用于存储指定的SQL语句，后续可以重复使用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 存储指定SQL语句
     * @param {CreateSqlTemplatesRequestBody} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createSqlTemplates(createSqlTemplatesRequest?: CreateSqlTemplatesRequest): Promise<CreateSqlTemplatesResponse> {
        const options = ParamCreater().createSqlTemplates(createSqlTemplatesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API用于批量删除SQL模板。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量删除SQL模板
     * @param {DeleteSqlTemplatesRequestBody} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteSqlTemplates(deleteSqlTemplatesRequest?: DeleteSqlTemplatesRequest): Promise<DeleteSqlTemplatesResponse> {
        const options = ParamCreater().deleteSqlTemplates(deleteSqlTemplatesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API用于查询作业模板列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询作业模板列表
     * @param {string} [type] 类型。
     * @param {string} [keyword] 模板名过滤关键字，模糊匹配，获取模板名含有该关键字的所有模板。
     * @param {number} [pageSize] 每页显示的最大结果行数，范围: [1, 100]。默认值为：50。
     * @param {number} [currentPage] 当前页码，默认为第一页。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listJobTemplates(listJobTemplatesRequest?: ListJobTemplatesRequest): Promise<ListJobTemplatesResponse> {
        const options = ParamCreater().listJobTemplates(listJobTemplatesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API用于获取作业模板。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取作业模板
     * @param {string} templateId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showJobTemplate(showJobTemplateRequest?: ShowJobTemplateRequest): Promise<ShowJobTemplateResponse> {
        const options = ParamCreater().showJobTemplate(showJobTemplateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API用于查询所有SQL样例模板。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询所有SQL样例模板
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showSqlSampleTemplates(showSqlSampleTemplatesRequest?: ShowSqlSampleTemplatesRequest): Promise<ShowSqlSampleTemplatesResponse> {
        const options = ParamCreater().showSqlSampleTemplates();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API用查看用户保存的所有SQL模板。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查看所有SQL模板
     * @param {string} [keyword] 用于过滤SQL模板的名字。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showSqlTemplates(showSqlTemplatesRequest?: ShowSqlTemplatesRequest): Promise<ShowSqlTemplatesResponse> {
        const options = ParamCreater().showSqlTemplates(showSqlTemplatesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API用于修改作业模板。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改作业模板
     * @param {string} templateId 
     * @param {UpdateJobTemplatesRequestBody} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateJobTemplates(updateJobTemplatesRequest?: UpdateJobTemplatesRequest): Promise<UpdateJobTemplatesResponse> {
        const options = ParamCreater().updateJobTemplates(updateJobTemplatesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API用于更新SQL模板。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新SQL模板
     * @param {string} sqlId 
     * @param {UpdateSqlTemplatesRequestBody} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateSqlTemplates(updateSqlTemplatesRequest?: UpdateSqlTemplatesRequest): Promise<UpdateSqlTemplatesResponse> {
        const options = ParamCreater().updateSqlTemplates(updateSqlTemplatesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API用于在已创建的增强型跨源中绑定队列。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 绑定队列
     * @param {string} connectionId 连接ID，用于标识跨源连接的UUID。
     * @param {AssociateConnectionQueueReq} body 需要使用跨源的队列名列表。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public associateConnectionQueue(associateConnectionQueueRequest?: AssociateConnectionQueueRequest): Promise<AssociateConnectionQueueResponse> {
        const options = ParamCreater().associateConnectionQueue(associateConnectionQueueRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 关联队列到弹性资源池
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 关联队列到弹性资源池
     * @param {string} elasticResourcePoolName 弹性资源池名称
     * @param {AssociateQueueToElasticResourcePoolRequestBody} body This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public associateQueueToElasticResourcePool(associateQueueToElasticResourcePoolRequest?: AssociateQueueToElasticResourcePoolRequest): Promise<AssociateQueueToElasticResourcePoolResponse> {
        const options = ParamCreater().associateQueueToElasticResourcePool(associateQueueToElasticResourcePoolRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API用于将DLI资源权限赋给、回收、更新指定的其他用户或项目。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 数据赋权（用户、项目）
     * @param {AuthorizeResourceRequestBody} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public authorizeResource(authorizeResourceRequest?: AuthorizeResourceRequest): Promise<AuthorizeResourceResponse> {
        const options = ParamCreater().authorizeResource(authorizeResourceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API用于批量删除队列定时扩缩容计划。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量删除队列定时扩缩容计划
     * @param {string} queueName 待删除定时扩缩计划的队列名称
     * @param {QueuePlanIds} body 待删除的队列扩缩容计划的ID列表。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeleteQueuePlans(batchDeleteQueuePlansRequest?: BatchDeleteQueuePlansRequest): Promise<BatchDeleteQueuePlansResponse> {
        const options = ParamCreater().batchDeleteQueuePlans(batchDeleteQueuePlansRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API用于将数据库或数据表的数据权限赋给指定的其他用户。
     * 说明：
     * 被赋权用户所在用户组的所属区域需具有Tenant Guest权限。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 数据赋权（用户）
     * @param {GrantDataPermissionReq} body 队列赋权的请求body体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public changeAuthorization(changeAuthorizationRequest?: ChangeAuthorizationRequest): Promise<ChangeAuthorizationResponse> {
        const options = ParamCreater().changeAuthorization(changeAuthorizationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API用于修改指定ID的队列定时扩缩容计划。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改队列定时扩缩容计划
     * @param {string} planId 待修改的队列扩缩容计划的ID
     * @param {string} queueName 待删除定时扩缩计划的队列名称
     * @param {SetQueuePlanReq} body 修改扩缩容计划请求body体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public changeQueuePlan(changeQueuePlanRequest?: ChangeQueuePlanRequest): Promise<ChangeQueuePlanResponse> {
        const options = ParamCreater().changeQueuePlan(changeQueuePlanRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建地址连通性请求API接口，往指定集群发送地址连通性测试请求，并将测试地址插入表内
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建地址连通性请求
     * @param {string} queueName 队列名称
     * @param {VerityConnectivityReq} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public checkConnection(checkConnectionRequest?: CheckConnectionRequest): Promise<CheckConnectionResponse> {
        const options = ParamCreater().checkConnection(checkConnectionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API用于创建跨源认证。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建跨源认证
     * @param {CreateAuthInfoReq} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createAuthInfo(createAuthInfoRequest?: CreateAuthInfoRequest): Promise<CreateAuthInfoResponse> {
        const options = ParamCreater().createAuthInfo(createAuthInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API用于创建与其他服务的经典型跨源连接。
     * 说明：
     * 如果需要了解Console界面的使用方法，可参考经典型跨源连接。
     * 系统default队列不支持创建跨源连接。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建经典型跨源连接
     * @param {CreateDatasourceConnectionReq} body 创建经典型跨源连接的请求body体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createDatasourceConnection(createDatasourceConnectionRequest?: CreateDatasourceConnectionRequest): Promise<CreateDatasourceConnectionResponse> {
        const options = ParamCreater().createDatasourceConnection(createDatasourceConnectionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建DLI委托
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建DLI委托
     * @param {CreateAgencyRequest} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createDliAgency(createDliAgencyRequest?: CreateDliAgencyRequest): Promise<CreateDliAgencyResponse> {
        const options = ParamCreater().createDliAgency(createDliAgencyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建弹性资源池
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建弹性资源池
     * @param {CreateElasticResourcePoolRequestBody} body This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createElasticResourcePool(createElasticResourcePoolRequest?: CreateElasticResourcePoolRequest): Promise<CreateElasticResourcePoolResponse> {
        const options = ParamCreater().createElasticResourcePool(createElasticResourcePoolRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API用于创建与其他服务的增强型跨源连接。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建增强型跨源连接
     * @param {CreateEnhancedConnectionsReq} body 创建增强型跨源连接的请求body体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createEnhancedConnection(createEnhancedConnectionRequest?: CreateEnhancedConnectionRequest): Promise<CreateEnhancedConnectionResponse> {
        const options = ParamCreater().createEnhancedConnection(createEnhancedConnectionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API用于创建跨源需要的路由。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建路由
     * @param {string} connectionId 连接ID，用于标识跨源连接的UUID。
     * @param {CreateRouteRequestBody} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createEnhancedConnectionRoutes(createEnhancedConnectionRoutesRequest?: CreateEnhancedConnectionRoutesRequest): Promise<CreateEnhancedConnectionRoutesResponse> {
        const options = ParamCreater().createEnhancedConnectionRoutes(createEnhancedConnectionRoutesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建全局变量。全局变量用于替换SQL作业中的敏感数据。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建DLI全局变量
     * @param {CreateGlobalValueReq} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createGlobalValue(createGlobalValueRequest?: CreateGlobalValueRequest): Promise<CreateGlobalValueResponse> {
        const options = ParamCreater().createGlobalValue(createGlobalValueRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API用于创建队列，该队列将会绑定用户指定的计算资源。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建队列
     * @param {CreateQueueReq} body 创建队列请求body体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createQueue(createQueueRequest?: CreateQueueRequest): Promise<CreateQueueResponse> {
        const options = ParamCreater().createQueue(createQueueRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建队列定时扩缩容计划接口，对指定的队列创建定时规格变更计划。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建队列定时扩缩容计划
     * @param {string} queueName 需要设置定时扩缩计划的队列名称，名称只能包含数字、英文字母和下划线，但不能是纯数字，且不能以下划线开头。
     * @param {SetQueuePlanReq} body 创建扩缩容计划请求body体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createQueuePlan(createQueuePlanRequest?: CreateQueuePlanRequest): Promise<CreateQueuePlanResponse> {
        const options = ParamCreater().createQueuePlan(createQueuePlanRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于增加队列属性, 一次可增加多个属性。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 新增队列属性
     * @param {string} queueName 队列名称
     * @param {InsertQueuePropertyRequestBody} body 待增加属性key及属性值
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createQueueProperty(createQueuePropertyRequest?: CreateQueuePropertyRequest): Promise<CreateQueuePropertyResponse> {
        const options = ParamCreater().createQueueProperty(createQueuePropertyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API用于删除跨源认证信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除跨源认证
     * @param {string} authInfoName 即将删除的认证信息名
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteAuthInfo(deleteAuthInfoRequest?: DeleteAuthInfoRequest): Promise<DeleteAuthInfoResponse> {
        const options = ParamCreater().deleteAuthInfo(deleteAuthInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API用于删除已创建的经典型跨源连接。
     * 说明：
     * 创建中的连接，无法删除。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除经典型跨源连接
     * @param {string} connectionId 连接ID，用于标识跨源连接的UUID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteDatasourceConnection(deleteDatasourceConnectionRequest?: DeleteDatasourceConnectionRequest): Promise<DeleteDatasourceConnectionResponse> {
        const options = ParamCreater().deleteDatasourceConnection(deleteDatasourceConnectionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除弹性资源池
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除弹性资源池
     * @param {string} elasticResourcePoolName 弹性资源池名称
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteElasticResourcePool(deleteElasticResourcePoolRequest?: DeleteElasticResourcePoolRequest): Promise<DeleteElasticResourcePoolResponse> {
        const options = ParamCreater().deleteElasticResourcePool(deleteElasticResourcePoolRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API用于删除已创建的增强型跨源连接。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除增强型跨源连接
     * @param {string} connectionId 连接ID，用于标识跨源连接的UUID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteEnhancedConnection(deleteEnhancedConnectionRequest?: DeleteEnhancedConnectionRequest): Promise<DeleteEnhancedConnectionResponse> {
        const options = ParamCreater().deleteEnhancedConnection(deleteEnhancedConnectionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API用于删除跨源需要的路由。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除路由
     * @param {string} connectionId 连接ID，用于标识跨源连接的UUID。
     * @param {string} name 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteEnhancedConnectionRoutes(deleteEnhancedConnectionRoutesRequest?: DeleteEnhancedConnectionRoutesRequest): Promise<DeleteEnhancedConnectionRoutesResponse> {
        const options = ParamCreater().deleteEnhancedConnectionRoutes(deleteEnhancedConnectionRoutesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除全局变量。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除DLI全局变量
     * @param {string} varName 全局变量名，名称只能包含数字、英文字母和下划线，但不能是纯数字，不能以下划线开头，且不能超过128字符
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteGlobalValue(deleteGlobalValueRequest?: DeleteGlobalValueRequest): Promise<DeleteGlobalValueResponse> {
        const options = ParamCreater().deleteGlobalValue(deleteGlobalValueRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API用于删除指定队列。
     * 说明：
     * 若指定队列正在执行任务，则不允许删除。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除队列
     * @param {string} queueName 指定删除的队列名称。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteQueue(deleteQueueRequest?: DeleteQueueRequest): Promise<DeleteQueueResponse> {
        const options = ParamCreater().deleteQueue(deleteQueueRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API用于删除指定ID的队列定时扩缩容计划。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 单个删除队列定时扩缩容计划
     * @param {number} planId 待删除的队列扩缩容计划的ID
     * @param {string} queueName 待删除定时扩缩计划的队列名称
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteQueuePlan(deleteQueuePlanRequest?: DeleteQueuePlanRequest): Promise<DeleteQueuePlanResponse> {
        const options = ParamCreater().deleteQueuePlan(deleteQueuePlanRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于删除队列的属性，一次可删除多个属性值。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除队列的属性
     * @param {string} queueName 队列名称
     * @param {DeleteQueuePropertiesRequestBody} body 待删除属性keys值 范围如下： computeEngine.maxInstance computeEngine.maxPrefetchInstance job.maxConcurrent
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteQueueProperty(deleteQueuePropertyRequest?: DeleteQueuePropertyRequest): Promise<DeleteQueuePropertyResponse> {
        const options = ParamCreater().deleteQueueProperty(deleteQueuePropertyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API用于删除某个project某个分组下的资源包
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除组内资源包
     * @param {string} resourceName 资源名。
     * @param {string} [group] 资源所在分组
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteResource(deleteResourceRequest?: DeleteResourceRequest): Promise<DeleteResourceResponse> {
        const options = ParamCreater().deleteResource(deleteResourceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API用于在增强型跨源中解绑已绑定的队列。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 解绑队列
     * @param {string} connectionId 连接ID，用于标识跨源连接的UUID。
     * @param {DisassociateConnectionQueueReq} body 需要使用跨源的队列名列表。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public disassociateConnectionQueue(disassociateConnectionQueueRequest?: DisassociateConnectionQueueRequest): Promise<DisassociateConnectionQueueResponse> {
        const options = ParamCreater().disassociateConnectionQueue(disassociateConnectionQueueRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API用于查询跨源认证信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取跨源认证列表
     * @param {string} [authInfoName] 认证信息名称
     * @param {number} [offset] 默认为0
     * @param {number} [limit] 默认为100
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAuthInfo(listAuthInfoRequest?: ListAuthInfoRequest): Promise<ListAuthInfoResponse> {
        const options = ParamCreater().listAuthInfo(listAuthInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API用于查询可以使用的指定队列的所有用户名称。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查看数据库的使用者
     * @param {string} databaseName 被查询的数据库名称。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDatabaseUsers(listDatabaseUsersRequest?: ListDatabaseUsersRequest): Promise<ListDatabaseUsersResponse> {
        const options = ParamCreater().listDatabaseUsers(listDatabaseUsersRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API用于查询该用户已创建的经典型跨源连接列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询经典型跨源连接列表
     * @param {string} [tags] 标签
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDatasourceConnections(listDatasourceConnectionsRequest?: ListDatasourceConnectionsRequest): Promise<ListDatasourceConnectionsResponse> {
        const options = ParamCreater().listDatasourceConnections(listDatasourceConnectionsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询弹性资源池所属队列
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询弹性资源池所属队列
     * @param {string} elasticResourcePoolName 弹性资源池名称
     * @param {number} [limit] 默认为100
     * @param {number} [offset] 默认为0
     * @param {string} [queueName] 可以根据queueName进行过滤
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listElasticResourcePoolQueues(listElasticResourcePoolQueuesRequest?: ListElasticResourcePoolQueuesRequest): Promise<ListElasticResourcePoolQueuesResponse> {
        const options = ParamCreater().listElasticResourcePoolQueues(listElasticResourcePoolQueuesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询当前弹性资源池扩缩容历史记录
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 弹性资源池扩缩容历史记录
     * @param {string} elasticResourcePoolName 弹性资源池名称
     * @param {number} [startTime] start_time用于查询扩缩容历史的开始时间，该时间点需大于当前时间点减30天，必须小于end_time 。时间格式为unix时间戳，单位：毫秒。 ①若start_time为空，则查询end_time前七天到end_time的数据（end_time最大不能大于当前时间30天）。 ②查询当前时间点前15天到当前时间点的数据（start_time和end_time同时为空）。
     * @param {number} [endTime] end_time用于查询扩缩容历史的结束时间，该时间点不能小于开始时间，不能大于当前时间。时间格式为unix时间戳，单位：毫秒。 ①若end_time为空，则查询start_time到当前时间点的数据。 ②查询当前时间点前15天到当前时间的数据（start_time和end_time同时为空）。
     * @param {'success' | 'fail'} [status] 弹性资源池扩缩容的状态
     * @param {number} [offset] 偏移量
     * @param {number} [limit] 当前分页条数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listElasticResourcePoolScaleRecords(listElasticResourcePoolScaleRecordsRequest?: ListElasticResourcePoolScaleRecordsRequest): Promise<ListElasticResourcePoolScaleRecordsResponse> {
        const options = ParamCreater().listElasticResourcePoolScaleRecords(listElasticResourcePoolScaleRecordsRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Auth-Token'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询所有弹性资源池
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询所有弹性资源池
     * @param {number} [limit] 默认为100
     * @param {string} [name] 通过弹性资源池名称进行模糊匹配
     * @param {number} [offset] 默认为0
     * @param {'AVAILABLE' | 'SCALING' | 'CREATING' | 'FAILED'} [status] 弹性资源池状态
     * @param {string} [tags] 查询根据标签进行过滤。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listElasticResourcePools(listElasticResourcePoolsRequest?: ListElasticResourcePoolsRequest): Promise<ListElasticResourcePoolsResponse> {
        const options = ParamCreater().listElasticResourcePools(listElasticResourcePoolsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API用于查询该用户已创建的增强型跨源连接列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询增强型跨源连接列表
     * @param {number} [limit] 查询最大连接个数，默认100。
     * @param {string} [name] 连接名。
     * @param {number} [offset] 查询结果偏移量，默认为0（连接以创建时间进行排序）
     * @param {string} [status] 连接状态，包括以下两种状态： ACTIVE：已激活 DELETED：已删除
     * @param {string} [tags] 标签
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listEnhancedConnections(listEnhancedConnectionsRequest?: ListEnhancedConnectionsRequest): Promise<ListEnhancedConnectionsResponse> {
        const options = ParamCreater().listEnhancedConnections(listEnhancedConnectionsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询全局变量列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询DLI全局变量列表
     * @param {number} [limit] 每页显示的返回信息的个数，默认值为“100”。
     * @param {number} [offset] 偏移量，默认值为“0”。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listGlobalValues(listGlobalValuesRequest?: ListGlobalValuesRequest): Promise<ListGlobalValuesResponse> {
        const options = ParamCreater().listGlobalValues(listGlobalValuesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查看队列定时扩缩容计划接口，列出指定队列定时规格变更计划。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查看队列定时扩缩容计划
     * @param {string} queueName 待查询定时扩缩计划的队列名称
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listQueuePlans(listQueuePlansRequest?: ListQueuePlansRequest): Promise<ListQueuePlansResponse> {
        const options = ParamCreater().listQueuePlans(listQueuePlansRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取队列配置的属性
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取队列属性
     * @param {string} queueName 队列名称
     * @param {number} [page] 列表当前页
     * @param {number} [pageSize] 每页显示条数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listQueueProperty(listQueuePropertyRequest?: ListQueuePropertyRequest): Promise<ListQueuePropertyResponse> {
        const options = ParamCreater().listQueueProperty(listQueuePropertyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API用于查询可以使用的指定队列的所有用户名称。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查看队列的使用者
     * @param {string} queueName 队列名称。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listQueueUsers(listQueueUsersRequest?: ListQueueUsersRequest): Promise<ListQueueUsersResponse> {
        const options = ParamCreater().listQueueUsers(listQueueUsersRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API用于列出该project下所有的队列。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询所有队列
     * @param {string} [queueType] 队列的类型,。有如下三种类型： sql general all 如果不指定，默认为sql。
     * @param {string} [tags] 查询根据标签进行过滤
     * @param {boolean} [withChargeInfo] 是否返回收费信息
     * @param {boolean} [withPriv] 是否返回权限信息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listQueues(listQueuesRequest?: ListQueuesRequest): Promise<ListQueuesResponse> {
        const options = ParamCreater().listQueues(listQueuesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API用于查看某个project下的所有资源，其中包含Group。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查看分组资源列表
     * @param {string} [kind] 
     * @param {string} [tags] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listResources(listResourcesRequest?: ListResourcesRequest): Promise<ListResourcesResponse> {
        const options = ParamCreater().listResources(listResourcesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API用于查询指定用户在表上的权限。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查看表的用户权限
     * @param {string} databaseName 被查询的数据库名称。
     * @param {string} tableName 被查询的表名称。
     * @param {string} userName 被查询的用户名称。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTablePrivileges(listTablePrivilegesRequest?: ListTablePrivilegesRequest): Promise<ListTablePrivilegesResponse> {
        const options = ParamCreater().listTablePrivileges(listTablePrivilegesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API用于查看有权访问指定表或表的列的所有用户。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查看表的使用者
     * @param {string} databaseName 被查询的数据库名称。
     * @param {string} tableName 被查询的表名称。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTableUsers(listTableUsersRequest?: ListTableUsersRequest): Promise<ListTableUsersResponse> {
        const options = ParamCreater().listTableUsers(listTableUsersRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API用于与其他用户共享指定的队列，可以给用户赋使用指定的队列的权限或者收回使用权限。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 队列赋权
     * @param {GrantQueuePermissionReq} body 队列赋权的请求body体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public registerAuthorizedQueue(registerAuthorizedQueueRequest?: RegisterAuthorizedQueueRequest): Promise<RegisterAuthorizedQueueResponse> {
        const options = ParamCreater().registerAuthorizedQueue(registerAuthorizedQueueRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该功能用于重新启动队列、扩容队列、缩容队列。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 重启/扩容/缩容队列
     * @param {string} queueName 
     * @param {RunQueueActionReq} body This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public runQueueAction(runQueueActionRequest?: RunQueueActionRequest): Promise<RunQueueActionResponse> {
        const options = ParamCreater().runQueueAction(runQueueActionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API用于查询该用户指定的已创建的经典型跨源连接。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询经典型跨源连接
     * @param {string} connectionId 连接ID，用于标识跨源连接的UUID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDatasourceConnection(showDatasourceConnectionRequest?: ShowDatasourceConnectionRequest): Promise<ShowDatasourceConnectionResponse> {
        const options = ParamCreater().showDatasourceConnection(showDatasourceConnectionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取dli委托信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取dli委托信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDliAgency(showDliAgencyRequest?: ShowDliAgencyRequest): Promise<ShowDliAgencyResponse> {
        const options = ParamCreater().showDliAgency();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API用于查询该用户指定的已创建的增强型跨源连接。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询增强型跨源连接
     * @param {string} connectionId 连接ID，用于标识跨源连接的UUID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showEnhancedConnection(showEnhancedConnectionRequest?: ShowEnhancedConnectionRequest): Promise<ShowEnhancedConnectionResponse> {
        const options = ParamCreater().showEnhancedConnection(showEnhancedConnectionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API用于查询增强型跨源连接授权的信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询增强型跨源授权信息
     * @param {string} connectionId 增强型跨源连接ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showEnhancedPrivilege(showEnhancedPrivilegeRequest?: ShowEnhancedPrivilegeRequest): Promise<ShowEnhancedPrivilegeResponse> {
        const options = ParamCreater().showEnhancedPrivilege(showEnhancedPrivilegeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API用于在连通性测试提交后查询连通性结果。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定地址连通性测试详情
     * @param {string} queueName 
     * @param {string} taskId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showNodeConnectivity(showNodeConnectivityRequest?: ShowNodeConnectivityRequest): Promise<ShowNodeConnectivityResponse> {
        const options = ParamCreater().showNodeConnectivity(showNodeConnectivityRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取对象赋权用户的权限信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查看赋权对象的用者权限信息
     * @param {string} modelObject 授权对象，和授权接口中的object对应 \&quot;jobs.flink.flink作业ID\&quot;，查询指定的作业。 \&quot;groups.程序包组名\&quot;，查询指定的程序包组。 \&quot;resources.程序包名\&quot;，查询指定程序包。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showObjectUser(showObjectUserRequest?: ShowObjectUserRequest): Promise<ShowObjectUserResponse> {
        const options = ParamCreater().showObjectUser(showObjectUserRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API用于列出该project下指定的队列详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询队列详情
     * @param {string} queueName 指定查询的队列名称。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showQueueDetail(showQueueDetailRequest?: ShowQueueDetailRequest): Promise<ShowQueueDetailResponse> {
        const options = ParamCreater().showQueueDetail(showQueueDetailRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API用于查看某个project某个分组下的具体资源信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查看组内资源包
     * @param {string} resourceName 资源名。
     * @param {string} [group] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showResourceInfo(showResourceInfoRequest?: ShowResourceInfoRequest): Promise<ShowResourceInfoResponse> {
        const options = ParamCreater().showResourceInfo(showResourceInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API用于更新跨源认证信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新跨源认证
     * @param {UpdateAuthInfoRequestBody} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateAuthInfo(updateAuthInfoRequest?: UpdateAuthInfoRequest): Promise<UpdateAuthInfoResponse> {
        const options = ParamCreater().updateAuthInfo(updateAuthInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改弹性资源池信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改弹性资源池信息
     * @param {string} elasticResourcePoolName 弹性资源池名称
     * @param {UpdateElasticResourcePoolRequestBody} [body] This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateElasticResourcePool(updateElasticResourcePoolRequest?: UpdateElasticResourcePoolRequest): Promise<UpdateElasticResourcePoolResponse> {
        const options = ParamCreater().updateElasticResourcePool(updateElasticResourcePoolRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 设置弹性资源池指定队列的扩缩容策略信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改弹性资源池关联的队列优先级
     * @param {string} elasticResourcePoolName 弹性资源池名称
     * @param {string} queueName 队列名称
     * @param {UpdateElasticResourcePoolQueueScalingPolicyInfo} body This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateElasticResourcePoolQueueInfo(updateElasticResourcePoolQueueInfoRequest?: UpdateElasticResourcePoolQueueInfoRequest): Promise<UpdateElasticResourcePoolQueueInfoResponse> {
        const options = ParamCreater().updateElasticResourcePoolQueueInfo(updateElasticResourcePoolQueueInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改全局变量。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改DLI全局变量
     * @param {string} varName 全局变量名，名称只能包含数字、英文字母和下划线，但不能是纯数字，不能以下划线开头，且不能超过128字符
     * @param {UpdateGlobalValueReq} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateGlobalValue(updateGlobalValueRequest?: UpdateGlobalValueRequest): Promise<UpdateGlobalValueResponse> {
        const options = ParamCreater().updateGlobalValue(updateGlobalValueRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 用于修改程序包的owner。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改组或者资源包拥有者
     * @param {UpdateResourceOwner} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateGroupOrResourceOwner(updateGroupOrResourceOwnerRequest?: UpdateGroupOrResourceOwnerRequest): Promise<UpdateGroupOrResourceOwnerResponse> {
        const options = ParamCreater().updateGroupOrResourceOwner(updateGroupOrResourceOwnerRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API用于在跨源中修改数据源主机信息，仅支持全量覆盖。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改增强型跨源主机信息
     * @param {string} connectionId 连接ID，用于标识跨源连接的UUID。
     * @param {UpdateHostMassageReq} body 修改主机信息的请求body体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateHostMassage(updateHostMassageRequest?: UpdateHostMassageRequest): Promise<UpdateHostMassageResponse> {
        const options = ParamCreater().updateHostMassage(updateHostMassageRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该功能用于修改包年包月队列网段。
     * 说明：
     * 如果待修改网段的队列中有正在提交或正在运行的作业，或者改队列已经绑定了增强型跨源，将不支持修改网段操作。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改队列网段
     * @param {string} queueName 指定删除的队列名称。
     * @param {UpdateQueueCidrReq} [body] 修改队列网段的请求body体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateQueueCidr(updateQueueCidrRequest?: UpdateQueueCidrRequest): Promise<UpdateQueueCidrResponse> {
        const options = ParamCreater().updateQueueCidr(updateQueueCidrRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新队列属性
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新队列属性
     * @param {string} queueName 队列名称
     * @param {UpdateQueuePropertyRequestBody} body 待更新队列属性
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateQueueProperty(updateQueuePropertyRequest?: UpdateQueuePropertyRequest): Promise<UpdateQueuePropertyResponse> {
        const options = ParamCreater().updateQueueProperty(updateQueuePropertyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API用于在project下上传file类型模块。
     * 说明： 上传同名file模块时，新模块将会覆盖旧模块。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 上传file类型分组资源
     * @param {UploadGroupPackageReq} body 上传jar类型分组资源请求body体。
     * @param {string} [USER_ID] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public uploadFiles(uploadFilesRequest?: UploadFilesRequest): Promise<UploadFilesResponse> {
        const options = ParamCreater().uploadFiles(uploadFilesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API用于在project下上传jar类型分组资源。
     * 说明：上传同名资源模块时，新模块将会覆盖旧模块。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 上传jar类型分组资源
     * @param {UploadGroupPackageReq} body 上传jar类型分组资源请求body体。
     * @param {string} [USER_ID] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public uploadJars(uploadJarsRequest?: UploadJarsRequest): Promise<UploadJarsResponse> {
        const options = ParamCreater().uploadJars(uploadJarsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API用于在project下的上传pyfile类型模块。
     * 说明： 上传同名pyfile类型模块时，新模块将会覆盖旧模块。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 上传pyfile类型分组资源
     * @param {UploadGroupPackageReq} body 上传jar类型分组资源请求body体。
     * @param {string} [USER_ID] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public uploadPythonFiles(uploadPythonFilesRequest?: UploadPythonFilesRequest): Promise<UploadPythonFilesResponse> {
        const options = ParamCreater().uploadPythonFiles(uploadPythonFilesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API用于上传分组资源到某个project下。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 上传分组资源
     * @param {UploadPackageGroupReq} body 上传分组资源请求body体。
     * @param {string} [USER_ID] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public uploadResources(uploadResourcesRequest?: UploadResourcesRequest): Promise<UploadResourcesResponse> {
        const options = ParamCreater().uploadResources(uploadResourcesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量删除任何状态的作业。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量删除Flink作业
     * @param {BatchDeleteFlinkJobsRequestBody} body 作业ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeleteFlinkJobs(batchDeleteFlinkJobsRequest?: BatchDeleteFlinkJobsRequest): Promise<BatchDeleteFlinkJobsResponse> {
        const options = ParamCreater().batchDeleteFlinkJobs(batchDeleteFlinkJobsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 触发批量运行Flink作业。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量运行Flink作业
     * @param {BatchRunFlinkJobsRequestBody} body job_id的数组。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchRunFlinkJobs(batchRunFlinkJobsRequest?: BatchRunFlinkJobsRequest): Promise<BatchRunFlinkJobsResponse> {
        const options = ParamCreater().batchRunFlinkJobs(batchRunFlinkJobsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API用于处理边缘Flink作业状态上报信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 边缘Flink作业状态信息上报
     * @param {IefFlinkJobStatusReportReq} body 请求body体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public changeFlinkJobStatusReport(changeFlinkJobStatusReportRequest?: ChangeFlinkJobStatusReportRequest): Promise<ChangeFlinkJobStatusReportResponse> {
        const options = ParamCreater().changeFlinkJobStatusReport(changeFlinkJobStatusReportRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 用户自定义作业目前支持jar格式，运行在独享集群中。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 新建Flink Jar作业
     * @param {CreateFlinkJarRequestBody} body 请求参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createFlinkJar(createFlinkJarRequest?: CreateFlinkJarRequest): Promise<CreateFlinkJarResponse> {
        const options = ParamCreater().createFlinkJar(createFlinkJarRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 通过POST方式，提交流式SQL作业，请求体为JSON格式。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 新建Flink SQL作业
     * @param {CreateFlinkSqlJobRequestBody} body 创建SQL作业的请求参数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createFlinkSqlJob(createFlinkSqlJobRequest?: CreateFlinkSqlJobRequest): Promise<CreateFlinkSqlJobResponse> {
        const options = ParamCreater().createFlinkSqlJob(createFlinkSqlJobRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 在DLI服务中新建一个Flink作业模板，最多100个。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 新建Flink作业模板
     * @param {CreateFlinkTemplateRequestBody} body 请求参数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createFlinkTemplate(createFlinkTemplateRequest?: CreateFlinkTemplateRequest): Promise<CreateFlinkTemplateResponse> {
        const options = ParamCreater().createFlinkTemplate(createFlinkTemplateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API用于创建IEF消息通道
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建IEF消息通道
     * @param {CreateIefMessageChannelReq} body 请求body体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createIefMessageChannel(createIefMessageChannelRequest?: CreateIefMessageChannelRequest): Promise<CreateIefMessageChannelResponse> {
        const options = ParamCreater().createIefMessageChannel(createIefMessageChannelRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API用于处理IEF系统事件上报
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary IEF系统事件上报
     * @param {IefSystemEventsReq} body 请求body体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createIefSystemEvents(createIefSystemEventsRequest?: CreateIefSystemEventsRequest): Promise<CreateIefSystemEventsResponse> {
        const options = ParamCreater().createIefSystemEvents(createIefSystemEventsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 生成flink SQL作业的静态流图
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 生成flink SQL作业的静态流图
     * @param {string} jobId 
     * @param {GenStreamGraphReq} body 生成Flink SQL作业静态流图请求参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createStreamGraph(createStreamGraphRequest?: CreateStreamGraphRequest): Promise<CreateStreamGraphResponse> {
        const options = ParamCreater().createStreamGraph(createStreamGraphRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除任何状态的作业。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除作业
     * @param {number} jobId 作业ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteFlinkJob(deleteFlinkJobRequest?: DeleteFlinkJobRequest): Promise<DeleteFlinkJobResponse> {
        const options = ParamCreater().deleteFlinkJob(deleteFlinkJobRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除一个Flink作业模板，即使当前模板正在被作业使用，也允许删除。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除Flink作业模板
     * @param {number} templateId 模板ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteFlinkTemplate(deleteFlinkTemplateRequest?: DeleteFlinkTemplateRequest): Promise<DeleteFlinkTemplateResponse> {
        const options = ParamCreater().deleteFlinkTemplate(deleteFlinkTemplateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 通过POST方式，导出flink作业，请求体为JSON格式。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary flink作业导出
     * @param {ExportFlinkJobRequestBody} body 导出作业的请求参数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public exportFlinkJob(exportFlinkJobRequest?: ExportFlinkJobRequest): Promise<ExportFlinkJobResponse> {
        const options = ParamCreater().exportFlinkJob(exportFlinkJobRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 通过POST方式，导入flink作业，请求体为JSON格式。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary flink作业导入
     * @param {ImportFlinkJobRequestBody} body 导入作业的请求参数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public importFlinkJob(importFlinkJobRequest?: ImportFlinkJobRequest): Promise<ImportFlinkJobResponse> {
        const options = ParamCreater().importFlinkJob(importFlinkJobRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询当前用户的作业列表，可以根据作业ID作为ID，查询大于ID或小于ID的限定条数的作业，默认查询全部状态的作业，也可以设定运行中或其他状态条件。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询Flink作业列表
     * @param {string} [jobType] 作业类型
     * @param {number} [limit] 返回的数据条数。默认为10。
     * @param {string} [name] 作业名称。长度限制：0-57个字符。
     * @param {number} [offset] 作业偏移量。
     * @param {string} [order] 查询结果排序，升序asc和降序desc两种可选，默认降序。
     * @param {string} [queueName] 队列名称。
     * @param {number} [rootJobId] 边缘父作业ID, 用于查询指定边缘作业的子作业。不带该参数时, 查询所有非边缘作业和边缘父作业, 不包括边缘子作业。
     * @param {boolean} [showDetail] 是否返回作业详情信息。默认为false。
     * @param {string} [status] 作业状态码。
     * @param {string} [sysEnterpriseProjectName] 
     * @param {string} [tags] 
     * @param {string} [userName] 用户名，可作为筛选条件
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listFlinkJobs(listFlinkJobsRequest?: ListFlinkJobsRequest): Promise<ListFlinkJobsResponse> {
        const options = ParamCreater().listFlinkJobs(listFlinkJobsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询Flink作业模板列表。当前只支持查询用户自定义模板。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询Flink作业模板列表
     * @param {number} [limit] 返回的数据条数。默认为10。
     * @param {string} [name] 模板名字
     * @param {number} [offset] 作业偏移量。
     * @param {string} [order] 查询结果排序，升序asc和降序desc两种可选，默认降序。
     * @param {string} [tags] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listFlinkTemplates(listFlinkTemplatesRequest?: ListFlinkTemplatesRequest): Promise<ListFlinkTemplatesResponse> {
        const options = ParamCreater().listFlinkTemplates(listFlinkTemplatesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 用户主动授权OBS桶的操作权限给DLI服务, 用于保存用户作业的checkpoint、作业的运行日志等。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary OBS授权给DLI服务
     * @param {ObsBuckets} body OBS桶名列表。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public registerBucket(registerBucketRequest?: RegisterBucketRequest): Promise<RegisterBucketResponse> {
        const options = ParamCreater().registerBucket(registerBucketRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API用于处理IEF Flink作业action回调信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 边缘Flink作业Action状态回调
     * @param {IefFlinkJobMessagesReq} body 请求body体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public runIefJobActionCallBack(runIefJobActionCallBackRequest?: RunIefJobActionCallBackRequest): Promise<RunIefJobActionCallBackResponse> {
        const options = ParamCreater().runIefJobActionCallBack(runIefJobActionCallBackRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询Flink作业执行计划。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询Flink作业执行计划
     * @param {number} jobId 作业ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showFlinkExecuteGraph(showFlinkExecuteGraphRequest?: ShowFlinkExecuteGraphRequest): Promise<ShowFlinkExecuteGraphResponse> {
        const options = ParamCreater().showFlinkExecuteGraph(showFlinkExecuteGraphRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查看一个Flink作业的详情信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询Flink作业详情
     * @param {number} jobId 作业ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showFlinkJob(showFlinkJobRequest?: ShowFlinkJobRequest): Promise<ShowFlinkJobResponse> {
        const options = ParamCreater().showFlinkJob(showFlinkJobRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询Flink作业监控信息, 支持同时查询多个Flink作业的监控信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询Flink作业监控信息
     * @param {ShowJobMonitorInfoReq} body 作业列表。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showFlinkMetric(showFlinkMetricRequest?: ShowFlinkMetricRequest): Promise<ShowFlinkMetricResponse> {
        const options = ParamCreater().showFlinkMetric(showFlinkMetricRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量停止正在运行的Flink作业。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量停止Flink作业
     * @param {StopFlinkJobsRequestBody} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public stopFlinkJobs(stopFlinkJobsRequest?: StopFlinkJobsRequest): Promise<StopFlinkJobsResponse> {
        const options = ParamCreater().stopFlinkJobs(stopFlinkJobsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新用户自定义作业，目前支持jar格式，运行在独享集群中。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新Flink Jar作业
     * @param {number} jobId 作业ID。
     * @param {UpdateFlinkJarRequestBody} body 请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateFlinkJar(updateFlinkJarRequest?: UpdateFlinkJarRequest): Promise<UpdateFlinkJarResponse> {
        const options = ParamCreater().updateFlinkJar(updateFlinkJarRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * Stream SQL的语法扩展了Apache Flink SQL。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新Flink SQL作业
     * @param {number} jobId 作业ID。
     * @param {UpdateFlinkSqlRequestBody} body 更新SQL作业的请求参数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateFlinkSql(updateFlinkSqlRequest?: UpdateFlinkSqlRequest): Promise<UpdateFlinkSqlResponse> {
        const options = ParamCreater().updateFlinkSql(updateFlinkSqlRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 对DLI服务中已有的Flink作业模板进行更新。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新Flink作业模板
     * @param {number} templateId 
     * @param {UpdateFlinkTemplateRequestBody} body 请求参数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateFlinkTemplate(updateFlinkTemplateRequest?: UpdateFlinkTemplateRequest): Promise<UpdateFlinkTemplateResponse> {
        const options = ParamCreater().updateFlinkTemplate(updateFlinkTemplateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API用于取消批处理作业。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 取消批处理作业
     * @param {string} batchId 批处理作业的ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public cancelBatchJob(cancelBatchJobRequest?: CancelBatchJobRequest): Promise<CancelBatchJobResponse> {
        const options = ParamCreater().cancelBatchJob(cancelBatchJobRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API用于在某个队列上创建作业。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建批处理作业
     * @param {BatchJobInfo} body 创建批处理作业请求body体。
     * @param {string} [USER_ID] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createBatchJob(createBatchJobRequest?: CreateBatchJobRequest): Promise<CreateBatchJobResponse> {
        const options = ParamCreater().createBatchJob(createBatchJobRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API用于查询Project下某队列批处理作业的列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询批处理作业列表
     * @param {string} [clusterName] DLI队列名称，不填写则获取当前Project下所有批处理作业(不推荐使用)。
     * @param {number} [end] 用于查询开始时间在该时间点之前的作业。时间格式为unix时间戳，单位：毫秒。
     * @param {number} [from] 起始批处理作业的索引号，默认从0开始。
     * @param {string} [jobName] 批处理作业的名称。
     * @param {string} [jobId] 
     * @param {string} [order] 指定作业排序方式，默认为CREATE_TIME_DESC（作业提交时间降序），支持DURATION_DESC（作业运行时长降序）、DURATION_ASC（作业运行时长升序）、CREATE_TIME_DESC（作业提交时间降序）、CREATE_TIME_ASC（作业提交时间升序）四种排序方式。
     * @param {string} [queueName] 
     * @param {number} [size] 查询批处理作业的数量。
     * @param {number} [start] 用于查询开始时间在该时间点之后的作业。时间格式为unix时间戳，单位：毫秒。
     * @param {string} [state] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listBatches(listBatchesRequest?: ListBatchesRequest): Promise<ListBatchesResponse> {
        const options = ParamCreater().listBatches(listBatchesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API用于根据批处理作业的id查询作业详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询批处理作业详情
     * @param {string} batchId 批处理作业的ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showBatchInfo(showBatchInfoRequest?: ShowBatchInfoRequest): Promise<ShowBatchInfoResponse> {
        const options = ParamCreater().showBatchInfo(showBatchInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API用于查询批处理作业的后台日志。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询批处理作业日志
     * @param {string} batchId 批处理作业的ID。
     * @param {number} [from] 起始日志的行号，默认显示最后100行日志。如果日志不足100行，从0行开始显示。
     * @param {number} [index] 当提交的作业进行重试时，会有多个driver日志。index用于指定driver日志的索引号，默认为0。需与type参数一起使用。
     * @param {number} [size] 查询日志的数量。
     * @param {string} [type] 当type填写driver时，输出Spark Driver日志。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showBatchLog(showBatchLogRequest?: ShowBatchLogRequest): Promise<ShowBatchLogResponse> {
        const options = ParamCreater().showBatchLog(showBatchLogRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API用于查询批处理作业的状态。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询批处理作业状态
     * @param {string} batchId 批处理作业的ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showBatchState(showBatchStateRequest?: ShowBatchStateRequest): Promise<ShowBatchStateResponse> {
        const options = ParamCreater().showBatchState(showBatchStateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API用于取消已经提交的作业，若作业已经执行结束或失败则无法取消。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 取消作业
     * @param {string} jobId 作业ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public cancelSqlJob(cancelSqlJobRequest?: CancelSqlJobRequest): Promise<CancelSqlJobResponse> {
        const options = ParamCreater().cancelSqlJob(cancelSqlJobRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API用于检查SQL语法。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 检查SQL语法
     * @param {CheckSqlRequestBody} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public checkSql(checkSqlRequest?: CheckSqlRequest): Promise<CheckSqlResponse> {
        const options = ParamCreater().checkSql(checkSqlRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API用于新增数据库。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建数据库
     * @param {CreateDatabaseRequestBody} body 创建数据库请求body体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createDatabase(createDatabaseRequest?: CreateDatabaseRequest): Promise<CreateDatabaseResponse> {
        const options = ParamCreater().createDatabase(createDatabaseRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API用于通过执行SQL语句的方式向队列提交作业。
     * 
     * 作业包含以下类型：DDL、DCL、IMPORT、QUERY和INSERT。其中，IMPORT与导入数据的功能一致，区别仅在于实现方式不同。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 提交SQL作业
     * @param {CreateSqlJobRequestBody} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createSqlJob(createSqlJobRequest?: CreateSqlJobRequest): Promise<CreateSqlJobResponse> {
        const options = ParamCreater().createSqlJob(createSqlJobRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API用于创建新的表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建表
     * @param {string} databaseName 新增表所在的数据库名称。
     * @param {CreateTableReq} body 创建表的请求body体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createTable(createTableRequest?: CreateTableRequest): Promise<CreateTableResponse> {
        const options = ParamCreater().createTable(createTableRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API用于删除空数据库，若待删除的数据库中存在表，则需先删除其中的所有表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除数据库
     * @param {string} databaseName 删除的数据库名称。
     * @param {boolean} [async] 
     * @param {boolean} [cascade] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteDatabase(deleteDatabaseRequest?: DeleteDatabaseRequest): Promise<DeleteDatabaseResponse> {
        const options = ParamCreater().deleteDatabase(deleteDatabaseRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API用于删除指定的表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除表
     * @param {string} databaseName 待删除的表所在的数据库名称。
     * @param {string} tableName 待删除的表名称。
     * @param {boolean} [async] 是否异步执行
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteTable(deleteTableRequest?: DeleteTableRequest): Promise<DeleteTableResponse> {
        const options = ParamCreater().deleteTable(deleteTableRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API用于将SQL语句的查询结果导出到OBS对象存储中，只支持导出“QUERY”类型作业的查询结果。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 导出查询结果
     * @param {string} jobId 作业ID
     * @param {ExportSqlResultRequestBody} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public exportSqlJobResult(exportSqlJobResultRequest?: ExportSqlJobResultRequest): Promise<ExportSqlJobResultResponse> {
        const options = ParamCreater().exportSqlJobResult(exportSqlJobResultRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API用于将SQL语句的查询结果导出到OBS对象存储中，只支持导出“QUERY”类型作业的查询结果。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 导出查询结果
     * @param {ExportTableRequestBody} body 导出数据的请求body体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public exportTable(exportTableRequest?: ExportTableRequest): Promise<ExportTableResponse> {
        const options = ParamCreater().exportTable(exportTableRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API用于将数据从文件导入DLI或OBS表，目前仅支持将OBS上的数据导入DLI或OBS中。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 导入数据
     * @param {ImportTableRequestBody} body 导入数据请求参数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public importTable(importTableRequest?: ImportTableRequest): Promise<ImportTableResponse> {
        const options = ParamCreater().importTable(importTableRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API用于查询指定数据库下符合过滤条件的或所有的表信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询所有表
     * @param {string} databaseName 查看表所在的数据库名称。
     * @param {number} [currentPage] 
     * @param {string} [keyword] 过滤表名称的关键词。
     * @param {number} [pageSize] 
     * @param {string} [tableType] 
     * @param {boolean} [withDetail] 是否获取表的详细信息（所有者，size等）。
     * @param {boolean} [withPriv] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAllTables(listAllTablesRequest?: ListAllTablesRequest): Promise<ListAllTablesResponse> {
        const options = ParamCreater().listAllTables(listAllTablesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API用于查询出所有的数据库信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询所有数据库
     * @param {string} [keyword] 过滤关键字
     * @param {number} [limit] 查询数量
     * @param {number} [offset] 查询偏移量
     * @param {string} [tags] 标签过滤
     * @param {boolean} [withPriv] 是否返回隐私信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDatabases(listDatabasesRequest?: ListDatabasesRequest): Promise<ListDatabasesResponse> {
        const options = ParamCreater().listDatabases(listDatabasesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API用于查询当前工程下面的所有作业的信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询所有作业
     * @param {number} [currentPage] 当前页码，默认为第一页。
     * @param {string} [dbName] 
     * @param {number} [end] 用于查询开始时间在该时间点之前的作业。时间格式为unix时间戳，单位：毫秒。
     * @param {string} [engineType] 
     * @param {string} [jobStatus] 
     * @param {'DDL' | 'DCL' | 'IMPORT' | 'EXPORT' | 'QUERY' | 'INSERT'} [jobType] 指定查询的作业类型，包含DDL、DCL、IMPORT、EXPORT、QUERY、INSERT，若要查询所有类型的作业，则传入ALL。
     * @param {'duration_desc' | 'duration_asc' | 'start_time_desc' | 'start_time_asc'} [order] 指定作业排序方式，默认为start_time_desc（作业提交时间降序），支持duration_desc（作业运行时长降序）、duration_asc（作业运行时长升序）、start_time_desc（作业提交时间降序）、start_time_asc（作业提交时间升序）四种排序方式。
     * @param {string} [owner] 提交作业的用户名称
     * @param {number} [pageSize] 每页显示的最大作业个数，范围: [1, 100]。默认值：50。
     * @param {string} [queueName] 指定queue_name作为作业过滤条件，查询在指定queue上运行的作业。
     * @param {string} [sqlPattern] 指定sql片段作为作业过滤条件，不区分大小写。
     * @param {number} [start] 用于查询开始时间在该时间点之后的作业。时间格式为unix时间戳，单位：毫秒。
     * @param {string} [tableName] 
     * @param {string} [tags] 指定作业标签作为过滤条件，支持多标签过滤。格式为“key&#x3D;value”，如：GET /v1.0/{project_id}/jobs?tags&#x3D;k1%3Dv1，“&#x3D;”需要转义为“%3D”，“k1”为标签键，“v1”为标签值。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSqlJobs(listSqlJobsRequest?: ListSqlJobsRequest): Promise<ListSqlJobsResponse> {
        const options = ParamCreater().listSqlJobs(listSqlJobsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API用于在执行SQL查询语句的作业完成后，查看该作业执行的结果。目前仅支持查看“QUERY”类型作业的执行结果。
     * 该API只能查看前1000条的结果记录，若要查看全部的结果记录，需要先导出查询结果再进行查看。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 预览SQL作业查询结果
     * @param {string} jobId 作业ID。
     * @param {string} [queueName] 指定获取作业结果的执行队列名称。若不指定则使用默认的系统队列
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public previewJobResult(previewJobResultRequest?: PreviewJobResultRequest): Promise<PreviewJobResultResponse> {
        const options = ParamCreater().previewJobResult(previewJobResultRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API用于描述指定表的元数据信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 描述表信息
     * @param {string} databaseName 待描述的表所在的数据库名称。
     * @param {string} tableName 待描述表的名称。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDescribeTable(showDescribeTableRequest?: ShowDescribeTableRequest): Promise<ShowDescribeTableResponse> {
        const options = ParamCreater().showDescribeTable(showDescribeTableRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API用于获取作业执行进度信息，如果作业正在执行，可以获取到子作业的信息，如果作业刚开始或者已经结束，不可以获取到子作业信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询作业执行进度信息
     * @param {string} jobId 作业ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showJobProgress(showJobProgressRequest?: ShowJobProgressRequest): Promise<ShowJobProgressResponse> {
        const options = ParamCreater().showJobProgress(showJobProgressRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取分区信息列表
     * @param {string} databaseName 数据库名
     * @param {string} tableName 表名
     * @param {number} [limit] 显示个数，默认值为100
     * @param {number} [offset] 偏移量
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showPartitions(showPartitionsRequest?: ShowPartitionsRequest): Promise<ShowPartitionsResponse> {
        const options = ParamCreater().showPartitions(showPartitionsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API用于查询作业的详细信息，如作业的databasename、tablename、file size和export mode等信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询作业详细信息
     * @param {string} jobId 作业ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showSqlJobDetail(showSqlJobDetailRequest?: ShowSqlJobDetailRequest): Promise<ShowSqlJobDetailResponse> {
        const options = ParamCreater().showSqlJobDetail(showSqlJobDetailRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API用于在作业提交后查询作业状态。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询作业状态
     * @param {string} jobId 作业ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showSqlJobStatus(showSqlJobStatusRequest?: ShowSqlJobStatusRequest): Promise<ShowSqlJobStatusResponse> {
        const options = ParamCreater().showSqlJobStatus(showSqlJobStatusRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API用于用于预览表中前10行的内容。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 预览表内容
     * @param {string} databaseName 待预览的表所在的数据库名称。
     * @param {string} tableName 待预览的表名称。
     * @param {string} [mode] 预览表的模式，取值为““SYNC””或者““ASYNC””默认值为：“SYNC”。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showTableContent(showTableContentRequest?: ShowTableContentRequest): Promise<ShowTableContentResponse> {
        const options = ParamCreater().showTableContent(showTableContentRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 用于修改数据库的owner。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改数据库用户
     * @param {string} databaseName 删除的数据库名称。
     * @param {UpdateOwnerRequestBody} body 修改数据库用户请求body体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateDatabaseOwner(updateDatabaseOwnerRequest?: UpdateDatabaseOwnerRequest): Promise<UpdateDatabaseOwnerResponse> {
        const options = ParamCreater().updateDatabaseOwner(updateDatabaseOwnerRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 用于修改表的owner。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改表用户
     * @param {string} databaseName 删除的数据库名称。
     * @param {string} tableName 
     * @param {UpdateOwnerRequestBody} body 修改数据库用户请求body体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateTableOwner(updateTableOwnerRequest?: UpdateTableOwnerRequest): Promise<UpdateTableOwnerResponse> {
        const options = ParamCreater().updateTableOwner(updateTableOwnerRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 该API用于创建作业模板。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createJobTemplates(createJobTemplatesRequest?: CreateJobTemplatesRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/templates",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createJobTemplatesRequest !== null && createJobTemplatesRequest !== undefined) {
                if (createJobTemplatesRequest instanceof CreateJobTemplatesRequest) {
                    body = createJobTemplatesRequest.body
                } else {
                    body = createJobTemplatesRequest['body'];
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
         * 该API用于存储指定的SQL语句，后续可以重复使用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createSqlTemplates(createSqlTemplatesRequest?: CreateSqlTemplatesRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/sqls",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createSqlTemplatesRequest !== null && createSqlTemplatesRequest !== undefined) {
                if (createSqlTemplatesRequest instanceof CreateSqlTemplatesRequest) {
                    body = createSqlTemplatesRequest.body
                } else {
                    body = createSqlTemplatesRequest['body'];
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
         * 该API用于批量删除SQL模板。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteSqlTemplates(deleteSqlTemplatesRequest?: DeleteSqlTemplatesRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/sqls-deletion",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (deleteSqlTemplatesRequest !== null && deleteSqlTemplatesRequest !== undefined) {
                if (deleteSqlTemplatesRequest instanceof DeleteSqlTemplatesRequest) {
                    body = deleteSqlTemplatesRequest.body
                } else {
                    body = deleteSqlTemplatesRequest['body'];
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
         * 该API用于查询作业模板列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listJobTemplates(listJobTemplatesRequest?: ListJobTemplatesRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/templates",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let type;
            
            let keyword;
            
            let pageSize;
            
            let currentPage;

            if (listJobTemplatesRequest !== null && listJobTemplatesRequest !== undefined) {
                if (listJobTemplatesRequest instanceof ListJobTemplatesRequest) {
                    type = listJobTemplatesRequest.type;
                    keyword = listJobTemplatesRequest.keyword;
                    pageSize = listJobTemplatesRequest.pageSize;
                    currentPage = listJobTemplatesRequest.currentPage;
                } else {
                    type = listJobTemplatesRequest['type'];
                    keyword = listJobTemplatesRequest['keyword'];
                    pageSize = listJobTemplatesRequest['page-size'];
                    currentPage = listJobTemplatesRequest['current-page'];
                }
            }

        
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (keyword !== null && keyword !== undefined) {
                localVarQueryParameter['keyword'] = keyword;
            }
            if (pageSize !== null && pageSize !== undefined) {
                localVarQueryParameter['page-size'] = pageSize;
            }
            if (currentPage !== null && currentPage !== undefined) {
                localVarQueryParameter['current-page'] = currentPage;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该API用于获取作业模板。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showJobTemplate(showJobTemplateRequest?: ShowJobTemplateRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/templates/{template_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let templateId;

            if (showJobTemplateRequest !== null && showJobTemplateRequest !== undefined) {
                if (showJobTemplateRequest instanceof ShowJobTemplateRequest) {
                    templateId = showJobTemplateRequest.templateId;
                } else {
                    templateId = showJobTemplateRequest['template_id'];
                }
            }

        
            if (templateId === null || templateId === undefined) {
            throw new RequiredError('templateId','Required parameter templateId was null or undefined when calling showJobTemplate.');
            }

            options.pathParams = { 'template_id': templateId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该API用于查询所有SQL样例模板。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showSqlSampleTemplates() {
            const options = {
                method: "GET",
                url: "/v1.0/{project_id}/sqls/sample",
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
         * 该API用查看用户保存的所有SQL模板。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showSqlTemplates(showSqlTemplatesRequest?: ShowSqlTemplatesRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/{project_id}/sqls",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let keyword;

            if (showSqlTemplatesRequest !== null && showSqlTemplatesRequest !== undefined) {
                if (showSqlTemplatesRequest instanceof ShowSqlTemplatesRequest) {
                    keyword = showSqlTemplatesRequest.keyword;
                } else {
                    keyword = showSqlTemplatesRequest['keyword'];
                }
            }

        
            if (keyword !== null && keyword !== undefined) {
                localVarQueryParameter['keyword'] = keyword;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该API用于修改作业模板。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateJobTemplates(updateJobTemplatesRequest?: UpdateJobTemplatesRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/templates/{template_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let templateId;

            if (updateJobTemplatesRequest !== null && updateJobTemplatesRequest !== undefined) {
                if (updateJobTemplatesRequest instanceof UpdateJobTemplatesRequest) {
                    templateId = updateJobTemplatesRequest.templateId;
                    body = updateJobTemplatesRequest.body
                } else {
                    templateId = updateJobTemplatesRequest['template_id'];
                    body = updateJobTemplatesRequest['body'];
                }
            }

        
            if (templateId === null || templateId === undefined) {
            throw new RequiredError('templateId','Required parameter templateId was null or undefined when calling updateJobTemplates.');
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
         * 该API用于更新SQL模板。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateSqlTemplates(updateSqlTemplatesRequest?: UpdateSqlTemplatesRequest) {
            const options = {
                method: "PUT",
                url: "/v1.0/{project_id}/sqls/{sql_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let sqlId;

            if (updateSqlTemplatesRequest !== null && updateSqlTemplatesRequest !== undefined) {
                if (updateSqlTemplatesRequest instanceof UpdateSqlTemplatesRequest) {
                    sqlId = updateSqlTemplatesRequest.sqlId;
                    body = updateSqlTemplatesRequest.body
                } else {
                    sqlId = updateSqlTemplatesRequest['sql_id'];
                    body = updateSqlTemplatesRequest['body'];
                }
            }

        
            if (sqlId === null || sqlId === undefined) {
            throw new RequiredError('sqlId','Required parameter sqlId was null or undefined when calling updateSqlTemplates.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'sql_id': sqlId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该API用于在已创建的增强型跨源中绑定队列。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        associateConnectionQueue(associateConnectionQueueRequest?: AssociateConnectionQueueRequest) {
            const options = {
                method: "POST",
                url: "/v2.0/{project_id}/datasource/enhanced-connections/{connection_id}/associate-queue",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let connectionId;

            if (associateConnectionQueueRequest !== null && associateConnectionQueueRequest !== undefined) {
                if (associateConnectionQueueRequest instanceof AssociateConnectionQueueRequest) {
                    connectionId = associateConnectionQueueRequest.connectionId;
                    body = associateConnectionQueueRequest.body
                } else {
                    connectionId = associateConnectionQueueRequest['connection_id'];
                    body = associateConnectionQueueRequest['body'];
                }
            }

        
            if (connectionId === null || connectionId === undefined) {
            throw new RequiredError('connectionId','Required parameter connectionId was null or undefined when calling associateConnectionQueue.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'connection_id': connectionId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 关联队列到弹性资源池
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        associateQueueToElasticResourcePool(associateQueueToElasticResourcePoolRequest?: AssociateQueueToElasticResourcePoolRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/elastic-resource-pools/{elastic_resource_pool_name}/queues",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let elasticResourcePoolName;

            if (associateQueueToElasticResourcePoolRequest !== null && associateQueueToElasticResourcePoolRequest !== undefined) {
                if (associateQueueToElasticResourcePoolRequest instanceof AssociateQueueToElasticResourcePoolRequest) {
                    elasticResourcePoolName = associateQueueToElasticResourcePoolRequest.elasticResourcePoolName;
                    body = associateQueueToElasticResourcePoolRequest.body
                } else {
                    elasticResourcePoolName = associateQueueToElasticResourcePoolRequest['elastic_resource_pool_name'];
                    body = associateQueueToElasticResourcePoolRequest['body'];
                }
            }

        
            if (elasticResourcePoolName === null || elasticResourcePoolName === undefined) {
            throw new RequiredError('elasticResourcePoolName','Required parameter elasticResourcePoolName was null or undefined when calling associateQueueToElasticResourcePool.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'elastic_resource_pool_name': elasticResourcePoolName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该API用于将DLI资源权限赋给、回收、更新指定的其他用户或项目。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        authorizeResource(authorizeResourceRequest?: AuthorizeResourceRequest) {
            const options = {
                method: "PUT",
                url: "/v1.0/{project_id}/authorization",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (authorizeResourceRequest !== null && authorizeResourceRequest !== undefined) {
                if (authorizeResourceRequest instanceof AuthorizeResourceRequest) {
                    body = authorizeResourceRequest.body
                } else {
                    body = authorizeResourceRequest['body'];
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
         * 该API用于批量删除队列定时扩缩容计划。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDeleteQueuePlans(batchDeleteQueuePlansRequest?: BatchDeleteQueuePlansRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/queues/{queue_name}/plans/batch-delete",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let queueName;

            if (batchDeleteQueuePlansRequest !== null && batchDeleteQueuePlansRequest !== undefined) {
                if (batchDeleteQueuePlansRequest instanceof BatchDeleteQueuePlansRequest) {
                    queueName = batchDeleteQueuePlansRequest.queueName;
                    body = batchDeleteQueuePlansRequest.body
                } else {
                    queueName = batchDeleteQueuePlansRequest['queue_name'];
                    body = batchDeleteQueuePlansRequest['body'];
                }
            }

        
            if (queueName === null || queueName === undefined) {
            throw new RequiredError('queueName','Required parameter queueName was null or undefined when calling batchDeleteQueuePlans.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'queue_name': queueName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该API用于将数据库或数据表的数据权限赋给指定的其他用户。
         * 说明：
         * 被赋权用户所在用户组的所属区域需具有Tenant Guest权限。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        changeAuthorization(changeAuthorizationRequest?: ChangeAuthorizationRequest) {
            const options = {
                method: "PUT",
                url: "/v1.0/{project_id}/user-authorization",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (changeAuthorizationRequest !== null && changeAuthorizationRequest !== undefined) {
                if (changeAuthorizationRequest instanceof ChangeAuthorizationRequest) {
                    body = changeAuthorizationRequest.body
                } else {
                    body = changeAuthorizationRequest['body'];
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
         * 该API用于修改指定ID的队列定时扩缩容计划。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        changeQueuePlan(changeQueuePlanRequest?: ChangeQueuePlanRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/queues/{queue_name}/plans/{plan_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let planId;
            
            let queueName;

            if (changeQueuePlanRequest !== null && changeQueuePlanRequest !== undefined) {
                if (changeQueuePlanRequest instanceof ChangeQueuePlanRequest) {
                    planId = changeQueuePlanRequest.planId;
                    queueName = changeQueuePlanRequest.queueName;
                    body = changeQueuePlanRequest.body
                } else {
                    planId = changeQueuePlanRequest['plan_id'];
                    queueName = changeQueuePlanRequest['queue_name'];
                    body = changeQueuePlanRequest['body'];
                }
            }

        
            if (planId === null || planId === undefined) {
            throw new RequiredError('planId','Required parameter planId was null or undefined when calling changeQueuePlan.');
            }
            if (queueName === null || queueName === undefined) {
            throw new RequiredError('queueName','Required parameter queueName was null or undefined when calling changeQueuePlan.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'plan_id': planId,'queue_name': queueName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建地址连通性请求API接口，往指定集群发送地址连通性测试请求，并将测试地址插入表内
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        checkConnection(checkConnectionRequest?: CheckConnectionRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/queues/{queue_name}/connection-test",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let queueName;

            if (checkConnectionRequest !== null && checkConnectionRequest !== undefined) {
                if (checkConnectionRequest instanceof CheckConnectionRequest) {
                    queueName = checkConnectionRequest.queueName;
                    body = checkConnectionRequest.body
                } else {
                    queueName = checkConnectionRequest['queue_name'];
                    body = checkConnectionRequest['body'];
                }
            }

        
            if (queueName === null || queueName === undefined) {
            throw new RequiredError('queueName','Required parameter queueName was null or undefined when calling checkConnection.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'queue_name': queueName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该API用于创建跨源认证。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createAuthInfo(createAuthInfoRequest?: CreateAuthInfoRequest) {
            const options = {
                method: "POST",
                url: "/v2.0/{project_id}/datasource/auth-infos",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createAuthInfoRequest !== null && createAuthInfoRequest !== undefined) {
                if (createAuthInfoRequest instanceof CreateAuthInfoRequest) {
                    body = createAuthInfoRequest.body
                } else {
                    body = createAuthInfoRequest['body'];
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
         * 该API用于创建与其他服务的经典型跨源连接。
         * 说明：
         * 如果需要了解Console界面的使用方法，可参考经典型跨源连接。
         * 系统default队列不支持创建跨源连接。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createDatasourceConnection(createDatasourceConnectionRequest?: CreateDatasourceConnectionRequest) {
            const options = {
                method: "POST",
                url: "/v2.0/{project_id}/datasource-connection",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createDatasourceConnectionRequest !== null && createDatasourceConnectionRequest !== undefined) {
                if (createDatasourceConnectionRequest instanceof CreateDatasourceConnectionRequest) {
                    body = createDatasourceConnectionRequest.body
                } else {
                    body = createDatasourceConnectionRequest['body'];
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
         * 创建DLI委托
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createDliAgency(createDliAgencyRequest?: CreateDliAgencyRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/agency",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createDliAgencyRequest !== null && createDliAgencyRequest !== undefined) {
                if (createDliAgencyRequest instanceof CreateDliAgencyRequest) {
                    body = createDliAgencyRequest.body
                } else {
                    body = createDliAgencyRequest['body'];
                }
            }

        
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建弹性资源池
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createElasticResourcePool(createElasticResourcePoolRequest?: CreateElasticResourcePoolRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/elastic-resource-pools",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createElasticResourcePoolRequest !== null && createElasticResourcePoolRequest !== undefined) {
                if (createElasticResourcePoolRequest instanceof CreateElasticResourcePoolRequest) {
                    body = createElasticResourcePoolRequest.body
                } else {
                    body = createElasticResourcePoolRequest['body'];
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
         * 该API用于创建与其他服务的增强型跨源连接。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createEnhancedConnection(createEnhancedConnectionRequest?: CreateEnhancedConnectionRequest) {
            const options = {
                method: "POST",
                url: "/v2.0/{project_id}/datasource/enhanced-connections",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createEnhancedConnectionRequest !== null && createEnhancedConnectionRequest !== undefined) {
                if (createEnhancedConnectionRequest instanceof CreateEnhancedConnectionRequest) {
                    body = createEnhancedConnectionRequest.body
                } else {
                    body = createEnhancedConnectionRequest['body'];
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
         * 该API用于创建跨源需要的路由。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createEnhancedConnectionRoutes(createEnhancedConnectionRoutesRequest?: CreateEnhancedConnectionRoutesRequest) {
            const options = {
                method: "POST",
                url: "/v2.0/{project_id}/datasource/enhanced-connections/{connection_id}/routes",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let connectionId;

            if (createEnhancedConnectionRoutesRequest !== null && createEnhancedConnectionRoutesRequest !== undefined) {
                if (createEnhancedConnectionRoutesRequest instanceof CreateEnhancedConnectionRoutesRequest) {
                    connectionId = createEnhancedConnectionRoutesRequest.connectionId;
                    body = createEnhancedConnectionRoutesRequest.body
                } else {
                    connectionId = createEnhancedConnectionRoutesRequest['connection_id'];
                    body = createEnhancedConnectionRoutesRequest['body'];
                }
            }

        
            if (connectionId === null || connectionId === undefined) {
            throw new RequiredError('connectionId','Required parameter connectionId was null or undefined when calling createEnhancedConnectionRoutes.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'connection_id': connectionId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建全局变量。全局变量用于替换SQL作业中的敏感数据。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createGlobalValue(createGlobalValueRequest?: CreateGlobalValueRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/variables",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createGlobalValueRequest !== null && createGlobalValueRequest !== undefined) {
                if (createGlobalValueRequest instanceof CreateGlobalValueRequest) {
                    body = createGlobalValueRequest.body
                } else {
                    body = createGlobalValueRequest['body'];
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
         * 该API用于创建队列，该队列将会绑定用户指定的计算资源。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createQueue(createQueueRequest?: CreateQueueRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/queues",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createQueueRequest !== null && createQueueRequest !== undefined) {
                if (createQueueRequest instanceof CreateQueueRequest) {
                    body = createQueueRequest.body
                } else {
                    body = createQueueRequest['body'];
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
         * 创建队列定时扩缩容计划接口，对指定的队列创建定时规格变更计划。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createQueuePlan(createQueuePlanRequest?: CreateQueuePlanRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/queues/{queue_name}/plans",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let queueName;

            if (createQueuePlanRequest !== null && createQueuePlanRequest !== undefined) {
                if (createQueuePlanRequest instanceof CreateQueuePlanRequest) {
                    queueName = createQueuePlanRequest.queueName;
                    body = createQueuePlanRequest.body
                } else {
                    queueName = createQueuePlanRequest['queue_name'];
                    body = createQueuePlanRequest['body'];
                }
            }

        
            if (queueName === null || queueName === undefined) {
            throw new RequiredError('queueName','Required parameter queueName was null or undefined when calling createQueuePlan.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'queue_name': queueName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于增加队列属性, 一次可增加多个属性。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createQueueProperty(createQueuePropertyRequest?: CreateQueuePropertyRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/queues/{queue_name}/properties",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let queueName;

            if (createQueuePropertyRequest !== null && createQueuePropertyRequest !== undefined) {
                if (createQueuePropertyRequest instanceof CreateQueuePropertyRequest) {
                    queueName = createQueuePropertyRequest.queueName;
                    body = createQueuePropertyRequest.body
                } else {
                    queueName = createQueuePropertyRequest['queue_name'];
                    body = createQueuePropertyRequest['body'];
                }
            }

        
            if (queueName === null || queueName === undefined) {
            throw new RequiredError('queueName','Required parameter queueName was null or undefined when calling createQueueProperty.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'queue_name': queueName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该API用于删除跨源认证信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteAuthInfo(deleteAuthInfoRequest?: DeleteAuthInfoRequest) {
            const options = {
                method: "DELETE",
                url: "/v2.0/{project_id}/datasource/auth-infos/{auth_info_name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let authInfoName;

            if (deleteAuthInfoRequest !== null && deleteAuthInfoRequest !== undefined) {
                if (deleteAuthInfoRequest instanceof DeleteAuthInfoRequest) {
                    authInfoName = deleteAuthInfoRequest.authInfoName;
                } else {
                    authInfoName = deleteAuthInfoRequest['auth_info_name'];
                }
            }

        
            if (authInfoName === null || authInfoName === undefined) {
            throw new RequiredError('authInfoName','Required parameter authInfoName was null or undefined when calling deleteAuthInfo.');
            }

            options.pathParams = { 'auth_info_name': authInfoName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该API用于删除已创建的经典型跨源连接。
         * 说明：
         * 创建中的连接，无法删除。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteDatasourceConnection(deleteDatasourceConnectionRequest?: DeleteDatasourceConnectionRequest) {
            const options = {
                method: "DELETE",
                url: "/v2.0/{project_id}/datasource-connection/{connection_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let connectionId;

            if (deleteDatasourceConnectionRequest !== null && deleteDatasourceConnectionRequest !== undefined) {
                if (deleteDatasourceConnectionRequest instanceof DeleteDatasourceConnectionRequest) {
                    connectionId = deleteDatasourceConnectionRequest.connectionId;
                } else {
                    connectionId = deleteDatasourceConnectionRequest['connection_id'];
                }
            }

        
            if (connectionId === null || connectionId === undefined) {
            throw new RequiredError('connectionId','Required parameter connectionId was null or undefined when calling deleteDatasourceConnection.');
            }

            options.pathParams = { 'connection_id': connectionId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除弹性资源池
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteElasticResourcePool(deleteElasticResourcePoolRequest?: DeleteElasticResourcePoolRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/elastic-resource-pools/{elastic_resource_pool_name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let elasticResourcePoolName;

            if (deleteElasticResourcePoolRequest !== null && deleteElasticResourcePoolRequest !== undefined) {
                if (deleteElasticResourcePoolRequest instanceof DeleteElasticResourcePoolRequest) {
                    elasticResourcePoolName = deleteElasticResourcePoolRequest.elasticResourcePoolName;
                } else {
                    elasticResourcePoolName = deleteElasticResourcePoolRequest['elastic_resource_pool_name'];
                }
            }

        
            if (elasticResourcePoolName === null || elasticResourcePoolName === undefined) {
            throw new RequiredError('elasticResourcePoolName','Required parameter elasticResourcePoolName was null or undefined when calling deleteElasticResourcePool.');
            }

            options.pathParams = { 'elastic_resource_pool_name': elasticResourcePoolName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该API用于删除已创建的增强型跨源连接。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteEnhancedConnection(deleteEnhancedConnectionRequest?: DeleteEnhancedConnectionRequest) {
            const options = {
                method: "DELETE",
                url: "/v2.0/{project_id}/datasource/enhanced-connections/{connection_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let connectionId;

            if (deleteEnhancedConnectionRequest !== null && deleteEnhancedConnectionRequest !== undefined) {
                if (deleteEnhancedConnectionRequest instanceof DeleteEnhancedConnectionRequest) {
                    connectionId = deleteEnhancedConnectionRequest.connectionId;
                } else {
                    connectionId = deleteEnhancedConnectionRequest['connection_id'];
                }
            }

        
            if (connectionId === null || connectionId === undefined) {
            throw new RequiredError('connectionId','Required parameter connectionId was null or undefined when calling deleteEnhancedConnection.');
            }

            options.pathParams = { 'connection_id': connectionId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该API用于删除跨源需要的路由。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteEnhancedConnectionRoutes(deleteEnhancedConnectionRoutesRequest?: DeleteEnhancedConnectionRoutesRequest) {
            const options = {
                method: "DELETE",
                url: "/v2.0/{project_id}/datasource/enhanced-connections/{connection_id}/routes/{name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let connectionId;
            
            let name;

            if (deleteEnhancedConnectionRoutesRequest !== null && deleteEnhancedConnectionRoutesRequest !== undefined) {
                if (deleteEnhancedConnectionRoutesRequest instanceof DeleteEnhancedConnectionRoutesRequest) {
                    connectionId = deleteEnhancedConnectionRoutesRequest.connectionId;
                    name = deleteEnhancedConnectionRoutesRequest.name;
                } else {
                    connectionId = deleteEnhancedConnectionRoutesRequest['connection_id'];
                    name = deleteEnhancedConnectionRoutesRequest['name'];
                }
            }

        
            if (connectionId === null || connectionId === undefined) {
            throw new RequiredError('connectionId','Required parameter connectionId was null or undefined when calling deleteEnhancedConnectionRoutes.');
            }
            if (name === null || name === undefined) {
            throw new RequiredError('name','Required parameter name was null or undefined when calling deleteEnhancedConnectionRoutes.');
            }

            options.pathParams = { 'connection_id': connectionId,'name': name, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除全局变量。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteGlobalValue(deleteGlobalValueRequest?: DeleteGlobalValueRequest) {
            const options = {
                method: "DELETE",
                url: "/v1.0/{project_id}/variables/{var_name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let varName;

            if (deleteGlobalValueRequest !== null && deleteGlobalValueRequest !== undefined) {
                if (deleteGlobalValueRequest instanceof DeleteGlobalValueRequest) {
                    varName = deleteGlobalValueRequest.varName;
                } else {
                    varName = deleteGlobalValueRequest['var_name'];
                }
            }

        
            if (varName === null || varName === undefined) {
            throw new RequiredError('varName','Required parameter varName was null or undefined when calling deleteGlobalValue.');
            }

            options.pathParams = { 'var_name': varName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该API用于删除指定队列。
         * 说明：
         * 若指定队列正在执行任务，则不允许删除。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteQueue(deleteQueueRequest?: DeleteQueueRequest) {
            const options = {
                method: "DELETE",
                url: "/v1.0/{project_id}/queues/{queue_name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let queueName;

            if (deleteQueueRequest !== null && deleteQueueRequest !== undefined) {
                if (deleteQueueRequest instanceof DeleteQueueRequest) {
                    queueName = deleteQueueRequest.queueName;
                } else {
                    queueName = deleteQueueRequest['queue_name'];
                }
            }

        
            if (queueName === null || queueName === undefined) {
            throw new RequiredError('queueName','Required parameter queueName was null or undefined when calling deleteQueue.');
            }

            options.pathParams = { 'queue_name': queueName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该API用于删除指定ID的队列定时扩缩容计划。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteQueuePlan(deleteQueuePlanRequest?: DeleteQueuePlanRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/queues/{queue_name}/plans/{plan_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let planId;
            
            let queueName;

            if (deleteQueuePlanRequest !== null && deleteQueuePlanRequest !== undefined) {
                if (deleteQueuePlanRequest instanceof DeleteQueuePlanRequest) {
                    planId = deleteQueuePlanRequest.planId;
                    queueName = deleteQueuePlanRequest.queueName;
                } else {
                    planId = deleteQueuePlanRequest['plan_id'];
                    queueName = deleteQueuePlanRequest['queue_name'];
                }
            }

        
            if (planId === null || planId === undefined) {
            throw new RequiredError('planId','Required parameter planId was null or undefined when calling deleteQueuePlan.');
            }
            if (queueName === null || queueName === undefined) {
            throw new RequiredError('queueName','Required parameter queueName was null or undefined when calling deleteQueuePlan.');
            }

            options.pathParams = { 'plan_id': planId,'queue_name': queueName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于删除队列的属性，一次可删除多个属性值。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteQueueProperty(deleteQueuePropertyRequest?: DeleteQueuePropertyRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/queues/{queue_name}/properties",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let queueName;

            if (deleteQueuePropertyRequest !== null && deleteQueuePropertyRequest !== undefined) {
                if (deleteQueuePropertyRequest instanceof DeleteQueuePropertyRequest) {
                    queueName = deleteQueuePropertyRequest.queueName;
                    body = deleteQueuePropertyRequest.body
                } else {
                    queueName = deleteQueuePropertyRequest['queue_name'];
                    body = deleteQueuePropertyRequest['body'];
                }
            }

        
            if (queueName === null || queueName === undefined) {
            throw new RequiredError('queueName','Required parameter queueName was null or undefined when calling deleteQueueProperty.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'queue_name': queueName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该API用于删除某个project某个分组下的资源包
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteResource(deleteResourceRequest?: DeleteResourceRequest) {
            const options = {
                method: "DELETE",
                url: "/v2.0/{project_id}/resources/{resource_name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let resourceName;
            
            let group;

            if (deleteResourceRequest !== null && deleteResourceRequest !== undefined) {
                if (deleteResourceRequest instanceof DeleteResourceRequest) {
                    resourceName = deleteResourceRequest.resourceName;
                    group = deleteResourceRequest.group;
                } else {
                    resourceName = deleteResourceRequest['resource_name'];
                    group = deleteResourceRequest['group'];
                }
            }

        
            if (resourceName === null || resourceName === undefined) {
            throw new RequiredError('resourceName','Required parameter resourceName was null or undefined when calling deleteResource.');
            }
            if (group !== null && group !== undefined) {
                localVarQueryParameter['group'] = group;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'resource_name': resourceName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该API用于在增强型跨源中解绑已绑定的队列。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        disassociateConnectionQueue(disassociateConnectionQueueRequest?: DisassociateConnectionQueueRequest) {
            const options = {
                method: "POST",
                url: "/v2.0/{project_id}/datasource/enhanced-connections/{connection_id}/disassociate-queue",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let connectionId;

            if (disassociateConnectionQueueRequest !== null && disassociateConnectionQueueRequest !== undefined) {
                if (disassociateConnectionQueueRequest instanceof DisassociateConnectionQueueRequest) {
                    connectionId = disassociateConnectionQueueRequest.connectionId;
                    body = disassociateConnectionQueueRequest.body
                } else {
                    connectionId = disassociateConnectionQueueRequest['connection_id'];
                    body = disassociateConnectionQueueRequest['body'];
                }
            }

        
            if (connectionId === null || connectionId === undefined) {
            throw new RequiredError('connectionId','Required parameter connectionId was null or undefined when calling disassociateConnectionQueue.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'connection_id': connectionId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该API用于查询跨源认证信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAuthInfo(listAuthInfoRequest?: ListAuthInfoRequest) {
            const options = {
                method: "GET",
                url: "/v2.0/{project_id}/datasource/auth-infos",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let authInfoName;
            
            let offset;
            
            let limit;

            if (listAuthInfoRequest !== null && listAuthInfoRequest !== undefined) {
                if (listAuthInfoRequest instanceof ListAuthInfoRequest) {
                    authInfoName = listAuthInfoRequest.authInfoName;
                    offset = listAuthInfoRequest.offset;
                    limit = listAuthInfoRequest.limit;
                } else {
                    authInfoName = listAuthInfoRequest['auth_info_name'];
                    offset = listAuthInfoRequest['offset'];
                    limit = listAuthInfoRequest['limit'];
                }
            }

        
            if (authInfoName !== null && authInfoName !== undefined) {
                localVarQueryParameter['auth_info_name'] = authInfoName;
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
         * 该API用于查询可以使用的指定队列的所有用户名称。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDatabaseUsers(listDatabaseUsersRequest?: ListDatabaseUsersRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/{project_id}/databases/{database_name}/users",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let databaseName;

            if (listDatabaseUsersRequest !== null && listDatabaseUsersRequest !== undefined) {
                if (listDatabaseUsersRequest instanceof ListDatabaseUsersRequest) {
                    databaseName = listDatabaseUsersRequest.databaseName;
                } else {
                    databaseName = listDatabaseUsersRequest['database_name'];
                }
            }

        
            if (databaseName === null || databaseName === undefined) {
            throw new RequiredError('databaseName','Required parameter databaseName was null or undefined when calling listDatabaseUsers.');
            }

            options.pathParams = { 'database_name': databaseName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该API用于查询该用户已创建的经典型跨源连接列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDatasourceConnections(listDatasourceConnectionsRequest?: ListDatasourceConnectionsRequest) {
            const options = {
                method: "GET",
                url: "/v2.0/{project_id}/datasource-connection",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let tags;

            if (listDatasourceConnectionsRequest !== null && listDatasourceConnectionsRequest !== undefined) {
                if (listDatasourceConnectionsRequest instanceof ListDatasourceConnectionsRequest) {
                    tags = listDatasourceConnectionsRequest.tags;
                } else {
                    tags = listDatasourceConnectionsRequest['tags'];
                }
            }

        
            if (tags !== null && tags !== undefined) {
                localVarQueryParameter['tags'] = tags;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询弹性资源池所属队列
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listElasticResourcePoolQueues(listElasticResourcePoolQueuesRequest?: ListElasticResourcePoolQueuesRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/elastic-resource-pools/{elastic_resource_pool_name}/queues",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let elasticResourcePoolName;
            
            let limit;
            
            let offset;
            
            let queueName;

            if (listElasticResourcePoolQueuesRequest !== null && listElasticResourcePoolQueuesRequest !== undefined) {
                if (listElasticResourcePoolQueuesRequest instanceof ListElasticResourcePoolQueuesRequest) {
                    elasticResourcePoolName = listElasticResourcePoolQueuesRequest.elasticResourcePoolName;
                    limit = listElasticResourcePoolQueuesRequest.limit;
                    offset = listElasticResourcePoolQueuesRequest.offset;
                    queueName = listElasticResourcePoolQueuesRequest.queueName;
                } else {
                    elasticResourcePoolName = listElasticResourcePoolQueuesRequest['elastic_resource_pool_name'];
                    limit = listElasticResourcePoolQueuesRequest['limit'];
                    offset = listElasticResourcePoolQueuesRequest['offset'];
                    queueName = listElasticResourcePoolQueuesRequest['queue_name'];
                }
            }

        
            if (elasticResourcePoolName === null || elasticResourcePoolName === undefined) {
            throw new RequiredError('elasticResourcePoolName','Required parameter elasticResourcePoolName was null or undefined when calling listElasticResourcePoolQueues.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (queueName !== null && queueName !== undefined) {
                localVarQueryParameter['queue_name'] = queueName;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'elastic_resource_pool_name': elasticResourcePoolName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询当前弹性资源池扩缩容历史记录
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listElasticResourcePoolScaleRecords(listElasticResourcePoolScaleRecordsRequest?: ListElasticResourcePoolScaleRecordsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/elastic-resource-pools/{elastic_resource_pool_name}/scale-records",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let elasticResourcePoolName;
            
            let startTime;
            
            let endTime;
            
            let status;
            
            let offset;
            
            let limit;

            if (listElasticResourcePoolScaleRecordsRequest !== null && listElasticResourcePoolScaleRecordsRequest !== undefined) {
                if (listElasticResourcePoolScaleRecordsRequest instanceof ListElasticResourcePoolScaleRecordsRequest) {
                    elasticResourcePoolName = listElasticResourcePoolScaleRecordsRequest.elasticResourcePoolName;
                    startTime = listElasticResourcePoolScaleRecordsRequest.startTime;
                    endTime = listElasticResourcePoolScaleRecordsRequest.endTime;
                    status = listElasticResourcePoolScaleRecordsRequest.status;
                    offset = listElasticResourcePoolScaleRecordsRequest.offset;
                    limit = listElasticResourcePoolScaleRecordsRequest.limit;
                } else {
                    elasticResourcePoolName = listElasticResourcePoolScaleRecordsRequest['elastic_resource_pool_name'];
                    startTime = listElasticResourcePoolScaleRecordsRequest['start_time'];
                    endTime = listElasticResourcePoolScaleRecordsRequest['end_time'];
                    status = listElasticResourcePoolScaleRecordsRequest['status'];
                    offset = listElasticResourcePoolScaleRecordsRequest['offset'];
                    limit = listElasticResourcePoolScaleRecordsRequest['limit'];
                }
            }

        
            if (elasticResourcePoolName === null || elasticResourcePoolName === undefined) {
            throw new RequiredError('elasticResourcePoolName','Required parameter elasticResourcePoolName was null or undefined when calling listElasticResourcePoolScaleRecords.');
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'elastic_resource_pool_name': elasticResourcePoolName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询所有弹性资源池
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listElasticResourcePools(listElasticResourcePoolsRequest?: ListElasticResourcePoolsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/elastic-resource-pools",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let name;
            
            let offset;
            
            let status;
            
            let tags;

            if (listElasticResourcePoolsRequest !== null && listElasticResourcePoolsRequest !== undefined) {
                if (listElasticResourcePoolsRequest instanceof ListElasticResourcePoolsRequest) {
                    limit = listElasticResourcePoolsRequest.limit;
                    name = listElasticResourcePoolsRequest.name;
                    offset = listElasticResourcePoolsRequest.offset;
                    status = listElasticResourcePoolsRequest.status;
                    tags = listElasticResourcePoolsRequest.tags;
                } else {
                    limit = listElasticResourcePoolsRequest['limit'];
                    name = listElasticResourcePoolsRequest['name'];
                    offset = listElasticResourcePoolsRequest['offset'];
                    status = listElasticResourcePoolsRequest['status'];
                    tags = listElasticResourcePoolsRequest['tags'];
                }
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
            if (tags !== null && tags !== undefined) {
                localVarQueryParameter['tags'] = tags;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该API用于查询该用户已创建的增强型跨源连接列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listEnhancedConnections(listEnhancedConnectionsRequest?: ListEnhancedConnectionsRequest) {
            const options = {
                method: "GET",
                url: "/v2.0/{project_id}/datasource/enhanced-connections",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let name;
            
            let offset;
            
            let status;
            
            let tags;

            if (listEnhancedConnectionsRequest !== null && listEnhancedConnectionsRequest !== undefined) {
                if (listEnhancedConnectionsRequest instanceof ListEnhancedConnectionsRequest) {
                    limit = listEnhancedConnectionsRequest.limit;
                    name = listEnhancedConnectionsRequest.name;
                    offset = listEnhancedConnectionsRequest.offset;
                    status = listEnhancedConnectionsRequest.status;
                    tags = listEnhancedConnectionsRequest.tags;
                } else {
                    limit = listEnhancedConnectionsRequest['limit'];
                    name = listEnhancedConnectionsRequest['name'];
                    offset = listEnhancedConnectionsRequest['offset'];
                    status = listEnhancedConnectionsRequest['status'];
                    tags = listEnhancedConnectionsRequest['tags'];
                }
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
            if (tags !== null && tags !== undefined) {
                localVarQueryParameter['tags'] = tags;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询全局变量列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listGlobalValues(listGlobalValuesRequest?: ListGlobalValuesRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/{project_id}/variables",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let offset;

            if (listGlobalValuesRequest !== null && listGlobalValuesRequest !== undefined) {
                if (listGlobalValuesRequest instanceof ListGlobalValuesRequest) {
                    limit = listGlobalValuesRequest.limit;
                    offset = listGlobalValuesRequest.offset;
                } else {
                    limit = listGlobalValuesRequest['limit'];
                    offset = listGlobalValuesRequest['offset'];
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
         * 查看队列定时扩缩容计划接口，列出指定队列定时规格变更计划。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listQueuePlans(listQueuePlansRequest?: ListQueuePlansRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/queues/{queue_name}/plans",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let queueName;

            if (listQueuePlansRequest !== null && listQueuePlansRequest !== undefined) {
                if (listQueuePlansRequest instanceof ListQueuePlansRequest) {
                    queueName = listQueuePlansRequest.queueName;
                } else {
                    queueName = listQueuePlansRequest['queue_name'];
                }
            }

        
            if (queueName === null || queueName === undefined) {
            throw new RequiredError('queueName','Required parameter queueName was null or undefined when calling listQueuePlans.');
            }

            options.pathParams = { 'queue_name': queueName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取队列配置的属性
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listQueueProperty(listQueuePropertyRequest?: ListQueuePropertyRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/queues/{queue_name}/properties",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let queueName;
            
            let page;
            
            let pageSize;

            if (listQueuePropertyRequest !== null && listQueuePropertyRequest !== undefined) {
                if (listQueuePropertyRequest instanceof ListQueuePropertyRequest) {
                    queueName = listQueuePropertyRequest.queueName;
                    page = listQueuePropertyRequest.page;
                    pageSize = listQueuePropertyRequest.pageSize;
                } else {
                    queueName = listQueuePropertyRequest['queue_name'];
                    page = listQueuePropertyRequest['page'];
                    pageSize = listQueuePropertyRequest['page_size'];
                }
            }

        
            if (queueName === null || queueName === undefined) {
            throw new RequiredError('queueName','Required parameter queueName was null or undefined when calling listQueueProperty.');
            }
            if (page !== null && page !== undefined) {
                localVarQueryParameter['page'] = page;
            }
            if (pageSize !== null && pageSize !== undefined) {
                localVarQueryParameter['page_size'] = pageSize;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'queue_name': queueName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该API用于查询可以使用的指定队列的所有用户名称。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listQueueUsers(listQueueUsersRequest?: ListQueueUsersRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/{project_id}/queues/{queue_name}/users",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let queueName;

            if (listQueueUsersRequest !== null && listQueueUsersRequest !== undefined) {
                if (listQueueUsersRequest instanceof ListQueueUsersRequest) {
                    queueName = listQueueUsersRequest.queueName;
                } else {
                    queueName = listQueueUsersRequest['queue_name'];
                }
            }

        
            if (queueName === null || queueName === undefined) {
            throw new RequiredError('queueName','Required parameter queueName was null or undefined when calling listQueueUsers.');
            }

            options.pathParams = { 'queue_name': queueName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该API用于列出该project下所有的队列。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listQueues(listQueuesRequest?: ListQueuesRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/{project_id}/queues",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let queueType;
            
            let tags;
            
            let withChargeInfo;
            
            let withPriv;

            if (listQueuesRequest !== null && listQueuesRequest !== undefined) {
                if (listQueuesRequest instanceof ListQueuesRequest) {
                    queueType = listQueuesRequest.queueType;
                    tags = listQueuesRequest.tags;
                    withChargeInfo = listQueuesRequest.withChargeInfo;
                    withPriv = listQueuesRequest.withPriv;
                } else {
                    queueType = listQueuesRequest['queue_type'];
                    tags = listQueuesRequest['tags'];
                    withChargeInfo = listQueuesRequest['with-charge-info'];
                    withPriv = listQueuesRequest['with-priv'];
                }
            }

        
            if (queueType !== null && queueType !== undefined) {
                localVarQueryParameter['queue_type'] = queueType;
            }
            if (tags !== null && tags !== undefined) {
                localVarQueryParameter['tags'] = tags;
            }
            if (withChargeInfo !== null && withChargeInfo !== undefined) {
                localVarQueryParameter['with-charge-info'] = withChargeInfo;
            }
            if (withPriv !== null && withPriv !== undefined) {
                localVarQueryParameter['with-priv'] = withPriv;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该API用于查看某个project下的所有资源，其中包含Group。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listResources(listResourcesRequest?: ListResourcesRequest) {
            const options = {
                method: "GET",
                url: "/v2.0/{project_id}/resources",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let kind;
            
            let tags;

            if (listResourcesRequest !== null && listResourcesRequest !== undefined) {
                if (listResourcesRequest instanceof ListResourcesRequest) {
                    kind = listResourcesRequest.kind;
                    tags = listResourcesRequest.tags;
                } else {
                    kind = listResourcesRequest['kind'];
                    tags = listResourcesRequest['tags'];
                }
            }

        
            if (kind !== null && kind !== undefined) {
                localVarQueryParameter['kind'] = kind;
            }
            if (tags !== null && tags !== undefined) {
                localVarQueryParameter['tags'] = tags;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该API用于查询指定用户在表上的权限。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTablePrivileges(listTablePrivilegesRequest?: ListTablePrivilegesRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/{project_id}/databases/{database_name}/tables/{table_name}/users/{user_name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let databaseName;
            
            let tableName;
            
            let userName;

            if (listTablePrivilegesRequest !== null && listTablePrivilegesRequest !== undefined) {
                if (listTablePrivilegesRequest instanceof ListTablePrivilegesRequest) {
                    databaseName = listTablePrivilegesRequest.databaseName;
                    tableName = listTablePrivilegesRequest.tableName;
                    userName = listTablePrivilegesRequest.userName;
                } else {
                    databaseName = listTablePrivilegesRequest['database_name'];
                    tableName = listTablePrivilegesRequest['table_name'];
                    userName = listTablePrivilegesRequest['user_name'];
                }
            }

        
            if (databaseName === null || databaseName === undefined) {
            throw new RequiredError('databaseName','Required parameter databaseName was null or undefined when calling listTablePrivileges.');
            }
            if (tableName === null || tableName === undefined) {
            throw new RequiredError('tableName','Required parameter tableName was null or undefined when calling listTablePrivileges.');
            }
            if (userName === null || userName === undefined) {
            throw new RequiredError('userName','Required parameter userName was null or undefined when calling listTablePrivileges.');
            }

            options.pathParams = { 'database_name': databaseName,'table_name': tableName,'user_name': userName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该API用于查看有权访问指定表或表的列的所有用户。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTableUsers(listTableUsersRequest?: ListTableUsersRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/{project_id}/databases/{database_name}/tables/{table_name}/users",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let databaseName;
            
            let tableName;

            if (listTableUsersRequest !== null && listTableUsersRequest !== undefined) {
                if (listTableUsersRequest instanceof ListTableUsersRequest) {
                    databaseName = listTableUsersRequest.databaseName;
                    tableName = listTableUsersRequest.tableName;
                } else {
                    databaseName = listTableUsersRequest['database_name'];
                    tableName = listTableUsersRequest['table_name'];
                }
            }

        
            if (databaseName === null || databaseName === undefined) {
            throw new RequiredError('databaseName','Required parameter databaseName was null or undefined when calling listTableUsers.');
            }
            if (tableName === null || tableName === undefined) {
            throw new RequiredError('tableName','Required parameter tableName was null or undefined when calling listTableUsers.');
            }

            options.pathParams = { 'database_name': databaseName,'table_name': tableName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该API用于与其他用户共享指定的队列，可以给用户赋使用指定的队列的权限或者收回使用权限。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        registerAuthorizedQueue(registerAuthorizedQueueRequest?: RegisterAuthorizedQueueRequest) {
            const options = {
                method: "PUT",
                url: "/v1.0/{project_id}/queues/user-authorization",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (registerAuthorizedQueueRequest !== null && registerAuthorizedQueueRequest !== undefined) {
                if (registerAuthorizedQueueRequest instanceof RegisterAuthorizedQueueRequest) {
                    body = registerAuthorizedQueueRequest.body
                } else {
                    body = registerAuthorizedQueueRequest['body'];
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
         * 该功能用于重新启动队列、扩容队列、缩容队列。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        runQueueAction(runQueueActionRequest?: RunQueueActionRequest) {
            const options = {
                method: "PUT",
                url: "/v1.0/{project_id}/queues/{queue_name}/action",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let queueName;

            if (runQueueActionRequest !== null && runQueueActionRequest !== undefined) {
                if (runQueueActionRequest instanceof RunQueueActionRequest) {
                    queueName = runQueueActionRequest.queueName;
                    body = runQueueActionRequest.body
                } else {
                    queueName = runQueueActionRequest['queue_name'];
                    body = runQueueActionRequest['body'];
                }
            }

        
            if (queueName === null || queueName === undefined) {
            throw new RequiredError('queueName','Required parameter queueName was null or undefined when calling runQueueAction.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'queue_name': queueName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该API用于查询该用户指定的已创建的经典型跨源连接。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDatasourceConnection(showDatasourceConnectionRequest?: ShowDatasourceConnectionRequest) {
            const options = {
                method: "GET",
                url: "/v2.0/{project_id}/datasource-connection/{connection_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let connectionId;

            if (showDatasourceConnectionRequest !== null && showDatasourceConnectionRequest !== undefined) {
                if (showDatasourceConnectionRequest instanceof ShowDatasourceConnectionRequest) {
                    connectionId = showDatasourceConnectionRequest.connectionId;
                } else {
                    connectionId = showDatasourceConnectionRequest['connection_id'];
                }
            }

        
            if (connectionId === null || connectionId === undefined) {
            throw new RequiredError('connectionId','Required parameter connectionId was null or undefined when calling showDatasourceConnection.');
            }

            options.pathParams = { 'connection_id': connectionId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取dli委托信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDliAgency() {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/agency",
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
         * 该API用于查询该用户指定的已创建的增强型跨源连接。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showEnhancedConnection(showEnhancedConnectionRequest?: ShowEnhancedConnectionRequest) {
            const options = {
                method: "GET",
                url: "/v2.0/{project_id}/datasource/enhanced-connections/{connection_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let connectionId;

            if (showEnhancedConnectionRequest !== null && showEnhancedConnectionRequest !== undefined) {
                if (showEnhancedConnectionRequest instanceof ShowEnhancedConnectionRequest) {
                    connectionId = showEnhancedConnectionRequest.connectionId;
                } else {
                    connectionId = showEnhancedConnectionRequest['connection_id'];
                }
            }

        
            if (connectionId === null || connectionId === undefined) {
            throw new RequiredError('connectionId','Required parameter connectionId was null or undefined when calling showEnhancedConnection.');
            }

            options.pathParams = { 'connection_id': connectionId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该API用于查询增强型跨源连接授权的信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showEnhancedPrivilege(showEnhancedPrivilegeRequest?: ShowEnhancedPrivilegeRequest) {
            const options = {
                method: "GET",
                url: "/v2.0/{project_id}/datasource/enhanced-connections/{connection_id}/privileges",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let connectionId;

            if (showEnhancedPrivilegeRequest !== null && showEnhancedPrivilegeRequest !== undefined) {
                if (showEnhancedPrivilegeRequest instanceof ShowEnhancedPrivilegeRequest) {
                    connectionId = showEnhancedPrivilegeRequest.connectionId;
                } else {
                    connectionId = showEnhancedPrivilegeRequest['connection_id'];
                }
            }

        
            if (connectionId === null || connectionId === undefined) {
            throw new RequiredError('connectionId','Required parameter connectionId was null or undefined when calling showEnhancedPrivilege.');
            }

            options.pathParams = { 'connection_id': connectionId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该API用于在连通性测试提交后查询连通性结果。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showNodeConnectivity(showNodeConnectivityRequest?: ShowNodeConnectivityRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/{project_id}/queues/{queue_name}/connection-test/{task_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let queueName;
            
            let taskId;

            if (showNodeConnectivityRequest !== null && showNodeConnectivityRequest !== undefined) {
                if (showNodeConnectivityRequest instanceof ShowNodeConnectivityRequest) {
                    queueName = showNodeConnectivityRequest.queueName;
                    taskId = showNodeConnectivityRequest.taskId;
                } else {
                    queueName = showNodeConnectivityRequest['queue_name'];
                    taskId = showNodeConnectivityRequest['task_id'];
                }
            }

        
            if (queueName === null || queueName === undefined) {
            throw new RequiredError('queueName','Required parameter queueName was null or undefined when calling showNodeConnectivity.');
            }
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling showNodeConnectivity.');
            }

            options.pathParams = { 'queue_name': queueName,'task_id': taskId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取对象赋权用户的权限信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showObjectUser(showObjectUserRequest?: ShowObjectUserRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/{project_id}/authorization/privileges",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let modelObject;

            if (showObjectUserRequest !== null && showObjectUserRequest !== undefined) {
                if (showObjectUserRequest instanceof ShowObjectUserRequest) {
                    modelObject = showObjectUserRequest.modelObject;
                } else {
                    modelObject = showObjectUserRequest['object'];
                }
            }

        
            if (modelObject === null || modelObject === undefined) {
                throw new RequiredError('modelObject','Required parameter modelObject was null or undefined when calling showObjectUser.');
            }
            if (modelObject !== null && modelObject !== undefined) {
                localVarQueryParameter['object'] = modelObject;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该API用于列出该project下指定的队列详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showQueueDetail(showQueueDetailRequest?: ShowQueueDetailRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/{project_id}/queues/{queue_name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let queueName;

            if (showQueueDetailRequest !== null && showQueueDetailRequest !== undefined) {
                if (showQueueDetailRequest instanceof ShowQueueDetailRequest) {
                    queueName = showQueueDetailRequest.queueName;
                } else {
                    queueName = showQueueDetailRequest['queue_name'];
                }
            }

        
            if (queueName === null || queueName === undefined) {
            throw new RequiredError('queueName','Required parameter queueName was null or undefined when calling showQueueDetail.');
            }

            options.pathParams = { 'queue_name': queueName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该API用于查看某个project某个分组下的具体资源信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showResourceInfo(showResourceInfoRequest?: ShowResourceInfoRequest) {
            const options = {
                method: "GET",
                url: "/v2.0/{project_id}/resources/{resource_name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let resourceName;
            
            let group;

            if (showResourceInfoRequest !== null && showResourceInfoRequest !== undefined) {
                if (showResourceInfoRequest instanceof ShowResourceInfoRequest) {
                    resourceName = showResourceInfoRequest.resourceName;
                    group = showResourceInfoRequest.group;
                } else {
                    resourceName = showResourceInfoRequest['resource_name'];
                    group = showResourceInfoRequest['group'];
                }
            }

        
            if (resourceName === null || resourceName === undefined) {
            throw new RequiredError('resourceName','Required parameter resourceName was null or undefined when calling showResourceInfo.');
            }
            if (group !== null && group !== undefined) {
                localVarQueryParameter['group'] = group;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'resource_name': resourceName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该API用于更新跨源认证信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateAuthInfo(updateAuthInfoRequest?: UpdateAuthInfoRequest) {
            const options = {
                method: "PUT",
                url: "/v2.0/{project_id}/datasource/auth-infos",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (updateAuthInfoRequest !== null && updateAuthInfoRequest !== undefined) {
                if (updateAuthInfoRequest instanceof UpdateAuthInfoRequest) {
                    body = updateAuthInfoRequest.body
                } else {
                    body = updateAuthInfoRequest['body'];
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
         * 修改弹性资源池信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateElasticResourcePool(updateElasticResourcePoolRequest?: UpdateElasticResourcePoolRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/elastic-resource-pools/{elastic_resource_pool_name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let elasticResourcePoolName;

            if (updateElasticResourcePoolRequest !== null && updateElasticResourcePoolRequest !== undefined) {
                if (updateElasticResourcePoolRequest instanceof UpdateElasticResourcePoolRequest) {
                    elasticResourcePoolName = updateElasticResourcePoolRequest.elasticResourcePoolName;
                    body = updateElasticResourcePoolRequest.body
                } else {
                    elasticResourcePoolName = updateElasticResourcePoolRequest['elastic_resource_pool_name'];
                    body = updateElasticResourcePoolRequest['body'];
                }
            }

        
            if (elasticResourcePoolName === null || elasticResourcePoolName === undefined) {
            throw new RequiredError('elasticResourcePoolName','Required parameter elasticResourcePoolName was null or undefined when calling updateElasticResourcePool.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'elastic_resource_pool_name': elasticResourcePoolName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 设置弹性资源池指定队列的扩缩容策略信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateElasticResourcePoolQueueInfo(updateElasticResourcePoolQueueInfoRequest?: UpdateElasticResourcePoolQueueInfoRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/elastic-resource-pools/{elastic_resource_pool_name}/queues/{queue_name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let elasticResourcePoolName;
            
            let queueName;

            if (updateElasticResourcePoolQueueInfoRequest !== null && updateElasticResourcePoolQueueInfoRequest !== undefined) {
                if (updateElasticResourcePoolQueueInfoRequest instanceof UpdateElasticResourcePoolQueueInfoRequest) {
                    elasticResourcePoolName = updateElasticResourcePoolQueueInfoRequest.elasticResourcePoolName;
                    queueName = updateElasticResourcePoolQueueInfoRequest.queueName;
                    body = updateElasticResourcePoolQueueInfoRequest.body
                } else {
                    elasticResourcePoolName = updateElasticResourcePoolQueueInfoRequest['elastic_resource_pool_name'];
                    queueName = updateElasticResourcePoolQueueInfoRequest['queue_name'];
                    body = updateElasticResourcePoolQueueInfoRequest['body'];
                }
            }

        
            if (elasticResourcePoolName === null || elasticResourcePoolName === undefined) {
            throw new RequiredError('elasticResourcePoolName','Required parameter elasticResourcePoolName was null or undefined when calling updateElasticResourcePoolQueueInfo.');
            }
            if (queueName === null || queueName === undefined) {
            throw new RequiredError('queueName','Required parameter queueName was null or undefined when calling updateElasticResourcePoolQueueInfo.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'elastic_resource_pool_name': elasticResourcePoolName,'queue_name': queueName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改全局变量。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateGlobalValue(updateGlobalValueRequest?: UpdateGlobalValueRequest) {
            const options = {
                method: "PUT",
                url: "/v1.0/{project_id}/variables/{var_name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let varName;

            if (updateGlobalValueRequest !== null && updateGlobalValueRequest !== undefined) {
                if (updateGlobalValueRequest instanceof UpdateGlobalValueRequest) {
                    varName = updateGlobalValueRequest.varName;
                    body = updateGlobalValueRequest.body
                } else {
                    varName = updateGlobalValueRequest['var_name'];
                    body = updateGlobalValueRequest['body'];
                }
            }

        
            if (varName === null || varName === undefined) {
            throw new RequiredError('varName','Required parameter varName was null or undefined when calling updateGlobalValue.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'var_name': varName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 用于修改程序包的owner。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateGroupOrResourceOwner(updateGroupOrResourceOwnerRequest?: UpdateGroupOrResourceOwnerRequest) {
            const options = {
                method: "PUT",
                url: "/v2.0/{project_id}/resources/owner",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (updateGroupOrResourceOwnerRequest !== null && updateGroupOrResourceOwnerRequest !== undefined) {
                if (updateGroupOrResourceOwnerRequest instanceof UpdateGroupOrResourceOwnerRequest) {
                    body = updateGroupOrResourceOwnerRequest.body
                } else {
                    body = updateGroupOrResourceOwnerRequest['body'];
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
         * 该API用于在跨源中修改数据源主机信息，仅支持全量覆盖。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateHostMassage(updateHostMassageRequest?: UpdateHostMassageRequest) {
            const options = {
                method: "PUT",
                url: "/v2.0/{project_id}/datasource/enhanced-connections/{connection_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let connectionId;

            if (updateHostMassageRequest !== null && updateHostMassageRequest !== undefined) {
                if (updateHostMassageRequest instanceof UpdateHostMassageRequest) {
                    connectionId = updateHostMassageRequest.connectionId;
                    body = updateHostMassageRequest.body
                } else {
                    connectionId = updateHostMassageRequest['connection_id'];
                    body = updateHostMassageRequest['body'];
                }
            }

        
            if (connectionId === null || connectionId === undefined) {
            throw new RequiredError('connectionId','Required parameter connectionId was null or undefined when calling updateHostMassage.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'connection_id': connectionId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该功能用于修改包年包月队列网段。
         * 说明：
         * 如果待修改网段的队列中有正在提交或正在运行的作业，或者改队列已经绑定了增强型跨源，将不支持修改网段操作。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateQueueCidr(updateQueueCidrRequest?: UpdateQueueCidrRequest) {
            const options = {
                method: "PUT",
                url: "/v1.0/{project_id}/queues/{queue_name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let queueName;

            if (updateQueueCidrRequest !== null && updateQueueCidrRequest !== undefined) {
                if (updateQueueCidrRequest instanceof UpdateQueueCidrRequest) {
                    queueName = updateQueueCidrRequest.queueName;
                    body = updateQueueCidrRequest.body
                } else {
                    queueName = updateQueueCidrRequest['queue_name'];
                    body = updateQueueCidrRequest['body'];
                }
            }

        
            if (queueName === null || queueName === undefined) {
            throw new RequiredError('queueName','Required parameter queueName was null or undefined when calling updateQueueCidr.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'queue_name': queueName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新队列属性
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateQueueProperty(updateQueuePropertyRequest?: UpdateQueuePropertyRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/queues/{queue_name}/properties",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let queueName;

            if (updateQueuePropertyRequest !== null && updateQueuePropertyRequest !== undefined) {
                if (updateQueuePropertyRequest instanceof UpdateQueuePropertyRequest) {
                    queueName = updateQueuePropertyRequest.queueName;
                    body = updateQueuePropertyRequest.body
                } else {
                    queueName = updateQueuePropertyRequest['queue_name'];
                    body = updateQueuePropertyRequest['body'];
                }
            }

        
            if (queueName === null || queueName === undefined) {
            throw new RequiredError('queueName','Required parameter queueName was null or undefined when calling updateQueueProperty.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'queue_name': queueName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该API用于在project下上传file类型模块。
         * 说明： 上传同名file模块时，新模块将会覆盖旧模块。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        uploadFiles(uploadFilesRequest?: UploadFilesRequest) {
            const options = {
                method: "POST",
                url: "/v2.0/{project_id}/resources/files",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let USER_ID;

            if (uploadFilesRequest !== null && uploadFilesRequest !== undefined) {
                if (uploadFilesRequest instanceof UploadFilesRequest) {
                    body = uploadFilesRequest.body
                    USER_ID = uploadFilesRequest.USER_ID;
                } else {
                    body = uploadFilesRequest['body'];
                    USER_ID = uploadFilesRequest['USER-ID'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (USER_ID !== undefined && USER_ID !== null) {
                localVarHeaderParameter['USER-ID'] = String(USER_ID);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该API用于在project下上传jar类型分组资源。
         * 说明：上传同名资源模块时，新模块将会覆盖旧模块。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        uploadJars(uploadJarsRequest?: UploadJarsRequest) {
            const options = {
                method: "POST",
                url: "/v2.0/{project_id}/resources/jars",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let USER_ID;

            if (uploadJarsRequest !== null && uploadJarsRequest !== undefined) {
                if (uploadJarsRequest instanceof UploadJarsRequest) {
                    body = uploadJarsRequest.body
                    USER_ID = uploadJarsRequest.USER_ID;
                } else {
                    body = uploadJarsRequest['body'];
                    USER_ID = uploadJarsRequest['USER-ID'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (USER_ID !== undefined && USER_ID !== null) {
                localVarHeaderParameter['USER-ID'] = String(USER_ID);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该API用于在project下的上传pyfile类型模块。
         * 说明： 上传同名pyfile类型模块时，新模块将会覆盖旧模块。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        uploadPythonFiles(uploadPythonFilesRequest?: UploadPythonFilesRequest) {
            const options = {
                method: "POST",
                url: "/v2.0/{project_id}/resources/pyfiles",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let USER_ID;

            if (uploadPythonFilesRequest !== null && uploadPythonFilesRequest !== undefined) {
                if (uploadPythonFilesRequest instanceof UploadPythonFilesRequest) {
                    body = uploadPythonFilesRequest.body
                    USER_ID = uploadPythonFilesRequest.USER_ID;
                } else {
                    body = uploadPythonFilesRequest['body'];
                    USER_ID = uploadPythonFilesRequest['USER-ID'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (USER_ID !== undefined && USER_ID !== null) {
                localVarHeaderParameter['USER-ID'] = String(USER_ID);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该API用于上传分组资源到某个project下。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        uploadResources(uploadResourcesRequest?: UploadResourcesRequest) {
            const options = {
                method: "POST",
                url: "/v2.0/{project_id}/resources",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let USER_ID;

            if (uploadResourcesRequest !== null && uploadResourcesRequest !== undefined) {
                if (uploadResourcesRequest instanceof UploadResourcesRequest) {
                    body = uploadResourcesRequest.body
                    USER_ID = uploadResourcesRequest.USER_ID;
                } else {
                    body = uploadResourcesRequest['body'];
                    USER_ID = uploadResourcesRequest['USER-ID'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (USER_ID !== undefined && USER_ID !== null) {
                localVarHeaderParameter['USER-ID'] = String(USER_ID);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量删除任何状态的作业。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDeleteFlinkJobs(batchDeleteFlinkJobsRequest?: BatchDeleteFlinkJobsRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/streaming/jobs/delete",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (batchDeleteFlinkJobsRequest !== null && batchDeleteFlinkJobsRequest !== undefined) {
                if (batchDeleteFlinkJobsRequest instanceof BatchDeleteFlinkJobsRequest) {
                    body = batchDeleteFlinkJobsRequest.body
                } else {
                    body = batchDeleteFlinkJobsRequest['body'];
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
         * 触发批量运行Flink作业。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchRunFlinkJobs(batchRunFlinkJobsRequest?: BatchRunFlinkJobsRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/streaming/jobs/run",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (batchRunFlinkJobsRequest !== null && batchRunFlinkJobsRequest !== undefined) {
                if (batchRunFlinkJobsRequest instanceof BatchRunFlinkJobsRequest) {
                    body = batchRunFlinkJobsRequest.body
                } else {
                    body = batchRunFlinkJobsRequest['body'];
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
         * 该API用于处理边缘Flink作业状态上报信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        changeFlinkJobStatusReport(changeFlinkJobStatusReportRequest?: ChangeFlinkJobStatusReportRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/edgesrv/job-report",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (changeFlinkJobStatusReportRequest !== null && changeFlinkJobStatusReportRequest !== undefined) {
                if (changeFlinkJobStatusReportRequest instanceof ChangeFlinkJobStatusReportRequest) {
                    body = changeFlinkJobStatusReportRequest.body
                } else {
                    body = changeFlinkJobStatusReportRequest['body'];
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
         * 用户自定义作业目前支持jar格式，运行在独享集群中。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createFlinkJar(createFlinkJarRequest?: CreateFlinkJarRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/streaming/flink-jobs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createFlinkJarRequest !== null && createFlinkJarRequest !== undefined) {
                if (createFlinkJarRequest instanceof CreateFlinkJarRequest) {
                    body = createFlinkJarRequest.body
                } else {
                    body = createFlinkJarRequest['body'];
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
         * 通过POST方式，提交流式SQL作业，请求体为JSON格式。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createFlinkSqlJob(createFlinkSqlJobRequest?: CreateFlinkSqlJobRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/streaming/sql-jobs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createFlinkSqlJobRequest !== null && createFlinkSqlJobRequest !== undefined) {
                if (createFlinkSqlJobRequest instanceof CreateFlinkSqlJobRequest) {
                    body = createFlinkSqlJobRequest.body
                } else {
                    body = createFlinkSqlJobRequest['body'];
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
         * 在DLI服务中新建一个Flink作业模板，最多100个。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createFlinkTemplate(createFlinkTemplateRequest?: CreateFlinkTemplateRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/streaming/job-templates",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createFlinkTemplateRequest !== null && createFlinkTemplateRequest !== undefined) {
                if (createFlinkTemplateRequest instanceof CreateFlinkTemplateRequest) {
                    body = createFlinkTemplateRequest.body
                } else {
                    body = createFlinkTemplateRequest['body'];
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
         * 该API用于创建IEF消息通道
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createIefMessageChannel(createIefMessageChannelRequest?: CreateIefMessageChannelRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/edgesrv/message-channel",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createIefMessageChannelRequest !== null && createIefMessageChannelRequest !== undefined) {
                if (createIefMessageChannelRequest instanceof CreateIefMessageChannelRequest) {
                    body = createIefMessageChannelRequest.body
                } else {
                    body = createIefMessageChannelRequest['body'];
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
         * 该API用于处理IEF系统事件上报
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createIefSystemEvents(createIefSystemEventsRequest?: CreateIefSystemEventsRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/edgesrv/system-events",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createIefSystemEventsRequest !== null && createIefSystemEventsRequest !== undefined) {
                if (createIefSystemEventsRequest instanceof CreateIefSystemEventsRequest) {
                    body = createIefSystemEventsRequest.body
                } else {
                    body = createIefSystemEventsRequest['body'];
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
         * 生成flink SQL作业的静态流图
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createStreamGraph(createStreamGraphRequest?: CreateStreamGraphRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/streaming/jobs/{job_id}/gen-graph",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let jobId;

            if (createStreamGraphRequest !== null && createStreamGraphRequest !== undefined) {
                if (createStreamGraphRequest instanceof CreateStreamGraphRequest) {
                    jobId = createStreamGraphRequest.jobId;
                    body = createStreamGraphRequest.body
                } else {
                    jobId = createStreamGraphRequest['job_id'];
                    body = createStreamGraphRequest['body'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling createStreamGraph.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除任何状态的作业。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteFlinkJob(deleteFlinkJobRequest?: DeleteFlinkJobRequest) {
            const options = {
                method: "DELETE",
                url: "/v1.0/{project_id}/streaming/jobs/{job_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let jobId;

            if (deleteFlinkJobRequest !== null && deleteFlinkJobRequest !== undefined) {
                if (deleteFlinkJobRequest instanceof DeleteFlinkJobRequest) {
                    jobId = deleteFlinkJobRequest.jobId;
                } else {
                    jobId = deleteFlinkJobRequest['job_id'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling deleteFlinkJob.');
            }

            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除一个Flink作业模板，即使当前模板正在被作业使用，也允许删除。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteFlinkTemplate(deleteFlinkTemplateRequest?: DeleteFlinkTemplateRequest) {
            const options = {
                method: "DELETE",
                url: "/v1.0/{project_id}/streaming/job-templates/{template_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let templateId;

            if (deleteFlinkTemplateRequest !== null && deleteFlinkTemplateRequest !== undefined) {
                if (deleteFlinkTemplateRequest instanceof DeleteFlinkTemplateRequest) {
                    templateId = deleteFlinkTemplateRequest.templateId;
                } else {
                    templateId = deleteFlinkTemplateRequest['template_id'];
                }
            }

        
            if (templateId === null || templateId === undefined) {
            throw new RequiredError('templateId','Required parameter templateId was null or undefined when calling deleteFlinkTemplate.');
            }

            options.pathParams = { 'template_id': templateId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 通过POST方式，导出flink作业，请求体为JSON格式。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        exportFlinkJob(exportFlinkJobRequest?: ExportFlinkJobRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/streaming/jobs/export",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (exportFlinkJobRequest !== null && exportFlinkJobRequest !== undefined) {
                if (exportFlinkJobRequest instanceof ExportFlinkJobRequest) {
                    body = exportFlinkJobRequest.body
                } else {
                    body = exportFlinkJobRequest['body'];
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
         * 通过POST方式，导入flink作业，请求体为JSON格式。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        importFlinkJob(importFlinkJobRequest?: ImportFlinkJobRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/streaming/jobs/import",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (importFlinkJobRequest !== null && importFlinkJobRequest !== undefined) {
                if (importFlinkJobRequest instanceof ImportFlinkJobRequest) {
                    body = importFlinkJobRequest.body
                } else {
                    body = importFlinkJobRequest['body'];
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
         * 查询当前用户的作业列表，可以根据作业ID作为ID，查询大于ID或小于ID的限定条数的作业，默认查询全部状态的作业，也可以设定运行中或其他状态条件。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listFlinkJobs(listFlinkJobsRequest?: ListFlinkJobsRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/{project_id}/streaming/jobs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let jobType;
            
            let limit;
            
            let name;
            
            let offset;
            
            let order;
            
            let queueName;
            
            let rootJobId;
            
            let showDetail;
            
            let status;
            
            let sysEnterpriseProjectName;
            
            let tags;
            
            let userName;

            if (listFlinkJobsRequest !== null && listFlinkJobsRequest !== undefined) {
                if (listFlinkJobsRequest instanceof ListFlinkJobsRequest) {
                    jobType = listFlinkJobsRequest.jobType;
                    limit = listFlinkJobsRequest.limit;
                    name = listFlinkJobsRequest.name;
                    offset = listFlinkJobsRequest.offset;
                    order = listFlinkJobsRequest.order;
                    queueName = listFlinkJobsRequest.queueName;
                    rootJobId = listFlinkJobsRequest.rootJobId;
                    showDetail = listFlinkJobsRequest.showDetail;
                    status = listFlinkJobsRequest.status;
                    sysEnterpriseProjectName = listFlinkJobsRequest.sysEnterpriseProjectName;
                    tags = listFlinkJobsRequest.tags;
                    userName = listFlinkJobsRequest.userName;
                } else {
                    jobType = listFlinkJobsRequest['job_type'];
                    limit = listFlinkJobsRequest['limit'];
                    name = listFlinkJobsRequest['name'];
                    offset = listFlinkJobsRequest['offset'];
                    order = listFlinkJobsRequest['order'];
                    queueName = listFlinkJobsRequest['queue_name'];
                    rootJobId = listFlinkJobsRequest['root_job_id'];
                    showDetail = listFlinkJobsRequest['show_detail'];
                    status = listFlinkJobsRequest['status'];
                    sysEnterpriseProjectName = listFlinkJobsRequest['sys_enterprise_project_name'];
                    tags = listFlinkJobsRequest['tags'];
                    userName = listFlinkJobsRequest['user_name'];
                }
            }

        
            if (jobType !== null && jobType !== undefined) {
                localVarQueryParameter['job_type'] = jobType;
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
            if (order !== null && order !== undefined) {
                localVarQueryParameter['order'] = order;
            }
            if (queueName !== null && queueName !== undefined) {
                localVarQueryParameter['queue_name'] = queueName;
            }
            if (rootJobId !== null && rootJobId !== undefined) {
                localVarQueryParameter['root_job_id'] = rootJobId;
            }
            if (showDetail !== null && showDetail !== undefined) {
                localVarQueryParameter['show_detail'] = showDetail;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (sysEnterpriseProjectName !== null && sysEnterpriseProjectName !== undefined) {
                localVarQueryParameter['sys_enterprise_project_name'] = sysEnterpriseProjectName;
            }
            if (tags !== null && tags !== undefined) {
                localVarQueryParameter['tags'] = tags;
            }
            if (userName !== null && userName !== undefined) {
                localVarQueryParameter['user_name'] = userName;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询Flink作业模板列表。当前只支持查询用户自定义模板。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listFlinkTemplates(listFlinkTemplatesRequest?: ListFlinkTemplatesRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/{project_id}/streaming/job-templates",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let name;
            
            let offset;
            
            let order;
            
            let tags;

            if (listFlinkTemplatesRequest !== null && listFlinkTemplatesRequest !== undefined) {
                if (listFlinkTemplatesRequest instanceof ListFlinkTemplatesRequest) {
                    limit = listFlinkTemplatesRequest.limit;
                    name = listFlinkTemplatesRequest.name;
                    offset = listFlinkTemplatesRequest.offset;
                    order = listFlinkTemplatesRequest.order;
                    tags = listFlinkTemplatesRequest.tags;
                } else {
                    limit = listFlinkTemplatesRequest['limit'];
                    name = listFlinkTemplatesRequest['name'];
                    offset = listFlinkTemplatesRequest['offset'];
                    order = listFlinkTemplatesRequest['order'];
                    tags = listFlinkTemplatesRequest['tags'];
                }
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
            if (order !== null && order !== undefined) {
                localVarQueryParameter['order'] = order;
            }
            if (tags !== null && tags !== undefined) {
                localVarQueryParameter['tags'] = tags;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 用户主动授权OBS桶的操作权限给DLI服务, 用于保存用户作业的checkpoint、作业的运行日志等。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        registerBucket(registerBucketRequest?: RegisterBucketRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/dli/obs-authorize",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (registerBucketRequest !== null && registerBucketRequest !== undefined) {
                if (registerBucketRequest instanceof RegisterBucketRequest) {
                    body = registerBucketRequest.body
                } else {
                    body = registerBucketRequest['body'];
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
         * 该API用于处理IEF Flink作业action回调信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        runIefJobActionCallBack(runIefJobActionCallBackRequest?: RunIefJobActionCallBackRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/edgesrv/messages",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (runIefJobActionCallBackRequest !== null && runIefJobActionCallBackRequest !== undefined) {
                if (runIefJobActionCallBackRequest instanceof RunIefJobActionCallBackRequest) {
                    body = runIefJobActionCallBackRequest.body
                } else {
                    body = runIefJobActionCallBackRequest['body'];
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
         * 查询Flink作业执行计划。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showFlinkExecuteGraph(showFlinkExecuteGraphRequest?: ShowFlinkExecuteGraphRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/{project_id}/streaming/jobs/{job_id}/execute-graph",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let jobId;

            if (showFlinkExecuteGraphRequest !== null && showFlinkExecuteGraphRequest !== undefined) {
                if (showFlinkExecuteGraphRequest instanceof ShowFlinkExecuteGraphRequest) {
                    jobId = showFlinkExecuteGraphRequest.jobId;
                } else {
                    jobId = showFlinkExecuteGraphRequest['job_id'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling showFlinkExecuteGraph.');
            }

            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查看一个Flink作业的详情信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showFlinkJob(showFlinkJobRequest?: ShowFlinkJobRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/{project_id}/streaming/jobs/{job_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let jobId;

            if (showFlinkJobRequest !== null && showFlinkJobRequest !== undefined) {
                if (showFlinkJobRequest instanceof ShowFlinkJobRequest) {
                    jobId = showFlinkJobRequest.jobId;
                } else {
                    jobId = showFlinkJobRequest['job_id'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling showFlinkJob.');
            }

            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询Flink作业监控信息, 支持同时查询多个Flink作业的监控信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showFlinkMetric(showFlinkMetricRequest?: ShowFlinkMetricRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/streaming/jobs/metrics",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (showFlinkMetricRequest !== null && showFlinkMetricRequest !== undefined) {
                if (showFlinkMetricRequest instanceof ShowFlinkMetricRequest) {
                    body = showFlinkMetricRequest.body
                } else {
                    body = showFlinkMetricRequest['body'];
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
         * 批量停止正在运行的Flink作业。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        stopFlinkJobs(stopFlinkJobsRequest?: StopFlinkJobsRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/streaming/jobs/stop",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (stopFlinkJobsRequest !== null && stopFlinkJobsRequest !== undefined) {
                if (stopFlinkJobsRequest instanceof StopFlinkJobsRequest) {
                    body = stopFlinkJobsRequest.body
                } else {
                    body = stopFlinkJobsRequest['body'];
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
         * 更新用户自定义作业，目前支持jar格式，运行在独享集群中。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateFlinkJar(updateFlinkJarRequest?: UpdateFlinkJarRequest) {
            const options = {
                method: "PUT",
                url: "/v1.0/{project_id}/streaming/flink-jobs/{job_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let jobId;

            if (updateFlinkJarRequest !== null && updateFlinkJarRequest !== undefined) {
                if (updateFlinkJarRequest instanceof UpdateFlinkJarRequest) {
                    jobId = updateFlinkJarRequest.jobId;
                    body = updateFlinkJarRequest.body
                } else {
                    jobId = updateFlinkJarRequest['job_id'];
                    body = updateFlinkJarRequest['body'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling updateFlinkJar.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * Stream SQL的语法扩展了Apache Flink SQL。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateFlinkSql(updateFlinkSqlRequest?: UpdateFlinkSqlRequest) {
            const options = {
                method: "PUT",
                url: "/v1.0/{project_id}/streaming/sql-jobs/{job_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let jobId;

            if (updateFlinkSqlRequest !== null && updateFlinkSqlRequest !== undefined) {
                if (updateFlinkSqlRequest instanceof UpdateFlinkSqlRequest) {
                    jobId = updateFlinkSqlRequest.jobId;
                    body = updateFlinkSqlRequest.body
                } else {
                    jobId = updateFlinkSqlRequest['job_id'];
                    body = updateFlinkSqlRequest['body'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling updateFlinkSql.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 对DLI服务中已有的Flink作业模板进行更新。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateFlinkTemplate(updateFlinkTemplateRequest?: UpdateFlinkTemplateRequest) {
            const options = {
                method: "PUT",
                url: "/v1.0/{project_id}/streaming/job-templates/{template_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let templateId;

            if (updateFlinkTemplateRequest !== null && updateFlinkTemplateRequest !== undefined) {
                if (updateFlinkTemplateRequest instanceof UpdateFlinkTemplateRequest) {
                    templateId = updateFlinkTemplateRequest.templateId;
                    body = updateFlinkTemplateRequest.body
                } else {
                    templateId = updateFlinkTemplateRequest['template_id'];
                    body = updateFlinkTemplateRequest['body'];
                }
            }

        
            if (templateId === null || templateId === undefined) {
            throw new RequiredError('templateId','Required parameter templateId was null or undefined when calling updateFlinkTemplate.');
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
         * 该API用于取消批处理作业。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        cancelBatchJob(cancelBatchJobRequest?: CancelBatchJobRequest) {
            const options = {
                method: "DELETE",
                url: "/v2.0/{project_id}/batches/{batch_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let batchId;

            if (cancelBatchJobRequest !== null && cancelBatchJobRequest !== undefined) {
                if (cancelBatchJobRequest instanceof CancelBatchJobRequest) {
                    batchId = cancelBatchJobRequest.batchId;
                } else {
                    batchId = cancelBatchJobRequest['batch_id'];
                }
            }

        
            if (batchId === null || batchId === undefined) {
            throw new RequiredError('batchId','Required parameter batchId was null or undefined when calling cancelBatchJob.');
            }

            options.pathParams = { 'batch_id': batchId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该API用于在某个队列上创建作业。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createBatchJob(createBatchJobRequest?: CreateBatchJobRequest) {
            const options = {
                method: "POST",
                url: "/v2.0/{project_id}/batches",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let USER_ID;

            if (createBatchJobRequest !== null && createBatchJobRequest !== undefined) {
                if (createBatchJobRequest instanceof CreateBatchJobRequest) {
                    body = createBatchJobRequest.body
                    USER_ID = createBatchJobRequest.USER_ID;
                } else {
                    body = createBatchJobRequest['body'];
                    USER_ID = createBatchJobRequest['USER-ID'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (USER_ID !== undefined && USER_ID !== null) {
                localVarHeaderParameter['USER-ID'] = String(USER_ID);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该API用于查询Project下某队列批处理作业的列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listBatches(listBatchesRequest?: ListBatchesRequest) {
            const options = {
                method: "GET",
                url: "/v2.0/{project_id}/batches",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clusterName;
            
            let end;
            
            let from;
            
            let jobName;
            
            let jobId;
            
            let order;
            
            let queueName;
            
            let size;
            
            let start;
            
            let state;

            if (listBatchesRequest !== null && listBatchesRequest !== undefined) {
                if (listBatchesRequest instanceof ListBatchesRequest) {
                    clusterName = listBatchesRequest.clusterName;
                    end = listBatchesRequest.end;
                    from = listBatchesRequest.from;
                    jobName = listBatchesRequest.jobName;
                    jobId = listBatchesRequest.jobId;
                    order = listBatchesRequest.order;
                    queueName = listBatchesRequest.queueName;
                    size = listBatchesRequest.size;
                    start = listBatchesRequest.start;
                    state = listBatchesRequest.state;
                } else {
                    clusterName = listBatchesRequest['cluster_name'];
                    end = listBatchesRequest['end'];
                    from = listBatchesRequest['from'];
                    jobName = listBatchesRequest['job-name'];
                    jobId = listBatchesRequest['job-id'];
                    order = listBatchesRequest['order'];
                    queueName = listBatchesRequest['queue_name'];
                    size = listBatchesRequest['size'];
                    start = listBatchesRequest['start'];
                    state = listBatchesRequest['state'];
                }
            }

        
            if (clusterName !== null && clusterName !== undefined) {
                localVarQueryParameter['cluster_name'] = clusterName;
            }
            if (end !== null && end !== undefined) {
                localVarQueryParameter['end'] = end;
            }
            if (from !== null && from !== undefined) {
                localVarQueryParameter['from'] = from;
            }
            if (jobName !== null && jobName !== undefined) {
                localVarQueryParameter['job-name'] = jobName;
            }
            if (jobId !== null && jobId !== undefined) {
                localVarQueryParameter['job-id'] = jobId;
            }
            if (order !== null && order !== undefined) {
                localVarQueryParameter['order'] = order;
            }
            if (queueName !== null && queueName !== undefined) {
                localVarQueryParameter['queue_name'] = queueName;
            }
            if (size !== null && size !== undefined) {
                localVarQueryParameter['size'] = size;
            }
            if (start !== null && start !== undefined) {
                localVarQueryParameter['start'] = start;
            }
            if (state !== null && state !== undefined) {
                localVarQueryParameter['state'] = state;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该API用于根据批处理作业的id查询作业详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showBatchInfo(showBatchInfoRequest?: ShowBatchInfoRequest) {
            const options = {
                method: "GET",
                url: "/v2.0/{project_id}/batches/{batch_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let batchId;

            if (showBatchInfoRequest !== null && showBatchInfoRequest !== undefined) {
                if (showBatchInfoRequest instanceof ShowBatchInfoRequest) {
                    batchId = showBatchInfoRequest.batchId;
                } else {
                    batchId = showBatchInfoRequest['batch_id'];
                }
            }

        
            if (batchId === null || batchId === undefined) {
            throw new RequiredError('batchId','Required parameter batchId was null or undefined when calling showBatchInfo.');
            }

            options.pathParams = { 'batch_id': batchId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该API用于查询批处理作业的后台日志。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showBatchLog(showBatchLogRequest?: ShowBatchLogRequest) {
            const options = {
                method: "GET",
                url: "/v2.0/{project_id}/batches/{batch_id}/log",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let batchId;
            
            let from;
            
            let index;
            
            let size;
            
            let type;

            if (showBatchLogRequest !== null && showBatchLogRequest !== undefined) {
                if (showBatchLogRequest instanceof ShowBatchLogRequest) {
                    batchId = showBatchLogRequest.batchId;
                    from = showBatchLogRequest.from;
                    index = showBatchLogRequest.index;
                    size = showBatchLogRequest.size;
                    type = showBatchLogRequest.type;
                } else {
                    batchId = showBatchLogRequest['batch_id'];
                    from = showBatchLogRequest['from'];
                    index = showBatchLogRequest['index'];
                    size = showBatchLogRequest['size'];
                    type = showBatchLogRequest['type'];
                }
            }

        
            if (batchId === null || batchId === undefined) {
            throw new RequiredError('batchId','Required parameter batchId was null or undefined when calling showBatchLog.');
            }
            if (from !== null && from !== undefined) {
                localVarQueryParameter['from'] = from;
            }
            if (index !== null && index !== undefined) {
                localVarQueryParameter['index'] = index;
            }
            if (size !== null && size !== undefined) {
                localVarQueryParameter['size'] = size;
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'batch_id': batchId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该API用于查询批处理作业的状态。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showBatchState(showBatchStateRequest?: ShowBatchStateRequest) {
            const options = {
                method: "GET",
                url: "/v2.0/{project_id}/batches/{batch_id}/state",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let batchId;

            if (showBatchStateRequest !== null && showBatchStateRequest !== undefined) {
                if (showBatchStateRequest instanceof ShowBatchStateRequest) {
                    batchId = showBatchStateRequest.batchId;
                } else {
                    batchId = showBatchStateRequest['batch_id'];
                }
            }

        
            if (batchId === null || batchId === undefined) {
            throw new RequiredError('batchId','Required parameter batchId was null or undefined when calling showBatchState.');
            }

            options.pathParams = { 'batch_id': batchId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该API用于取消已经提交的作业，若作业已经执行结束或失败则无法取消。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        cancelSqlJob(cancelSqlJobRequest?: CancelSqlJobRequest) {
            const options = {
                method: "DELETE",
                url: "/v1.0/{project_id}/jobs/{job_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let jobId;

            if (cancelSqlJobRequest !== null && cancelSqlJobRequest !== undefined) {
                if (cancelSqlJobRequest instanceof CancelSqlJobRequest) {
                    jobId = cancelSqlJobRequest.jobId;
                } else {
                    jobId = cancelSqlJobRequest['job_id'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling cancelSqlJob.');
            }

            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该API用于检查SQL语法。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        checkSql(checkSqlRequest?: CheckSqlRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/jobs/check-sql",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (checkSqlRequest !== null && checkSqlRequest !== undefined) {
                if (checkSqlRequest instanceof CheckSqlRequest) {
                    body = checkSqlRequest.body
                } else {
                    body = checkSqlRequest['body'];
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
         * 该API用于新增数据库。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createDatabase(createDatabaseRequest?: CreateDatabaseRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/databases",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createDatabaseRequest !== null && createDatabaseRequest !== undefined) {
                if (createDatabaseRequest instanceof CreateDatabaseRequest) {
                    body = createDatabaseRequest.body
                } else {
                    body = createDatabaseRequest['body'];
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
         * 该API用于通过执行SQL语句的方式向队列提交作业。
         * 
         * 作业包含以下类型：DDL、DCL、IMPORT、QUERY和INSERT。其中，IMPORT与导入数据的功能一致，区别仅在于实现方式不同。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createSqlJob(createSqlJobRequest?: CreateSqlJobRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/jobs/submit-job",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createSqlJobRequest !== null && createSqlJobRequest !== undefined) {
                if (createSqlJobRequest instanceof CreateSqlJobRequest) {
                    body = createSqlJobRequest.body
                } else {
                    body = createSqlJobRequest['body'];
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
         * 该API用于创建新的表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createTable(createTableRequest?: CreateTableRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/databases/{database_name}/tables",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let databaseName;

            if (createTableRequest !== null && createTableRequest !== undefined) {
                if (createTableRequest instanceof CreateTableRequest) {
                    databaseName = createTableRequest.databaseName;
                    body = createTableRequest.body
                } else {
                    databaseName = createTableRequest['database_name'];
                    body = createTableRequest['body'];
                }
            }

        
            if (databaseName === null || databaseName === undefined) {
            throw new RequiredError('databaseName','Required parameter databaseName was null or undefined when calling createTable.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'database_name': databaseName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该API用于删除空数据库，若待删除的数据库中存在表，则需先删除其中的所有表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteDatabase(deleteDatabaseRequest?: DeleteDatabaseRequest) {
            const options = {
                method: "DELETE",
                url: "/v1.0/{project_id}/databases/{database_name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let databaseName;
            
            let async;
            
            let cascade;

            if (deleteDatabaseRequest !== null && deleteDatabaseRequest !== undefined) {
                if (deleteDatabaseRequest instanceof DeleteDatabaseRequest) {
                    databaseName = deleteDatabaseRequest.databaseName;
                    async = deleteDatabaseRequest.async;
                    cascade = deleteDatabaseRequest.cascade;
                } else {
                    databaseName = deleteDatabaseRequest['database_name'];
                    async = deleteDatabaseRequest['async'];
                    cascade = deleteDatabaseRequest['cascade'];
                }
            }

        
            if (databaseName === null || databaseName === undefined) {
            throw new RequiredError('databaseName','Required parameter databaseName was null or undefined when calling deleteDatabase.');
            }
            if (async !== null && async !== undefined) {
                localVarQueryParameter['async'] = async;
            }
            if (cascade !== null && cascade !== undefined) {
                localVarQueryParameter['cascade'] = cascade;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'database_name': databaseName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该API用于删除指定的表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteTable(deleteTableRequest?: DeleteTableRequest) {
            const options = {
                method: "DELETE",
                url: "/v1.0/{project_id}/databases/{database_name}/tables/{table_name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let databaseName;
            
            let tableName;
            
            let async;

            if (deleteTableRequest !== null && deleteTableRequest !== undefined) {
                if (deleteTableRequest instanceof DeleteTableRequest) {
                    databaseName = deleteTableRequest.databaseName;
                    tableName = deleteTableRequest.tableName;
                    async = deleteTableRequest.async;
                } else {
                    databaseName = deleteTableRequest['database_name'];
                    tableName = deleteTableRequest['table_name'];
                    async = deleteTableRequest['async'];
                }
            }

        
            if (databaseName === null || databaseName === undefined) {
            throw new RequiredError('databaseName','Required parameter databaseName was null or undefined when calling deleteTable.');
            }
            if (tableName === null || tableName === undefined) {
            throw new RequiredError('tableName','Required parameter tableName was null or undefined when calling deleteTable.');
            }
            if (async !== null && async !== undefined) {
                localVarQueryParameter['async'] = async;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'database_name': databaseName,'table_name': tableName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该API用于将SQL语句的查询结果导出到OBS对象存储中，只支持导出“QUERY”类型作业的查询结果。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        exportSqlJobResult(exportSqlJobResultRequest?: ExportSqlJobResultRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/jobs/{job_id}/export-result",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let jobId;

            if (exportSqlJobResultRequest !== null && exportSqlJobResultRequest !== undefined) {
                if (exportSqlJobResultRequest instanceof ExportSqlJobResultRequest) {
                    jobId = exportSqlJobResultRequest.jobId;
                    body = exportSqlJobResultRequest.body
                } else {
                    jobId = exportSqlJobResultRequest['job_id'];
                    body = exportSqlJobResultRequest['body'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling exportSqlJobResult.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该API用于将SQL语句的查询结果导出到OBS对象存储中，只支持导出“QUERY”类型作业的查询结果。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        exportTable(exportTableRequest?: ExportTableRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/jobs/export-table",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (exportTableRequest !== null && exportTableRequest !== undefined) {
                if (exportTableRequest instanceof ExportTableRequest) {
                    body = exportTableRequest.body
                } else {
                    body = exportTableRequest['body'];
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
         * 该API用于将数据从文件导入DLI或OBS表，目前仅支持将OBS上的数据导入DLI或OBS中。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        importTable(importTableRequest?: ImportTableRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/jobs/import-table",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (importTableRequest !== null && importTableRequest !== undefined) {
                if (importTableRequest instanceof ImportTableRequest) {
                    body = importTableRequest.body
                } else {
                    body = importTableRequest['body'];
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
         * 该API用于查询指定数据库下符合过滤条件的或所有的表信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAllTables(listAllTablesRequest?: ListAllTablesRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/{project_id}/databases/{database_name}/tables",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let databaseName;
            
            let currentPage;
            
            let keyword;
            
            let pageSize;
            
            let tableType;
            
            let withDetail;
            
            let withPriv;

            if (listAllTablesRequest !== null && listAllTablesRequest !== undefined) {
                if (listAllTablesRequest instanceof ListAllTablesRequest) {
                    databaseName = listAllTablesRequest.databaseName;
                    currentPage = listAllTablesRequest.currentPage;
                    keyword = listAllTablesRequest.keyword;
                    pageSize = listAllTablesRequest.pageSize;
                    tableType = listAllTablesRequest.tableType;
                    withDetail = listAllTablesRequest.withDetail;
                    withPriv = listAllTablesRequest.withPriv;
                } else {
                    databaseName = listAllTablesRequest['database_name'];
                    currentPage = listAllTablesRequest['current-page'];
                    keyword = listAllTablesRequest['keyword'];
                    pageSize = listAllTablesRequest['page-size'];
                    tableType = listAllTablesRequest['table-type'];
                    withDetail = listAllTablesRequest['with-detail'];
                    withPriv = listAllTablesRequest['with-priv'];
                }
            }

        
            if (databaseName === null || databaseName === undefined) {
            throw new RequiredError('databaseName','Required parameter databaseName was null or undefined when calling listAllTables.');
            }
            if (currentPage !== null && currentPage !== undefined) {
                localVarQueryParameter['current-page'] = currentPage;
            }
            if (keyword !== null && keyword !== undefined) {
                localVarQueryParameter['keyword'] = keyword;
            }
            if (pageSize !== null && pageSize !== undefined) {
                localVarQueryParameter['page-size'] = pageSize;
            }
            if (tableType !== null && tableType !== undefined) {
                localVarQueryParameter['table-type'] = tableType;
            }
            if (withDetail !== null && withDetail !== undefined) {
                localVarQueryParameter['with-detail'] = withDetail;
            }
            if (withPriv !== null && withPriv !== undefined) {
                localVarQueryParameter['with-priv'] = withPriv;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'database_name': databaseName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该API用于查询出所有的数据库信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDatabases(listDatabasesRequest?: ListDatabasesRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/{project_id}/databases",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let keyword;
            
            let limit;
            
            let offset;
            
            let tags;
            
            let withPriv;

            if (listDatabasesRequest !== null && listDatabasesRequest !== undefined) {
                if (listDatabasesRequest instanceof ListDatabasesRequest) {
                    keyword = listDatabasesRequest.keyword;
                    limit = listDatabasesRequest.limit;
                    offset = listDatabasesRequest.offset;
                    tags = listDatabasesRequest.tags;
                    withPriv = listDatabasesRequest.withPriv;
                } else {
                    keyword = listDatabasesRequest['keyword'];
                    limit = listDatabasesRequest['limit'];
                    offset = listDatabasesRequest['offset'];
                    tags = listDatabasesRequest['tags'];
                    withPriv = listDatabasesRequest['with-priv'];
                }
            }

        
            if (keyword !== null && keyword !== undefined) {
                localVarQueryParameter['keyword'] = keyword;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (tags !== null && tags !== undefined) {
                localVarQueryParameter['tags'] = tags;
            }
            if (withPriv !== null && withPriv !== undefined) {
                localVarQueryParameter['with-priv'] = withPriv;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该API用于查询当前工程下面的所有作业的信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSqlJobs(listSqlJobsRequest?: ListSqlJobsRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/{project_id}/jobs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let currentPage;
            
            let dbName;
            
            let end;
            
            let engineType;
            
            let jobStatus;
            
            let jobType;
            
            let order;
            
            let owner;
            
            let pageSize;
            
            let queueName;
            
            let sqlPattern;
            
            let start;
            
            let tableName;
            
            let tags;

            if (listSqlJobsRequest !== null && listSqlJobsRequest !== undefined) {
                if (listSqlJobsRequest instanceof ListSqlJobsRequest) {
                    currentPage = listSqlJobsRequest.currentPage;
                    dbName = listSqlJobsRequest.dbName;
                    end = listSqlJobsRequest.end;
                    engineType = listSqlJobsRequest.engineType;
                    jobStatus = listSqlJobsRequest.jobStatus;
                    jobType = listSqlJobsRequest.jobType;
                    order = listSqlJobsRequest.order;
                    owner = listSqlJobsRequest.owner;
                    pageSize = listSqlJobsRequest.pageSize;
                    queueName = listSqlJobsRequest.queueName;
                    sqlPattern = listSqlJobsRequest.sqlPattern;
                    start = listSqlJobsRequest.start;
                    tableName = listSqlJobsRequest.tableName;
                    tags = listSqlJobsRequest.tags;
                } else {
                    currentPage = listSqlJobsRequest['current-page'];
                    dbName = listSqlJobsRequest['db_name'];
                    end = listSqlJobsRequest['end'];
                    engineType = listSqlJobsRequest['engine-type'];
                    jobStatus = listSqlJobsRequest['job-status'];
                    jobType = listSqlJobsRequest['job-type'];
                    order = listSqlJobsRequest['order'];
                    owner = listSqlJobsRequest['owner'];
                    pageSize = listSqlJobsRequest['page-size'];
                    queueName = listSqlJobsRequest['queue_name'];
                    sqlPattern = listSqlJobsRequest['sql_pattern'];
                    start = listSqlJobsRequest['start'];
                    tableName = listSqlJobsRequest['table_name'];
                    tags = listSqlJobsRequest['tags'];
                }
            }

        
            if (currentPage !== null && currentPage !== undefined) {
                localVarQueryParameter['current-page'] = currentPage;
            }
            if (dbName !== null && dbName !== undefined) {
                localVarQueryParameter['db_name'] = dbName;
            }
            if (end !== null && end !== undefined) {
                localVarQueryParameter['end'] = end;
            }
            if (engineType !== null && engineType !== undefined) {
                localVarQueryParameter['engine-type'] = engineType;
            }
            if (jobStatus !== null && jobStatus !== undefined) {
                localVarQueryParameter['job-status'] = jobStatus;
            }
            if (jobType !== null && jobType !== undefined) {
                localVarQueryParameter['job-type'] = jobType;
            }
            if (order !== null && order !== undefined) {
                localVarQueryParameter['order'] = order;
            }
            if (owner !== null && owner !== undefined) {
                localVarQueryParameter['owner'] = owner;
            }
            if (pageSize !== null && pageSize !== undefined) {
                localVarQueryParameter['page-size'] = pageSize;
            }
            if (queueName !== null && queueName !== undefined) {
                localVarQueryParameter['queue_name'] = queueName;
            }
            if (sqlPattern !== null && sqlPattern !== undefined) {
                localVarQueryParameter['sql_pattern'] = sqlPattern;
            }
            if (start !== null && start !== undefined) {
                localVarQueryParameter['start'] = start;
            }
            if (tableName !== null && tableName !== undefined) {
                localVarQueryParameter['table_name'] = tableName;
            }
            if (tags !== null && tags !== undefined) {
                localVarQueryParameter['tags'] = tags;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该API用于在执行SQL查询语句的作业完成后，查看该作业执行的结果。目前仅支持查看“QUERY”类型作业的执行结果。
         * 该API只能查看前1000条的结果记录，若要查看全部的结果记录，需要先导出查询结果再进行查看。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        previewJobResult(previewJobResultRequest?: PreviewJobResultRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/{project_id}/jobs/{job_id}/preview",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let jobId;
            
            let queueName;

            if (previewJobResultRequest !== null && previewJobResultRequest !== undefined) {
                if (previewJobResultRequest instanceof PreviewJobResultRequest) {
                    jobId = previewJobResultRequest.jobId;
                    queueName = previewJobResultRequest.queueName;
                } else {
                    jobId = previewJobResultRequest['job_id'];
                    queueName = previewJobResultRequest['queue-name'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling previewJobResult.');
            }
            if (queueName !== null && queueName !== undefined) {
                localVarQueryParameter['queue-name'] = queueName;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该API用于描述指定表的元数据信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDescribeTable(showDescribeTableRequest?: ShowDescribeTableRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/{project_id}/databases/{database_name}/tables/{table_name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let databaseName;
            
            let tableName;

            if (showDescribeTableRequest !== null && showDescribeTableRequest !== undefined) {
                if (showDescribeTableRequest instanceof ShowDescribeTableRequest) {
                    databaseName = showDescribeTableRequest.databaseName;
                    tableName = showDescribeTableRequest.tableName;
                } else {
                    databaseName = showDescribeTableRequest['database_name'];
                    tableName = showDescribeTableRequest['table_name'];
                }
            }

        
            if (databaseName === null || databaseName === undefined) {
            throw new RequiredError('databaseName','Required parameter databaseName was null or undefined when calling showDescribeTable.');
            }
            if (tableName === null || tableName === undefined) {
            throw new RequiredError('tableName','Required parameter tableName was null or undefined when calling showDescribeTable.');
            }

            options.pathParams = { 'database_name': databaseName,'table_name': tableName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该API用于获取作业执行进度信息，如果作业正在执行，可以获取到子作业的信息，如果作业刚开始或者已经结束，不可以获取到子作业信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showJobProgress(showJobProgressRequest?: ShowJobProgressRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/jobs/{job_id}/progress",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let jobId;

            if (showJobProgressRequest !== null && showJobProgressRequest !== undefined) {
                if (showJobProgressRequest instanceof ShowJobProgressRequest) {
                    jobId = showJobProgressRequest.jobId;
                } else {
                    jobId = showJobProgressRequest['job_id'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling showJobProgress.');
            }

            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showPartitions(showPartitionsRequest?: ShowPartitionsRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/{project_id}/databases/{database_name}/tables/{table_name}/partitions",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let databaseName;
            
            let tableName;
            
            let limit;
            
            let offset;

            if (showPartitionsRequest !== null && showPartitionsRequest !== undefined) {
                if (showPartitionsRequest instanceof ShowPartitionsRequest) {
                    databaseName = showPartitionsRequest.databaseName;
                    tableName = showPartitionsRequest.tableName;
                    limit = showPartitionsRequest.limit;
                    offset = showPartitionsRequest.offset;
                } else {
                    databaseName = showPartitionsRequest['database_name'];
                    tableName = showPartitionsRequest['table_name'];
                    limit = showPartitionsRequest['limit'];
                    offset = showPartitionsRequest['offset'];
                }
            }

        
            if (databaseName === null || databaseName === undefined) {
            throw new RequiredError('databaseName','Required parameter databaseName was null or undefined when calling showPartitions.');
            }
            if (tableName === null || tableName === undefined) {
            throw new RequiredError('tableName','Required parameter tableName was null or undefined when calling showPartitions.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'database_name': databaseName,'table_name': tableName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该API用于查询作业的详细信息，如作业的databasename、tablename、file size和export mode等信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showSqlJobDetail(showSqlJobDetailRequest?: ShowSqlJobDetailRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/{project_id}/jobs/{job_id}/detail",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let jobId;

            if (showSqlJobDetailRequest !== null && showSqlJobDetailRequest !== undefined) {
                if (showSqlJobDetailRequest instanceof ShowSqlJobDetailRequest) {
                    jobId = showSqlJobDetailRequest.jobId;
                } else {
                    jobId = showSqlJobDetailRequest['job_id'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling showSqlJobDetail.');
            }

            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该API用于在作业提交后查询作业状态。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showSqlJobStatus(showSqlJobStatusRequest?: ShowSqlJobStatusRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/{project_id}/jobs/{job_id}/status",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let jobId;

            if (showSqlJobStatusRequest !== null && showSqlJobStatusRequest !== undefined) {
                if (showSqlJobStatusRequest instanceof ShowSqlJobStatusRequest) {
                    jobId = showSqlJobStatusRequest.jobId;
                } else {
                    jobId = showSqlJobStatusRequest['job_id'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling showSqlJobStatus.');
            }

            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该API用于用于预览表中前10行的内容。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showTableContent(showTableContentRequest?: ShowTableContentRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/{project_id}/databases/{database_name}/tables/{table_name}/preview",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let databaseName;
            
            let tableName;
            
            let mode;

            if (showTableContentRequest !== null && showTableContentRequest !== undefined) {
                if (showTableContentRequest instanceof ShowTableContentRequest) {
                    databaseName = showTableContentRequest.databaseName;
                    tableName = showTableContentRequest.tableName;
                    mode = showTableContentRequest.mode;
                } else {
                    databaseName = showTableContentRequest['database_name'];
                    tableName = showTableContentRequest['table_name'];
                    mode = showTableContentRequest['mode'];
                }
            }

        
            if (databaseName === null || databaseName === undefined) {
            throw new RequiredError('databaseName','Required parameter databaseName was null or undefined when calling showTableContent.');
            }
            if (tableName === null || tableName === undefined) {
            throw new RequiredError('tableName','Required parameter tableName was null or undefined when calling showTableContent.');
            }
            if (mode !== null && mode !== undefined) {
                localVarQueryParameter['mode'] = mode;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'database_name': databaseName,'table_name': tableName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 用于修改数据库的owner。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateDatabaseOwner(updateDatabaseOwnerRequest?: UpdateDatabaseOwnerRequest) {
            const options = {
                method: "PUT",
                url: "/v1.0/{project_id}/databases/{database_name}/owner",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let databaseName;

            if (updateDatabaseOwnerRequest !== null && updateDatabaseOwnerRequest !== undefined) {
                if (updateDatabaseOwnerRequest instanceof UpdateDatabaseOwnerRequest) {
                    databaseName = updateDatabaseOwnerRequest.databaseName;
                    body = updateDatabaseOwnerRequest.body
                } else {
                    databaseName = updateDatabaseOwnerRequest['database_name'];
                    body = updateDatabaseOwnerRequest['body'];
                }
            }

        
            if (databaseName === null || databaseName === undefined) {
            throw new RequiredError('databaseName','Required parameter databaseName was null or undefined when calling updateDatabaseOwner.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'database_name': databaseName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 用于修改表的owner。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateTableOwner(updateTableOwnerRequest?: UpdateTableOwnerRequest) {
            const options = {
                method: "PUT",
                url: "/v1.0/{project_id}/databases/{database_name}/tables/{table_name}/owner",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let databaseName;
            
            let tableName;

            if (updateTableOwnerRequest !== null && updateTableOwnerRequest !== undefined) {
                if (updateTableOwnerRequest instanceof UpdateTableOwnerRequest) {
                    databaseName = updateTableOwnerRequest.databaseName;
                    tableName = updateTableOwnerRequest.tableName;
                    body = updateTableOwnerRequest.body
                } else {
                    databaseName = updateTableOwnerRequest['database_name'];
                    tableName = updateTableOwnerRequest['table_name'];
                    body = updateTableOwnerRequest['body'];
                }
            }

        
            if (databaseName === null || databaseName === undefined) {
            throw new RequiredError('databaseName','Required parameter databaseName was null or undefined when calling updateTableOwner.');
            }
            if (tableName === null || tableName === undefined) {
            throw new RequiredError('tableName','Required parameter tableName was null or undefined when calling updateTableOwner.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'database_name': databaseName,'table_name': tableName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
    }
};

function newClient(client: HcClient): DliClient {
    return new DliClient(client);
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