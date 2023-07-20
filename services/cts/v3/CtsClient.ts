import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { BaseUser } from './model/BaseUser';
import { CreateNotificationRequest } from './model/CreateNotificationRequest';
import { CreateNotificationRequestBody } from './model/CreateNotificationRequestBody';
import { CreateNotificationResponse } from './model/CreateNotificationResponse';
import { CreateTrackerRequest } from './model/CreateTrackerRequest';
import { CreateTrackerRequestBody } from './model/CreateTrackerRequestBody';
import { CreateTrackerResponse } from './model/CreateTrackerResponse';
import { CtsQuota } from './model/CtsQuota';
import { DataBucket } from './model/DataBucket';
import { DataBucketQuery } from './model/DataBucketQuery';
import { DeleteNotificationRequest } from './model/DeleteNotificationRequest';
import { DeleteNotificationResponse } from './model/DeleteNotificationResponse';
import { DeleteTrackerRequest } from './model/DeleteTrackerRequest';
import { DeleteTrackerResponse } from './model/DeleteTrackerResponse';
import { Filter } from './model/Filter';
import { ListNotificationsRequest } from './model/ListNotificationsRequest';
import { ListNotificationsResponse } from './model/ListNotificationsResponse';
import { ListQuotasRequest } from './model/ListQuotasRequest';
import { ListQuotasResponse } from './model/ListQuotasResponse';
import { ListTracesRequest } from './model/ListTracesRequest';
import { ListTracesResponse } from './model/ListTracesResponse';
import { ListTrackersRequest } from './model/ListTrackersRequest';
import { ListTrackersResponse } from './model/ListTrackersResponse';
import { Lts } from './model/Lts';
import { MetaData } from './model/MetaData';
import { NotificationUsers } from './model/NotificationUsers';
import { NotificationsResponseBody } from './model/NotificationsResponseBody';
import { ObsInfo } from './model/ObsInfo';
import { Operations } from './model/Operations';
import { Traces } from './model/Traces';
import { TrackerObsInfo } from './model/TrackerObsInfo';
import { TrackerResponseBody } from './model/TrackerResponseBody';
import { UpdateNotificationRequest } from './model/UpdateNotificationRequest';
import { UpdateNotificationRequestBody } from './model/UpdateNotificationRequestBody';
import { UpdateNotificationResponse } from './model/UpdateNotificationResponse';
import { UpdateTrackerRequest } from './model/UpdateTrackerRequest';
import { UpdateTrackerRequestBody } from './model/UpdateTrackerRequestBody';
import { UpdateTrackerResponse } from './model/UpdateTrackerResponse';
import { UserInfo } from './model/UserInfo';

export class CtsClient {
    public static newBuilder(): ClientBuilder<CtsClient> {
            return new ClientBuilder<CtsClient>(newClient);
    }

    private hcClient: HcClient;
    public constructor(client: HcClient) {
        this.hcClient = client;
    }

    public getPath() {
        return __dirname;
    }


