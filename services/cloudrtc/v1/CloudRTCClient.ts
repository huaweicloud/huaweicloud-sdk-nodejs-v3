import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { AbnormalEvent } from './model/AbnormalEvent';
import { AbnormalEventDimensionValue } from './model/AbnormalEventDimensionValue';
import { ListRtcAbnormalEventDimensionRequest } from './model/ListRtcAbnormalEventDimensionRequest';
import { ListRtcAbnormalEventDimensionResponse } from './model/ListRtcAbnormalEventDimensionResponse';
import { ListRtcAbnormalEventRequest } from './model/ListRtcAbnormalEventRequest';
import { ListRtcAbnormalEventResponse } from './model/ListRtcAbnormalEventResponse';
import { ListRtcAbnormalEventsRequest } from './model/ListRtcAbnormalEventsRequest';
import { ListRtcAbnormalEventsResponse } from './model/ListRtcAbnormalEventsResponse';
import { ListRtcClientQosDetailsRequest } from './model/ListRtcClientQosDetailsRequest';
import { ListRtcClientQosDetailsResponse } from './model/ListRtcClientQosDetailsResponse';
import { ListRtcEventRequest } from './model/ListRtcEventRequest';
import { ListRtcEventResponse } from './model/ListRtcEventResponse';
import { ListRtcHistoryQualityRequest } from './model/ListRtcHistoryQualityRequest';
import { ListRtcHistoryQualityResponse } from './model/ListRtcHistoryQualityResponse';
import { ListRtcHistoryScaleRequest } from './model/ListRtcHistoryScaleRequest';
import { ListRtcHistoryScaleResponse } from './model/ListRtcHistoryScaleResponse';
import { ListRtcHistoryUsageRequest } from './model/ListRtcHistoryUsageRequest';
import { ListRtcHistoryUsageResponse } from './model/ListRtcHistoryUsageResponse';
import { ListRtcRealtimeNetworkRequest } from './model/ListRtcRealtimeNetworkRequest';
import { ListRtcRealtimeNetworkResponse } from './model/ListRtcRealtimeNetworkResponse';
import { ListRtcRealtimeQualityRequest } from './model/ListRtcRealtimeQualityRequest';
import { ListRtcRealtimeQualityResponse } from './model/ListRtcRealtimeQualityResponse';
import { ListRtcRealtimeScaleDimensionRequest } from './model/ListRtcRealtimeScaleDimensionRequest';
import { ListRtcRealtimeScaleDimensionResponse } from './model/ListRtcRealtimeScaleDimensionResponse';
import { ListRtcRealtimeScaleRequest } from './model/ListRtcRealtimeScaleRequest';
import { ListRtcRealtimeScaleResponse } from './model/ListRtcRealtimeScaleResponse';
import { ListRtcRoomListRequest } from './model/ListRtcRoomListRequest';
import { ListRtcRoomListResponse } from './model/ListRtcRoomListResponse';
import { ListRtcUserListRequest } from './model/ListRtcUserListRequest';
import { ListRtcUserListResponse } from './model/ListRtcUserListResponse';
import { QosQualityData } from './model/QosQualityData';
import { RTCCause } from './model/RTCCause';
import { RealtimeScaleDimensionValue } from './model/RealtimeScaleDimensionValue';
import { RtcHistoryQualityTimeValue } from './model/RtcHistoryQualityTimeValue';
import { RtcHistoryScaleTimeValue } from './model/RtcHistoryScaleTimeValue';
import { RtcHistoryUsage } from './model/RtcHistoryUsage';
import { RtcServerRoomInfo } from './model/RtcServerRoomInfo';
import { RtcUser } from './model/RtcUser';
import { TimeDoubleValueData } from './model/TimeDoubleValueData';
import { TimeFloatValueData } from './model/TimeFloatValueData';
import { TimeValueData } from './model/TimeValueData';

export class CloudRTCClient {
    public static newBuilder(): ClientBuilder<CloudRTCClient> {
            return new ClientBuilder<CloudRTCClient>(newClient);
    }

    private hcClient: HcClient;
    public constructor(client: HcClient) {
        this.hcClient = client;
    }

    public getPath() {
        return __dirname;
    }


