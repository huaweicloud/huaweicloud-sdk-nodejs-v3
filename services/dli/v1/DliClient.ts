import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { AdvancedQueueProperty } from './model/AdvancedQueueProperty';
import { AssociateQueueToElasticResourcePoolRequest } from './model/AssociateQueueToElasticResourcePoolRequest';
import { AssociateQueueToElasticResourcePoolRequestBody } from './model/AssociateQueueToElasticResourcePoolRequestBody';
import { AssociateQueueToElasticResourcePoolResponse } from './model/AssociateQueueToElasticResourcePoolResponse';
import { AssociateQueueToEnhancedConnectionRequest } from './model/AssociateQueueToEnhancedConnectionRequest';
import { AssociateQueueToEnhancedConnectionRequestBody } from './model/AssociateQueueToEnhancedConnectionRequestBody';
import { AssociateQueueToEnhancedConnectionResponse } from './model/AssociateQueueToEnhancedConnectionResponse';
import { AuthInfo } from './model/AuthInfo';
import { AuthorizationPrivilege } from './model/AuthorizationPrivilege';
import { AvailableQueueInfo } from './model/AvailableQueueInfo';
import { BatchDeleteFlinkJobsRequest } from './model/BatchDeleteFlinkJobsRequest';
import { BatchDeleteFlinkJobsRequestBody } from './model/BatchDeleteFlinkJobsRequestBody';
import { BatchDeleteFlinkJobsResponse } from './model/BatchDeleteFlinkJobsResponse';
import { BatchDeleteQueuePlansRequest } from './model/BatchDeleteQueuePlansRequest';
import { BatchDeleteQueuePlansRequestBody } from './model/BatchDeleteQueuePlansRequestBody';
import { BatchDeleteQueuePlansResponse } from './model/BatchDeleteQueuePlansResponse';
import { BatchDeleteSqlJobTemplatesRequest } from './model/BatchDeleteSqlJobTemplatesRequest';
import { BatchDeleteSqlJobTemplatesRequestBody } from './model/BatchDeleteSqlJobTemplatesRequestBody';
import { BatchDeleteSqlJobTemplatesResponse } from './model/BatchDeleteSqlJobTemplatesResponse';
import { BatchRunFlinkJobsRequest } from './model/BatchRunFlinkJobsRequest';
import { BatchRunFlinkJobsRequestBody } from './model/BatchRunFlinkJobsRequestBody';
import { BatchRunFlinkJobsResponse } from './model/BatchRunFlinkJobsResponse';
import { BatchStopFlinkJobsRequest } from './model/BatchStopFlinkJobsRequest';
import { BatchStopFlinkJobsResponse } from './model/BatchStopFlinkJobsResponse';
import { CancelSparkJobRequest } from './model/CancelSparkJobRequest';
import { CancelSparkJobResponse } from './model/CancelSparkJobResponse';
import { CancelSqlJobRequest } from './model/CancelSqlJobRequest';
import { CancelSqlJobResponse } from './model/CancelSqlJobResponse';
import { Catalog } from './model/Catalog';
import { ChangeFlinkJobStatusReportRequestBody } from './model/ChangeFlinkJobStatusReportRequestBody';
import { CheckSqlRequest } from './model/CheckSqlRequest';
import { CheckSqlRequestBody } from './model/CheckSqlRequestBody';
import { CheckSqlResponse } from './model/CheckSqlResponse';
import { Column } from './model/Column';
import { CommonQueueProperty } from './model/CommonQueueProperty';
import { CreateAuthInfoRequest } from './model/CreateAuthInfoRequest';
import { CreateAuthInfoRequestBody } from './model/CreateAuthInfoRequestBody';
import { CreateAuthInfoResponse } from './model/CreateAuthInfoResponse';
import { CreateConnectivityTaskRequest } from './model/CreateConnectivityTaskRequest';
import { CreateConnectivityTaskRequestBody } from './model/CreateConnectivityTaskRequestBody';
import { CreateConnectivityTaskResponse } from './model/CreateConnectivityTaskResponse';
import { CreateDatabaseRequest } from './model/CreateDatabaseRequest';
import { CreateDatabaseRequestBody } from './model/CreateDatabaseRequestBody';
import { CreateDatabaseResponse } from './model/CreateDatabaseResponse';
import { CreateDatasourceConnectionRequest } from './model/CreateDatasourceConnectionRequest';
import { CreateDatasourceConnectionRequestBody } from './model/CreateDatasourceConnectionRequestBody';
import { CreateDatasourceConnectionResponse } from './model/CreateDatasourceConnectionResponse';
import { CreateDliAgencyRequest } from './model/CreateDliAgencyRequest';
import { CreateDliAgencyRequestBody } from './model/CreateDliAgencyRequestBody';
import { CreateDliAgencyResponse } from './model/CreateDliAgencyResponse';
import { CreateElasticResourcePoolRequest } from './model/CreateElasticResourcePoolRequest';
import { CreateElasticResourcePoolRequestBody } from './model/CreateElasticResourcePoolRequestBody';
import { CreateElasticResourcePoolResponse } from './model/CreateElasticResourcePoolResponse';
import { CreateEnhancedConnectionRequest } from './model/CreateEnhancedConnectionRequest';
import { CreateEnhancedConnectionRequestBody } from './model/CreateEnhancedConnectionRequestBody';
import { CreateEnhancedConnectionResponse } from './model/CreateEnhancedConnectionResponse';
import { CreateEnhancedConnectionRoutesRequest } from './model/CreateEnhancedConnectionRoutesRequest';
import { CreateEnhancedConnectionRoutesRequestBody } from './model/CreateEnhancedConnectionRoutesRequestBody';
import { CreateEnhancedConnectionRoutesResponse } from './model/CreateEnhancedConnectionRoutesResponse';
import { CreateFlinkJarJobRequest } from './model/CreateFlinkJarJobRequest';
import { CreateFlinkJarJobRequestBody } from './model/CreateFlinkJarJobRequestBody';
import { CreateFlinkJarJobResponse } from './model/CreateFlinkJarJobResponse';
import { CreateFlinkSqlJobGraphRequest } from './model/CreateFlinkSqlJobGraphRequest';
import { CreateFlinkSqlJobGraphRequestBody } from './model/CreateFlinkSqlJobGraphRequestBody';
import { CreateFlinkSqlJobGraphResponse } from './model/CreateFlinkSqlJobGraphResponse';
import { CreateFlinkSqlJobRequest } from './model/CreateFlinkSqlJobRequest';
import { CreateFlinkSqlJobRequestBody } from './model/CreateFlinkSqlJobRequestBody';
import { CreateFlinkSqlJobResponse } from './model/CreateFlinkSqlJobResponse';
import { CreateFlinkSqlJobTemplateRequest } from './model/CreateFlinkSqlJobTemplateRequest';
import { CreateFlinkSqlJobTemplateRequestBody } from './model/CreateFlinkSqlJobTemplateRequestBody';
import { CreateFlinkSqlJobTemplateResponse } from './model/CreateFlinkSqlJobTemplateResponse';
import { CreateGlobalVariableRequest } from './model/CreateGlobalVariableRequest';
import { CreateGlobalVariableRequestBody } from './model/CreateGlobalVariableRequestBody';
import { CreateGlobalVariableResponse } from './model/CreateGlobalVariableResponse';
import { CreateIefMessageChannelRequest } from './model/CreateIefMessageChannelRequest';
import { CreateIefMessageChannelRequestBody } from './model/CreateIefMessageChannelRequestBody';
import { CreateIefMessageChannelResponse } from './model/CreateIefMessageChannelResponse';
import { CreateIefSystemEventsRequest } from './model/CreateIefSystemEventsRequest';
import { CreateIefSystemEventsRequestBody } from './model/CreateIefSystemEventsRequestBody';
import { CreateIefSystemEventsResponse } from './model/CreateIefSystemEventsResponse';
import { CreateJobAuthInfoRequest } from './model/CreateJobAuthInfoRequest';
import { CreateJobAuthInfoRequestBody } from './model/CreateJobAuthInfoRequestBody';
import { CreateJobAuthInfoResponse } from './model/CreateJobAuthInfoResponse';
import { CreateQueuePlanRequest } from './model/CreateQueuePlanRequest';
import { CreateQueuePlanResponse } from './model/CreateQueuePlanResponse';
import { CreateQueuePropertyRequest } from './model/CreateQueuePropertyRequest';
import { CreateQueuePropertyRequestBody } from './model/CreateQueuePropertyRequestBody';
import { CreateQueuePropertyResponse } from './model/CreateQueuePropertyResponse';
import { CreateQueueRequest } from './model/CreateQueueRequest';
import { CreateQueueRequestBody } from './model/CreateQueueRequestBody';
import { CreateQueueResponse } from './model/CreateQueueResponse';
import { CreateRouteToEnhancedConnectionRequest } from './model/CreateRouteToEnhancedConnectionRequest';
import { CreateRouteToEnhancedConnectionRequestBody } from './model/CreateRouteToEnhancedConnectionRequestBody';
import { CreateRouteToEnhancedConnectionResponse } from './model/CreateRouteToEnhancedConnectionResponse';
import { CreateSparkJobRequest } from './model/CreateSparkJobRequest';
import { CreateSparkJobRequestBody } from './model/CreateSparkJobRequestBody';
import { CreateSparkJobResponse } from './model/CreateSparkJobResponse';
import { CreateSparkJobTemplateRequest } from './model/CreateSparkJobTemplateRequest';
import { CreateSparkJobTemplateRequestBody } from './model/CreateSparkJobTemplateRequestBody';
import { CreateSparkJobTemplateResponse } from './model/CreateSparkJobTemplateResponse';
import { CreateSqlJobRequest } from './model/CreateSqlJobRequest';
import { CreateSqlJobRequestBody } from './model/CreateSqlJobRequestBody';
import { CreateSqlJobResponse } from './model/CreateSqlJobResponse';
import { CreateSqlJobTemplateRequest } from './model/CreateSqlJobTemplateRequest';
import { CreateSqlJobTemplateRequestBody } from './model/CreateSqlJobTemplateRequestBody';
import { CreateSqlJobTemplateResponse } from './model/CreateSqlJobTemplateResponse';
import { CreateTableRequest } from './model/CreateTableRequest';
import { CreateTableRequestBody } from './model/CreateTableRequestBody';
import { CreateTableResponse } from './model/CreateTableResponse';
import { DataAuthorizationPrivilege } from './model/DataAuthorizationPrivilege';
import { Database } from './model/Database';
import { DatabaseUserPrivilege } from './model/DatabaseUserPrivilege';
import { DatasourceConnection } from './model/DatasourceConnection';
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
import { DeleteFlinkSqlJobTemplateRequest } from './model/DeleteFlinkSqlJobTemplateRequest';
import { DeleteFlinkSqlJobTemplateResponse } from './model/DeleteFlinkSqlJobTemplateResponse';
import { DeleteGlobalVariableRequest } from './model/DeleteGlobalVariableRequest';
import { DeleteGlobalVariableResponse } from './model/DeleteGlobalVariableResponse';
import { DeleteJobAuthInfoRequest } from './model/DeleteJobAuthInfoRequest';
import { DeleteJobAuthInfoResponse } from './model/DeleteJobAuthInfoResponse';
import { DeleteJobResourceRequest } from './model/DeleteJobResourceRequest';
import { DeleteJobResourceResponse } from './model/DeleteJobResourceResponse';
import { DeleteQueuePlanRequest } from './model/DeleteQueuePlanRequest';
import { DeleteQueuePlanResponse } from './model/DeleteQueuePlanResponse';
import { DeleteQueuePropertyRequest } from './model/DeleteQueuePropertyRequest';
import { DeleteQueuePropertyRequestBody } from './model/DeleteQueuePropertyRequestBody';
import { DeleteQueuePropertyResponse } from './model/DeleteQueuePropertyResponse';
import { DeleteQueueRequest } from './model/DeleteQueueRequest';
import { DeleteQueueResponse } from './model/DeleteQueueResponse';
import { DeleteRouteFromEnhancedConnectionRequest } from './model/DeleteRouteFromEnhancedConnectionRequest';
import { DeleteRouteFromEnhancedConnectionResponse } from './model/DeleteRouteFromEnhancedConnectionResponse';
import { DeleteTableRequest } from './model/DeleteTableRequest';
import { DeleteTableResponse } from './model/DeleteTableResponse';
import { DisassociateQueueFromEnhancedConnectionRequest } from './model/DisassociateQueueFromEnhancedConnectionRequest';
import { DisassociateQueueFromEnhancedConnectionRequestBody } from './model/DisassociateQueueFromEnhancedConnectionRequestBody';
import { DisassociateQueueFromEnhancedConnectionResponse } from './model/DisassociateQueueFromEnhancedConnectionResponse';
import { ElasticResourcePool } from './model/ElasticResourcePool';
import { ElasticResourcePoolQueue } from './model/ElasticResourcePoolQueue';
import { ElasticResourcePoolScaleRecord } from './model/ElasticResourcePoolScaleRecord';
import { EnhancedConnection } from './model/EnhancedConnection';
import { EnhancedConnectionHost } from './model/EnhancedConnectionHost';
import { EnhancedConnectionPrivilege } from './model/EnhancedConnectionPrivilege';
import { EnhancedConnectionResource } from './model/EnhancedConnectionResource';
import { ExecuteFlinkJobSavepointRequest } from './model/ExecuteFlinkJobSavepointRequest';
import { ExecuteFlinkJobSavepointRequestBody } from './model/ExecuteFlinkJobSavepointRequestBody';
import { ExecuteFlinkJobSavepointResponse } from './model/ExecuteFlinkJobSavepointResponse';
import { ExportFlinkJobsRequest } from './model/ExportFlinkJobsRequest';
import { ExportFlinkJobsRequestBody } from './model/ExportFlinkJobsRequestBody';
import { ExportFlinkJobsResponse } from './model/ExportFlinkJobsResponse';
import { ExportSqlJobResultRequest } from './model/ExportSqlJobResultRequest';
import { ExportSqlJobResultRequestBody } from './model/ExportSqlJobResultRequestBody';
import { ExportSqlJobResultResponse } from './model/ExportSqlJobResultResponse';
import { ExportTableRequest } from './model/ExportTableRequest';
import { ExportTableRequestBody } from './model/ExportTableRequestBody';
import { ExportTableResponse } from './model/ExportTableResponse';
import { FlinkJob } from './model/FlinkJob';
import { FlinkJobConfig } from './model/FlinkJobConfig';
import { FlinkJobExecutionGraph } from './model/FlinkJobExecutionGraph';
import { FlinkJobList } from './model/FlinkJobList';
import { FlinkJobMetricInfo } from './model/FlinkJobMetricInfo';
import { FlinkJobStatus } from './model/FlinkJobStatus';
import { FlinkJobUpdateTime } from './model/FlinkJobUpdateTime';
import { FlinkMetric } from './model/FlinkMetric';
import { FlinkMetricList } from './model/FlinkMetricList';
import { FlinkSqlJobTemplate } from './model/FlinkSqlJobTemplate';
import { FlinkSqlJobTemplateId } from './model/FlinkSqlJobTemplateId';
import { FlinkSqlJobTemplateList } from './model/FlinkSqlJobTemplateList';
import { FlinkSuccessResponse } from './model/FlinkSuccessResponse';
import { FlinkTemplate } from './model/FlinkTemplate';
import { GlobalVariable } from './model/GlobalVariable';
import { IefEvent } from './model/IefEvent';
import { ImportFlinkJobSavepointRequest } from './model/ImportFlinkJobSavepointRequest';
import { ImportFlinkJobSavepointRequestBody } from './model/ImportFlinkJobSavepointRequestBody';
import { ImportFlinkJobSavepointResponse } from './model/ImportFlinkJobSavepointResponse';
import { ImportFlinkJobsRequest } from './model/ImportFlinkJobsRequest';
import { ImportFlinkJobsRequestBody } from './model/ImportFlinkJobsRequestBody';
import { ImportFlinkJobsResponse } from './model/ImportFlinkJobsResponse';
import { ImportTableRequest } from './model/ImportTableRequest';
import { ImportTableRequestBody } from './model/ImportTableRequestBody';
import { ImportTableResponse } from './model/ImportTableResponse';
import { Job } from './model/Job';
import { JobMap } from './model/JobMap';
import { JobResource } from './model/JobResource';
import { JobResourcesGroup } from './model/JobResourcesGroup';
import { ListAuthInfoRequest } from './model/ListAuthInfoRequest';
import { ListAuthInfoResponse } from './model/ListAuthInfoResponse';
import { ListAuthorizationPrivilegesRequest } from './model/ListAuthorizationPrivilegesRequest';
import { ListAuthorizationPrivilegesResponse } from './model/ListAuthorizationPrivilegesResponse';
import { ListCatalogsRequest } from './model/ListCatalogsRequest';
import { ListCatalogsResponse } from './model/ListCatalogsResponse';
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
import { ListEnhancedConnectionsRequest } from './model/ListEnhancedConnectionsRequest';
import { ListEnhancedConnectionsResponse } from './model/ListEnhancedConnectionsResponse';
import { ListFlinkJobsRequest } from './model/ListFlinkJobsRequest';
import { ListFlinkJobsResponse } from './model/ListFlinkJobsResponse';
import { ListFlinkSqlJobTemplatesRequest } from './model/ListFlinkSqlJobTemplatesRequest';
import { ListFlinkSqlJobTemplatesResponse } from './model/ListFlinkSqlJobTemplatesResponse';
import { ListGlobalVariablesRequest } from './model/ListGlobalVariablesRequest';
import { ListGlobalVariablesResponse } from './model/ListGlobalVariablesResponse';
import { ListJobAuthInfosRequest } from './model/ListJobAuthInfosRequest';
import { ListJobAuthInfosResponse } from './model/ListJobAuthInfosResponse';
import { ListJobResourcesRequest } from './model/ListJobResourcesRequest';
import { ListJobResourcesResponse } from './model/ListJobResourcesResponse';
import { ListPartitionsRequest } from './model/ListPartitionsRequest';
import { ListPartitionsResponse } from './model/ListPartitionsResponse';
import { ListQueuePlansRequest } from './model/ListQueuePlansRequest';
import { ListQueuePlansResponse } from './model/ListQueuePlansResponse';
import { ListQueuePropertiesRequest } from './model/ListQueuePropertiesRequest';
import { ListQueuePropertiesResponse } from './model/ListQueuePropertiesResponse';
import { ListQueueUsersRequest } from './model/ListQueueUsersRequest';
import { ListQueueUsersResponse } from './model/ListQueueUsersResponse';
import { ListQueuesRequest } from './model/ListQueuesRequest';
import { ListQueuesResponse } from './model/ListQueuesResponse';
import { ListSparkJobTemplatesRequest } from './model/ListSparkJobTemplatesRequest';
import { ListSparkJobTemplatesResponse } from './model/ListSparkJobTemplatesResponse';
import { ListSparkJobsRequest } from './model/ListSparkJobsRequest';
import { ListSparkJobsResponse } from './model/ListSparkJobsResponse';
import { ListSqlJobTemplatesRequest } from './model/ListSqlJobTemplatesRequest';
import { ListSqlJobTemplatesResponse } from './model/ListSqlJobTemplatesResponse';
import { ListSqlJobsRequest } from './model/ListSqlJobsRequest';
import { ListSqlJobsResponse } from './model/ListSqlJobsResponse';
import { ListSqlSampleTemplatesRequest } from './model/ListSqlSampleTemplatesRequest';
import { ListSqlSampleTemplatesResponse } from './model/ListSqlSampleTemplatesResponse';
import { ListTablePrivilegesRequest } from './model/ListTablePrivilegesRequest';
import { ListTablePrivilegesResponse } from './model/ListTablePrivilegesResponse';
import { ListTableUsersRequest } from './model/ListTableUsersRequest';
import { ListTableUsersResponse } from './model/ListTableUsersResponse';
import { ListTablesRequest } from './model/ListTablesRequest';
import { ListTablesResponse } from './model/ListTablesResponse';
import { Metric } from './model/Metric';
import { PackageResource } from './model/PackageResource';
import { PackageResourceGroup } from './model/PackageResourceGroup';
import { PackageResourceMoudle } from './model/PackageResourceMoudle';
import { Partition } from './model/Partition';
import { PartitionList } from './model/PartitionList';
import { PreviewSqlJobResultRequest } from './model/PreviewSqlJobResultRequest';
import { PreviewSqlJobResultResponse } from './model/PreviewSqlJobResultResponse';
import { PreviewTableRequest } from './model/PreviewTableRequest';
import { PreviewTableResponse } from './model/PreviewTableResponse';
import { Privilege } from './model/Privilege';
import { Queue } from './model/Queue';
import { QueuePlan } from './model/QueuePlan';
import { QueuePlanRequestBody } from './model/QueuePlanRequestBody';
import { QueueProperty } from './model/QueueProperty';
import { QueueScalingPolicy } from './model/QueueScalingPolicy';
import { QueueUserPrivilege } from './model/QueueUserPrivilege';
import { QuotaInfo } from './model/QuotaInfo';
import { QuotaList } from './model/QuotaList';
import { RegisterAuthorizedQueueRequest } from './model/RegisterAuthorizedQueueRequest';
import { RegisterAuthorizedQueueRequestBody } from './model/RegisterAuthorizedQueueRequestBody';
import { RegisterAuthorizedQueueResponse } from './model/RegisterAuthorizedQueueResponse';
import { RegisterBucketRequest } from './model/RegisterBucketRequest';
import { RegisterBucketRequestBody } from './model/RegisterBucketRequestBody';
import { RegisterBucketResponse } from './model/RegisterBucketResponse';
import { RunAuthorizationActionRequest } from './model/RunAuthorizationActionRequest';
import { RunAuthorizationActionRequestBody } from './model/RunAuthorizationActionRequestBody';
import { RunAuthorizationActionResponse } from './model/RunAuthorizationActionResponse';
import { RunCatalogActionRequest } from './model/RunCatalogActionRequest';
import { RunCatalogActionRequestBody } from './model/RunCatalogActionRequestBody';
import { RunCatalogActionResponse } from './model/RunCatalogActionResponse';
import { RunDataAuthorizationActionRequest } from './model/RunDataAuthorizationActionRequest';
import { RunDataAuthorizationActionRequestBody } from './model/RunDataAuthorizationActionRequestBody';
import { RunDataAuthorizationActionResponse } from './model/RunDataAuthorizationActionResponse';
import { RunIefJobActionCallBackRequest } from './model/RunIefJobActionCallBackRequest';
import { RunIefJobActionCallBackRequestBody } from './model/RunIefJobActionCallBackRequestBody';
import { RunIefJobActionCallBackResponse } from './model/RunIefJobActionCallBackResponse';
import { RunQueueActionRequest } from './model/RunQueueActionRequest';
import { RunQueueActionRequestBody } from './model/RunQueueActionRequestBody';
import { RunQueueActionResponse } from './model/RunQueueActionResponse';
import { ShowCatalogRequest } from './model/ShowCatalogRequest';
import { ShowCatalogResponse } from './model/ShowCatalogResponse';
import { ShowConnectivityTaskRequest } from './model/ShowConnectivityTaskRequest';
import { ShowConnectivityTaskResponse } from './model/ShowConnectivityTaskResponse';
import { ShowDatasourceConnectionRequest } from './model/ShowDatasourceConnectionRequest';
import { ShowDatasourceConnectionResponse } from './model/ShowDatasourceConnectionResponse';
import { ShowDliAgencyRequest } from './model/ShowDliAgencyRequest';
import { ShowDliAgencyResponse } from './model/ShowDliAgencyResponse';
import { ShowEnhancedConnectionPrivilegeRequest } from './model/ShowEnhancedConnectionPrivilegeRequest';
import { ShowEnhancedConnectionPrivilegeResponse } from './model/ShowEnhancedConnectionPrivilegeResponse';
import { ShowEnhancedConnectionRequest } from './model/ShowEnhancedConnectionRequest';
import { ShowEnhancedConnectionResponse } from './model/ShowEnhancedConnectionResponse';
import { ShowFlinkJobExecutionGraphRequest } from './model/ShowFlinkJobExecutionGraphRequest';
import { ShowFlinkJobExecutionGraphResponse } from './model/ShowFlinkJobExecutionGraphResponse';
import { ShowFlinkJobRequest } from './model/ShowFlinkJobRequest';
import { ShowFlinkJobResponse } from './model/ShowFlinkJobResponse';
import { ShowFlinkMetricRequest } from './model/ShowFlinkMetricRequest';
import { ShowFlinkMetricRequestBody } from './model/ShowFlinkMetricRequestBody';
import { ShowFlinkMetricResponse } from './model/ShowFlinkMetricResponse';
import { ShowJobResourceRequest } from './model/ShowJobResourceRequest';
import { ShowJobResourceResponse } from './model/ShowJobResourceResponse';
import { ShowQueueRequest } from './model/ShowQueueRequest';
import { ShowQueueResponse } from './model/ShowQueueResponse';
import { ShowQuotaRequest } from './model/ShowQuotaRequest';
import { ShowQuotaResponse } from './model/ShowQuotaResponse';
import { ShowSparkJobLogRequest } from './model/ShowSparkJobLogRequest';
import { ShowSparkJobLogResponse } from './model/ShowSparkJobLogResponse';
import { ShowSparkJobRequest } from './model/ShowSparkJobRequest';
import { ShowSparkJobResponse } from './model/ShowSparkJobResponse';
import { ShowSparkJobStatusRequest } from './model/ShowSparkJobStatusRequest';
import { ShowSparkJobStatusResponse } from './model/ShowSparkJobStatusResponse';
import { ShowSparkJobTemplateRequest } from './model/ShowSparkJobTemplateRequest';
import { ShowSparkJobTemplateResponse } from './model/ShowSparkJobTemplateResponse';
import { ShowSqlJobDetailRequest } from './model/ShowSqlJobDetailRequest';
import { ShowSqlJobDetailResponse } from './model/ShowSqlJobDetailResponse';
import { ShowSqlJobProgressRequest } from './model/ShowSqlJobProgressRequest';
import { ShowSqlJobProgressResponse } from './model/ShowSqlJobProgressResponse';
import { ShowSqlJobStatusRequest } from './model/ShowSqlJobStatusRequest';
import { ShowSqlJobStatusResponse } from './model/ShowSqlJobStatusResponse';
import { ShowTableRequest } from './model/ShowTableRequest';
import { ShowTableResponse } from './model/ShowTableResponse';
import { SparkJob } from './model/SparkJob';
import { SparkJobTemplate } from './model/SparkJobTemplate';
import { SparkJobTemplateDetail } from './model/SparkJobTemplateDetail';
import { SqlJob } from './model/SqlJob';
import { SqlJobTemplate } from './model/SqlJobTemplate';
import { SqlSampleTemplate } from './model/SqlSampleTemplate';
import { State } from './model/State';
import { StopFlinkJobsRequestBody } from './model/StopFlinkJobsRequestBody';
import { SubJob } from './model/SubJob';
import { Table } from './model/Table';
import { TablePrivilege } from './model/TablePrivilege';
import { TableUserPrivilege } from './model/TableUserPrivilege';
import { Tag } from './model/Tag';
import { UpdateAuthInfoRequest } from './model/UpdateAuthInfoRequest';
import { UpdateAuthInfoRequestBody } from './model/UpdateAuthInfoRequestBody';
import { UpdateAuthInfoResponse } from './model/UpdateAuthInfoResponse';
import { UpdateDatabaseOwnerRequest } from './model/UpdateDatabaseOwnerRequest';
import { UpdateDatabaseOwnerResponse } from './model/UpdateDatabaseOwnerResponse';
import { UpdateElasticResourcePoolQueueRequest } from './model/UpdateElasticResourcePoolQueueRequest';
import { UpdateElasticResourcePoolQueueRequestBody } from './model/UpdateElasticResourcePoolQueueRequestBody';
import { UpdateElasticResourcePoolQueueResponse } from './model/UpdateElasticResourcePoolQueueResponse';
import { UpdateElasticResourcePoolRequest } from './model/UpdateElasticResourcePoolRequest';
import { UpdateElasticResourcePoolRequestBody } from './model/UpdateElasticResourcePoolRequestBody';
import { UpdateElasticResourcePoolResponse } from './model/UpdateElasticResourcePoolResponse';
import { UpdateEnhancedConnectionRequest } from './model/UpdateEnhancedConnectionRequest';
import { UpdateEnhancedConnectionRequestBody } from './model/UpdateEnhancedConnectionRequestBody';
import { UpdateEnhancedConnectionResponse } from './model/UpdateEnhancedConnectionResponse';
import { UpdateFlinkJarJobRequest } from './model/UpdateFlinkJarJobRequest';
import { UpdateFlinkJarJobRequestBody } from './model/UpdateFlinkJarJobRequestBody';
import { UpdateFlinkJarJobResponse } from './model/UpdateFlinkJarJobResponse';
import { UpdateFlinkJobStatusReportRequest } from './model/UpdateFlinkJobStatusReportRequest';
import { UpdateFlinkJobStatusReportResponse } from './model/UpdateFlinkJobStatusReportResponse';
import { UpdateFlinkSqlJobRequest } from './model/UpdateFlinkSqlJobRequest';
import { UpdateFlinkSqlJobRequestBody } from './model/UpdateFlinkSqlJobRequestBody';
import { UpdateFlinkSqlJobResponse } from './model/UpdateFlinkSqlJobResponse';
import { UpdateFlinkSqlJobTemplateRequest } from './model/UpdateFlinkSqlJobTemplateRequest';
import { UpdateFlinkSqlJobTemplateRequestBody } from './model/UpdateFlinkSqlJobTemplateRequestBody';
import { UpdateFlinkSqlJobTemplateResponse } from './model/UpdateFlinkSqlJobTemplateResponse';
import { UpdateGlobalVariableRequest } from './model/UpdateGlobalVariableRequest';
import { UpdateGlobalVariableRequestBody } from './model/UpdateGlobalVariableRequestBody';
import { UpdateGlobalVariableResponse } from './model/UpdateGlobalVariableResponse';
import { UpdateJobAuthInfoRequest } from './model/UpdateJobAuthInfoRequest';
import { UpdateJobAuthInfoRequestBody } from './model/UpdateJobAuthInfoRequestBody';
import { UpdateJobAuthInfoResponse } from './model/UpdateJobAuthInfoResponse';
import { UpdateJobResourceOwnerRequest } from './model/UpdateJobResourceOwnerRequest';
import { UpdateJobResourceOwnerRequestBody } from './model/UpdateJobResourceOwnerRequestBody';
import { UpdateJobResourceOwnerResponse } from './model/UpdateJobResourceOwnerResponse';
import { UpdateOwnerRequestBody } from './model/UpdateOwnerRequestBody';
import { UpdateQueueCidrRequest } from './model/UpdateQueueCidrRequest';
import { UpdateQueueCidrRequestBody } from './model/UpdateQueueCidrRequestBody';
import { UpdateQueueCidrResponse } from './model/UpdateQueueCidrResponse';
import { UpdateQueuePlanRequest } from './model/UpdateQueuePlanRequest';
import { UpdateQueuePlanResponse } from './model/UpdateQueuePlanResponse';
import { UpdateQueuePropertyRequest } from './model/UpdateQueuePropertyRequest';
import { UpdateQueuePropertyRequestBody } from './model/UpdateQueuePropertyRequestBody';
import { UpdateQueuePropertyResponse } from './model/UpdateQueuePropertyResponse';
import { UpdateSparkJobTemplateRequest } from './model/UpdateSparkJobTemplateRequest';
import { UpdateSparkJobTemplateRequestBody } from './model/UpdateSparkJobTemplateRequestBody';
import { UpdateSparkJobTemplateResponse } from './model/UpdateSparkJobTemplateResponse';
import { UpdateSqlJobTemplateRequest } from './model/UpdateSqlJobTemplateRequest';
import { UpdateSqlJobTemplateRequestBody } from './model/UpdateSqlJobTemplateRequestBody';
import { UpdateSqlJobTemplateResponse } from './model/UpdateSqlJobTemplateResponse';
import { UpdateTableOwnerRequest } from './model/UpdateTableOwnerRequest';
import { UpdateTableOwnerResponse } from './model/UpdateTableOwnerResponse';
import { UploadFileJobResourcesRequest } from './model/UploadFileJobResourcesRequest';
import { UploadFileJobResourcesResponse } from './model/UploadFileJobResourcesResponse';
import { UploadJarJobResourcesRequest } from './model/UploadJarJobResourcesRequest';
import { UploadJarJobResourcesResponse } from './model/UploadJarJobResourcesResponse';
import { UploadJobResourcesDetail } from './model/UploadJobResourcesDetail';
import { UploadJobResourcesRequest } from './model/UploadJobResourcesRequest';
import { UploadJobResourcesRequestBody } from './model/UploadJobResourcesRequestBody';
import { UploadJobResourcesResponse } from './model/UploadJobResourcesResponse';
import { UploadPythonFileJobResourcesRequest } from './model/UploadPythonFileJobResourcesRequest';
import { UploadPythonFileJobResourcesResponse } from './model/UploadPythonFileJobResourcesResponse';
import { UploadResourcesRequestBody } from './model/UploadResourcesRequestBody';

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
     * 关联队列到弹性资源池
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 关联队列到弹性资源池
     * @param {string} elasticResourcePoolName 弹性资源池名称
     * @param {AssociateQueueToElasticResourcePoolRequestBody} associateQueueToElasticResourcePoolRequestBody 
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
     * 该API用于在已创建的增强型跨源中绑定队列。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 绑定队列
     * @param {string} connectionId 连接ID，用于标识跨源连接的UUID。
     * @param {AssociateQueueToEnhancedConnectionRequestBody} associateQueueToEnhancedConnectionRequestBody 需要使用跨源的队列名列表。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public associateQueueToEnhancedConnection(associateQueueToEnhancedConnectionRequest?: AssociateQueueToEnhancedConnectionRequest): Promise<AssociateQueueToEnhancedConnectionResponse> {
        const options = ParamCreater().associateQueueToEnhancedConnection(associateQueueToEnhancedConnectionRequest);

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
     * @param {BatchDeleteQueuePlansRequestBody} batchDeleteQueuePlansRequestBody 待删除的队列扩缩容计划的ID列表。
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
     * 该API用于创建跨源认证。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建跨源认证
     * @param {CreateAuthInfoRequestBody} createAuthInfoRequestBody 
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
     * 创建地址连通性请求API接口，往指定集群发送地址连通性测试请求，并将测试地址插入表内
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建地址连通性请求
     * @param {string} queueName 队列名称
     * @param {CreateConnectivityTaskRequestBody} createConnectivityTaskRequestBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createConnectivityTask(createConnectivityTaskRequest?: CreateConnectivityTaskRequest): Promise<CreateConnectivityTaskResponse> {
        const options = ParamCreater().createConnectivityTask(createConnectivityTaskRequest);

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
     * @param {CreateDatasourceConnectionRequestBody} createDatasourceConnectionRequestBody 创建经典型跨源连接的请求body体。
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
     * @param {CreateDliAgencyRequestBody} [createDliAgencyRequestBody] 
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
     * @param {CreateElasticResourcePoolRequestBody} createElasticResourcePoolRequestBody 
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
     * @param {CreateEnhancedConnectionRequestBody} createEnhancedConnectionRequestBody 创建增强型跨源连接的请求body体。
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
     * @param {CreateEnhancedConnectionRoutesRequestBody} [createEnhancedConnectionRoutesRequestBody] 
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
     * @param {CreateGlobalVariableRequestBody} createGlobalVariableRequestBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createGlobalVariable(createGlobalVariableRequest?: CreateGlobalVariableRequest): Promise<CreateGlobalVariableResponse> {
        const options = ParamCreater().createGlobalVariable(createGlobalVariableRequest);

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
     * @param {CreateJobAuthInfoRequestBody} createJobAuthInfoRequestBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createJobAuthInfo(createJobAuthInfoRequest?: CreateJobAuthInfoRequest): Promise<CreateJobAuthInfoResponse> {
        const options = ParamCreater().createJobAuthInfo(createJobAuthInfoRequest);

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
     * @param {CreateQueueRequestBody} createQueueRequestBody 创建队列请求body体。
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
     * @param {QueuePlanRequestBody} createQueuePlanRequestBody 创建扩缩容计划请求body体。
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
     * @param {CreateQueuePropertyRequestBody} createQueuePropertyRequestBody 待增加属性key及属性值
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
     * 该API用于创建跨源需要的路由。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建路由
     * @param {string} connectionId 连接ID，用于标识跨源连接的UUID。
     * @param {CreateRouteToEnhancedConnectionRequestBody} [createRouteToEnhancedConnectionRequestBody] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createRouteToEnhancedConnection(createRouteToEnhancedConnectionRequest?: CreateRouteToEnhancedConnectionRequest): Promise<CreateRouteToEnhancedConnectionResponse> {
        const options = ParamCreater().createRouteToEnhancedConnection(createRouteToEnhancedConnectionRequest);

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
    public deleteGlobalVariable(deleteGlobalVariableRequest?: DeleteGlobalVariableRequest): Promise<DeleteGlobalVariableResponse> {
        const options = ParamCreater().deleteGlobalVariable(deleteGlobalVariableRequest);

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
    public deleteJobAuthInfo(deleteJobAuthInfoRequest?: DeleteJobAuthInfoRequest): Promise<DeleteJobAuthInfoResponse> {
        const options = ParamCreater().deleteJobAuthInfo(deleteJobAuthInfoRequest);

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
    public deleteJobResource(deleteJobResourceRequest?: DeleteJobResourceRequest): Promise<DeleteJobResourceResponse> {
        const options = ParamCreater().deleteJobResource(deleteJobResourceRequest);

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
     * @param {DeleteQueuePropertyRequestBody} deleteQueuePropertiesRequestBody 待删除属性keys值 范围如下： computeEngine.maxInstance computeEngine.maxPrefetchInstance job.maxConcurrent
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
    public deleteRouteFromEnhancedConnection(deleteRouteFromEnhancedConnectionRequest?: DeleteRouteFromEnhancedConnectionRequest): Promise<DeleteRouteFromEnhancedConnectionResponse> {
        const options = ParamCreater().deleteRouteFromEnhancedConnection(deleteRouteFromEnhancedConnectionRequest);

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
     * @param {DisassociateQueueFromEnhancedConnectionRequestBody} disassociateQueueFromEnhancedConnectionRequestBody 需要使用跨源的队列名列表。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public disassociateQueueFromEnhancedConnection(disassociateQueueFromEnhancedConnectionRequest?: DisassociateQueueFromEnhancedConnectionRequest): Promise<DisassociateQueueFromEnhancedConnectionResponse> {
        const options = ParamCreater().disassociateQueueFromEnhancedConnection(disassociateQueueFromEnhancedConnectionRequest);

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
     * 获取对象赋权用户的权限信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查看赋权对象的用者权限信息
     * @param {string} modelObject 授权对象，和授权接口中的object对应 \&quot;jobs.flink.flink作业ID\&quot;，查询指定的作业。 \&quot;groups.程序包组名\&quot;，查询指定的程序包组。 \&quot;resources.程序包名\&quot;，查询指定程序包。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAuthorizationPrivileges(listAuthorizationPrivilegesRequest?: ListAuthorizationPrivilegesRequest): Promise<ListAuthorizationPrivilegesResponse> {
        const options = ParamCreater().listAuthorizationPrivileges(listAuthorizationPrivilegesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API获取指定项目下所有catalog信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取项目下所有catalog信息
     * @param {number} [offset] 偏移量
     * @param {number} [limit] 分页的单页数量。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listCatalogs(listCatalogsRequest?: ListCatalogsRequest): Promise<ListCatalogsResponse> {
        const options = ParamCreater().listCatalogs(listCatalogsRequest);

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
    public listGlobalVariables(listGlobalVariablesRequest?: ListGlobalVariablesRequest): Promise<ListGlobalVariablesResponse> {
        const options = ParamCreater().listGlobalVariables(listGlobalVariablesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API用于查询跨源认证信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询增强型跨源授权信息
     * @param {string} [authInfoName] 认证信息名称
     * @param {number} [offset] 默认为0
     * @param {number} [limit] 默认为100
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listJobAuthInfos(listJobAuthInfosRequest?: ListJobAuthInfosRequest): Promise<ListJobAuthInfosResponse> {
        const options = ParamCreater().listJobAuthInfos(listJobAuthInfosRequest);

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
    public listJobResources(listJobResourcesRequest?: ListJobResourcesRequest): Promise<ListJobResourcesResponse> {
        const options = ParamCreater().listJobResources(listJobResourcesRequest);

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
     * @param {number} [offset] 偏移量
     * @param {number} [limit] 每页显示条数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listQueueProperties(listQueuePropertiesRequest?: ListQueuePropertiesRequest): Promise<ListQueuePropertiesResponse> {
        const options = ParamCreater().listQueueProperties(listQueuePropertiesRequest);

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
     * @param {RegisterAuthorizedQueueRequestBody} registerAuthorizedQueueRequestBody 队列赋权的请求body体。
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
     * 该API用于将DLI资源权限赋给、回收、更新指定的其他用户或项目。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 数据赋权（用户、项目）
     * @param {RunAuthorizationActionRequestBody} runAuthorizationActionRequestBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public runAuthorizationAction(runAuthorizationActionRequest?: RunAuthorizationActionRequest): Promise<RunAuthorizationActionResponse> {
        const options = ParamCreater().runAuthorizationAction(runAuthorizationActionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API创建DLI绑定/解绑到lakeformation等服务的元数据目录（CATALOG）相关信息。
     * 包含DLI侧CATALOG名称、外部CATALOG名称和类型，类型为预留字段，当前只支持lakeformation。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 绑定/解绑catalog映射信息
     * @param {RunCatalogActionRequestBody} runCatalogActionRequestBody catalog操作的请求body体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public runCatalogAction(runCatalogActionRequest?: RunCatalogActionRequest): Promise<RunCatalogActionResponse> {
        const options = ParamCreater().runCatalogAction(runCatalogActionRequest);

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
     * @param {RunDataAuthorizationActionRequestBody} runDataAuthorizationActionRequestBody 队列赋权的请求body体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public runDataAuthorizationAction(runDataAuthorizationActionRequest?: RunDataAuthorizationActionRequest): Promise<RunDataAuthorizationActionResponse> {
        const options = ParamCreater().runDataAuthorizationAction(runDataAuthorizationActionRequest);

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
     * @param {RunQueueActionRequestBody} runQueueActionRequestBody 
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
     * 该API用于描述DLI catalog详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 描述catalog信息
     * @param {string} catalogName catalog名称。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showCatalog(showCatalogRequest?: ShowCatalogRequest): Promise<ShowCatalogResponse> {
        const options = ParamCreater().showCatalog(showCatalogRequest);

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
    public showConnectivityTask(showConnectivityTaskRequest?: ShowConnectivityTaskRequest): Promise<ShowConnectivityTaskResponse> {
        const options = ParamCreater().showConnectivityTask(showConnectivityTaskRequest);

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
    public showEnhancedConnectionPrivilege(showEnhancedConnectionPrivilegeRequest?: ShowEnhancedConnectionPrivilegeRequest): Promise<ShowEnhancedConnectionPrivilegeResponse> {
        const options = ParamCreater().showEnhancedConnectionPrivilege(showEnhancedConnectionPrivilegeRequest);

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
    public showJobResource(showJobResourceRequest?: ShowJobResourceRequest): Promise<ShowJobResourceResponse> {
        const options = ParamCreater().showJobResource(showJobResourceRequest);

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
    public showQueue(showQueueRequest?: ShowQueueRequest): Promise<ShowQueueResponse> {
        const options = ParamCreater().showQueue(showQueueRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API用于获取用户配额信息列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询配额
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showQuota(showQuotaRequest?: ShowQuotaRequest): Promise<ShowQuotaResponse> {
        const options = ParamCreater().showQuota();

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
     * @param {UpdateAuthInfoRequestBody} updateAuthInfoRequestBody 
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
     * @param {UpdateElasticResourcePoolRequestBody} [updateElasticResourcePoolRequestBody] 
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
     * @param {UpdateElasticResourcePoolQueueRequestBody} updateElasticResourcePoolQueueRequestBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateElasticResourcePoolQueue(updateElasticResourcePoolQueueRequest?: UpdateElasticResourcePoolQueueRequest): Promise<UpdateElasticResourcePoolQueueResponse> {
        const options = ParamCreater().updateElasticResourcePoolQueue(updateElasticResourcePoolQueueRequest);

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
     * @param {UpdateEnhancedConnectionRequestBody} updateEnhancedConnectionRequestBody 修改主机信息的请求body体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateEnhancedConnection(updateEnhancedConnectionRequest?: UpdateEnhancedConnectionRequest): Promise<UpdateEnhancedConnectionResponse> {
        const options = ParamCreater().updateEnhancedConnection(updateEnhancedConnectionRequest);

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
     * @param {UpdateGlobalVariableRequestBody} updateGlobalVariableRequestBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateGlobalVariable(updateGlobalVariableRequest?: UpdateGlobalVariableRequest): Promise<UpdateGlobalVariableResponse> {
        const options = ParamCreater().updateGlobalVariable(updateGlobalVariableRequest);

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
     * @param {UpdateJobAuthInfoRequestBody} updateJobAuthInfoRequestBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateJobAuthInfo(updateJobAuthInfoRequest?: UpdateJobAuthInfoRequest): Promise<UpdateJobAuthInfoResponse> {
        const options = ParamCreater().updateJobAuthInfo(updateJobAuthInfoRequest);

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
     * @param {UpdateJobResourceOwnerRequestBody} updateJobResourceOwnerRequestBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateJobResourceOwner(updateJobResourceOwnerRequest?: UpdateJobResourceOwnerRequest): Promise<UpdateJobResourceOwnerResponse> {
        const options = ParamCreater().updateJobResourceOwner(updateJobResourceOwnerRequest);

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
     * @param {UpdateQueueCidrRequestBody} [updateQueueCidrRequestBody] 修改队列网段的请求body体。
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
     * 该API用于修改指定ID的队列定时扩缩容计划。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改队列定时扩缩容计划
     * @param {string} planId 待修改的队列扩缩容计划的ID
     * @param {string} queueName 待删除定时扩缩计划的队列名称
     * @param {QueuePlanRequestBody} updateQueuePlanRequestBody 修改扩缩容计划请求body体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateQueuePlan(updateQueuePlanRequest?: UpdateQueuePlanRequest): Promise<UpdateQueuePlanResponse> {
        const options = ParamCreater().updateQueuePlan(updateQueuePlanRequest);

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
     * @param {UpdateQueuePropertyRequestBody} updateQueuePropertyRequestBody 待更新队列属性
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
     * @param {UploadResourcesRequestBody} uploadFileJobResourcesRequestBody 上传jar类型分组资源请求body体。
     * @param {string} [USER_ID] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public uploadFileJobResources(uploadFileJobResourcesRequest?: UploadFileJobResourcesRequest): Promise<UploadFileJobResourcesResponse> {
        const options = ParamCreater().uploadFileJobResources(uploadFileJobResourcesRequest);

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
     * @param {UploadResourcesRequestBody} uploadJarJobResourcesRequestBody 上传jar类型分组资源请求body体。
     * @param {string} [USER_ID] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public uploadJarJobResources(uploadJarJobResourcesRequest?: UploadJarJobResourcesRequest): Promise<UploadJarJobResourcesResponse> {
        const options = ParamCreater().uploadJarJobResources(uploadJarJobResourcesRequest);

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
     * @param {UploadJobResourcesRequestBody} uploadJobResourcesRequestBody 上传分组资源请求body体。
     * @param {string} [USER_ID] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public uploadJobResources(uploadJobResourcesRequest?: UploadJobResourcesRequest): Promise<UploadJobResourcesResponse> {
        const options = ParamCreater().uploadJobResources(uploadJobResourcesRequest);

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
     * @param {UploadResourcesRequestBody} uploadPythonFileJobResourcesRequestBody 上传jar类型分组资源请求body体。
     * @param {string} [USER_ID] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public uploadPythonFileJobResources(uploadPythonFileJobResourcesRequest?: UploadPythonFileJobResourcesRequest): Promise<UploadPythonFileJobResourcesResponse> {
        const options = ParamCreater().uploadPythonFileJobResources(uploadPythonFileJobResourcesRequest);

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
     * @param {BatchDeleteFlinkJobsRequestBody} batchDeleteFlinkJobsRequestBody 作业ID。
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
     * @param {BatchRunFlinkJobsRequestBody} batchRunFlinkJobsRequestBody job_id的数组。
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
     * 批量停止正在运行的Flink作业。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量停止Flink作业
     * @param {StopFlinkJobsRequestBody} stopFlinkJobsRequestBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchStopFlinkJobs(batchStopFlinkJobsRequest?: BatchStopFlinkJobsRequest): Promise<BatchStopFlinkJobsResponse> {
        const options = ParamCreater().batchStopFlinkJobs(batchStopFlinkJobsRequest);

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
     * @param {CreateFlinkJarJobRequestBody} createFlinkJarJobRequestBody 请求参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createFlinkJarJob(createFlinkJarJobRequest?: CreateFlinkJarJobRequest): Promise<CreateFlinkJarJobResponse> {
        const options = ParamCreater().createFlinkJarJob(createFlinkJarJobRequest);

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
     * @param {CreateFlinkSqlJobRequestBody} createFlinkSqlJobRequestBody 创建SQL作业的请求参数。
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
     * 生成flink SQL作业的静态流图
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 生成flink SQL作业的静态流图
     * @param {string} jobId 
     * @param {CreateFlinkSqlJobGraphRequestBody} createFlinkSqlJobGraphRequestBody 生成Flink SQL作业静态流图请求参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createFlinkSqlJobGraph(createFlinkSqlJobGraphRequest?: CreateFlinkSqlJobGraphRequest): Promise<CreateFlinkSqlJobGraphResponse> {
        const options = ParamCreater().createFlinkSqlJobGraph(createFlinkSqlJobGraphRequest);

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
     * @param {CreateFlinkSqlJobTemplateRequestBody} createFlinkSqlJobTemplateRequestBody 请求参数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createFlinkSqlJobTemplate(createFlinkSqlJobTemplateRequest?: CreateFlinkSqlJobTemplateRequest): Promise<CreateFlinkSqlJobTemplateResponse> {
        const options = ParamCreater().createFlinkSqlJobTemplate(createFlinkSqlJobTemplateRequest);

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
     * @param {CreateIefMessageChannelRequestBody} createIefMessageChannelRequestBody 请求body体
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
     * @param {CreateIefSystemEventsRequestBody} createIefSystemEventsRequestBody 请求body体
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
    public deleteFlinkSqlJobTemplate(deleteFlinkSqlJobTemplateRequest?: DeleteFlinkSqlJobTemplateRequest): Promise<DeleteFlinkSqlJobTemplateResponse> {
        const options = ParamCreater().deleteFlinkSqlJobTemplate(deleteFlinkSqlJobTemplateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 触发Flink作业保存点。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 触发Flink作业保存点
     * @param {string} jobId 正在运行的Flink作业的作业ID。
     * @param {ExecuteFlinkJobSavepointRequestBody} executeFlinkJobSavepointRequestBody 创建savepoint请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public executeFlinkJobSavepoint(executeFlinkJobSavepointRequest?: ExecuteFlinkJobSavepointRequest): Promise<ExecuteFlinkJobSavepointResponse> {
        const options = ParamCreater().executeFlinkJobSavepoint(executeFlinkJobSavepointRequest);

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
     * @param {ExportFlinkJobsRequestBody} exportFlinkJobsRequestBody 导出作业的请求参数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public exportFlinkJobs(exportFlinkJobsRequest?: ExportFlinkJobsRequest): Promise<ExportFlinkJobsResponse> {
        const options = ParamCreater().exportFlinkJobs(exportFlinkJobsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 导入Flink作业保存点。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 导入Flink作业保存点
     * @param {string} jobId 非运行阶段的Flink作业的作业ID
     * @param {ImportFlinkJobSavepointRequestBody} importFlinkJobSavepointRequestBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public importFlinkJobSavepoint(importFlinkJobSavepointRequest?: ImportFlinkJobSavepointRequest): Promise<ImportFlinkJobSavepointResponse> {
        const options = ParamCreater().importFlinkJobSavepoint(importFlinkJobSavepointRequest);

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
     * @param {ImportFlinkJobsRequestBody} importFlinkJobsRequestBody 导入作业的请求参数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public importFlinkJobs(importFlinkJobsRequest?: ImportFlinkJobsRequest): Promise<ImportFlinkJobsResponse> {
        const options = ParamCreater().importFlinkJobs(importFlinkJobsRequest);

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
     * @param {string} [status] 作业状态。 作业的状态如下： job_init：草稿 job_submitting：提交中 job_submit_fail：提交失败 job_running：运行中（开始计费，提交作业后，返回正常结果） job_running_exception：运行异常（停止计费。作业发生运行时异常，停止运行作业） job_downloading：下载中 job_idle：空闲 job_canceling：停止中 job_cancel_success：已停止 job_cancel_fail：停止失败 job_savepointing：保存点创建中 job_arrearage_stopped：因欠费被停止（结束计费。用户账户欠费，作业停止） job_arrearage_recovering：欠费作业恢复中（用户账户欠费，账户充值，作业恢复中） job_finish：已完成
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
    public listFlinkSqlJobTemplates(listFlinkSqlJobTemplatesRequest?: ListFlinkSqlJobTemplatesRequest): Promise<ListFlinkSqlJobTemplatesResponse> {
        const options = ParamCreater().listFlinkSqlJobTemplates(listFlinkSqlJobTemplatesRequest);

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
     * @param {RegisterBucketRequestBody} registerBucketRequestBody OBS桶名列表。
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
     * @param {RunIefJobActionCallBackRequestBody} runIefJobActionCallBackRequestBody 请求body体
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
     * 查询Flink作业执行计划。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询Flink作业执行计划
     * @param {number} jobId 作业ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showFlinkJobExecutionGraph(showFlinkJobExecutionGraphRequest?: ShowFlinkJobExecutionGraphRequest): Promise<ShowFlinkJobExecutionGraphResponse> {
        const options = ParamCreater().showFlinkJobExecutionGraph(showFlinkJobExecutionGraphRequest);

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
     * @param {ShowFlinkMetricRequestBody} showFlinkMetricRequestBody 作业列表。
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
     * 更新用户自定义作业，目前支持jar格式，运行在独享集群中。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新Flink Jar作业
     * @param {number} jobId 作业ID。
     * @param {UpdateFlinkJarJobRequestBody} updateFlinkJarJobRequestBody 请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateFlinkJarJob(updateFlinkJarJobRequest?: UpdateFlinkJarJobRequest): Promise<UpdateFlinkJarJobResponse> {
        const options = ParamCreater().updateFlinkJarJob(updateFlinkJarJobRequest);

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
     * @param {ChangeFlinkJobStatusReportRequestBody} changeFlinkJobStatusReportRequestBody 请求body体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateFlinkJobStatusReport(updateFlinkJobStatusReportRequest?: UpdateFlinkJobStatusReportRequest): Promise<UpdateFlinkJobStatusReportResponse> {
        const options = ParamCreater().updateFlinkJobStatusReport(updateFlinkJobStatusReportRequest);

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
     * @param {UpdateFlinkSqlJobRequestBody} updateFlinkSqlJobRequestBody 更新SQL作业的请求参数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateFlinkSqlJob(updateFlinkSqlJobRequest?: UpdateFlinkSqlJobRequest): Promise<UpdateFlinkSqlJobResponse> {
        const options = ParamCreater().updateFlinkSqlJob(updateFlinkSqlJobRequest);

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
     * @param {UpdateFlinkSqlJobTemplateRequestBody} updateFlinkSqlJobTemplateRequestBody 请求参数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateFlinkSqlJobTemplate(updateFlinkSqlJobTemplateRequest?: UpdateFlinkSqlJobTemplateRequest): Promise<UpdateFlinkSqlJobTemplateResponse> {
        const options = ParamCreater().updateFlinkSqlJobTemplate(updateFlinkSqlJobTemplateRequest);

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
    public cancelSparkJob(cancelSparkJobRequest?: CancelSparkJobRequest): Promise<CancelSparkJobResponse> {
        const options = ParamCreater().cancelSparkJob(cancelSparkJobRequest);

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
     * @param {CreateSparkJobRequestBody} createSparkJobRequestBody 创建批处理作业请求body体。
     * @param {string} [USER_ID] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createSparkJob(createSparkJobRequest?: CreateSparkJobRequest): Promise<CreateSparkJobResponse> {
        const options = ParamCreater().createSparkJob(createSparkJobRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API用于创建作业模板。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建作业模板
     * @param {CreateSparkJobTemplateRequestBody} createSparkJobTemplateRequestBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createSparkJobTemplate(createSparkJobTemplateRequest?: CreateSparkJobTemplateRequest): Promise<CreateSparkJobTemplateResponse> {
        const options = ParamCreater().createSparkJobTemplate(createSparkJobTemplateRequest);

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
     * @param {string} [type] 类型，需要且必须传入spark作为值。
     * @param {string} [keyword] 模板名过滤关键字，模糊匹配，获取模板名含有该关键字的所有模板。
     * @param {number} [pageSize] 每页显示的最大结果行数，范围: [1, 1000]。默认值为：50。
     * @param {number} [currentPage] 当前页码，默认为第一页。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSparkJobTemplates(listSparkJobTemplatesRequest?: ListSparkJobTemplatesRequest): Promise<ListSparkJobTemplatesResponse> {
        const options = ParamCreater().listSparkJobTemplates(listSparkJobTemplatesRequest);

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
    public listSparkJobs(listSparkJobsRequest?: ListSparkJobsRequest): Promise<ListSparkJobsResponse> {
        const options = ParamCreater().listSparkJobs(listSparkJobsRequest);

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
    public showSparkJob(showSparkJobRequest?: ShowSparkJobRequest): Promise<ShowSparkJobResponse> {
        const options = ParamCreater().showSparkJob(showSparkJobRequest);

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
    public showSparkJobLog(showSparkJobLogRequest?: ShowSparkJobLogRequest): Promise<ShowSparkJobLogResponse> {
        const options = ParamCreater().showSparkJobLog(showSparkJobLogRequest);

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
    public showSparkJobStatus(showSparkJobStatusRequest?: ShowSparkJobStatusRequest): Promise<ShowSparkJobStatusResponse> {
        const options = ParamCreater().showSparkJobStatus(showSparkJobStatusRequest);

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
    public showSparkJobTemplate(showSparkJobTemplateRequest?: ShowSparkJobTemplateRequest): Promise<ShowSparkJobTemplateResponse> {
        const options = ParamCreater().showSparkJobTemplate(showSparkJobTemplateRequest);

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
     * @param {UpdateSparkJobTemplateRequestBody} updateSparkJobTemplateRequestBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateSparkJobTemplate(updateSparkJobTemplateRequest?: UpdateSparkJobTemplateRequest): Promise<UpdateSparkJobTemplateResponse> {
        const options = ParamCreater().updateSparkJobTemplate(updateSparkJobTemplateRequest);

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
     * @param {BatchDeleteSqlJobTemplatesRequestBody} batchDeleteSqlJobTemplatesRequestBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeleteSqlJobTemplates(batchDeleteSqlJobTemplatesRequest?: BatchDeleteSqlJobTemplatesRequest): Promise<BatchDeleteSqlJobTemplatesResponse> {
        const options = ParamCreater().batchDeleteSqlJobTemplates(batchDeleteSqlJobTemplatesRequest);

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
     * @param {CheckSqlRequestBody} checkSqlRequestBody 
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
     * 该API用于通过执行SQL语句的方式向队列提交作业。
     * 
     * 作业包含以下类型：DDL、DCL、IMPORT、QUERY和INSERT。其中，IMPORT与导入数据的功能一致，区别仅在于实现方式不同。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 提交SQL作业
     * @param {CreateSqlJobRequestBody} createSqlJobRequestBody 
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
     * 该API用于存储指定的SQL语句，后续可以重复使用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 存储指定SQL语句
     * @param {CreateSqlJobTemplateRequestBody} createSqlJobTemplateRequestBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createSqlJobTemplate(createSqlJobTemplateRequest?: CreateSqlJobTemplateRequest): Promise<CreateSqlJobTemplateResponse> {
        const options = ParamCreater().createSqlJobTemplate(createSqlJobTemplateRequest);

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
     * @param {ExportSqlJobResultRequestBody} exportSqlJobResultRequestBody 
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
     * 该API用查看用户保存的所有SQL模板。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查看所有SQL模板
     * @param {string} [keyword] 用于过滤SQL模板的名字。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSqlJobTemplates(listSqlJobTemplatesRequest?: ListSqlJobTemplatesRequest): Promise<ListSqlJobTemplatesResponse> {
        const options = ParamCreater().listSqlJobTemplates(listSqlJobTemplatesRequest);

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
     * @param {'ALL' | 'DDL' | 'DCL' | 'IMPORT' | 'EXPORT' | 'QUERY' | 'INSERT'} [jobType] 指定查询的作业类型，包含DDL、DCL、IMPORT、EXPORT、QUERY、INSERT，若要查询所有类型的作业，则传入ALL。
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
    public previewSqlJobResult(previewSqlJobResultRequest?: PreviewSqlJobResultRequest): Promise<PreviewSqlJobResultResponse> {
        const options = ParamCreater().previewSqlJobResult(previewSqlJobResultRequest);

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
     * 该API用于获取作业执行进度信息，如果作业正在执行，可以获取到子作业的信息，如果作业刚开始或者已经结束，不可以获取到子作业信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询作业执行进度信息
     * @param {string} jobId 作业ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showSqlJobProgress(showSqlJobProgressRequest?: ShowSqlJobProgressRequest): Promise<ShowSqlJobProgressResponse> {
        const options = ParamCreater().showSqlJobProgress(showSqlJobProgressRequest);

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
     * 该API用于更新SQL模板。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新SQL模板
     * @param {string} sqlId 
     * @param {UpdateSqlJobTemplateRequestBody} updateSqlJobTemplateRequestBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateSqlJobTemplate(updateSqlJobTemplateRequest?: UpdateSqlJobTemplateRequest): Promise<UpdateSqlJobTemplateResponse> {
        const options = ParamCreater().updateSqlJobTemplate(updateSqlJobTemplateRequest);

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
     * @param {CreateDatabaseRequestBody} createDatabaseRequestBody 创建数据库请求body体。
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
     * 该API用于创建新的表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建表
     * @param {string} databaseName 新增表所在的数据库名称。
     * @param {CreateTableRequestBody} createTableRequestBody 创建表的请求body体。
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
     * @summary 导出表数据
     * @param {ExportTableRequestBody} exportTableRequestBody 导出数据的请求body体。
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
     * @param {ImportTableRequestBody} importTableRequestBody 导入数据请求参数。
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
    public listPartitions(listPartitionsRequest?: ListPartitionsRequest): Promise<ListPartitionsResponse> {
        const options = ParamCreater().listPartitions(listPartitionsRequest);

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
    public listSqlSampleTemplates(listSqlSampleTemplatesRequest?: ListSqlSampleTemplatesRequest): Promise<ListSqlSampleTemplatesResponse> {
        const options = ParamCreater().listSqlSampleTemplates();

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
    public listTables(listTablesRequest?: ListTablesRequest): Promise<ListTablesResponse> {
        const options = ParamCreater().listTables(listTablesRequest);

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
    public previewTable(previewTableRequest?: PreviewTableRequest): Promise<PreviewTableResponse> {
        const options = ParamCreater().previewTable(previewTableRequest);

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
    public showTable(showTableRequest?: ShowTableRequest): Promise<ShowTableResponse> {
        const options = ParamCreater().showTable(showTableRequest);

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
     * @param {UpdateOwnerRequestBody} updateDatabaseOwnerRequestBody 修改数据库用户请求body体。
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
     * @param {UpdateOwnerRequestBody} updateTableOwnerRequestBody 修改数据库用户请求body体。
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
         * 该API用于在已创建的增强型跨源中绑定队列。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        associateQueueToEnhancedConnection(associateQueueToEnhancedConnectionRequest?: AssociateQueueToEnhancedConnectionRequest) {
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

            if (associateQueueToEnhancedConnectionRequest !== null && associateQueueToEnhancedConnectionRequest !== undefined) {
                if (associateQueueToEnhancedConnectionRequest instanceof AssociateQueueToEnhancedConnectionRequest) {
                    connectionId = associateQueueToEnhancedConnectionRequest.connectionId;
                    body = associateQueueToEnhancedConnectionRequest.body
                } else {
                    connectionId = associateQueueToEnhancedConnectionRequest['connection_id'];
                    body = associateQueueToEnhancedConnectionRequest['body'];
                }
            }

        
            if (connectionId === null || connectionId === undefined) {
            throw new RequiredError('connectionId','Required parameter connectionId was null or undefined when calling associateQueueToEnhancedConnection.');
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
         * 创建地址连通性请求API接口，往指定集群发送地址连通性测试请求，并将测试地址插入表内
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createConnectivityTask(createConnectivityTaskRequest?: CreateConnectivityTaskRequest) {
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

            if (createConnectivityTaskRequest !== null && createConnectivityTaskRequest !== undefined) {
                if (createConnectivityTaskRequest instanceof CreateConnectivityTaskRequest) {
                    queueName = createConnectivityTaskRequest.queueName;
                    body = createConnectivityTaskRequest.body
                } else {
                    queueName = createConnectivityTaskRequest['queue_name'];
                    body = createConnectivityTaskRequest['body'];
                }
            }

        
            if (queueName === null || queueName === undefined) {
            throw new RequiredError('queueName','Required parameter queueName was null or undefined when calling createConnectivityTask.');
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
        createGlobalVariable(createGlobalVariableRequest?: CreateGlobalVariableRequest) {
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

            if (createGlobalVariableRequest !== null && createGlobalVariableRequest !== undefined) {
                if (createGlobalVariableRequest instanceof CreateGlobalVariableRequest) {
                    body = createGlobalVariableRequest.body
                } else {
                    body = createGlobalVariableRequest['body'];
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
         * 该API用于创建跨源认证。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createJobAuthInfo(createJobAuthInfoRequest?: CreateJobAuthInfoRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/datasource/auth-infos",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createJobAuthInfoRequest !== null && createJobAuthInfoRequest !== undefined) {
                if (createJobAuthInfoRequest instanceof CreateJobAuthInfoRequest) {
                    body = createJobAuthInfoRequest.body
                } else {
                    body = createJobAuthInfoRequest['body'];
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
         * 该API用于创建跨源需要的路由。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createRouteToEnhancedConnection(createRouteToEnhancedConnectionRequest?: CreateRouteToEnhancedConnectionRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/datasource/enhanced-connections/{connection_id}/routes",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let connectionId;

            if (createRouteToEnhancedConnectionRequest !== null && createRouteToEnhancedConnectionRequest !== undefined) {
                if (createRouteToEnhancedConnectionRequest instanceof CreateRouteToEnhancedConnectionRequest) {
                    connectionId = createRouteToEnhancedConnectionRequest.connectionId;
                    body = createRouteToEnhancedConnectionRequest.body
                } else {
                    connectionId = createRouteToEnhancedConnectionRequest['connection_id'];
                    body = createRouteToEnhancedConnectionRequest['body'];
                }
            }

        
            if (connectionId === null || connectionId === undefined) {
            throw new RequiredError('connectionId','Required parameter connectionId was null or undefined when calling createRouteToEnhancedConnection.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'connection_id': connectionId, };
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
        deleteGlobalVariable(deleteGlobalVariableRequest?: DeleteGlobalVariableRequest) {
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

            if (deleteGlobalVariableRequest !== null && deleteGlobalVariableRequest !== undefined) {
                if (deleteGlobalVariableRequest instanceof DeleteGlobalVariableRequest) {
                    varName = deleteGlobalVariableRequest.varName;
                } else {
                    varName = deleteGlobalVariableRequest['var_name'];
                }
            }

        
            if (varName === null || varName === undefined) {
            throw new RequiredError('varName','Required parameter varName was null or undefined when calling deleteGlobalVariable.');
            }

            options.pathParams = { 'var_name': varName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该API用于删除跨源认证信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteJobAuthInfo(deleteJobAuthInfoRequest?: DeleteJobAuthInfoRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/datasource/auth-infos/{auth_info_name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let authInfoName;

            if (deleteJobAuthInfoRequest !== null && deleteJobAuthInfoRequest !== undefined) {
                if (deleteJobAuthInfoRequest instanceof DeleteJobAuthInfoRequest) {
                    authInfoName = deleteJobAuthInfoRequest.authInfoName;
                } else {
                    authInfoName = deleteJobAuthInfoRequest['auth_info_name'];
                }
            }

        
            if (authInfoName === null || authInfoName === undefined) {
            throw new RequiredError('authInfoName','Required parameter authInfoName was null or undefined when calling deleteJobAuthInfo.');
            }

            options.pathParams = { 'auth_info_name': authInfoName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该API用于删除某个project某个分组下的资源包
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteJobResource(deleteJobResourceRequest?: DeleteJobResourceRequest) {
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

            if (deleteJobResourceRequest !== null && deleteJobResourceRequest !== undefined) {
                if (deleteJobResourceRequest instanceof DeleteJobResourceRequest) {
                    resourceName = deleteJobResourceRequest.resourceName;
                    group = deleteJobResourceRequest.group;
                } else {
                    resourceName = deleteJobResourceRequest['resource_name'];
                    group = deleteJobResourceRequest['group'];
                }
            }

        
            if (resourceName === null || resourceName === undefined) {
            throw new RequiredError('resourceName','Required parameter resourceName was null or undefined when calling deleteJobResource.');
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
         * 该API用于删除跨源需要的路由。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteRouteFromEnhancedConnection(deleteRouteFromEnhancedConnectionRequest?: DeleteRouteFromEnhancedConnectionRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/datasource/enhanced-connections/{connection_id}/routes/{name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let connectionId;
            
            let name;

            if (deleteRouteFromEnhancedConnectionRequest !== null && deleteRouteFromEnhancedConnectionRequest !== undefined) {
                if (deleteRouteFromEnhancedConnectionRequest instanceof DeleteRouteFromEnhancedConnectionRequest) {
                    connectionId = deleteRouteFromEnhancedConnectionRequest.connectionId;
                    name = deleteRouteFromEnhancedConnectionRequest.name;
                } else {
                    connectionId = deleteRouteFromEnhancedConnectionRequest['connection_id'];
                    name = deleteRouteFromEnhancedConnectionRequest['name'];
                }
            }

        
            if (connectionId === null || connectionId === undefined) {
            throw new RequiredError('connectionId','Required parameter connectionId was null or undefined when calling deleteRouteFromEnhancedConnection.');
            }
            if (name === null || name === undefined) {
            throw new RequiredError('name','Required parameter name was null or undefined when calling deleteRouteFromEnhancedConnection.');
            }

            options.pathParams = { 'connection_id': connectionId,'name': name, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该API用于在增强型跨源中解绑已绑定的队列。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        disassociateQueueFromEnhancedConnection(disassociateQueueFromEnhancedConnectionRequest?: DisassociateQueueFromEnhancedConnectionRequest) {
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

            if (disassociateQueueFromEnhancedConnectionRequest !== null && disassociateQueueFromEnhancedConnectionRequest !== undefined) {
                if (disassociateQueueFromEnhancedConnectionRequest instanceof DisassociateQueueFromEnhancedConnectionRequest) {
                    connectionId = disassociateQueueFromEnhancedConnectionRequest.connectionId;
                    body = disassociateQueueFromEnhancedConnectionRequest.body
                } else {
                    connectionId = disassociateQueueFromEnhancedConnectionRequest['connection_id'];
                    body = disassociateQueueFromEnhancedConnectionRequest['body'];
                }
            }

        
            if (connectionId === null || connectionId === undefined) {
            throw new RequiredError('connectionId','Required parameter connectionId was null or undefined when calling disassociateQueueFromEnhancedConnection.');
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
         * 获取对象赋权用户的权限信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAuthorizationPrivileges(listAuthorizationPrivilegesRequest?: ListAuthorizationPrivilegesRequest) {
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

            if (listAuthorizationPrivilegesRequest !== null && listAuthorizationPrivilegesRequest !== undefined) {
                if (listAuthorizationPrivilegesRequest instanceof ListAuthorizationPrivilegesRequest) {
                    modelObject = listAuthorizationPrivilegesRequest.modelObject;
                } else {
                    modelObject = listAuthorizationPrivilegesRequest['object'];
                }
            }

        
            if (modelObject === null || modelObject === undefined) {
                throw new RequiredError('modelObject','Required parameter modelObject was null or undefined when calling listAuthorizationPrivileges.');
            }
            if (modelObject !== null && modelObject !== undefined) {
                localVarQueryParameter['object'] = modelObject;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该API获取指定项目下所有catalog信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listCatalogs(listCatalogsRequest?: ListCatalogsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/catalogs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let offset;
            
            let limit;

            if (listCatalogsRequest !== null && listCatalogsRequest !== undefined) {
                if (listCatalogsRequest instanceof ListCatalogsRequest) {
                    offset = listCatalogsRequest.offset;
                    limit = listCatalogsRequest.limit;
                } else {
                    offset = listCatalogsRequest['offset'];
                    limit = listCatalogsRequest['limit'];
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
        listGlobalVariables(listGlobalVariablesRequest?: ListGlobalVariablesRequest) {
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

            if (listGlobalVariablesRequest !== null && listGlobalVariablesRequest !== undefined) {
                if (listGlobalVariablesRequest instanceof ListGlobalVariablesRequest) {
                    limit = listGlobalVariablesRequest.limit;
                    offset = listGlobalVariablesRequest.offset;
                } else {
                    limit = listGlobalVariablesRequest['limit'];
                    offset = listGlobalVariablesRequest['offset'];
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
         * 该API用于查询跨源认证信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listJobAuthInfos(listJobAuthInfosRequest?: ListJobAuthInfosRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/datasource/auth-infos",
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

            if (listJobAuthInfosRequest !== null && listJobAuthInfosRequest !== undefined) {
                if (listJobAuthInfosRequest instanceof ListJobAuthInfosRequest) {
                    authInfoName = listJobAuthInfosRequest.authInfoName;
                    offset = listJobAuthInfosRequest.offset;
                    limit = listJobAuthInfosRequest.limit;
                } else {
                    authInfoName = listJobAuthInfosRequest['auth_info_name'];
                    offset = listJobAuthInfosRequest['offset'];
                    limit = listJobAuthInfosRequest['limit'];
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
         * 该API用于查看某个project下的所有资源，其中包含Group。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listJobResources(listJobResourcesRequest?: ListJobResourcesRequest) {
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

            if (listJobResourcesRequest !== null && listJobResourcesRequest !== undefined) {
                if (listJobResourcesRequest instanceof ListJobResourcesRequest) {
                    kind = listJobResourcesRequest.kind;
                    tags = listJobResourcesRequest.tags;
                } else {
                    kind = listJobResourcesRequest['kind'];
                    tags = listJobResourcesRequest['tags'];
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
        listQueueProperties(listQueuePropertiesRequest?: ListQueuePropertiesRequest) {
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
            
            let offset;
            
            let limit;

            if (listQueuePropertiesRequest !== null && listQueuePropertiesRequest !== undefined) {
                if (listQueuePropertiesRequest instanceof ListQueuePropertiesRequest) {
                    queueName = listQueuePropertiesRequest.queueName;
                    offset = listQueuePropertiesRequest.offset;
                    limit = listQueuePropertiesRequest.limit;
                } else {
                    queueName = listQueuePropertiesRequest['queue_name'];
                    offset = listQueuePropertiesRequest['offset'];
                    limit = listQueuePropertiesRequest['limit'];
                }
            }

        
            if (queueName === null || queueName === undefined) {
            throw new RequiredError('queueName','Required parameter queueName was null or undefined when calling listQueueProperties.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
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
         * 该API用于将DLI资源权限赋给、回收、更新指定的其他用户或项目。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        runAuthorizationAction(runAuthorizationActionRequest?: RunAuthorizationActionRequest) {
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

            if (runAuthorizationActionRequest !== null && runAuthorizationActionRequest !== undefined) {
                if (runAuthorizationActionRequest instanceof RunAuthorizationActionRequest) {
                    body = runAuthorizationActionRequest.body
                } else {
                    body = runAuthorizationActionRequest['body'];
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
         * 该API创建DLI绑定/解绑到lakeformation等服务的元数据目录（CATALOG）相关信息。
         * 包含DLI侧CATALOG名称、外部CATALOG名称和类型，类型为预留字段，当前只支持lakeformation。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        runCatalogAction(runCatalogActionRequest?: RunCatalogActionRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/catalogs/action",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (runCatalogActionRequest !== null && runCatalogActionRequest !== undefined) {
                if (runCatalogActionRequest instanceof RunCatalogActionRequest) {
                    body = runCatalogActionRequest.body
                } else {
                    body = runCatalogActionRequest['body'];
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
         * 该API用于将数据库或数据表的数据权限赋给指定的其他用户。
         * 说明：
         * 被赋权用户所在用户组的所属区域需具有Tenant Guest权限。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        runDataAuthorizationAction(runDataAuthorizationActionRequest?: RunDataAuthorizationActionRequest) {
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

            if (runDataAuthorizationActionRequest !== null && runDataAuthorizationActionRequest !== undefined) {
                if (runDataAuthorizationActionRequest instanceof RunDataAuthorizationActionRequest) {
                    body = runDataAuthorizationActionRequest.body
                } else {
                    body = runDataAuthorizationActionRequest['body'];
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
         * 该API用于描述DLI catalog详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showCatalog(showCatalogRequest?: ShowCatalogRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/catalogs/{catalog_name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let catalogName;

            if (showCatalogRequest !== null && showCatalogRequest !== undefined) {
                if (showCatalogRequest instanceof ShowCatalogRequest) {
                    catalogName = showCatalogRequest.catalogName;
                } else {
                    catalogName = showCatalogRequest['catalog_name'];
                }
            }

        
            if (catalogName === null || catalogName === undefined) {
            throw new RequiredError('catalogName','Required parameter catalogName was null or undefined when calling showCatalog.');
            }

            options.pathParams = { 'catalog_name': catalogName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该API用于在连通性测试提交后查询连通性结果。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showConnectivityTask(showConnectivityTaskRequest?: ShowConnectivityTaskRequest) {
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

            if (showConnectivityTaskRequest !== null && showConnectivityTaskRequest !== undefined) {
                if (showConnectivityTaskRequest instanceof ShowConnectivityTaskRequest) {
                    queueName = showConnectivityTaskRequest.queueName;
                    taskId = showConnectivityTaskRequest.taskId;
                } else {
                    queueName = showConnectivityTaskRequest['queue_name'];
                    taskId = showConnectivityTaskRequest['task_id'];
                }
            }

        
            if (queueName === null || queueName === undefined) {
            throw new RequiredError('queueName','Required parameter queueName was null or undefined when calling showConnectivityTask.');
            }
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling showConnectivityTask.');
            }

            options.pathParams = { 'queue_name': queueName,'task_id': taskId, };
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
        showEnhancedConnectionPrivilege(showEnhancedConnectionPrivilegeRequest?: ShowEnhancedConnectionPrivilegeRequest) {
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

            if (showEnhancedConnectionPrivilegeRequest !== null && showEnhancedConnectionPrivilegeRequest !== undefined) {
                if (showEnhancedConnectionPrivilegeRequest instanceof ShowEnhancedConnectionPrivilegeRequest) {
                    connectionId = showEnhancedConnectionPrivilegeRequest.connectionId;
                } else {
                    connectionId = showEnhancedConnectionPrivilegeRequest['connection_id'];
                }
            }

        
            if (connectionId === null || connectionId === undefined) {
            throw new RequiredError('connectionId','Required parameter connectionId was null or undefined when calling showEnhancedConnectionPrivilege.');
            }

            options.pathParams = { 'connection_id': connectionId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该API用于查看某个project某个分组下的具体资源信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showJobResource(showJobResourceRequest?: ShowJobResourceRequest) {
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

            if (showJobResourceRequest !== null && showJobResourceRequest !== undefined) {
                if (showJobResourceRequest instanceof ShowJobResourceRequest) {
                    resourceName = showJobResourceRequest.resourceName;
                    group = showJobResourceRequest.group;
                } else {
                    resourceName = showJobResourceRequest['resource_name'];
                    group = showJobResourceRequest['group'];
                }
            }

        
            if (resourceName === null || resourceName === undefined) {
            throw new RequiredError('resourceName','Required parameter resourceName was null or undefined when calling showJobResource.');
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
         * 该API用于列出该project下指定的队列详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showQueue(showQueueRequest?: ShowQueueRequest) {
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

            if (showQueueRequest !== null && showQueueRequest !== undefined) {
                if (showQueueRequest instanceof ShowQueueRequest) {
                    queueName = showQueueRequest.queueName;
                } else {
                    queueName = showQueueRequest['queue_name'];
                }
            }

        
            if (queueName === null || queueName === undefined) {
            throw new RequiredError('queueName','Required parameter queueName was null or undefined when calling showQueue.');
            }

            options.pathParams = { 'queue_name': queueName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该API用于获取用户配额信息列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showQuota() {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/quotas",
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
        updateElasticResourcePoolQueue(updateElasticResourcePoolQueueRequest?: UpdateElasticResourcePoolQueueRequest) {
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

            if (updateElasticResourcePoolQueueRequest !== null && updateElasticResourcePoolQueueRequest !== undefined) {
                if (updateElasticResourcePoolQueueRequest instanceof UpdateElasticResourcePoolQueueRequest) {
                    elasticResourcePoolName = updateElasticResourcePoolQueueRequest.elasticResourcePoolName;
                    queueName = updateElasticResourcePoolQueueRequest.queueName;
                    body = updateElasticResourcePoolQueueRequest.body
                } else {
                    elasticResourcePoolName = updateElasticResourcePoolQueueRequest['elastic_resource_pool_name'];
                    queueName = updateElasticResourcePoolQueueRequest['queue_name'];
                    body = updateElasticResourcePoolQueueRequest['body'];
                }
            }

        
            if (elasticResourcePoolName === null || elasticResourcePoolName === undefined) {
            throw new RequiredError('elasticResourcePoolName','Required parameter elasticResourcePoolName was null or undefined when calling updateElasticResourcePoolQueue.');
            }
            if (queueName === null || queueName === undefined) {
            throw new RequiredError('queueName','Required parameter queueName was null or undefined when calling updateElasticResourcePoolQueue.');
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
         * 该API用于在跨源中修改数据源主机信息，仅支持全量覆盖。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateEnhancedConnection(updateEnhancedConnectionRequest?: UpdateEnhancedConnectionRequest) {
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

            if (updateEnhancedConnectionRequest !== null && updateEnhancedConnectionRequest !== undefined) {
                if (updateEnhancedConnectionRequest instanceof UpdateEnhancedConnectionRequest) {
                    connectionId = updateEnhancedConnectionRequest.connectionId;
                    body = updateEnhancedConnectionRequest.body
                } else {
                    connectionId = updateEnhancedConnectionRequest['connection_id'];
                    body = updateEnhancedConnectionRequest['body'];
                }
            }

        
            if (connectionId === null || connectionId === undefined) {
            throw new RequiredError('connectionId','Required parameter connectionId was null or undefined when calling updateEnhancedConnection.');
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
         * 修改全局变量。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateGlobalVariable(updateGlobalVariableRequest?: UpdateGlobalVariableRequest) {
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

            if (updateGlobalVariableRequest !== null && updateGlobalVariableRequest !== undefined) {
                if (updateGlobalVariableRequest instanceof UpdateGlobalVariableRequest) {
                    varName = updateGlobalVariableRequest.varName;
                    body = updateGlobalVariableRequest.body
                } else {
                    varName = updateGlobalVariableRequest['var_name'];
                    body = updateGlobalVariableRequest['body'];
                }
            }

        
            if (varName === null || varName === undefined) {
            throw new RequiredError('varName','Required parameter varName was null or undefined when calling updateGlobalVariable.');
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
         * 该API用于更新跨源认证信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateJobAuthInfo(updateJobAuthInfoRequest?: UpdateJobAuthInfoRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/datasource/auth-infos",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (updateJobAuthInfoRequest !== null && updateJobAuthInfoRequest !== undefined) {
                if (updateJobAuthInfoRequest instanceof UpdateJobAuthInfoRequest) {
                    body = updateJobAuthInfoRequest.body
                } else {
                    body = updateJobAuthInfoRequest['body'];
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
         * 用于修改程序包的owner。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateJobResourceOwner(updateJobResourceOwnerRequest?: UpdateJobResourceOwnerRequest) {
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

            if (updateJobResourceOwnerRequest !== null && updateJobResourceOwnerRequest !== undefined) {
                if (updateJobResourceOwnerRequest instanceof UpdateJobResourceOwnerRequest) {
                    body = updateJobResourceOwnerRequest.body
                } else {
                    body = updateJobResourceOwnerRequest['body'];
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
         * 该API用于修改指定ID的队列定时扩缩容计划。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateQueuePlan(updateQueuePlanRequest?: UpdateQueuePlanRequest) {
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

            if (updateQueuePlanRequest !== null && updateQueuePlanRequest !== undefined) {
                if (updateQueuePlanRequest instanceof UpdateQueuePlanRequest) {
                    planId = updateQueuePlanRequest.planId;
                    queueName = updateQueuePlanRequest.queueName;
                    body = updateQueuePlanRequest.body
                } else {
                    planId = updateQueuePlanRequest['plan_id'];
                    queueName = updateQueuePlanRequest['queue_name'];
                    body = updateQueuePlanRequest['body'];
                }
            }

        
            if (planId === null || planId === undefined) {
            throw new RequiredError('planId','Required parameter planId was null or undefined when calling updateQueuePlan.');
            }
            if (queueName === null || queueName === undefined) {
            throw new RequiredError('queueName','Required parameter queueName was null or undefined when calling updateQueuePlan.');
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
        uploadFileJobResources(uploadFileJobResourcesRequest?: UploadFileJobResourcesRequest) {
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

            if (uploadFileJobResourcesRequest !== null && uploadFileJobResourcesRequest !== undefined) {
                if (uploadFileJobResourcesRequest instanceof UploadFileJobResourcesRequest) {
                    body = uploadFileJobResourcesRequest.body
                    USER_ID = uploadFileJobResourcesRequest.USER_ID;
                } else {
                    body = uploadFileJobResourcesRequest['body'];
                    USER_ID = uploadFileJobResourcesRequest['USER-ID'];
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
        uploadJarJobResources(uploadJarJobResourcesRequest?: UploadJarJobResourcesRequest) {
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

            if (uploadJarJobResourcesRequest !== null && uploadJarJobResourcesRequest !== undefined) {
                if (uploadJarJobResourcesRequest instanceof UploadJarJobResourcesRequest) {
                    body = uploadJarJobResourcesRequest.body
                    USER_ID = uploadJarJobResourcesRequest.USER_ID;
                } else {
                    body = uploadJarJobResourcesRequest['body'];
                    USER_ID = uploadJarJobResourcesRequest['USER-ID'];
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
        uploadJobResources(uploadJobResourcesRequest?: UploadJobResourcesRequest) {
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

            if (uploadJobResourcesRequest !== null && uploadJobResourcesRequest !== undefined) {
                if (uploadJobResourcesRequest instanceof UploadJobResourcesRequest) {
                    body = uploadJobResourcesRequest.body
                    USER_ID = uploadJobResourcesRequest.USER_ID;
                } else {
                    body = uploadJobResourcesRequest['body'];
                    USER_ID = uploadJobResourcesRequest['USER-ID'];
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
        uploadPythonFileJobResources(uploadPythonFileJobResourcesRequest?: UploadPythonFileJobResourcesRequest) {
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

            if (uploadPythonFileJobResourcesRequest !== null && uploadPythonFileJobResourcesRequest !== undefined) {
                if (uploadPythonFileJobResourcesRequest instanceof UploadPythonFileJobResourcesRequest) {
                    body = uploadPythonFileJobResourcesRequest.body
                    USER_ID = uploadPythonFileJobResourcesRequest.USER_ID;
                } else {
                    body = uploadPythonFileJobResourcesRequest['body'];
                    USER_ID = uploadPythonFileJobResourcesRequest['USER-ID'];
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
         * 批量停止正在运行的Flink作业。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchStopFlinkJobs(batchStopFlinkJobsRequest?: BatchStopFlinkJobsRequest) {
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

            if (batchStopFlinkJobsRequest !== null && batchStopFlinkJobsRequest !== undefined) {
                if (batchStopFlinkJobsRequest instanceof BatchStopFlinkJobsRequest) {
                    body = batchStopFlinkJobsRequest.body
                } else {
                    body = batchStopFlinkJobsRequest['body'];
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
        createFlinkJarJob(createFlinkJarJobRequest?: CreateFlinkJarJobRequest) {
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

            if (createFlinkJarJobRequest !== null && createFlinkJarJobRequest !== undefined) {
                if (createFlinkJarJobRequest instanceof CreateFlinkJarJobRequest) {
                    body = createFlinkJarJobRequest.body
                } else {
                    body = createFlinkJarJobRequest['body'];
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
         * 生成flink SQL作业的静态流图
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createFlinkSqlJobGraph(createFlinkSqlJobGraphRequest?: CreateFlinkSqlJobGraphRequest) {
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

            if (createFlinkSqlJobGraphRequest !== null && createFlinkSqlJobGraphRequest !== undefined) {
                if (createFlinkSqlJobGraphRequest instanceof CreateFlinkSqlJobGraphRequest) {
                    jobId = createFlinkSqlJobGraphRequest.jobId;
                    body = createFlinkSqlJobGraphRequest.body
                } else {
                    jobId = createFlinkSqlJobGraphRequest['job_id'];
                    body = createFlinkSqlJobGraphRequest['body'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling createFlinkSqlJobGraph.');
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
         * 在DLI服务中新建一个Flink作业模板，最多100个。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createFlinkSqlJobTemplate(createFlinkSqlJobTemplateRequest?: CreateFlinkSqlJobTemplateRequest) {
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

            if (createFlinkSqlJobTemplateRequest !== null && createFlinkSqlJobTemplateRequest !== undefined) {
                if (createFlinkSqlJobTemplateRequest instanceof CreateFlinkSqlJobTemplateRequest) {
                    body = createFlinkSqlJobTemplateRequest.body
                } else {
                    body = createFlinkSqlJobTemplateRequest['body'];
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
        deleteFlinkSqlJobTemplate(deleteFlinkSqlJobTemplateRequest?: DeleteFlinkSqlJobTemplateRequest) {
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

            if (deleteFlinkSqlJobTemplateRequest !== null && deleteFlinkSqlJobTemplateRequest !== undefined) {
                if (deleteFlinkSqlJobTemplateRequest instanceof DeleteFlinkSqlJobTemplateRequest) {
                    templateId = deleteFlinkSqlJobTemplateRequest.templateId;
                } else {
                    templateId = deleteFlinkSqlJobTemplateRequest['template_id'];
                }
            }

        
            if (templateId === null || templateId === undefined) {
            throw new RequiredError('templateId','Required parameter templateId was null or undefined when calling deleteFlinkSqlJobTemplate.');
            }

            options.pathParams = { 'template_id': templateId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 触发Flink作业保存点。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        executeFlinkJobSavepoint(executeFlinkJobSavepointRequest?: ExecuteFlinkJobSavepointRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/streaming/jobs/{job_id}/savepoint",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let jobId;

            if (executeFlinkJobSavepointRequest !== null && executeFlinkJobSavepointRequest !== undefined) {
                if (executeFlinkJobSavepointRequest instanceof ExecuteFlinkJobSavepointRequest) {
                    jobId = executeFlinkJobSavepointRequest.jobId;
                    body = executeFlinkJobSavepointRequest.body
                } else {
                    jobId = executeFlinkJobSavepointRequest['job_id'];
                    body = executeFlinkJobSavepointRequest['body'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling executeFlinkJobSavepoint.');
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
         * 通过POST方式，导出flink作业，请求体为JSON格式。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        exportFlinkJobs(exportFlinkJobsRequest?: ExportFlinkJobsRequest) {
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

            if (exportFlinkJobsRequest !== null && exportFlinkJobsRequest !== undefined) {
                if (exportFlinkJobsRequest instanceof ExportFlinkJobsRequest) {
                    body = exportFlinkJobsRequest.body
                } else {
                    body = exportFlinkJobsRequest['body'];
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
         * 导入Flink作业保存点。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        importFlinkJobSavepoint(importFlinkJobSavepointRequest?: ImportFlinkJobSavepointRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/streaming/jobs/{job_id}/import-savepoint",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let jobId;

            if (importFlinkJobSavepointRequest !== null && importFlinkJobSavepointRequest !== undefined) {
                if (importFlinkJobSavepointRequest instanceof ImportFlinkJobSavepointRequest) {
                    jobId = importFlinkJobSavepointRequest.jobId;
                    body = importFlinkJobSavepointRequest.body
                } else {
                    jobId = importFlinkJobSavepointRequest['job_id'];
                    body = importFlinkJobSavepointRequest['body'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling importFlinkJobSavepoint.');
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
         * 通过POST方式，导入flink作业，请求体为JSON格式。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        importFlinkJobs(importFlinkJobsRequest?: ImportFlinkJobsRequest) {
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

            if (importFlinkJobsRequest !== null && importFlinkJobsRequest !== undefined) {
                if (importFlinkJobsRequest instanceof ImportFlinkJobsRequest) {
                    body = importFlinkJobsRequest.body
                } else {
                    body = importFlinkJobsRequest['body'];
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
        listFlinkSqlJobTemplates(listFlinkSqlJobTemplatesRequest?: ListFlinkSqlJobTemplatesRequest) {
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

            if (listFlinkSqlJobTemplatesRequest !== null && listFlinkSqlJobTemplatesRequest !== undefined) {
                if (listFlinkSqlJobTemplatesRequest instanceof ListFlinkSqlJobTemplatesRequest) {
                    limit = listFlinkSqlJobTemplatesRequest.limit;
                    name = listFlinkSqlJobTemplatesRequest.name;
                    offset = listFlinkSqlJobTemplatesRequest.offset;
                    order = listFlinkSqlJobTemplatesRequest.order;
                    tags = listFlinkSqlJobTemplatesRequest.tags;
                } else {
                    limit = listFlinkSqlJobTemplatesRequest['limit'];
                    name = listFlinkSqlJobTemplatesRequest['name'];
                    offset = listFlinkSqlJobTemplatesRequest['offset'];
                    order = listFlinkSqlJobTemplatesRequest['order'];
                    tags = listFlinkSqlJobTemplatesRequest['tags'];
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
         * 查询Flink作业执行计划。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showFlinkJobExecutionGraph(showFlinkJobExecutionGraphRequest?: ShowFlinkJobExecutionGraphRequest) {
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

            if (showFlinkJobExecutionGraphRequest !== null && showFlinkJobExecutionGraphRequest !== undefined) {
                if (showFlinkJobExecutionGraphRequest instanceof ShowFlinkJobExecutionGraphRequest) {
                    jobId = showFlinkJobExecutionGraphRequest.jobId;
                } else {
                    jobId = showFlinkJobExecutionGraphRequest['job_id'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling showFlinkJobExecutionGraph.');
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
         * 更新用户自定义作业，目前支持jar格式，运行在独享集群中。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateFlinkJarJob(updateFlinkJarJobRequest?: UpdateFlinkJarJobRequest) {
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

            if (updateFlinkJarJobRequest !== null && updateFlinkJarJobRequest !== undefined) {
                if (updateFlinkJarJobRequest instanceof UpdateFlinkJarJobRequest) {
                    jobId = updateFlinkJarJobRequest.jobId;
                    body = updateFlinkJarJobRequest.body
                } else {
                    jobId = updateFlinkJarJobRequest['job_id'];
                    body = updateFlinkJarJobRequest['body'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling updateFlinkJarJob.');
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
         * 该API用于处理边缘Flink作业状态上报信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateFlinkJobStatusReport(updateFlinkJobStatusReportRequest?: UpdateFlinkJobStatusReportRequest) {
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

            if (updateFlinkJobStatusReportRequest !== null && updateFlinkJobStatusReportRequest !== undefined) {
                if (updateFlinkJobStatusReportRequest instanceof UpdateFlinkJobStatusReportRequest) {
                    body = updateFlinkJobStatusReportRequest.body
                } else {
                    body = updateFlinkJobStatusReportRequest['body'];
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
         * Stream SQL的语法扩展了Apache Flink SQL。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateFlinkSqlJob(updateFlinkSqlJobRequest?: UpdateFlinkSqlJobRequest) {
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

            if (updateFlinkSqlJobRequest !== null && updateFlinkSqlJobRequest !== undefined) {
                if (updateFlinkSqlJobRequest instanceof UpdateFlinkSqlJobRequest) {
                    jobId = updateFlinkSqlJobRequest.jobId;
                    body = updateFlinkSqlJobRequest.body
                } else {
                    jobId = updateFlinkSqlJobRequest['job_id'];
                    body = updateFlinkSqlJobRequest['body'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling updateFlinkSqlJob.');
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
        updateFlinkSqlJobTemplate(updateFlinkSqlJobTemplateRequest?: UpdateFlinkSqlJobTemplateRequest) {
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

            if (updateFlinkSqlJobTemplateRequest !== null && updateFlinkSqlJobTemplateRequest !== undefined) {
                if (updateFlinkSqlJobTemplateRequest instanceof UpdateFlinkSqlJobTemplateRequest) {
                    templateId = updateFlinkSqlJobTemplateRequest.templateId;
                    body = updateFlinkSqlJobTemplateRequest.body
                } else {
                    templateId = updateFlinkSqlJobTemplateRequest['template_id'];
                    body = updateFlinkSqlJobTemplateRequest['body'];
                }
            }

        
            if (templateId === null || templateId === undefined) {
            throw new RequiredError('templateId','Required parameter templateId was null or undefined when calling updateFlinkSqlJobTemplate.');
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
        cancelSparkJob(cancelSparkJobRequest?: CancelSparkJobRequest) {
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

            if (cancelSparkJobRequest !== null && cancelSparkJobRequest !== undefined) {
                if (cancelSparkJobRequest instanceof CancelSparkJobRequest) {
                    batchId = cancelSparkJobRequest.batchId;
                } else {
                    batchId = cancelSparkJobRequest['batch_id'];
                }
            }

        
            if (batchId === null || batchId === undefined) {
            throw new RequiredError('batchId','Required parameter batchId was null or undefined when calling cancelSparkJob.');
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
        createSparkJob(createSparkJobRequest?: CreateSparkJobRequest) {
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

            if (createSparkJobRequest !== null && createSparkJobRequest !== undefined) {
                if (createSparkJobRequest instanceof CreateSparkJobRequest) {
                    body = createSparkJobRequest.body
                    USER_ID = createSparkJobRequest.USER_ID;
                } else {
                    body = createSparkJobRequest['body'];
                    USER_ID = createSparkJobRequest['USER-ID'];
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
         * 该API用于创建作业模板。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createSparkJobTemplate(createSparkJobTemplateRequest?: CreateSparkJobTemplateRequest) {
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

            if (createSparkJobTemplateRequest !== null && createSparkJobTemplateRequest !== undefined) {
                if (createSparkJobTemplateRequest instanceof CreateSparkJobTemplateRequest) {
                    body = createSparkJobTemplateRequest.body
                } else {
                    body = createSparkJobTemplateRequest['body'];
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
        listSparkJobTemplates(listSparkJobTemplatesRequest?: ListSparkJobTemplatesRequest) {
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

            if (listSparkJobTemplatesRequest !== null && listSparkJobTemplatesRequest !== undefined) {
                if (listSparkJobTemplatesRequest instanceof ListSparkJobTemplatesRequest) {
                    type = listSparkJobTemplatesRequest.type;
                    keyword = listSparkJobTemplatesRequest.keyword;
                    pageSize = listSparkJobTemplatesRequest.pageSize;
                    currentPage = listSparkJobTemplatesRequest.currentPage;
                } else {
                    type = listSparkJobTemplatesRequest['type'];
                    keyword = listSparkJobTemplatesRequest['keyword'];
                    pageSize = listSparkJobTemplatesRequest['page-size'];
                    currentPage = listSparkJobTemplatesRequest['current-page'];
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
         * 该API用于查询Project下某队列批处理作业的列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSparkJobs(listSparkJobsRequest?: ListSparkJobsRequest) {
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

            if (listSparkJobsRequest !== null && listSparkJobsRequest !== undefined) {
                if (listSparkJobsRequest instanceof ListSparkJobsRequest) {
                    clusterName = listSparkJobsRequest.clusterName;
                    end = listSparkJobsRequest.end;
                    from = listSparkJobsRequest.from;
                    jobName = listSparkJobsRequest.jobName;
                    jobId = listSparkJobsRequest.jobId;
                    order = listSparkJobsRequest.order;
                    queueName = listSparkJobsRequest.queueName;
                    size = listSparkJobsRequest.size;
                    start = listSparkJobsRequest.start;
                    state = listSparkJobsRequest.state;
                } else {
                    clusterName = listSparkJobsRequest['cluster_name'];
                    end = listSparkJobsRequest['end'];
                    from = listSparkJobsRequest['from'];
                    jobName = listSparkJobsRequest['job_name'];
                    jobId = listSparkJobsRequest['job-id'];
                    order = listSparkJobsRequest['order'];
                    queueName = listSparkJobsRequest['queue_name'];
                    size = listSparkJobsRequest['size'];
                    start = listSparkJobsRequest['start'];
                    state = listSparkJobsRequest['state'];
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
                localVarQueryParameter['job_name'] = jobName;
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
        showSparkJob(showSparkJobRequest?: ShowSparkJobRequest) {
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

            if (showSparkJobRequest !== null && showSparkJobRequest !== undefined) {
                if (showSparkJobRequest instanceof ShowSparkJobRequest) {
                    batchId = showSparkJobRequest.batchId;
                } else {
                    batchId = showSparkJobRequest['batch_id'];
                }
            }

        
            if (batchId === null || batchId === undefined) {
            throw new RequiredError('batchId','Required parameter batchId was null or undefined when calling showSparkJob.');
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
        showSparkJobLog(showSparkJobLogRequest?: ShowSparkJobLogRequest) {
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

            if (showSparkJobLogRequest !== null && showSparkJobLogRequest !== undefined) {
                if (showSparkJobLogRequest instanceof ShowSparkJobLogRequest) {
                    batchId = showSparkJobLogRequest.batchId;
                    from = showSparkJobLogRequest.from;
                    index = showSparkJobLogRequest.index;
                    size = showSparkJobLogRequest.size;
                    type = showSparkJobLogRequest.type;
                } else {
                    batchId = showSparkJobLogRequest['batch_id'];
                    from = showSparkJobLogRequest['from'];
                    index = showSparkJobLogRequest['index'];
                    size = showSparkJobLogRequest['size'];
                    type = showSparkJobLogRequest['type'];
                }
            }

        
            if (batchId === null || batchId === undefined) {
            throw new RequiredError('batchId','Required parameter batchId was null or undefined when calling showSparkJobLog.');
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
        showSparkJobStatus(showSparkJobStatusRequest?: ShowSparkJobStatusRequest) {
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

            if (showSparkJobStatusRequest !== null && showSparkJobStatusRequest !== undefined) {
                if (showSparkJobStatusRequest instanceof ShowSparkJobStatusRequest) {
                    batchId = showSparkJobStatusRequest.batchId;
                } else {
                    batchId = showSparkJobStatusRequest['batch_id'];
                }
            }

        
            if (batchId === null || batchId === undefined) {
            throw new RequiredError('batchId','Required parameter batchId was null or undefined when calling showSparkJobStatus.');
            }

            options.pathParams = { 'batch_id': batchId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该API用于获取作业模板。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showSparkJobTemplate(showSparkJobTemplateRequest?: ShowSparkJobTemplateRequest) {
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

            if (showSparkJobTemplateRequest !== null && showSparkJobTemplateRequest !== undefined) {
                if (showSparkJobTemplateRequest instanceof ShowSparkJobTemplateRequest) {
                    templateId = showSparkJobTemplateRequest.templateId;
                } else {
                    templateId = showSparkJobTemplateRequest['template_id'];
                }
            }

        
            if (templateId === null || templateId === undefined) {
            throw new RequiredError('templateId','Required parameter templateId was null or undefined when calling showSparkJobTemplate.');
            }

            options.pathParams = { 'template_id': templateId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该API用于修改作业模板。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateSparkJobTemplate(updateSparkJobTemplateRequest?: UpdateSparkJobTemplateRequest) {
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

            if (updateSparkJobTemplateRequest !== null && updateSparkJobTemplateRequest !== undefined) {
                if (updateSparkJobTemplateRequest instanceof UpdateSparkJobTemplateRequest) {
                    templateId = updateSparkJobTemplateRequest.templateId;
                    body = updateSparkJobTemplateRequest.body
                } else {
                    templateId = updateSparkJobTemplateRequest['template_id'];
                    body = updateSparkJobTemplateRequest['body'];
                }
            }

        
            if (templateId === null || templateId === undefined) {
            throw new RequiredError('templateId','Required parameter templateId was null or undefined when calling updateSparkJobTemplate.');
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
         * 该API用于批量删除SQL模板。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDeleteSqlJobTemplates(batchDeleteSqlJobTemplatesRequest?: BatchDeleteSqlJobTemplatesRequest) {
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

            if (batchDeleteSqlJobTemplatesRequest !== null && batchDeleteSqlJobTemplatesRequest !== undefined) {
                if (batchDeleteSqlJobTemplatesRequest instanceof BatchDeleteSqlJobTemplatesRequest) {
                    body = batchDeleteSqlJobTemplatesRequest.body
                } else {
                    body = batchDeleteSqlJobTemplatesRequest['body'];
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
         * 该API用于存储指定的SQL语句，后续可以重复使用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createSqlJobTemplate(createSqlJobTemplateRequest?: CreateSqlJobTemplateRequest) {
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

            if (createSqlJobTemplateRequest !== null && createSqlJobTemplateRequest !== undefined) {
                if (createSqlJobTemplateRequest instanceof CreateSqlJobTemplateRequest) {
                    body = createSqlJobTemplateRequest.body
                } else {
                    body = createSqlJobTemplateRequest['body'];
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
         * 该API用查看用户保存的所有SQL模板。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSqlJobTemplates(listSqlJobTemplatesRequest?: ListSqlJobTemplatesRequest) {
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

            if (listSqlJobTemplatesRequest !== null && listSqlJobTemplatesRequest !== undefined) {
                if (listSqlJobTemplatesRequest instanceof ListSqlJobTemplatesRequest) {
                    keyword = listSqlJobTemplatesRequest.keyword;
                } else {
                    keyword = listSqlJobTemplatesRequest['keyword'];
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
        previewSqlJobResult(previewSqlJobResultRequest?: PreviewSqlJobResultRequest) {
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

            if (previewSqlJobResultRequest !== null && previewSqlJobResultRequest !== undefined) {
                if (previewSqlJobResultRequest instanceof PreviewSqlJobResultRequest) {
                    jobId = previewSqlJobResultRequest.jobId;
                    queueName = previewSqlJobResultRequest.queueName;
                } else {
                    jobId = previewSqlJobResultRequest['job_id'];
                    queueName = previewSqlJobResultRequest['queue-name'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling previewSqlJobResult.');
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
         * 该API用于获取作业执行进度信息，如果作业正在执行，可以获取到子作业的信息，如果作业刚开始或者已经结束，不可以获取到子作业信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showSqlJobProgress(showSqlJobProgressRequest?: ShowSqlJobProgressRequest) {
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

            if (showSqlJobProgressRequest !== null && showSqlJobProgressRequest !== undefined) {
                if (showSqlJobProgressRequest instanceof ShowSqlJobProgressRequest) {
                    jobId = showSqlJobProgressRequest.jobId;
                } else {
                    jobId = showSqlJobProgressRequest['job_id'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling showSqlJobProgress.');
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
         * 该API用于更新SQL模板。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateSqlJobTemplate(updateSqlJobTemplateRequest?: UpdateSqlJobTemplateRequest) {
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

            if (updateSqlJobTemplateRequest !== null && updateSqlJobTemplateRequest !== undefined) {
                if (updateSqlJobTemplateRequest instanceof UpdateSqlJobTemplateRequest) {
                    sqlId = updateSqlJobTemplateRequest.sqlId;
                    body = updateSqlJobTemplateRequest.body
                } else {
                    sqlId = updateSqlJobTemplateRequest['sql_id'];
                    body = updateSqlJobTemplateRequest['body'];
                }
            }

        
            if (sqlId === null || sqlId === undefined) {
            throw new RequiredError('sqlId','Required parameter sqlId was null or undefined when calling updateSqlJobTemplate.');
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
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listPartitions(listPartitionsRequest?: ListPartitionsRequest) {
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

            if (listPartitionsRequest !== null && listPartitionsRequest !== undefined) {
                if (listPartitionsRequest instanceof ListPartitionsRequest) {
                    databaseName = listPartitionsRequest.databaseName;
                    tableName = listPartitionsRequest.tableName;
                    limit = listPartitionsRequest.limit;
                    offset = listPartitionsRequest.offset;
                } else {
                    databaseName = listPartitionsRequest['database_name'];
                    tableName = listPartitionsRequest['table_name'];
                    limit = listPartitionsRequest['limit'];
                    offset = listPartitionsRequest['offset'];
                }
            }

        
            if (databaseName === null || databaseName === undefined) {
            throw new RequiredError('databaseName','Required parameter databaseName was null or undefined when calling listPartitions.');
            }
            if (tableName === null || tableName === undefined) {
            throw new RequiredError('tableName','Required parameter tableName was null or undefined when calling listPartitions.');
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
         * 该API用于查询所有SQL样例模板。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSqlSampleTemplates() {
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
         * 该API用于查询指定数据库下符合过滤条件的或所有的表信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTables(listTablesRequest?: ListTablesRequest) {
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

            if (listTablesRequest !== null && listTablesRequest !== undefined) {
                if (listTablesRequest instanceof ListTablesRequest) {
                    databaseName = listTablesRequest.databaseName;
                    currentPage = listTablesRequest.currentPage;
                    keyword = listTablesRequest.keyword;
                    pageSize = listTablesRequest.pageSize;
                    tableType = listTablesRequest.tableType;
                    withDetail = listTablesRequest.withDetail;
                    withPriv = listTablesRequest.withPriv;
                } else {
                    databaseName = listTablesRequest['database_name'];
                    currentPage = listTablesRequest['current-page'];
                    keyword = listTablesRequest['keyword'];
                    pageSize = listTablesRequest['page-size'];
                    tableType = listTablesRequest['table-type'];
                    withDetail = listTablesRequest['with-detail'];
                    withPriv = listTablesRequest['with-priv'];
                }
            }

        
            if (databaseName === null || databaseName === undefined) {
            throw new RequiredError('databaseName','Required parameter databaseName was null or undefined when calling listTables.');
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
         * 该API用于用于预览表中前10行的内容。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        previewTable(previewTableRequest?: PreviewTableRequest) {
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

            if (previewTableRequest !== null && previewTableRequest !== undefined) {
                if (previewTableRequest instanceof PreviewTableRequest) {
                    databaseName = previewTableRequest.databaseName;
                    tableName = previewTableRequest.tableName;
                    mode = previewTableRequest.mode;
                } else {
                    databaseName = previewTableRequest['database_name'];
                    tableName = previewTableRequest['table_name'];
                    mode = previewTableRequest['mode'];
                }
            }

        
            if (databaseName === null || databaseName === undefined) {
            throw new RequiredError('databaseName','Required parameter databaseName was null or undefined when calling previewTable.');
            }
            if (tableName === null || tableName === undefined) {
            throw new RequiredError('tableName','Required parameter tableName was null or undefined when calling previewTable.');
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
         * 该API用于描述指定表的元数据信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showTable(showTableRequest?: ShowTableRequest) {
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

            if (showTableRequest !== null && showTableRequest !== undefined) {
                if (showTableRequest instanceof ShowTableRequest) {
                    databaseName = showTableRequest.databaseName;
                    tableName = showTableRequest.tableName;
                } else {
                    databaseName = showTableRequest['database_name'];
                    tableName = showTableRequest['table_name'];
                }
            }

        
            if (databaseName === null || databaseName === undefined) {
            throw new RequiredError('databaseName','Required parameter databaseName was null or undefined when calling showTable.');
            }
            if (tableName === null || tableName === undefined) {
            throw new RequiredError('tableName','Required parameter tableName was null or undefined when calling showTable.');
            }

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