    /**
     * 配置关键操作通知，可在发生特定操作时，使用预先创建好的SMN主题，向用户手机、邮箱发送消息，也可直接发送http/https消息。常用于实时感知高危操作、触发特定操作或对接用户自有审计分析系统。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建关键操作通知
     * @param {CreateNotificationRequestBody} createNotificationRequestBody 创建通知请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createNotification(createNotificationRequest?: CreateNotificationRequest): Promise<CreateNotificationResponse> {
        const options = ParamCreater().createNotification(createNotificationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 云审计服务开通后系统会自动创建一个追踪器，用来关联系统记录的所有操作。目前，一个云账户在一个Region下支持创建一个管理类追踪器和多个数据类追踪器。
     * 云审计服务支持在管理控制台查询近7天内的操作记录。如需保存更长时间的操作记录，您可以在创建追踪器之后通过对象存储服务（Object Storage Service，以下简称OBS）将操作记录实时保存至OBS桶中。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建追踪器
     * @param {CreateTrackerRequestBody} createTrackerRequestBody This a create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createTracker(createTrackerRequest?: CreateTrackerRequest): Promise<CreateTrackerResponse> {
        const options = ParamCreater().createTracker(createTrackerRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 云审计服务支持删除已创建的关键操作通知。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除关键操作通知
     * @param {string} notificationId 标识关键操作通知id。 批量删除请使用逗号隔开，notification_id&#x3D;\&quot;xxx1,cccc2\&quot;
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteNotification(deleteNotificationRequest?: DeleteNotificationRequest): Promise<DeleteNotificationResponse> {
        const options = ParamCreater().deleteNotification(deleteNotificationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 云审计服务目前仅支持删除已创建的数据类追踪器。删除追踪器对已有的操作记录没有影响，当您重新开通云审计服务后，依旧可以查看已有的操作记录。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除追踪器
     * @param {string} [trackerName] 标识追踪器名称。 在不传入该字段的情况下，将删除当前租户所有的数据类追踪器。
     * @param {'data'} [trackerType] 标识追踪器类型。 目前仅支持数据类追踪器（data）的删除，默认值为\&quot;data\&quot;。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteTracker(deleteTrackerRequest?: DeleteTrackerRequest): Promise<DeleteTrackerResponse> {
        const options = ParamCreater().deleteTracker(deleteTrackerRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询创建的关键操作通知规则。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询关键操作通知
     * @param {'smn' | 'fun'} notificationType 通知类型。
     * @param {string} [notificationName] 标识关键操作通知名称。 在不传入该字段的情况下，将查询当前租户所有的关键操作通知。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listNotifications(listNotificationsRequest?: ListNotificationsRequest): Promise<ListNotificationsResponse> {
        const options = ParamCreater().listNotifications(listNotificationsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询租户追踪器配额信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询租户追踪器配额信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listQuotas(listQuotasRequest?: ListQuotasRequest): Promise<ListQuotasResponse> {
        const options = ParamCreater().listQuotas();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 通过事件列表查询接口，可以查出系统记录的7天内资源操作记录。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询事件列表
     * @param {'system' | 'data'} traceType 标识审计事件类型。 目前支持管理类事件（system）和数据类事件（data）。 默认值为\&quot;system\&quot;。
     * @param {number} [limit] 标示查询事件列表中限定返回的事件条数。不传时默认10条，最大值200条。
     * @param {number} [from] 标识查询事件列表的起始时间戳（timestamp，为标准UTC时间，毫秒级，13位数字，不包括传入时间）默认为上一小时的时间戳。查询条件from与to配套使用。
     * @param {string} [next] 取值为响应中中marker的值，用于标识查询事件的起始时间（自此条事件的记录时间起，向更早时间查询）。 可以与“from”、“to”结合使用。 最终的查询条件取两组时间条件的交集。
     * @param {number} [to] 标识查询事件列表的结束时间戳（timestamp，为标准UTC时间，毫秒级，13位数字，不包括传入时间）默认为当前时间戳。查询条件to与from配套使用。
     * @param {string} [trackerName] 当\&quot;trace_type\&quot;字段值为\&quot;system\&quot;时，该字段值默认为\&quot;system\&quot;。 当\&quot;trace_type\&quot;字段值为\&quot;data\&quot;时，该字段值可以传入数据类追踪器名称，达到筛选某个数据类追踪器下的数据事件目的。
     * @param {string} [serviceType] 标识查询事件列表对应的云服务类型。必须为已对接CTS的云服务的英文缩写，且服务类型一般为大写字母。 当\&quot;trace_type\&quot;字段值为\&quot;system\&quot;时，该字段筛选有效\&quot;。 已对接的云服务列表参见《云审计服务用户指南》“支持的服务”章节。
     * @param {string} [user] 标识特定用户名称，用以查询该用户下的所有事件。 当\&quot;trace_type\&quot;字段值为\&quot;system\&quot;时，该字段筛选有效\&quot;。
     * @param {string} [resourceId] 标示查询事件列表对应的云服务资源ID。 当\&quot;trace_type\&quot;字段值为\&quot;system\&quot;时，该字段筛选有效\&quot;。
     * @param {string} [resourceName] 标示查询事件列表对应的的资源名称。 当\&quot;trace_type\&quot;字段值为\&quot;system\&quot;时，该字段筛选有效\&quot;。 说明：该字段可能包含大写字母。
     * @param {string} [resourceType] 标示查询事件列表对应的资源类型。 当\&quot;trace_type\&quot;字段值为\&quot;system\&quot;时，该字段筛选有效\&quot;。
     * @param {string} [traceId] 标示某一条事件的事件ID。当传入这个查询条件时，其他查询条件自动不生效。 当\&quot;trace_type\&quot;字段值为\&quot;system\&quot;时，该字段筛选有效\&quot;。
     * @param {string} [traceName] 标示查询事件列表对应的事件名称。 当\&quot;trace_type\&quot;字段值为\&quot;system\&quot;时，该字段筛选有效\&quot;。 说明：该字段可能包含大写字母。
     * @param {'normal' | 'warning' | 'incident'} [traceRating] 标示查询事件列表对应的事件等级目前有三种：正常(normal), 警告(warning),事故(incident)。 当\&quot;trace_type\&quot;字段值为\&quot;system\&quot;时，该字段筛选有效\&quot;。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTraces(listTracesRequest?: ListTracesRequest): Promise<ListTracesResponse> {
        const options = ParamCreater().listTraces(listTracesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 开通云审计服务成功后，您可以在追踪器信息页面查看追踪器的详细信息。详细信息主要包括追踪器名称，用于存储操作事件的OBS桶名称和OBS桶中的事件文件前缀。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询追踪器
     * @param {string} [trackerName] 标示追踪器名称。 在不传入该字段的情况下，将查询租户所有的追踪器。
     * @param {'system' | 'data'} [trackerType] 标识追踪器类型。 目前支持系统追踪器有管理类追踪器（system）和数据类追踪器（data）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTrackers(listTrackersRequest?: ListTrackersRequest): Promise<ListTrackersResponse> {
        const options = ParamCreater().listTrackers(listTrackersRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 云审计服务支持修改已创建关键操作通知配置项，通过notification_id的字段匹配修改对象，notification_id必须已经存在。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改关键操作通知
     * @param {UpdateNotificationRequestBody} updateNotificationRequestBody 修改关键操作通知的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateNotification(updateNotificationRequest?: UpdateNotificationRequest): Promise<UpdateNotificationResponse> {
        const options = ParamCreater().updateNotification(updateNotificationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 云审计服务支持修改已创建追踪器的配置项，包括OBS桶转储、关键事件通知、事件转储加密、通过LTS对管理类事件进行检索、事件文件完整性校验以及追踪器启停状态等相关参数，修改追踪器对已有的操作记录没有影响。修改追踪器完成后，系统立即以新的规则开始记录操作。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改追踪器
     * @param {UpdateTrackerRequestBody} updateTrackerRequestBody 标示OBS桶名称，来自于OBS服务真实存在的桶。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateTracker(updateTrackerRequest?: UpdateTrackerRequest): Promise<UpdateTrackerResponse> {
        const options = ParamCreater().updateTracker(updateTrackerRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 配置关键操作通知，可在发生特定操作时，使用预先创建好的SMN主题，向用户手机、邮箱发送消息，也可直接发送http/https消息。常用于实时感知高危操作、触发特定操作或对接用户自有审计分析系统。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createNotification(createNotificationRequest?: CreateNotificationRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/notifications",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createNotificationRequest !== null && createNotificationRequest !== undefined) {
                if (createNotificationRequest instanceof CreateNotificationRequest) {
                    body = createNotificationRequest.body
                } else {
                    body = createNotificationRequest['body'];
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
         * 云审计服务开通后系统会自动创建一个追踪器，用来关联系统记录的所有操作。目前，一个云账户在一个Region下支持创建一个管理类追踪器和多个数据类追踪器。
         * 云审计服务支持在管理控制台查询近7天内的操作记录。如需保存更长时间的操作记录，您可以在创建追踪器之后通过对象存储服务（Object Storage Service，以下简称OBS）将操作记录实时保存至OBS桶中。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createTracker(createTrackerRequest?: CreateTrackerRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/tracker",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createTrackerRequest !== null && createTrackerRequest !== undefined) {
                if (createTrackerRequest instanceof CreateTrackerRequest) {
                    body = createTrackerRequest.body
                } else {
                    body = createTrackerRequest['body'];
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
         * 云审计服务支持删除已创建的关键操作通知。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteNotification(deleteNotificationRequest?: DeleteNotificationRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/notifications",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let notificationId;

            if (deleteNotificationRequest !== null && deleteNotificationRequest !== undefined) {
                if (deleteNotificationRequest instanceof DeleteNotificationRequest) {
                    notificationId = deleteNotificationRequest.notificationId;
                } else {
                    notificationId = deleteNotificationRequest['notification_id'];
                }
            }

        
            if (notificationId === null || notificationId === undefined) {
                throw new RequiredError('notificationId','Required parameter notificationId was null or undefined when calling deleteNotification.');
            }
            if (notificationId !== null && notificationId !== undefined) {
                localVarQueryParameter['notification_id'] = notificationId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 云审计服务目前仅支持删除已创建的数据类追踪器。删除追踪器对已有的操作记录没有影响，当您重新开通云审计服务后，依旧可以查看已有的操作记录。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteTracker(deleteTrackerRequest?: DeleteTrackerRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/trackers",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let trackerName;
            
            let trackerType;

            if (deleteTrackerRequest !== null && deleteTrackerRequest !== undefined) {
                if (deleteTrackerRequest instanceof DeleteTrackerRequest) {
                    trackerName = deleteTrackerRequest.trackerName;
                    trackerType = deleteTrackerRequest.trackerType;
                } else {
                    trackerName = deleteTrackerRequest['tracker_name'];
                    trackerType = deleteTrackerRequest['tracker_type'];
                }
            }

        
            if (trackerName !== null && trackerName !== undefined) {
                localVarQueryParameter['tracker_name'] = trackerName;
            }
            if (trackerType !== null && trackerType !== undefined) {
                localVarQueryParameter['tracker_type'] = trackerType;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询创建的关键操作通知规则。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listNotifications(listNotificationsRequest?: ListNotificationsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/notifications/{notification_type}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let notificationType;
            
            let notificationName;

            if (listNotificationsRequest !== null && listNotificationsRequest !== undefined) {
                if (listNotificationsRequest instanceof ListNotificationsRequest) {
                    notificationType = listNotificationsRequest.notificationType;
                    notificationName = listNotificationsRequest.notificationName;
                } else {
                    notificationType = listNotificationsRequest['notification_type'];
                    notificationName = listNotificationsRequest['notification_name'];
                }
            }

        
            if (notificationType === null || notificationType === undefined) {
            throw new RequiredError('notificationType','Required parameter notificationType was null or undefined when calling listNotifications.');
            }
            if (notificationName !== null && notificationName !== undefined) {
                localVarQueryParameter['notification_name'] = notificationName;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'notification_type': notificationType, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询租户追踪器配额信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listQuotas() {
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
         * 通过事件列表查询接口，可以查出系统记录的7天内资源操作记录。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTraces(listTracesRequest?: ListTracesRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/traces",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let traceType;
            
            let limit;
            
            let from;
            
            let next;
            
            let to;
            
            let trackerName;
            
            let serviceType;
            
            let user;
            
            let resourceId;
            
            let resourceName;
            
            let resourceType;
            
            let traceId;
            
            let traceName;
            
            let traceRating;

            if (listTracesRequest !== null && listTracesRequest !== undefined) {
                if (listTracesRequest instanceof ListTracesRequest) {
                    traceType = listTracesRequest.traceType;
                    limit = listTracesRequest.limit;
                    from = listTracesRequest.from;
                    next = listTracesRequest.next;
                    to = listTracesRequest.to;
                    trackerName = listTracesRequest.trackerName;
                    serviceType = listTracesRequest.serviceType;
                    user = listTracesRequest.user;
                    resourceId = listTracesRequest.resourceId;
                    resourceName = listTracesRequest.resourceName;
                    resourceType = listTracesRequest.resourceType;
                    traceId = listTracesRequest.traceId;
                    traceName = listTracesRequest.traceName;
                    traceRating = listTracesRequest.traceRating;
                } else {
                    traceType = listTracesRequest['trace_type'];
                    limit = listTracesRequest['limit'];
                    from = listTracesRequest['from'];
                    next = listTracesRequest['next'];
                    to = listTracesRequest['to'];
                    trackerName = listTracesRequest['tracker_name'];
                    serviceType = listTracesRequest['service_type'];
                    user = listTracesRequest['user'];
                    resourceId = listTracesRequest['resource_id'];
                    resourceName = listTracesRequest['resource_name'];
                    resourceType = listTracesRequest['resource_type'];
                    traceId = listTracesRequest['trace_id'];
                    traceName = listTracesRequest['trace_name'];
                    traceRating = listTracesRequest['trace_rating'];
                }
            }

        
            if (traceType === null || traceType === undefined) {
                throw new RequiredError('traceType','Required parameter traceType was null or undefined when calling listTraces.');
            }
            if (traceType !== null && traceType !== undefined) {
                localVarQueryParameter['trace_type'] = traceType;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (from !== null && from !== undefined) {
                localVarQueryParameter['from'] = from;
            }
            if (next !== null && next !== undefined) {
                localVarQueryParameter['next'] = next;
            }
            if (to !== null && to !== undefined) {
                localVarQueryParameter['to'] = to;
            }
            if (trackerName !== null && trackerName !== undefined) {
                localVarQueryParameter['tracker_name'] = trackerName;
            }
            if (serviceType !== null && serviceType !== undefined) {
                localVarQueryParameter['service_type'] = serviceType;
            }
            if (user !== null && user !== undefined) {
                localVarQueryParameter['user'] = user;
            }
            if (resourceId !== null && resourceId !== undefined) {
                localVarQueryParameter['resource_id'] = resourceId;
            }
            if (resourceName !== null && resourceName !== undefined) {
                localVarQueryParameter['resource_name'] = resourceName;
            }
            if (resourceType !== null && resourceType !== undefined) {
                localVarQueryParameter['resource_type'] = resourceType;
            }
            if (traceId !== null && traceId !== undefined) {
                localVarQueryParameter['trace_id'] = traceId;
            }
            if (traceName !== null && traceName !== undefined) {
                localVarQueryParameter['trace_name'] = traceName;
            }
            if (traceRating !== null && traceRating !== undefined) {
                localVarQueryParameter['trace_rating'] = traceRating;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 开通云审计服务成功后，您可以在追踪器信息页面查看追踪器的详细信息。详细信息主要包括追踪器名称，用于存储操作事件的OBS桶名称和OBS桶中的事件文件前缀。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTrackers(listTrackersRequest?: ListTrackersRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/trackers",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let trackerName;
            
            let trackerType;

            if (listTrackersRequest !== null && listTrackersRequest !== undefined) {
                if (listTrackersRequest instanceof ListTrackersRequest) {
                    trackerName = listTrackersRequest.trackerName;
                    trackerType = listTrackersRequest.trackerType;
                } else {
                    trackerName = listTrackersRequest['tracker_name'];
                    trackerType = listTrackersRequest['tracker_type'];
                }
            }

        
            if (trackerName !== null && trackerName !== undefined) {
                localVarQueryParameter['tracker_name'] = trackerName;
            }
            if (trackerType !== null && trackerType !== undefined) {
                localVarQueryParameter['tracker_type'] = trackerType;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 云审计服务支持修改已创建关键操作通知配置项，通过notification_id的字段匹配修改对象，notification_id必须已经存在。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateNotification(updateNotificationRequest?: UpdateNotificationRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/notifications",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (updateNotificationRequest !== null && updateNotificationRequest !== undefined) {
                if (updateNotificationRequest instanceof UpdateNotificationRequest) {
                    body = updateNotificationRequest.body
                } else {
                    body = updateNotificationRequest['body'];
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
         * 云审计服务支持修改已创建追踪器的配置项，包括OBS桶转储、关键事件通知、事件转储加密、通过LTS对管理类事件进行检索、事件文件完整性校验以及追踪器启停状态等相关参数，修改追踪器对已有的操作记录没有影响。修改追踪器完成后，系统立即以新的规则开始记录操作。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateTracker(updateTrackerRequest?: UpdateTrackerRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/tracker",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (updateTrackerRequest !== null && updateTrackerRequest !== undefined) {
                if (updateTrackerRequest instanceof UpdateTrackerRequest) {
                    body = updateTrackerRequest.body
                } else {
                    body = updateTrackerRequest['body'];
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
    
    }
};

function newClient(client: HcClient): CtsClient {
    return new CtsClient(client);
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