    /**
     * 查询指定APP下通话的异常明细数据。可查询5天内的数据。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询用户异常体验事件接口
     * @param {string} appId 应用id
     * @param {string} startTime 起始时间。UTC时间，格式：yyyy-mm-ddThh:mm:ssZ，如2020-04-23T06:00:00Z。查询起止时间不超过1个小时，每次查询单个用户时，支持跨天查询，最长1天。 
     * @param {string} endTime 结束时间。UTC时间，格式：yyyy-mm-ddThh:mm:ssZ，如2020-04-23T06:00:00Z。查询起止时间不超过1个小时，每次查询单个用户时，支持跨天查询，最长1天。 
     * @param {string} [roomId] 房间id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listRtcAbnormalEvent(listRtcAbnormalEventRequest?: ListRtcAbnormalEventRequest): Promise<ListRtcAbnormalEventResponse> {
        const options = ParamCreater().listRtcAbnormalEvent(listRtcAbnormalEventRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定APP下通话的异常明细数据。可查询5天内的数据。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询详情事件接口
     * @param {string} appId 应用id
     * @param {string} startTime 起始时间。UTC时间，格式：yyyy-mm-ddThh:mm:ssZ，如2020-04-23T06:00:00Z。查询起止时间不超过1个小时，每次查询单个用户时，支持跨天查询，最长1天。 
     * @param {string} endTime 结束时间。UTC时间，格式：yyyy-mm-ddThh:mm:ssZ，如2020-04-23T06:00:00Z。查询起止时间不超过1个小时，每次查询单个用户时，支持跨天查询，最长1天。 
     * @param {string} [roomId] 房间id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listRtcEvent(listRtcEventRequest?: ListRtcEventRequest): Promise<ListRtcEventResponse> {
        const options = ParamCreater().listRtcEvent(listRtcEventRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定APP下指定时间内的通话异常明细数据分布情况。
     * 
     * 最大查询跨度1天。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询异常事件用户分布
     * @param {string} app 应用ID 
     * @param {string} [roomId] 房间ID 
     * @param {'abnormal_type' | 'abnormal_factor'} [dimension] 分组类型，支持同时指定两种类型 - abnormal_type：异常类型 - abnormal_factor：异常因素 
     * @param {string} [startTime] 查询起始时间。UTC时间，格式：YYYY-MM-DDThh:mm:ssZ，如2020-04-23T06:00:00Z，不填写则默认读取过去1小时数据数据。 
     * @param {string} [endTime] 查询结束时间。UTC时间，格式：YYYY-MM-DDThh:mm:ssZ，如2020-04-23T07:00:00Z，不填写则默认为当前时间。 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listRtcAbnormalEventDimension(listRtcAbnormalEventDimensionRequest?: ListRtcAbnormalEventDimensionRequest): Promise<ListRtcAbnormalEventDimensionResponse> {
        const options = ParamCreater().listRtcAbnormalEventDimension(listRtcAbnormalEventDimensionRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定APP下通话的异常明细数据。
     * 
     * 最大查询跨度1天。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询用户异常体验事件
     * @param {string} app 应用ID 
     * @param {string} [roomId] 房间ID 
     * @param {string} [uid] 用户ID 
     * @param {string} [startTime] 查询起始时间。UTC时间，格式：YYYY-MM-DDThh:mm:ssZ，如2020-04-23T06:00:00Z，不填写则默认读取过去1小时数据数据。 
     * @param {string} [endTime] 查询结束时间。UTC时间，格式：YYYY-MM-DDThh:mm:ssZ，如2020-04-23T07:00:00Z，不填写则默认为当前时间。 
     * @param {number} [limit] 查询结果条数 
     * @param {number} [offset] 查询偏移量 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listRtcAbnormalEvents(listRtcAbnormalEventsRequest?: ListRtcAbnormalEventsRequest): Promise<ListRtcAbnormalEventsResponse> {
        const options = ParamCreater().listRtcAbnormalEvents(listRtcAbnormalEventsRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询用户通话质量指标数据。
     * 
     * 可查询5天内的数据，mid 不为null，查询实时数据时，查询起止时间不超过24个小时，每次查询单个用户时，支持跨天查询。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询用户通话指标
     * @param {string} appId 应用id 
     * @param {string} roomId 房间ID 
     * @param {'appcpu' | 'syscpu' | 'abit' | 'ablock' | 'vbit' | 'dbit' | 'vfps' | 'dfps' | 'vblock' | 'dblock' | 'aloss' | 'vloss' | 'dloss' | 'vwidth' | 'vheight' | 'dwidth' | 'dheight' | 'ajitter' | 'artt' | 'vjitter' | 'vrtt' | 'djitter' | 'drtt'} mid 需查询的指标，填all则返回所有指标。多个指标使用\&#39;,\&#39;分割 - appcpu：端侧APP CPU使用率（appCpu） - syscpu：端侧系统 CPU使用率（deviceCpu） - abit：端侧音频码率kpbs（bitrate） - vbit：端侧视频码率kbps（bitRate） - dbit：端侧辅流码率kbps（bitRate） - vfps：端侧视频帧率fps（actFrameRate） - dfps：端侧辅流帧率fps（actFrameRate） - vblock：端侧视频卡顿率（统计大于等于600ms视频卡顿） - dblock：端侧辅流卡顿率（统计大于等于600ms辅流卡顿） - aloss：端侧音频丢包率（pktLoss） - vloss：端侧视频丢包率（pktLoss） - dloss：端侧辅流丢包率（pktLoss） - vwidth：端侧视频分辨率宽（actPicW） - vheight：端侧视频分辨率高（actPicH） - dwidth：端侧辅流分辨率宽（actPicW） - dheight：端侧辅流分辨率高（actPicH） - ajitter：端侧音频抖动率（jitter） - artt：端侧音频时延（rtt） - vjitter：端侧视频抖动率（jitter） - vrtt：端侧视频时延（rtt） - djitter：端侧辅流抖动率（jitter） - drtt：端侧辅流时延（rtt） 
     * @param {string} startTime 查询起始时间。UTC时间，格式：yyyy-mm-ddThh:mm:ssZ，如2020-04-23T06:00:00Z 
     * @param {string} endTime 查询结束时间。UTC时间，格式：yyyy-mm-ddThh:mm:ssZ，如2020-04-23T07:00:00Z 
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。 
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。 
     * @param {string} [xProjectId] 使用AK/SK方式认证时必选，携带项目ID信息，与路径参数中的项目ID相同。 
     * @param {string} [domain] 域名 
     * @param {string} [userId] 发送端用户 
     * @param {string} [peerId] 需查询接收端用户id 
     * @param {string} [streamId] 流号 
     * @param {string} [direction] 判断上下行数据 
     * @param {string} [timeType] 查询的时间类型取值：stime 数据库打点时间，不填默认ctime查询
     * @param {number} [limit] 查询结果限制 
     * @param {number} [offset] 查询偏移量 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listRtcClientQosDetails(listRtcClientQosDetailsRequest?: ListRtcClientQosDetailsRequest): Promise<ListRtcClientQosDetailsResponse> {
        const options = ParamCreater().listRtcClientQosDetails(listRtcClientQosDetailsRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询质量指标过去每天的体验数据，可查询最近31天的数据。当天未结束，无法查询到当天的体验数据。
     * 
     * 最大查询跨度31天。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询历史质量
     * @param {string} app 应用标识 
     * @param {Array<string>} metric 查询的数据类型 - JoinSuccessRate：加入房间成功率 - JoinSuccess5SecsRate：5秒加入成功率 - VideoFreezeRate：视频卡顿率 - AudioFreezeRate：音频卡顿率 - FirstVideoRecvTime：首帧视频接收耗时 - FirstAudioRecvTime：首帧音频接收耗时 - PullStreamSuccessRate：拉流成功率 - PushStreamSuccessRate：推流成功率 - VideoUpstreamExcellentTransRate：客户端视频上行优质传输率 - AudioUpstreamExcellentTransRate：客户端音频上行优质传输率 - VideoExcellentTransRate：端到端视频优质传输率 - AudioExcellentTransRate：端到端音频优质传输率 - VideoTransDelay：端到端视频网络时，单位为毫秒，取当天所有用户网络延迟的中位数 - AudioTransDelay：端到端音频网络时延，单位为毫秒，取当天所有用户网络延迟的中位数 
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。 
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。 
     * @param {string} [xProjectId] 使用AK/SK方式认证时必选，携带项目ID信息，与路径参数中的项目ID相同。 
     * @param {string} [startDate] 查询起始时间。UTC时间，格式：YYYY-MM-DD，如2020-04-23，不写默认读取过去1天数据数据。 
     * @param {string} [endDate] 查询结束时间。UTC时间，格式：YYYY-MM-DD，如2020-04-23 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listRtcHistoryQuality(listRtcHistoryQualityRequest?: ListRtcHistoryQualityRequest): Promise<ListRtcHistoryQualityResponse> {
        const options = ParamCreater().listRtcHistoryQuality(listRtcHistoryQualityRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指标过去每天的规模数量，可查询最近31天的数据。当天未结束，无法查到当天的房间数与用户数。
     * 
     * 最大查询跨度31天。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询历史规模
     * @param {string} app 应用标识 
     * @param {Array<string>} metric 查询的数据类型 - UserCount：通话人数，不同频道中的相同用户ID计为多人; - SessionCount：通话人次，用户每次加入频道计为一个通话人次; - RoomCount：房间数，从有用户加入房间到所有用户离开房间计为一个通话房间; - MaxOnlineUserCount：最大同时在线人数; - MaxOnlineRoomCount：最大同时在线房间数; - CommunicationDuration：音视频通话总时长; - VideoCommunicationDuration：视频通话总时长; - AudioCommunicationDuration：音频通话总时长; 
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。 
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。 
     * @param {string} [xProjectId] 使用AK/SK方式认证时必选，携带项目ID信息，与路径参数中的项目ID相同。 
     * @param {string} [startDate] 查询起始时间。UTC时间，格式：YYYY-MM-DD，如2020-04-23，不写默认读取过去1天数据数据。 
     * @param {string} [endDate] 查询结束时间。UTC时间，格式：YYYY-MM-DD，如2020-04-23 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listRtcHistoryScale(listRtcHistoryScaleRequest?: ListRtcHistoryScaleRequest): Promise<ListRtcHistoryScaleResponse> {
        const options = ParamCreater().listRtcHistoryScale(listRtcHistoryScaleRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询过去的某一时间段内各种业务的用量数据
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询用量
     * @param {string} app 应用标识 
     * @param {string} metric 查询的数据类型 - CommunicationDuration: 音视频通话时长; - TranscodeDuration：转码时长; - RecordDuration：录制时长; 
     * @param {string} startDate 查询起始时间。UTC时间，格式：YYYY-MM-DD，如2020-04-23。 
     * @param {string} endDate 查询结束时间。UTC时间，格式：YYYY-MM-DD，如2020-04-23。 
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。 
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。 
     * @param {string} [xProjectId] 使用AK/SK方式认证时必选，携带项目ID信息，与路径参数中的项目ID相同。 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listRtcHistoryUsage(listRtcHistoryUsageRequest?: ListRtcHistoryUsageRequest): Promise<ListRtcHistoryUsageResponse> {
        const options = ParamCreater().listRtcHistoryUsage(listRtcHistoryUsageRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取实时网络数据相关指标在某一时间段内每分钟的统计数据。
     * 
     * 最大查询跨度1天。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询实时网络
     * @param {string} app 应用标识 
     * @param {string} metric 查询的数据类型 VideoUpstreamExcellentTransRate：客户端视频上行优质传输率; AudioUpstreamExcellentTransRate：客户端音频上行优质传输率; VideoExcellentTransRate：端到端视频优质传输率; AudioExcellentTransRate：端到端音频优质传输率; 
     * @param {string} sdkType sdk类型 - native: 非web版sdk; - webrtc: web版sdk; 
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。 
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。 
     * @param {string} [xProjectId] 使用AK/SK方式认证时必选，携带项目ID信息，与路径参数中的项目ID相同。 
     * @param {string} [roomId] 房间ID 
     * @param {string} [startTime] 查询起始时间。UTC时间，格式：YYYY-MM-DDThh:mm:ssZ，如2020-04-23T06:00:00Z，不写默认读取过去1小时数据。 
     * @param {string} [endTime] 查询结束时间。UTC时间，格式：YYYY-MM-DDThh:mm:ssZ，如2020-04-23T06:00:00Z，不写默认为当前时间。 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listRtcRealtimeNetwork(listRtcRealtimeNetworkRequest?: ListRtcRealtimeNetworkRequest): Promise<ListRtcRealtimeNetworkResponse> {
        const options = ParamCreater().listRtcRealtimeNetwork(listRtcRealtimeNetworkRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取实时质量数据的相关指标在某一时间段内每分钟的统计数据。
     * 
     * 最大查询跨度1天。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询实时质量数据
     * @param {string} app 应用标识 
     * @param {string} metric 查询的数据类型 - JoinSuccessRate: 加入房间成功率 - JoinSuccess5SecsRate: 5秒加入成功率 - VideoFreezeRate: 视频卡顿率 - AudioFreezeRate: 音频卡顿率 
     * @param {string} sdkType sdk类型 - native: 非web版sdk - webrtc: web版sdk 
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。 
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。 
     * @param {string} [xProjectId] 使用AK/SK方式认证时必选，携带项目ID信息，与路径参数中的项目ID相同。 
     * @param {string} [roomId] 房间ID 
     * @param {string} [startTime] 查询起始时间。UTC时间，格式：YYYY-MM-DDThh:mm:ssZ，如2020-04-23T06:00:00Z，不写默认读取过去1小时数据。 
     * @param {string} [endTime] 查询结束时间。UTC时间，格式：YYYY-MM-DDThh:mm:ssZ，如2020-04-23T06:00:00Z，不写默认为当前时间。 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listRtcRealtimeQuality(listRtcRealtimeQualityRequest?: ListRtcRealtimeQualityRequest): Promise<ListRtcRealtimeQualityResponse> {
        const options = ParamCreater().listRtcRealtimeQuality(listRtcRealtimeQualityRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取规模相关的指标在某一时间段内每分钟的统计数据。
     * 
     * 最大查询跨度1天。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询实时规模
     * @param {string} app 应用标识 
     * @param {string} metric 查询的数据类型  OnlineUsers:在线用户数;  RoomCount:在线房间数; 
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。 
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。 
     * @param {string} [xProjectId] 使用AK/SK方式认证时必选，携带项目ID信息，与路径参数中的项目ID相同。 
     * @param {string} [roomId] 房间ID 
     * @param {string} [startTime] 查询起始时间。UTC时间，格式：YYYY-MM-DDThh:mm:ssZ，如2020-04-23T06:00:00Z，不写默认读取过去1小时数据数据。 
     * @param {string} [endTime] 查询结束时间。UTC时间，格式：YYYY-MM-DDThh:mm:ssZ，如2020-04-23T07:00:00Z，不写默认为当前时间。 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listRtcRealtimeScale(listRtcRealtimeScaleRequest?: ListRtcRealtimeScaleRequest): Promise<ListRtcRealtimeScaleResponse> {
        const options = ParamCreater().listRtcRealtimeScale(listRtcRealtimeScaleRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 对规模相关的数据，根据指定维度按在线用户数排名，获取规模相关的指标在指定维度下的统计数据
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询实时规模分布
     * @param {string} app 应用标识 
     * @param {string} metric 查询的数据类型  OnlineUsers:在线用户数 
     * @param {string} dimension 维度类型: region:省份 access_net:网络类型 platform:系统平台 sdk:SDK版本 
     * @param {string} time 查询时刻。UTC时间，格式：YYYY-MM-DDThh:mm:ssZ 
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。 
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。 
     * @param {string} [xProjectId] 使用AK/SK方式认证时必选，携带项目ID信息，与路径参数中的项目ID相同。 
     * @param {string} [roomId] 房间ID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listRtcRealtimeScaleDimension(listRtcRealtimeScaleDimensionRequest?: ListRtcRealtimeScaleDimensionRequest): Promise<ListRtcRealtimeScaleDimensionResponse> {
        const options = ParamCreater().listRtcRealtimeScaleDimension(listRtcRealtimeScaleDimensionRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 指定事件范围查询这段期间创建的房间列表。
     * 
     * 最大查询跨度90天。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询房间列表
     * @param {string} app 应用标识 
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。 
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。 
     * @param {string} [xProjectId] 使用AK/SK方式认证时必选，携带项目ID信息，与路径参数中的项目ID相同。 
     * @param {string} [roomId] 房间id 
     * @param {'RUNNING' | 'CLOSED'} [state] 房间状态，取值如下： - RUNNING：开启中 - CLOSED：已关闭 
     * @param {string} [startTime] 查询起始时间。UTC时间，格式：YYYY-MM-DDThh:mm:ssZ，如2020-04-23T06:00:00Z，不写默认读取过去1小时数据数据。 
     * @param {string} [endTime] 查询结束时间。UTC时间，格式：YYYY-MM-DDThh:mm:ssZ，如2020-04-23T07:00:00Z，不写默认为当前时间。 
     * @param {number} [limit] 查询结果条数 
     * @param {number} [offset] 查询偏移量 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listRtcRoomList(listRtcRoomListRequest?: ListRtcRoomListRequest): Promise<ListRtcRoomListResponse> {
        const options = ParamCreater().listRtcRoomList(listRtcRoomListRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 指定事件范围查询这段期间加入房间的用户列表。
     * 
     * 最大查询跨度90天。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询用户列表
     * @param {string} app 应用id 
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。 
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。 
     * @param {string} [xProjectId] 使用AK/SK方式认证时必选，携带项目ID信息，与路径参数中的项目ID相同。 
     * @param {string} [roomId] 房间id 
     * @param {string} [uid] 用户id 
     * @param {string} [nickname] 用户昵称 
     * @param {Array<string>} [region] 用户省份，支持省份名或缩写，如广东或者GD 
     * @param {Array<string>} [isp] 用户接入运营商 
     * @param {Array<string>} [state] 用户状态，取值如下： - FAIL：加入失败 - ONLINE：在线 - OFFLINE：离开 
     * @param {string} [startTime] 查询起始时间。UTC时间，格式：YYYY-MM-DDThh:mm:ssZ，如2020-04-23T06:00:00Z，不写默认读取过去1小时数据数据。 
     * @param {string} [endTime] 查询结束时间。UTC时间，格式：YYYY-MM-DDThh:mm:ssZ，如2020-04-23T06:00:00Z，不写默认为当前时间。 
     * @param {number} [limit] 查询结果限制 
     * @param {number} [offset] 查询偏移量 
     * @param {'detail' | 'summary'} [type] 查询模式，取值如下： - detail：会话级 - summary：用户级（默认） 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listRtcUserList(listRtcUserListRequest?: ListRtcUserListRequest): Promise<ListRtcUserListResponse> {
        const options = ParamCreater().listRtcUserList(listRtcUserListRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-id'];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 查询指定APP下通话的异常明细数据。可查询5天内的数据。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listRtcAbnormalEvent(listRtcAbnormalEventRequest?: ListRtcAbnormalEventRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/rtc/client/abnormalevent",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let appId;
            
            let startTime;
            
            let endTime;
            
            let roomId;

            if (listRtcAbnormalEventRequest !== null && listRtcAbnormalEventRequest !== undefined) {
                if (listRtcAbnormalEventRequest instanceof ListRtcAbnormalEventRequest) {
                    appId = listRtcAbnormalEventRequest.appId;
                    startTime = listRtcAbnormalEventRequest.startTime;
                    endTime = listRtcAbnormalEventRequest.endTime;
                    roomId = listRtcAbnormalEventRequest.roomId;
                } else {
                    appId = listRtcAbnormalEventRequest['app_id'];
                    startTime = listRtcAbnormalEventRequest['start_time'];
                    endTime = listRtcAbnormalEventRequest['end_time'];
                    roomId = listRtcAbnormalEventRequest['room_id'];
                }
            }

        
            if (appId === null || appId === undefined) {
                throw new RequiredError('appId','Required parameter appId was null or undefined when calling listRtcAbnormalEvent.');
            }
            if (appId !== null && appId !== undefined) {
                localVarQueryParameter['app_id'] = appId;
            }
            if (startTime === null || startTime === undefined) {
                throw new RequiredError('startTime','Required parameter startTime was null or undefined when calling listRtcAbnormalEvent.');
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime === null || endTime === undefined) {
                throw new RequiredError('endTime','Required parameter endTime was null or undefined when calling listRtcAbnormalEvent.');
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (roomId !== null && roomId !== undefined) {
                localVarQueryParameter['room_id'] = roomId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定APP下通话的异常明细数据。可查询5天内的数据。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listRtcEvent(listRtcEventRequest?: ListRtcEventRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/rtc/client/event",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let appId;
            
            let startTime;
            
            let endTime;
            
            let roomId;

            if (listRtcEventRequest !== null && listRtcEventRequest !== undefined) {
                if (listRtcEventRequest instanceof ListRtcEventRequest) {
                    appId = listRtcEventRequest.appId;
                    startTime = listRtcEventRequest.startTime;
                    endTime = listRtcEventRequest.endTime;
                    roomId = listRtcEventRequest.roomId;
                } else {
                    appId = listRtcEventRequest['app_id'];
                    startTime = listRtcEventRequest['start_time'];
                    endTime = listRtcEventRequest['end_time'];
                    roomId = listRtcEventRequest['room_id'];
                }
            }

        
            if (appId === null || appId === undefined) {
                throw new RequiredError('appId','Required parameter appId was null or undefined when calling listRtcEvent.');
            }
            if (appId !== null && appId !== undefined) {
                localVarQueryParameter['app_id'] = appId;
            }
            if (startTime === null || startTime === undefined) {
                throw new RequiredError('startTime','Required parameter startTime was null or undefined when calling listRtcEvent.');
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime === null || endTime === undefined) {
                throw new RequiredError('endTime','Required parameter endTime was null or undefined when calling listRtcEvent.');
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (roomId !== null && roomId !== undefined) {
                localVarQueryParameter['room_id'] = roomId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定APP下指定时间内的通话异常明细数据分布情况。
         * 
         * 最大查询跨度1天。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listRtcAbnormalEventDimension(listRtcAbnormalEventDimensionRequest?: ListRtcAbnormalEventDimensionRequest) {
            const options = {
                method: "GET",
                url: "/v1/rtc/data/abnormal-event/dimension",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let app;
            
            let roomId;
            
            let dimension;
            
            let startTime;
            
            let endTime;

            if (listRtcAbnormalEventDimensionRequest !== null && listRtcAbnormalEventDimensionRequest !== undefined) {
                if (listRtcAbnormalEventDimensionRequest instanceof ListRtcAbnormalEventDimensionRequest) {
                    app = listRtcAbnormalEventDimensionRequest.app;
                    roomId = listRtcAbnormalEventDimensionRequest.roomId;
                    dimension = listRtcAbnormalEventDimensionRequest.dimension;
                    startTime = listRtcAbnormalEventDimensionRequest.startTime;
                    endTime = listRtcAbnormalEventDimensionRequest.endTime;
                } else {
                    app = listRtcAbnormalEventDimensionRequest['app'];
                    roomId = listRtcAbnormalEventDimensionRequest['room_id'];
                    dimension = listRtcAbnormalEventDimensionRequest['dimension'];
                    startTime = listRtcAbnormalEventDimensionRequest['start_time'];
                    endTime = listRtcAbnormalEventDimensionRequest['end_time'];
                }
            }

        
            if (app === null || app === undefined) {
                throw new RequiredError('app','Required parameter app was null or undefined when calling listRtcAbnormalEventDimension.');
            }
            if (app !== null && app !== undefined) {
                localVarQueryParameter['app'] = app;
            }
            if (roomId !== null && roomId !== undefined) {
                localVarQueryParameter['room_id'] = roomId;
            }
            if (dimension !== null && dimension !== undefined) {
                localVarQueryParameter['dimension'] = dimension;
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
         * 查询指定APP下通话的异常明细数据。
         * 
         * 最大查询跨度1天。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listRtcAbnormalEvents(listRtcAbnormalEventsRequest?: ListRtcAbnormalEventsRequest) {
            const options = {
                method: "GET",
                url: "/v1/rtc/data/abnormal-events",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let app;
            
            let roomId;
            
            let uid;
            
            let startTime;
            
            let endTime;
            
            let limit;
            
            let offset;

            if (listRtcAbnormalEventsRequest !== null && listRtcAbnormalEventsRequest !== undefined) {
                if (listRtcAbnormalEventsRequest instanceof ListRtcAbnormalEventsRequest) {
                    app = listRtcAbnormalEventsRequest.app;
                    roomId = listRtcAbnormalEventsRequest.roomId;
                    uid = listRtcAbnormalEventsRequest.uid;
                    startTime = listRtcAbnormalEventsRequest.startTime;
                    endTime = listRtcAbnormalEventsRequest.endTime;
                    limit = listRtcAbnormalEventsRequest.limit;
                    offset = listRtcAbnormalEventsRequest.offset;
                } else {
                    app = listRtcAbnormalEventsRequest['app'];
                    roomId = listRtcAbnormalEventsRequest['room_id'];
                    uid = listRtcAbnormalEventsRequest['uid'];
                    startTime = listRtcAbnormalEventsRequest['start_time'];
                    endTime = listRtcAbnormalEventsRequest['end_time'];
                    limit = listRtcAbnormalEventsRequest['limit'];
                    offset = listRtcAbnormalEventsRequest['offset'];
                }
            }

        
            if (app === null || app === undefined) {
                throw new RequiredError('app','Required parameter app was null or undefined when calling listRtcAbnormalEvents.');
            }
            if (app !== null && app !== undefined) {
                localVarQueryParameter['app'] = app;
            }
            if (roomId !== null && roomId !== undefined) {
                localVarQueryParameter['room_id'] = roomId;
            }
            if (uid !== null && uid !== undefined) {
                localVarQueryParameter['uid'] = uid;
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
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
         * 查询用户通话质量指标数据。
         * 
         * 可查询5天内的数据，mid 不为null，查询实时数据时，查询起止时间不超过24个小时，每次查询单个用户时，支持跨天查询。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listRtcClientQosDetails(listRtcClientQosDetailsRequest?: ListRtcClientQosDetailsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/rtc/client/qos/details",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let appId;
            
            let roomId;
            
            let mid;
            
            let startTime;
            
            let endTime;
            
            let authorization;
            
            let xSdkDate;
            
            let xProjectId;
            
            let domain;
            
            let userId;
            
            let peerId;
            
            let streamId;
            
            let direction;
            
            let timeType;
            
            let limit;
            
            let offset;

            if (listRtcClientQosDetailsRequest !== null && listRtcClientQosDetailsRequest !== undefined) {
                if (listRtcClientQosDetailsRequest instanceof ListRtcClientQosDetailsRequest) {
                    appId = listRtcClientQosDetailsRequest.appId;
                    roomId = listRtcClientQosDetailsRequest.roomId;
                    mid = listRtcClientQosDetailsRequest.mid;
                    startTime = listRtcClientQosDetailsRequest.startTime;
                    endTime = listRtcClientQosDetailsRequest.endTime;
                    authorization = listRtcClientQosDetailsRequest.authorization;
                    xSdkDate = listRtcClientQosDetailsRequest.xSdkDate;
                    xProjectId = listRtcClientQosDetailsRequest.xProjectId;
                    domain = listRtcClientQosDetailsRequest.domain;
                    userId = listRtcClientQosDetailsRequest.userId;
                    peerId = listRtcClientQosDetailsRequest.peerId;
                    streamId = listRtcClientQosDetailsRequest.streamId;
                    direction = listRtcClientQosDetailsRequest.direction;
                    timeType = listRtcClientQosDetailsRequest.timeType;
                    limit = listRtcClientQosDetailsRequest.limit;
                    offset = listRtcClientQosDetailsRequest.offset;
                } else {
                    appId = listRtcClientQosDetailsRequest['app_id'];
                    roomId = listRtcClientQosDetailsRequest['room_id'];
                    mid = listRtcClientQosDetailsRequest['mid'];
                    startTime = listRtcClientQosDetailsRequest['start_time'];
                    endTime = listRtcClientQosDetailsRequest['end_time'];
                    authorization = listRtcClientQosDetailsRequest['Authorization'];
                    xSdkDate = listRtcClientQosDetailsRequest['X-Sdk-Date'];
                    xProjectId = listRtcClientQosDetailsRequest['X-Project-Id'];
                    domain = listRtcClientQosDetailsRequest['domain'];
                    userId = listRtcClientQosDetailsRequest['user_id'];
                    peerId = listRtcClientQosDetailsRequest['peer_id'];
                    streamId = listRtcClientQosDetailsRequest['stream_id'];
                    direction = listRtcClientQosDetailsRequest['direction'];
                    timeType = listRtcClientQosDetailsRequest['time_type'];
                    limit = listRtcClientQosDetailsRequest['limit'];
                    offset = listRtcClientQosDetailsRequest['offset'];
                }
            }

        
            if (appId === null || appId === undefined) {
                throw new RequiredError('appId','Required parameter appId was null or undefined when calling listRtcClientQosDetails.');
            }
            if (appId !== null && appId !== undefined) {
                localVarQueryParameter['app_id'] = appId;
            }
            if (roomId === null || roomId === undefined) {
                throw new RequiredError('roomId','Required parameter roomId was null or undefined when calling listRtcClientQosDetails.');
            }
            if (roomId !== null && roomId !== undefined) {
                localVarQueryParameter['room_id'] = roomId;
            }
            if (mid === null || mid === undefined) {
                throw new RequiredError('mid','Required parameter mid was null or undefined when calling listRtcClientQosDetails.');
            }
            if (mid !== null && mid !== undefined) {
                localVarQueryParameter['mid'] = mid;
            }
            if (startTime === null || startTime === undefined) {
                throw new RequiredError('startTime','Required parameter startTime was null or undefined when calling listRtcClientQosDetails.');
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime === null || endTime === undefined) {
                throw new RequiredError('endTime','Required parameter endTime was null or undefined when calling listRtcClientQosDetails.');
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (domain !== null && domain !== undefined) {
                localVarQueryParameter['domain'] = domain;
            }
            if (userId !== null && userId !== undefined) {
                localVarQueryParameter['user_id'] = userId;
            }
            if (peerId !== null && peerId !== undefined) {
                localVarQueryParameter['peer_id'] = peerId;
            }
            if (streamId !== null && streamId !== undefined) {
                localVarQueryParameter['stream_id'] = streamId;
            }
            if (direction !== null && direction !== undefined) {
                localVarQueryParameter['direction'] = direction;
            }
            if (timeType !== null && timeType !== undefined) {
                localVarQueryParameter['time_type'] = timeType;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
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
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询质量指标过去每天的体验数据，可查询最近31天的数据。当天未结束，无法查询到当天的体验数据。
         * 
         * 最大查询跨度31天。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listRtcHistoryQuality(listRtcHistoryQualityRequest?: ListRtcHistoryQualityRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/rtc/history/quality",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let app;
            
            let metric;
            
            let authorization;
            
            let xSdkDate;
            
            let xProjectId;
            
            let startDate;
            
            let endDate;

            if (listRtcHistoryQualityRequest !== null && listRtcHistoryQualityRequest !== undefined) {
                if (listRtcHistoryQualityRequest instanceof ListRtcHistoryQualityRequest) {
                    app = listRtcHistoryQualityRequest.app;
                    metric = listRtcHistoryQualityRequest.metric;
                    authorization = listRtcHistoryQualityRequest.authorization;
                    xSdkDate = listRtcHistoryQualityRequest.xSdkDate;
                    xProjectId = listRtcHistoryQualityRequest.xProjectId;
                    startDate = listRtcHistoryQualityRequest.startDate;
                    endDate = listRtcHistoryQualityRequest.endDate;
                } else {
                    app = listRtcHistoryQualityRequest['app'];
                    metric = listRtcHistoryQualityRequest['metric'];
                    authorization = listRtcHistoryQualityRequest['Authorization'];
                    xSdkDate = listRtcHistoryQualityRequest['X-Sdk-Date'];
                    xProjectId = listRtcHistoryQualityRequest['X-Project-Id'];
                    startDate = listRtcHistoryQualityRequest['start_date'];
                    endDate = listRtcHistoryQualityRequest['end_date'];
                }
            }

        
            if (app === null || app === undefined) {
                throw new RequiredError('app','Required parameter app was null or undefined when calling listRtcHistoryQuality.');
            }
            if (app !== null && app !== undefined) {
                localVarQueryParameter['app'] = app;
            }
            if (metric === null || metric === undefined) {
                throw new RequiredError('metric','Required parameter metric was null or undefined when calling listRtcHistoryQuality.');
            }
            if (metric !== null && metric !== undefined) {
                localVarQueryParameter['metric'] = metric;
            }
            if (startDate !== null && startDate !== undefined) {
                localVarQueryParameter['start_date'] = startDate;
            }
            if (endDate !== null && endDate !== undefined) {
                localVarQueryParameter['end_date'] = endDate;
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
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指标过去每天的规模数量，可查询最近31天的数据。当天未结束，无法查到当天的房间数与用户数。
         * 
         * 最大查询跨度31天。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listRtcHistoryScale(listRtcHistoryScaleRequest?: ListRtcHistoryScaleRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/rtc/history/scale",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let app;
            
            let metric;
            
            let authorization;
            
            let xSdkDate;
            
            let xProjectId;
            
            let startDate;
            
            let endDate;

            if (listRtcHistoryScaleRequest !== null && listRtcHistoryScaleRequest !== undefined) {
                if (listRtcHistoryScaleRequest instanceof ListRtcHistoryScaleRequest) {
                    app = listRtcHistoryScaleRequest.app;
                    metric = listRtcHistoryScaleRequest.metric;
                    authorization = listRtcHistoryScaleRequest.authorization;
                    xSdkDate = listRtcHistoryScaleRequest.xSdkDate;
                    xProjectId = listRtcHistoryScaleRequest.xProjectId;
                    startDate = listRtcHistoryScaleRequest.startDate;
                    endDate = listRtcHistoryScaleRequest.endDate;
                } else {
                    app = listRtcHistoryScaleRequest['app'];
                    metric = listRtcHistoryScaleRequest['metric'];
                    authorization = listRtcHistoryScaleRequest['Authorization'];
                    xSdkDate = listRtcHistoryScaleRequest['X-Sdk-Date'];
                    xProjectId = listRtcHistoryScaleRequest['X-Project-Id'];
                    startDate = listRtcHistoryScaleRequest['start_date'];
                    endDate = listRtcHistoryScaleRequest['end_date'];
                }
            }

        
            if (app === null || app === undefined) {
                throw new RequiredError('app','Required parameter app was null or undefined when calling listRtcHistoryScale.');
            }
            if (app !== null && app !== undefined) {
                localVarQueryParameter['app'] = app;
            }
            if (metric === null || metric === undefined) {
                throw new RequiredError('metric','Required parameter metric was null or undefined when calling listRtcHistoryScale.');
            }
            if (metric !== null && metric !== undefined) {
                localVarQueryParameter['metric'] = metric;
            }
            if (startDate !== null && startDate !== undefined) {
                localVarQueryParameter['start_date'] = startDate;
            }
            if (endDate !== null && endDate !== undefined) {
                localVarQueryParameter['end_date'] = endDate;
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
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询过去的某一时间段内各种业务的用量数据
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listRtcHistoryUsage(listRtcHistoryUsageRequest?: ListRtcHistoryUsageRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/rtc/history/usage",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let app;
            
            let metric;
            
            let startDate;
            
            let endDate;
            
            let authorization;
            
            let xSdkDate;
            
            let xProjectId;

            if (listRtcHistoryUsageRequest !== null && listRtcHistoryUsageRequest !== undefined) {
                if (listRtcHistoryUsageRequest instanceof ListRtcHistoryUsageRequest) {
                    app = listRtcHistoryUsageRequest.app;
                    metric = listRtcHistoryUsageRequest.metric;
                    startDate = listRtcHistoryUsageRequest.startDate;
                    endDate = listRtcHistoryUsageRequest.endDate;
                    authorization = listRtcHistoryUsageRequest.authorization;
                    xSdkDate = listRtcHistoryUsageRequest.xSdkDate;
                    xProjectId = listRtcHistoryUsageRequest.xProjectId;
                } else {
                    app = listRtcHistoryUsageRequest['app'];
                    metric = listRtcHistoryUsageRequest['metric'];
                    startDate = listRtcHistoryUsageRequest['start_date'];
                    endDate = listRtcHistoryUsageRequest['end_date'];
                    authorization = listRtcHistoryUsageRequest['Authorization'];
                    xSdkDate = listRtcHistoryUsageRequest['X-Sdk-Date'];
                    xProjectId = listRtcHistoryUsageRequest['X-Project-Id'];
                }
            }

        
            if (app === null || app === undefined) {
                throw new RequiredError('app','Required parameter app was null or undefined when calling listRtcHistoryUsage.');
            }
            if (app !== null && app !== undefined) {
                localVarQueryParameter['app'] = app;
            }
            if (metric === null || metric === undefined) {
                throw new RequiredError('metric','Required parameter metric was null or undefined when calling listRtcHistoryUsage.');
            }
            if (metric !== null && metric !== undefined) {
                localVarQueryParameter['metric'] = metric;
            }
            if (startDate === null || startDate === undefined) {
                throw new RequiredError('startDate','Required parameter startDate was null or undefined when calling listRtcHistoryUsage.');
            }
            if (startDate !== null && startDate !== undefined) {
                localVarQueryParameter['start_date'] = startDate;
            }
            if (endDate === null || endDate === undefined) {
                throw new RequiredError('endDate','Required parameter endDate was null or undefined when calling listRtcHistoryUsage.');
            }
            if (endDate !== null && endDate !== undefined) {
                localVarQueryParameter['end_date'] = endDate;
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
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取实时网络数据相关指标在某一时间段内每分钟的统计数据。
         * 
         * 最大查询跨度1天。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listRtcRealtimeNetwork(listRtcRealtimeNetworkRequest?: ListRtcRealtimeNetworkRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/rtc/realtime/network",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let app;
            
            let metric;
            
            let sdkType;
            
            let authorization;
            
            let xSdkDate;
            
            let xProjectId;
            
            let roomId;
            
            let startTime;
            
            let endTime;

            if (listRtcRealtimeNetworkRequest !== null && listRtcRealtimeNetworkRequest !== undefined) {
                if (listRtcRealtimeNetworkRequest instanceof ListRtcRealtimeNetworkRequest) {
                    app = listRtcRealtimeNetworkRequest.app;
                    metric = listRtcRealtimeNetworkRequest.metric;
                    sdkType = listRtcRealtimeNetworkRequest.sdkType;
                    authorization = listRtcRealtimeNetworkRequest.authorization;
                    xSdkDate = listRtcRealtimeNetworkRequest.xSdkDate;
                    xProjectId = listRtcRealtimeNetworkRequest.xProjectId;
                    roomId = listRtcRealtimeNetworkRequest.roomId;
                    startTime = listRtcRealtimeNetworkRequest.startTime;
                    endTime = listRtcRealtimeNetworkRequest.endTime;
                } else {
                    app = listRtcRealtimeNetworkRequest['app'];
                    metric = listRtcRealtimeNetworkRequest['metric'];
                    sdkType = listRtcRealtimeNetworkRequest['sdk_type'];
                    authorization = listRtcRealtimeNetworkRequest['Authorization'];
                    xSdkDate = listRtcRealtimeNetworkRequest['X-Sdk-Date'];
                    xProjectId = listRtcRealtimeNetworkRequest['X-Project-Id'];
                    roomId = listRtcRealtimeNetworkRequest['room_id'];
                    startTime = listRtcRealtimeNetworkRequest['start_time'];
                    endTime = listRtcRealtimeNetworkRequest['end_time'];
                }
            }

        
            if (app === null || app === undefined) {
                throw new RequiredError('app','Required parameter app was null or undefined when calling listRtcRealtimeNetwork.');
            }
            if (app !== null && app !== undefined) {
                localVarQueryParameter['app'] = app;
            }
            if (metric === null || metric === undefined) {
                throw new RequiredError('metric','Required parameter metric was null or undefined when calling listRtcRealtimeNetwork.');
            }
            if (metric !== null && metric !== undefined) {
                localVarQueryParameter['metric'] = metric;
            }
            if (sdkType === null || sdkType === undefined) {
                throw new RequiredError('sdkType','Required parameter sdkType was null or undefined when calling listRtcRealtimeNetwork.');
            }
            if (sdkType !== null && sdkType !== undefined) {
                localVarQueryParameter['sdk_type'] = sdkType;
            }
            if (roomId !== null && roomId !== undefined) {
                localVarQueryParameter['room_id'] = roomId;
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
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
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取实时质量数据的相关指标在某一时间段内每分钟的统计数据。
         * 
         * 最大查询跨度1天。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listRtcRealtimeQuality(listRtcRealtimeQualityRequest?: ListRtcRealtimeQualityRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/rtc/realtime/quality",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let app;
            
            let metric;
            
            let sdkType;
            
            let authorization;
            
            let xSdkDate;
            
            let xProjectId;
            
            let roomId;
            
            let startTime;
            
            let endTime;

            if (listRtcRealtimeQualityRequest !== null && listRtcRealtimeQualityRequest !== undefined) {
                if (listRtcRealtimeQualityRequest instanceof ListRtcRealtimeQualityRequest) {
                    app = listRtcRealtimeQualityRequest.app;
                    metric = listRtcRealtimeQualityRequest.metric;
                    sdkType = listRtcRealtimeQualityRequest.sdkType;
                    authorization = listRtcRealtimeQualityRequest.authorization;
                    xSdkDate = listRtcRealtimeQualityRequest.xSdkDate;
                    xProjectId = listRtcRealtimeQualityRequest.xProjectId;
                    roomId = listRtcRealtimeQualityRequest.roomId;
                    startTime = listRtcRealtimeQualityRequest.startTime;
                    endTime = listRtcRealtimeQualityRequest.endTime;
                } else {
                    app = listRtcRealtimeQualityRequest['app'];
                    metric = listRtcRealtimeQualityRequest['metric'];
                    sdkType = listRtcRealtimeQualityRequest['sdk_type'];
                    authorization = listRtcRealtimeQualityRequest['Authorization'];
                    xSdkDate = listRtcRealtimeQualityRequest['X-Sdk-Date'];
                    xProjectId = listRtcRealtimeQualityRequest['X-Project-Id'];
                    roomId = listRtcRealtimeQualityRequest['room_id'];
                    startTime = listRtcRealtimeQualityRequest['start_time'];
                    endTime = listRtcRealtimeQualityRequest['end_time'];
                }
            }

        
            if (app === null || app === undefined) {
                throw new RequiredError('app','Required parameter app was null or undefined when calling listRtcRealtimeQuality.');
            }
            if (app !== null && app !== undefined) {
                localVarQueryParameter['app'] = app;
            }
            if (metric === null || metric === undefined) {
                throw new RequiredError('metric','Required parameter metric was null or undefined when calling listRtcRealtimeQuality.');
            }
            if (metric !== null && metric !== undefined) {
                localVarQueryParameter['metric'] = metric;
            }
            if (sdkType === null || sdkType === undefined) {
                throw new RequiredError('sdkType','Required parameter sdkType was null or undefined when calling listRtcRealtimeQuality.');
            }
            if (sdkType !== null && sdkType !== undefined) {
                localVarQueryParameter['sdk_type'] = sdkType;
            }
            if (roomId !== null && roomId !== undefined) {
                localVarQueryParameter['room_id'] = roomId;
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
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
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取规模相关的指标在某一时间段内每分钟的统计数据。
         * 
         * 最大查询跨度1天。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listRtcRealtimeScale(listRtcRealtimeScaleRequest?: ListRtcRealtimeScaleRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/rtc/realtime/scale",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let app;
            
            let metric;
            
            let authorization;
            
            let xSdkDate;
            
            let xProjectId;
            
            let roomId;
            
            let startTime;
            
            let endTime;

            if (listRtcRealtimeScaleRequest !== null && listRtcRealtimeScaleRequest !== undefined) {
                if (listRtcRealtimeScaleRequest instanceof ListRtcRealtimeScaleRequest) {
                    app = listRtcRealtimeScaleRequest.app;
                    metric = listRtcRealtimeScaleRequest.metric;
                    authorization = listRtcRealtimeScaleRequest.authorization;
                    xSdkDate = listRtcRealtimeScaleRequest.xSdkDate;
                    xProjectId = listRtcRealtimeScaleRequest.xProjectId;
                    roomId = listRtcRealtimeScaleRequest.roomId;
                    startTime = listRtcRealtimeScaleRequest.startTime;
                    endTime = listRtcRealtimeScaleRequest.endTime;
                } else {
                    app = listRtcRealtimeScaleRequest['app'];
                    metric = listRtcRealtimeScaleRequest['metric'];
                    authorization = listRtcRealtimeScaleRequest['Authorization'];
                    xSdkDate = listRtcRealtimeScaleRequest['X-Sdk-Date'];
                    xProjectId = listRtcRealtimeScaleRequest['X-Project-Id'];
                    roomId = listRtcRealtimeScaleRequest['room_id'];
                    startTime = listRtcRealtimeScaleRequest['start_time'];
                    endTime = listRtcRealtimeScaleRequest['end_time'];
                }
            }

        
            if (app === null || app === undefined) {
                throw new RequiredError('app','Required parameter app was null or undefined when calling listRtcRealtimeScale.');
            }
            if (app !== null && app !== undefined) {
                localVarQueryParameter['app'] = app;
            }
            if (metric === null || metric === undefined) {
                throw new RequiredError('metric','Required parameter metric was null or undefined when calling listRtcRealtimeScale.');
            }
            if (metric !== null && metric !== undefined) {
                localVarQueryParameter['metric'] = metric;
            }
            if (roomId !== null && roomId !== undefined) {
                localVarQueryParameter['room_id'] = roomId;
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
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
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 对规模相关的数据，根据指定维度按在线用户数排名，获取规模相关的指标在指定维度下的统计数据
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listRtcRealtimeScaleDimension(listRtcRealtimeScaleDimensionRequest?: ListRtcRealtimeScaleDimensionRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/rtc/realtime/scale/dimension",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let app;
            
            let metric;
            
            let dimension;
            
            let time;
            
            let authorization;
            
            let xSdkDate;
            
            let xProjectId;
            
            let roomId;

            if (listRtcRealtimeScaleDimensionRequest !== null && listRtcRealtimeScaleDimensionRequest !== undefined) {
                if (listRtcRealtimeScaleDimensionRequest instanceof ListRtcRealtimeScaleDimensionRequest) {
                    app = listRtcRealtimeScaleDimensionRequest.app;
                    metric = listRtcRealtimeScaleDimensionRequest.metric;
                    dimension = listRtcRealtimeScaleDimensionRequest.dimension;
                    time = listRtcRealtimeScaleDimensionRequest.time;
                    authorization = listRtcRealtimeScaleDimensionRequest.authorization;
                    xSdkDate = listRtcRealtimeScaleDimensionRequest.xSdkDate;
                    xProjectId = listRtcRealtimeScaleDimensionRequest.xProjectId;
                    roomId = listRtcRealtimeScaleDimensionRequest.roomId;
                } else {
                    app = listRtcRealtimeScaleDimensionRequest['app'];
                    metric = listRtcRealtimeScaleDimensionRequest['metric'];
                    dimension = listRtcRealtimeScaleDimensionRequest['dimension'];
                    time = listRtcRealtimeScaleDimensionRequest['time'];
                    authorization = listRtcRealtimeScaleDimensionRequest['Authorization'];
                    xSdkDate = listRtcRealtimeScaleDimensionRequest['X-Sdk-Date'];
                    xProjectId = listRtcRealtimeScaleDimensionRequest['X-Project-Id'];
                    roomId = listRtcRealtimeScaleDimensionRequest['room_id'];
                }
            }

        
            if (app === null || app === undefined) {
                throw new RequiredError('app','Required parameter app was null or undefined when calling listRtcRealtimeScaleDimension.');
            }
            if (app !== null && app !== undefined) {
                localVarQueryParameter['app'] = app;
            }
            if (metric === null || metric === undefined) {
                throw new RequiredError('metric','Required parameter metric was null or undefined when calling listRtcRealtimeScaleDimension.');
            }
            if (metric !== null && metric !== undefined) {
                localVarQueryParameter['metric'] = metric;
            }
            if (dimension === null || dimension === undefined) {
                throw new RequiredError('dimension','Required parameter dimension was null or undefined when calling listRtcRealtimeScaleDimension.');
            }
            if (dimension !== null && dimension !== undefined) {
                localVarQueryParameter['dimension'] = dimension;
            }
            if (time === null || time === undefined) {
                throw new RequiredError('time','Required parameter time was null or undefined when calling listRtcRealtimeScaleDimension.');
            }
            if (time !== null && time !== undefined) {
                localVarQueryParameter['time'] = time;
            }
            if (roomId !== null && roomId !== undefined) {
                localVarQueryParameter['room_id'] = roomId;
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
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 指定事件范围查询这段期间创建的房间列表。
         * 
         * 最大查询跨度90天。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listRtcRoomList(listRtcRoomListRequest?: ListRtcRoomListRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/rtc/rooms",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let app;
            
            let authorization;
            
            let xSdkDate;
            
            let xProjectId;
            
            let roomId;
            
            let state;
            
            let startTime;
            
            let endTime;
            
            let limit;
            
            let offset;

            if (listRtcRoomListRequest !== null && listRtcRoomListRequest !== undefined) {
                if (listRtcRoomListRequest instanceof ListRtcRoomListRequest) {
                    app = listRtcRoomListRequest.app;
                    authorization = listRtcRoomListRequest.authorization;
                    xSdkDate = listRtcRoomListRequest.xSdkDate;
                    xProjectId = listRtcRoomListRequest.xProjectId;
                    roomId = listRtcRoomListRequest.roomId;
                    state = listRtcRoomListRequest.state;
                    startTime = listRtcRoomListRequest.startTime;
                    endTime = listRtcRoomListRequest.endTime;
                    limit = listRtcRoomListRequest.limit;
                    offset = listRtcRoomListRequest.offset;
                } else {
                    app = listRtcRoomListRequest['app'];
                    authorization = listRtcRoomListRequest['Authorization'];
                    xSdkDate = listRtcRoomListRequest['X-Sdk-Date'];
                    xProjectId = listRtcRoomListRequest['X-Project-Id'];
                    roomId = listRtcRoomListRequest['room_id'];
                    state = listRtcRoomListRequest['state'];
                    startTime = listRtcRoomListRequest['start_time'];
                    endTime = listRtcRoomListRequest['end_time'];
                    limit = listRtcRoomListRequest['limit'];
                    offset = listRtcRoomListRequest['offset'];
                }
            }

        
            if (app === null || app === undefined) {
                throw new RequiredError('app','Required parameter app was null or undefined when calling listRtcRoomList.');
            }
            if (app !== null && app !== undefined) {
                localVarQueryParameter['app'] = app;
            }
            if (roomId !== null && roomId !== undefined) {
                localVarQueryParameter['room_id'] = roomId;
            }
            if (state !== null && state !== undefined) {
                localVarQueryParameter['state'] = state;
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
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
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 指定事件范围查询这段期间加入房间的用户列表。
         * 
         * 最大查询跨度90天。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listRtcUserList(listRtcUserListRequest?: ListRtcUserListRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/rtc/users",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let app;
            
            let authorization;
            
            let xSdkDate;
            
            let xProjectId;
            
            let roomId;
            
            let uid;
            
            let nickname;
            
            let region;
            
            let isp;
            
            let state;
            
            let startTime;
            
            let endTime;
            
            let limit;
            
            let offset;
            
            let type;

            if (listRtcUserListRequest !== null && listRtcUserListRequest !== undefined) {
                if (listRtcUserListRequest instanceof ListRtcUserListRequest) {
                    app = listRtcUserListRequest.app;
                    authorization = listRtcUserListRequest.authorization;
                    xSdkDate = listRtcUserListRequest.xSdkDate;
                    xProjectId = listRtcUserListRequest.xProjectId;
                    roomId = listRtcUserListRequest.roomId;
                    uid = listRtcUserListRequest.uid;
                    nickname = listRtcUserListRequest.nickname;
                    region = listRtcUserListRequest.region;
                    isp = listRtcUserListRequest.isp;
                    state = listRtcUserListRequest.state;
                    startTime = listRtcUserListRequest.startTime;
                    endTime = listRtcUserListRequest.endTime;
                    limit = listRtcUserListRequest.limit;
                    offset = listRtcUserListRequest.offset;
                    type = listRtcUserListRequest.type;
                } else {
                    app = listRtcUserListRequest['app'];
                    authorization = listRtcUserListRequest['Authorization'];
                    xSdkDate = listRtcUserListRequest['X-Sdk-Date'];
                    xProjectId = listRtcUserListRequest['X-Project-Id'];
                    roomId = listRtcUserListRequest['room_id'];
                    uid = listRtcUserListRequest['uid'];
                    nickname = listRtcUserListRequest['nickname'];
                    region = listRtcUserListRequest['region'];
                    isp = listRtcUserListRequest['isp'];
                    state = listRtcUserListRequest['state'];
                    startTime = listRtcUserListRequest['start_time'];
                    endTime = listRtcUserListRequest['end_time'];
                    limit = listRtcUserListRequest['limit'];
                    offset = listRtcUserListRequest['offset'];
                    type = listRtcUserListRequest['type'];
                }
            }

        
            if (app === null || app === undefined) {
                throw new RequiredError('app','Required parameter app was null or undefined when calling listRtcUserList.');
            }
            if (app !== null && app !== undefined) {
                localVarQueryParameter['app'] = app;
            }
            if (roomId !== null && roomId !== undefined) {
                localVarQueryParameter['room_id'] = roomId;
            }
            if (uid !== null && uid !== undefined) {
                localVarQueryParameter['uid'] = uid;
            }
            if (nickname !== null && nickname !== undefined) {
                localVarQueryParameter['nickname'] = nickname;
            }
            if (region !== null && region !== undefined) {
                localVarQueryParameter['region'] = region;
            }
            if (isp !== null && isp !== undefined) {
                localVarQueryParameter['isp'] = isp;
            }
            if (state !== null && state !== undefined) {
                localVarQueryParameter['state'] = state;
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
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
            options.headers = localVarHeaderParameter;
            return options;
        },
    
    }
};

function newClient(client: HcClient): CloudRTCClient {
    return new CloudRTCClient(client);
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