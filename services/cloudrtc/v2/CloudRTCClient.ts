import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { App } from './model/App';
import { AppAuth } from './model/AppAuth';
import { AppAuthReq } from './model/AppAuthReq';
import { AppAutoRecordMode } from './model/AppAutoRecordMode';
import { AppCallbackUrl } from './model/AppCallbackUrl';
import { AppCallbackUrlReq } from './model/AppCallbackUrlReq';
import { AppCallbacks } from './model/AppCallbacks';
import { AppReq } from './model/AppReq';
import { AppState } from './model/AppState';
import { AutoRecordModeReq } from './model/AutoRecordModeReq';
import { CreateAppRequest } from './model/CreateAppRequest';
import { CreateAppResponse } from './model/CreateAppResponse';
import { CreateIndividualStreamJobRequest } from './model/CreateIndividualStreamJobRequest';
import { CreateIndividualStreamJobResponse } from './model/CreateIndividualStreamJobResponse';
import { CreateMixJobRequest } from './model/CreateMixJobRequest';
import { CreateMixJobResponse } from './model/CreateMixJobResponse';
import { CreateRecordRuleRequest } from './model/CreateRecordRuleRequest';
import { CreateRecordRuleResponse } from './model/CreateRecordRuleResponse';
import { DeleteAppRequest } from './model/DeleteAppRequest';
import { DeleteAppResponse } from './model/DeleteAppResponse';
import { DeleteRecordRuleRequest } from './model/DeleteRecordRuleRequest';
import { DeleteRecordRuleResponse } from './model/DeleteRecordRuleResponse';
import { HLSRecordConfig } from './model/HLSRecordConfig';
import { IndividualStreamJobReq } from './model/IndividualStreamJobReq';
import { ListAppsRequest } from './model/ListAppsRequest';
import { ListAppsResponse } from './model/ListAppsResponse';
import { ListRecordRulesRequest } from './model/ListRecordRulesRequest';
import { ListRecordRulesResponse } from './model/ListRecordRulesResponse';
import { MP4RecordConfig } from './model/MP4RecordConfig';
import { MixJobReq } from './model/MixJobReq';
import { MixLayoutPane } from './model/MixLayoutPane';
import { MixParam } from './model/MixParam';
import { MixUserBackgroundImage } from './model/MixUserBackgroundImage';
import { PublishParam } from './model/PublishParam';
import { RecordObsFileAddr } from './model/RecordObsFileAddr';
import { RecordParam } from './model/RecordParam';
import { RecordRule } from './model/RecordRule';
import { RecordRuleReq } from './model/RecordRuleReq';
import { RemoveRoomRequest } from './model/RemoveRoomRequest';
import { RemoveRoomResponse } from './model/RemoveRoomResponse';
import { RemoveUsersReq } from './model/RemoveUsersReq';
import { RemoveUsersRequest } from './model/RemoveUsersRequest';
import { RemoveUsersResponse } from './model/RemoveUsersResponse';
import { ShowAppRequest } from './model/ShowAppRequest';
import { ShowAppResponse } from './model/ShowAppResponse';
import { ShowAutoRecordRequest } from './model/ShowAutoRecordRequest';
import { ShowAutoRecordResponse } from './model/ShowAutoRecordResponse';
import { ShowIndividualStreamJobRequest } from './model/ShowIndividualStreamJobRequest';
import { ShowIndividualStreamJobResponse } from './model/ShowIndividualStreamJobResponse';
import { ShowMixJobRequest } from './model/ShowMixJobRequest';
import { ShowMixJobResponse } from './model/ShowMixJobResponse';
import { ShowRecordCallbackRequest } from './model/ShowRecordCallbackRequest';
import { ShowRecordCallbackResponse } from './model/ShowRecordCallbackResponse';
import { ShowRecordRuleRequest } from './model/ShowRecordRuleRequest';
import { ShowRecordRuleResponse } from './model/ShowRecordRuleResponse';
import { ShowUrlAuthRequest } from './model/ShowUrlAuthRequest';
import { ShowUrlAuthResponse } from './model/ShowUrlAuthResponse';
import { StartAppRequest } from './model/StartAppRequest';
import { StartAppResponse } from './model/StartAppResponse';
import { StopAppRequest } from './model/StopAppRequest';
import { StopAppResponse } from './model/StopAppResponse';
import { StopIndividualStreamJobRequest } from './model/StopIndividualStreamJobRequest';
import { StopIndividualStreamJobResponse } from './model/StopIndividualStreamJobResponse';
import { StopMixJobRequest } from './model/StopMixJobRequest';
import { StopMixJobResponse } from './model/StopMixJobResponse';
import { UpdateAutoRecordRequest } from './model/UpdateAutoRecordRequest';
import { UpdateAutoRecordResponse } from './model/UpdateAutoRecordResponse';
import { UpdateIndividualJobReq } from './model/UpdateIndividualJobReq';
import { UpdateIndividualStreamJobRequest } from './model/UpdateIndividualStreamJobRequest';
import { UpdateIndividualStreamJobResponse } from './model/UpdateIndividualStreamJobResponse';
import { UpdateMixJobReq } from './model/UpdateMixJobReq';
import { UpdateMixJobRequest } from './model/UpdateMixJobRequest';
import { UpdateMixJobResponse } from './model/UpdateMixJobResponse';
import { UpdateMixParam } from './model/UpdateMixParam';
import { UpdateRecordCallbackRequest } from './model/UpdateRecordCallbackRequest';
import { UpdateRecordCallbackResponse } from './model/UpdateRecordCallbackResponse';
import { UpdateRecordRuleRequest } from './model/UpdateRecordRuleRequest';
import { UpdateRecordRuleResponse } from './model/UpdateRecordRuleResponse';
import { UpdateUrlAuthRequest } from './model/UpdateUrlAuthRequest';
import { UpdateUrlAuthResponse } from './model/UpdateUrlAuthResponse';

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
     * 调用此接口创建应用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建应用
     * @param {AppReq} createAppRequestBody 创建应用请求体
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。
     * @param {string} [xProjectId] 使用AK/SK方式认证时必选，携带项目ID信息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createApp(createAppRequest?: CreateAppRequest): Promise<CreateAppResponse> {
        const options = ParamCreater().createApp(createAppRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 调用此接口接口启动单流任务。
     * 
     * API触发单流录制流名规则：{jobtype}\\_{jobid}\\_{roomid}\\_{userid}
     * 
     * jobtype取值为\&#39;s\&#39;代表单流录制。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 启动单流任务
     * @param {string} appId 应用id
     * @param {IndividualStreamJobReq} createIndividualStreamJobRequestBody 启动单流转码参数
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。
     * @param {string} [xProjectId] 使用AK/SK方式认证时必选，携带项目ID信息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createIndividualStreamJob(createIndividualStreamJobRequest?: CreateIndividualStreamJobRequest): Promise<CreateIndividualStreamJobResponse> {
        const options = ParamCreater().createIndividualStreamJob(createIndividualStreamJobRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 调用此接口创建合流转码任务。
     * 
     * 支持纯音频录制和音视频录制：
     * 
     * - 纯音频录制
     * 
     *   encode_template填audio_only，音频合流会动态选择最大三方的声音。
     * 
     *   layout_template、layout_panes以及其他视频相关参数都不填，填就忽略。
     * 
     * - 音视频录制（包括共享桌面）
     * 
     *   encode_template非audio_only，layout_template、layout_panes必须非空。
     * 
     *   音频合流会动态选择最大三方的声音。
     * 
     *   API触发合流录制流名规则：{jobtype}\\_{jobid}\\_{roomid}，其中jobtype取值为\&#39;m\&#39;代表合流录制。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 启动合流任务
     * @param {string} appId 应用id
     * @param {MixJobReq} createMixJobRequestBody 启动合流转码参数
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。
     * @param {string} [xProjectId] 使用AK/SK方式认证时必选，携带项目ID信息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createMixJob(createMixJobRequest?: CreateMixJobRequest): Promise<CreateMixJobResponse> {
        const options = ParamCreater().createMixJob(createMixJobRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 调用此接口创建或更新录制规则。
     * 
     * - 若当前app在请求的location中无录制规则，则会创建新的录制规则
     * - 若当前app在请求的location中已有录制规则，则会更新原来的录制规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建或更新录制规则
     * @param {string} appId 应用id
     * @param {RecordRuleReq} createRecordRuleRequestBody 录制规则请求
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。
     * @param {string} [xProjectId] 使用AK/SK方式认证时必选，携带项目ID信息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createRecordRule(createRecordRuleRequest?: CreateRecordRuleRequest): Promise<CreateRecordRuleResponse> {
        const options = ParamCreater().createRecordRule(createRecordRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 调用此接口删除单个应用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除应用
     * @param {string} appId 应用id
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。
     * @param {string} [xProjectId] 使用AK/SK方式认证时必选，携带项目ID信息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteApp(deleteAppRequest?: DeleteAppRequest): Promise<DeleteAppResponse> {
        const options = ParamCreater().deleteApp(deleteAppRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 调用此接口删除录制规则，对于正在使用的录制规则，不允许删除。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除录制规则
     * @param {string} appId 应用id
     * @param {string} ruleId 规则id
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。
     * @param {string} [xProjectId] 使用AK/SK方式认证时必选，携带项目ID信息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteRecordRule(deleteRecordRuleRequest?: DeleteRecordRuleRequest): Promise<DeleteRecordRuleResponse> {
        const options = ParamCreater().deleteRecordRule(deleteRecordRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 调用此接口查询应用列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询应用列表
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。
     * @param {string} [xProjectId] 使用AK/SK方式认证时必选，携带项目ID信息。
     * @param {'ACTIVATION' | 'DEACTIVATION' | 'ARREARS'} [state] 应用的状态：  - ACTIVATION：应用开启  - DEACTIVATION：应用停用  - ARREARS：应用欠费 
     * @param {number} [offset] 查询结果起始编号，此处代表分页的页码，默认为0。
     * @param {number} [limit] 查询结果集数量，此处代表每一页的条数，最小为1，最大为100。默认为100。 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listApps(listAppsRequest?: ListAppsRequest): Promise<ListAppsResponse> {
        const options = ParamCreater().listApps(listAppsRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 调用此接口查询录制规则列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询录制规则列表
     * @param {string} appId 应用id
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。
     * @param {string} [xProjectId] 使用AK/SK方式认证时必选，携带项目ID信息。
     * @param {number} [offset] 查询结果起始编号，此处代表分页的页码
     * @param {number} [limit] 查询结果集数量，此处代表每一页的条数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listRecordRules(listRecordRulesRequest?: ListRecordRulesRequest): Promise<ListRecordRulesResponse> {
        const options = ParamCreater().listRecordRules(listRecordRulesRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 调用此接口解散房间，将该房间中所有用户踢出房间。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 解散房间
     * @param {string} appId 应用id
     * @param {string} roomId 房间id
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。
     * @param {string} [xProjectId] 使用AK/SK方式认证时必选，携带项目ID信息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public removeRoom(removeRoomRequest?: RemoveRoomRequest): Promise<RemoveRoomResponse> {
        const options = ParamCreater().removeRoom(removeRoomRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 调用此接口强制用户离开房间。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 踢除在线用户
     * @param {string} appId 应用id
     * @param {string} roomId 房间id
     * @param {RemoveUsersReq} removeUsersV2RequestBody 踢用户请求参数
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。
     * @param {string} [xProjectId] 使用AK/SK方式认证时必选，携带项目ID信息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public removeUsers(removeUsersRequest?: RemoveUsersRequest): Promise<RemoveUsersResponse> {
        const options = ParamCreater().removeUsers(removeUsersRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 调用此接口查询单个应用详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询单个应用
     * @param {string} appId 应用id
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。
     * @param {string} [xProjectId] 使用AK/SK方式认证时必选，携带项目ID信息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showApp(showAppRequest?: ShowAppRequest): Promise<ShowAppResponse> {
        const options = ParamCreater().showApp(showAppRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 调用此接口查询自动录制配置
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询自动录制配置
     * @param {string} appId 应用id
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。
     * @param {string} [xProjectId] 使用AK/SK方式认证时必选，携带项目ID信息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAutoRecord(showAutoRecordRequest?: ShowAutoRecordRequest): Promise<ShowAutoRecordResponse> {
        const options = ParamCreater().showAutoRecord(showAutoRecordRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 调用此接口查询单流任务状态。
     * 
     * 租户的OBS桶内的情况，暂不支持查询。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询单流任务状态
     * @param {string} appId 应用id
     * @param {string} jobId 任务编号
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。
     * @param {string} [xProjectId] 使用AK/SK方式认证时必选，携带项目ID信息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showIndividualStreamJob(showIndividualStreamJobRequest?: ShowIndividualStreamJobRequest): Promise<ShowIndividualStreamJobResponse> {
        const options = ParamCreater().showIndividualStreamJob(showIndividualStreamJobRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 调用此接口查询合流转码任务状态。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询合流任务
     * @param {string} appId 应用id
     * @param {string} jobId 任务编号
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。
     * @param {string} [xProjectId] 使用AK/SK方式认证时必选，携带项目ID信息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showMixJob(showMixJobRequest?: ShowMixJobRequest): Promise<ShowMixJobResponse> {
        const options = ParamCreater().showMixJob(showMixJobRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 调用此接口查询增值（录制）事件回调配置
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询增值（录制）事件回调配置
     * @param {string} appId 应用id
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。
     * @param {string} [xProjectId] 使用AK/SK方式认证时必选，携带项目ID信息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showRecordCallback(showRecordCallbackRequest?: ShowRecordCallbackRequest): Promise<ShowRecordCallbackResponse> {
        const options = ParamCreater().showRecordCallback(showRecordCallbackRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 调用此接口查询指定录制规则。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询录制规则
     * @param {string} appId 应用id
     * @param {string} ruleId 规则id
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。
     * @param {string} [xProjectId] 使用AK/SK方式认证时必选，携带项目ID信息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showRecordRule(showRecordRuleRequest?: ShowRecordRuleRequest): Promise<ShowRecordRuleResponse> {
        const options = ParamCreater().showRecordRule(showRecordRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询应用鉴权配置参数
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询访问控制参数
     * @param {string} appId 应用id
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。
     * @param {string} [xProjectId] 使用AK/SK方式认证时必选，携带项目ID信息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showUrlAuth(showUrlAuthRequest?: ShowUrlAuthRequest): Promise<ShowUrlAuthResponse> {
        const options = ParamCreater().showUrlAuth(showUrlAuthRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 调用此接口启用单个应用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 启用应用
     * @param {string} appId 应用id
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。
     * @param {string} [xProjectId] 使用AK/SK方式认证时必选，携带项目ID信息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public startApp(startAppRequest?: StartAppRequest): Promise<StartAppResponse> {
        const options = ParamCreater().startApp(startAppRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 调用此接口停用单个应用。
     * 
     * 应用停用后，新房间无法新增和加入，已加入的房间可以继续使用。合流、录制功能等也不可用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 停用应用
     * @param {string} appId 应用id
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。
     * @param {string} [xProjectId] 使用AK/SK方式认证时必选，携带项目ID信息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public stopApp(stopAppRequest?: StopAppRequest): Promise<StopAppResponse> {
        const options = ParamCreater().stopApp(stopAppRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 调用此接口停止单流任务
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 停止单流任务
     * @param {string} appId 应用id
     * @param {string} jobId 任务ID
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。
     * @param {string} [xProjectId] 使用AK/SK方式认证时必选，携带项目ID信息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public stopIndividualStreamJob(stopIndividualStreamJobRequest?: StopIndividualStreamJobRequest): Promise<StopIndividualStreamJobResponse> {
        const options = ParamCreater().stopIndividualStreamJob(stopIndividualStreamJobRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 调用此接口停止已下发的合流转码任务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 停止合流任务
     * @param {string} appId 应用id
     * @param {string} jobId 任务编号
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。
     * @param {string} [xProjectId] 使用AK/SK方式认证时必选，携带项目ID信息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public stopMixJob(stopMixJobRequest?: StopMixJobRequest): Promise<StopMixJobResponse> {
        const options = ParamCreater().stopMixJob(stopMixJobRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新自动录制配置，租户可以开启自动单流录制或者停用自动单流录制。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新自动录制配置
     * @param {string} appId 应用id
     * @param {AutoRecordModeReq} updateAutoRecordRequestBody 自动录制配置参数
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。
     * @param {string} [xProjectId] 使用AK/SK方式认证时必选，携带项目ID信息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateAutoRecord(updateAutoRecordRequest?: UpdateAutoRecordRequest): Promise<UpdateAutoRecordResponse> {
        const options = ParamCreater().updateAutoRecord(updateAutoRecordRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 调用此接口修改单流任务。
     * 
     * 仅部分场景支持修改。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新单流任务
     * @param {string} appId 应用id
     * @param {string} jobId 任务编号
     * @param {UpdateIndividualJobReq} updateIndividualStreamJobV2RequestBody 启动单流转码参数
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。
     * @param {string} [xProjectId] 使用AK/SK方式认证时必选，携带项目ID信息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateIndividualStreamJob(updateIndividualStreamJobRequest?: UpdateIndividualStreamJobRequest): Promise<UpdateIndividualStreamJobResponse> {
        const options = ParamCreater().updateIndividualStreamJob(updateIndividualStreamJobRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 调用此接口更新合流任务布局。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改合流任务
     * @param {string} appId 应用id
     * @param {string} jobId 任务编号
     * @param {UpdateMixJobReq} updateMixJobRequestBody 启动合流转码参数
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。
     * @param {string} [xProjectId] 使用AK/SK方式认证时必选，携带项目ID信息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateMixJob(updateMixJobRequest?: UpdateMixJobRequest): Promise<UpdateMixJobResponse> {
        const options = ParamCreater().updateMixJob(updateMixJobRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 调用此接口配置增值（录制）事件上报回调。
     * 
     * 当任务发生订阅了的事件时，通过该接口配置的回调地址通知。
     * 
     * 回调格式参考/customer-record-notify-url定义。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 配置RTC增值（录制）事件回调
     * @param {string} appId 应用id
     * @param {AppCallbackUrlReq} updateRecordCallbackRequestBody 增值（录制）事件回调请求体
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。
     * @param {string} [xProjectId] 使用AK/SK方式认证时必选，携带项目ID信息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateRecordCallback(updateRecordCallbackRequest?: UpdateRecordCallbackRequest): Promise<UpdateRecordCallbackResponse> {
        const options = ParamCreater().updateRecordCallback(updateRecordCallbackRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 调用此接口更新录制规则。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新录制规则
     * @param {string} appId 应用id
     * @param {string} ruleId 规则id
     * @param {RecordRuleReq} updateRecordRuleRequestBody 录制规则请求
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。
     * @param {string} [xProjectId] 使用AK/SK方式认证时必选，携带项目ID信息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateRecordRule(updateRecordRuleRequest?: UpdateRecordRuleRequest): Promise<UpdateRecordRuleResponse> {
        const options = ParamCreater().updateRecordRule(updateRecordRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 调用此接口开启或关闭URL鉴权。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 开关访问控制
     * @param {string} appId 应用id
     * @param {AppAuthReq} updateUrlAuthRequestBody URL鉴权请求消息体
     * @param {string} [authorization] 使用AK/SK方式认证时必选，携带的鉴权信息。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。
     * @param {string} [xProjectId] 使用AK/SK方式认证时必选，携带项目ID信息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateUrlAuth(updateUrlAuthRequest?: UpdateUrlAuthRequest): Promise<UpdateUrlAuthResponse> {
        const options = ParamCreater().updateUrlAuth(updateUrlAuthRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-Id'];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 调用此接口创建应用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createApp(createAppRequest?: CreateAppRequest) {
            const options = {
                method: "POST",
                url: "/v2/apps",
                contentType: "application/json;charset=utf-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let authorization;
            
            let xSdkDate;
            
            let xProjectId;

            if (createAppRequest !== null && createAppRequest !== undefined) {
                if (createAppRequest instanceof CreateAppRequest) {
                    body = createAppRequest.body
                    authorization = createAppRequest.authorization;
                    xSdkDate = createAppRequest.xSdkDate;
                    xProjectId = createAppRequest.xProjectId;
                } else {
                    body = createAppRequest['body'];
                    authorization = createAppRequest['Authorization'];
                    xSdkDate = createAppRequest['X-Sdk-Date'];
                    xProjectId = createAppRequest['X-Project-Id'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
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
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=utf-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 调用此接口接口启动单流任务。
         * 
         * API触发单流录制流名规则：{jobtype}\\_{jobid}\\_{roomid}\\_{userid}
         * 
         * jobtype取值为\&#39;s\&#39;代表单流录制。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createIndividualStreamJob(createIndividualStreamJobRequest?: CreateIndividualStreamJobRequest) {
            const options = {
                method: "POST",
                url: "/v2/apps/{app_id}/individual-stream-jobs",
                contentType: "application/json;charset=utf-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let appId;
            
            let authorization;
            
            let xSdkDate;
            
            let xProjectId;

            if (createIndividualStreamJobRequest !== null && createIndividualStreamJobRequest !== undefined) {
                if (createIndividualStreamJobRequest instanceof CreateIndividualStreamJobRequest) {
                    appId = createIndividualStreamJobRequest.appId;
                    body = createIndividualStreamJobRequest.body
                    authorization = createIndividualStreamJobRequest.authorization;
                    xSdkDate = createIndividualStreamJobRequest.xSdkDate;
                    xProjectId = createIndividualStreamJobRequest.xProjectId;
                } else {
                    appId = createIndividualStreamJobRequest['app_id'];
                    body = createIndividualStreamJobRequest['body'];
                    authorization = createIndividualStreamJobRequest['Authorization'];
                    xSdkDate = createIndividualStreamJobRequest['X-Sdk-Date'];
                    xProjectId = createIndividualStreamJobRequest['X-Project-Id'];
                }
            }

        
            if (appId === null || appId === undefined) {
            throw new RequiredError('appId','Required parameter appId was null or undefined when calling createIndividualStreamJob.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
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
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=utf-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'app_id': appId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 调用此接口创建合流转码任务。
         * 
         * 支持纯音频录制和音视频录制：
         * 
         * - 纯音频录制
         * 
         *   encode_template填audio_only，音频合流会动态选择最大三方的声音。
         * 
         *   layout_template、layout_panes以及其他视频相关参数都不填，填就忽略。
         * 
         * - 音视频录制（包括共享桌面）
         * 
         *   encode_template非audio_only，layout_template、layout_panes必须非空。
         * 
         *   音频合流会动态选择最大三方的声音。
         * 
         *   API触发合流录制流名规则：{jobtype}\\_{jobid}\\_{roomid}，其中jobtype取值为\&#39;m\&#39;代表合流录制。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createMixJob(createMixJobRequest?: CreateMixJobRequest) {
            const options = {
                method: "POST",
                url: "/v2/apps/{app_id}/mix-stream-jobs",
                contentType: "application/json;charset=utf-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let appId;
            
            let authorization;
            
            let xSdkDate;
            
            let xProjectId;

            if (createMixJobRequest !== null && createMixJobRequest !== undefined) {
                if (createMixJobRequest instanceof CreateMixJobRequest) {
                    appId = createMixJobRequest.appId;
                    body = createMixJobRequest.body
                    authorization = createMixJobRequest.authorization;
                    xSdkDate = createMixJobRequest.xSdkDate;
                    xProjectId = createMixJobRequest.xProjectId;
                } else {
                    appId = createMixJobRequest['app_id'];
                    body = createMixJobRequest['body'];
                    authorization = createMixJobRequest['Authorization'];
                    xSdkDate = createMixJobRequest['X-Sdk-Date'];
                    xProjectId = createMixJobRequest['X-Project-Id'];
                }
            }

        
            if (appId === null || appId === undefined) {
            throw new RequiredError('appId','Required parameter appId was null or undefined when calling createMixJob.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
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
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=utf-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'app_id': appId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 调用此接口创建或更新录制规则。
         * 
         * - 若当前app在请求的location中无录制规则，则会创建新的录制规则
         * - 若当前app在请求的location中已有录制规则，则会更新原来的录制规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createRecordRule(createRecordRuleRequest?: CreateRecordRuleRequest) {
            const options = {
                method: "POST",
                url: "/v2/apps/{app_id}/record-rules",
                contentType: "application/json;charset=utf-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let appId;
            
            let authorization;
            
            let xSdkDate;
            
            let xProjectId;

            if (createRecordRuleRequest !== null && createRecordRuleRequest !== undefined) {
                if (createRecordRuleRequest instanceof CreateRecordRuleRequest) {
                    appId = createRecordRuleRequest.appId;
                    body = createRecordRuleRequest.body
                    authorization = createRecordRuleRequest.authorization;
                    xSdkDate = createRecordRuleRequest.xSdkDate;
                    xProjectId = createRecordRuleRequest.xProjectId;
                } else {
                    appId = createRecordRuleRequest['app_id'];
                    body = createRecordRuleRequest['body'];
                    authorization = createRecordRuleRequest['Authorization'];
                    xSdkDate = createRecordRuleRequest['X-Sdk-Date'];
                    xProjectId = createRecordRuleRequest['X-Project-Id'];
                }
            }

        
            if (appId === null || appId === undefined) {
            throw new RequiredError('appId','Required parameter appId was null or undefined when calling createRecordRule.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
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
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=utf-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'app_id': appId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 调用此接口删除单个应用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteApp(deleteAppRequest?: DeleteAppRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/apps/{app_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let appId;
            
            let authorization;
            
            let xSdkDate;
            
            let xProjectId;

            if (deleteAppRequest !== null && deleteAppRequest !== undefined) {
                if (deleteAppRequest instanceof DeleteAppRequest) {
                    appId = deleteAppRequest.appId;
                    authorization = deleteAppRequest.authorization;
                    xSdkDate = deleteAppRequest.xSdkDate;
                    xProjectId = deleteAppRequest.xProjectId;
                } else {
                    appId = deleteAppRequest['app_id'];
                    authorization = deleteAppRequest['Authorization'];
                    xSdkDate = deleteAppRequest['X-Sdk-Date'];
                    xProjectId = deleteAppRequest['X-Project-Id'];
                }
            }

        
            if (appId === null || appId === undefined) {
            throw new RequiredError('appId','Required parameter appId was null or undefined when calling deleteApp.');
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

            options.pathParams = { 'app_id': appId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 调用此接口删除录制规则，对于正在使用的录制规则，不允许删除。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteRecordRule(deleteRecordRuleRequest?: DeleteRecordRuleRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/apps/{app_id}/record-rules/{rule_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let appId;
            
            let ruleId;
            
            let authorization;
            
            let xSdkDate;
            
            let xProjectId;

            if (deleteRecordRuleRequest !== null && deleteRecordRuleRequest !== undefined) {
                if (deleteRecordRuleRequest instanceof DeleteRecordRuleRequest) {
                    appId = deleteRecordRuleRequest.appId;
                    ruleId = deleteRecordRuleRequest.ruleId;
                    authorization = deleteRecordRuleRequest.authorization;
                    xSdkDate = deleteRecordRuleRequest.xSdkDate;
                    xProjectId = deleteRecordRuleRequest.xProjectId;
                } else {
                    appId = deleteRecordRuleRequest['app_id'];
                    ruleId = deleteRecordRuleRequest['rule_id'];
                    authorization = deleteRecordRuleRequest['Authorization'];
                    xSdkDate = deleteRecordRuleRequest['X-Sdk-Date'];
                    xProjectId = deleteRecordRuleRequest['X-Project-Id'];
                }
            }

        
            if (appId === null || appId === undefined) {
            throw new RequiredError('appId','Required parameter appId was null or undefined when calling deleteRecordRule.');
            }
            if (ruleId === null || ruleId === undefined) {
            throw new RequiredError('ruleId','Required parameter ruleId was null or undefined when calling deleteRecordRule.');
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

            options.pathParams = { 'app_id': appId,'rule_id': ruleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 调用此接口查询应用列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listApps(listAppsRequest?: ListAppsRequest) {
            const options = {
                method: "GET",
                url: "/v2/apps",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let authorization;
            
            let xSdkDate;
            
            let xProjectId;
            
            let state;
            
            let offset;
            
            let limit;

            if (listAppsRequest !== null && listAppsRequest !== undefined) {
                if (listAppsRequest instanceof ListAppsRequest) {
                    authorization = listAppsRequest.authorization;
                    xSdkDate = listAppsRequest.xSdkDate;
                    xProjectId = listAppsRequest.xProjectId;
                    state = listAppsRequest.state;
                    offset = listAppsRequest.offset;
                    limit = listAppsRequest.limit;
                } else {
                    authorization = listAppsRequest['Authorization'];
                    xSdkDate = listAppsRequest['X-Sdk-Date'];
                    xProjectId = listAppsRequest['X-Project-Id'];
                    state = listAppsRequest['state'];
                    offset = listAppsRequest['offset'];
                    limit = listAppsRequest['limit'];
                }
            }

        
            if (state !== null && state !== undefined) {
                localVarQueryParameter['state'] = state;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
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
         * 调用此接口查询录制规则列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listRecordRules(listRecordRulesRequest?: ListRecordRulesRequest) {
            const options = {
                method: "GET",
                url: "/v2/apps/{app_id}/record-rules",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let appId;
            
            let authorization;
            
            let xSdkDate;
            
            let xProjectId;
            
            let offset;
            
            let limit;

            if (listRecordRulesRequest !== null && listRecordRulesRequest !== undefined) {
                if (listRecordRulesRequest instanceof ListRecordRulesRequest) {
                    appId = listRecordRulesRequest.appId;
                    authorization = listRecordRulesRequest.authorization;
                    xSdkDate = listRecordRulesRequest.xSdkDate;
                    xProjectId = listRecordRulesRequest.xProjectId;
                    offset = listRecordRulesRequest.offset;
                    limit = listRecordRulesRequest.limit;
                } else {
                    appId = listRecordRulesRequest['app_id'];
                    authorization = listRecordRulesRequest['Authorization'];
                    xSdkDate = listRecordRulesRequest['X-Sdk-Date'];
                    xProjectId = listRecordRulesRequest['X-Project-Id'];
                    offset = listRecordRulesRequest['offset'];
                    limit = listRecordRulesRequest['limit'];
                }
            }

        
            if (appId === null || appId === undefined) {
            throw new RequiredError('appId','Required parameter appId was null or undefined when calling listRecordRules.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
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
            options.pathParams = { 'app_id': appId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 调用此接口解散房间，将该房间中所有用户踢出房间。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        removeRoom(removeRoomRequest?: RemoveRoomRequest) {
            const options = {
                method: "POST",
                url: "/v2/apps/{app_id}/rooms/{room_id}/dismiss",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let appId;
            
            let roomId;
            
            let authorization;
            
            let xSdkDate;
            
            let xProjectId;

            if (removeRoomRequest !== null && removeRoomRequest !== undefined) {
                if (removeRoomRequest instanceof RemoveRoomRequest) {
                    appId = removeRoomRequest.appId;
                    roomId = removeRoomRequest.roomId;
                    authorization = removeRoomRequest.authorization;
                    xSdkDate = removeRoomRequest.xSdkDate;
                    xProjectId = removeRoomRequest.xProjectId;
                } else {
                    appId = removeRoomRequest['app_id'];
                    roomId = removeRoomRequest['room_id'];
                    authorization = removeRoomRequest['Authorization'];
                    xSdkDate = removeRoomRequest['X-Sdk-Date'];
                    xProjectId = removeRoomRequest['X-Project-Id'];
                }
            }

        
            if (appId === null || appId === undefined) {
            throw new RequiredError('appId','Required parameter appId was null or undefined when calling removeRoom.');
            }
            if (roomId === null || roomId === undefined) {
            throw new RequiredError('roomId','Required parameter roomId was null or undefined when calling removeRoom.');
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

            options.pathParams = { 'app_id': appId,'room_id': roomId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 调用此接口强制用户离开房间。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        removeUsers(removeUsersRequest?: RemoveUsersRequest) {
            const options = {
                method: "POST",
                url: "/v2/apps/{app_id}/rooms/{room_id}/batch-remove-users",
                contentType: "application/json;charset=utf-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let appId;
            
            let roomId;
            
            let authorization;
            
            let xSdkDate;
            
            let xProjectId;

            if (removeUsersRequest !== null && removeUsersRequest !== undefined) {
                if (removeUsersRequest instanceof RemoveUsersRequest) {
                    appId = removeUsersRequest.appId;
                    roomId = removeUsersRequest.roomId;
                    body = removeUsersRequest.body
                    authorization = removeUsersRequest.authorization;
                    xSdkDate = removeUsersRequest.xSdkDate;
                    xProjectId = removeUsersRequest.xProjectId;
                } else {
                    appId = removeUsersRequest['app_id'];
                    roomId = removeUsersRequest['room_id'];
                    body = removeUsersRequest['body'];
                    authorization = removeUsersRequest['Authorization'];
                    xSdkDate = removeUsersRequest['X-Sdk-Date'];
                    xProjectId = removeUsersRequest['X-Project-Id'];
                }
            }

        
            if (appId === null || appId === undefined) {
            throw new RequiredError('appId','Required parameter appId was null or undefined when calling removeUsers.');
            }
            if (roomId === null || roomId === undefined) {
            throw new RequiredError('roomId','Required parameter roomId was null or undefined when calling removeUsers.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
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
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=utf-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'app_id': appId,'room_id': roomId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 调用此接口查询单个应用详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showApp(showAppRequest?: ShowAppRequest) {
            const options = {
                method: "GET",
                url: "/v2/apps/{app_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let appId;
            
            let authorization;
            
            let xSdkDate;
            
            let xProjectId;

            if (showAppRequest !== null && showAppRequest !== undefined) {
                if (showAppRequest instanceof ShowAppRequest) {
                    appId = showAppRequest.appId;
                    authorization = showAppRequest.authorization;
                    xSdkDate = showAppRequest.xSdkDate;
                    xProjectId = showAppRequest.xProjectId;
                } else {
                    appId = showAppRequest['app_id'];
                    authorization = showAppRequest['Authorization'];
                    xSdkDate = showAppRequest['X-Sdk-Date'];
                    xProjectId = showAppRequest['X-Project-Id'];
                }
            }

        
            if (appId === null || appId === undefined) {
            throw new RequiredError('appId','Required parameter appId was null or undefined when calling showApp.');
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

            options.pathParams = { 'app_id': appId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 调用此接口查询自动录制配置
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAutoRecord(showAutoRecordRequest?: ShowAutoRecordRequest) {
            const options = {
                method: "GET",
                url: "/v2/apps/{app_id}/auto-record-mode",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let appId;
            
            let authorization;
            
            let xSdkDate;
            
            let xProjectId;

            if (showAutoRecordRequest !== null && showAutoRecordRequest !== undefined) {
                if (showAutoRecordRequest instanceof ShowAutoRecordRequest) {
                    appId = showAutoRecordRequest.appId;
                    authorization = showAutoRecordRequest.authorization;
                    xSdkDate = showAutoRecordRequest.xSdkDate;
                    xProjectId = showAutoRecordRequest.xProjectId;
                } else {
                    appId = showAutoRecordRequest['app_id'];
                    authorization = showAutoRecordRequest['Authorization'];
                    xSdkDate = showAutoRecordRequest['X-Sdk-Date'];
                    xProjectId = showAutoRecordRequest['X-Project-Id'];
                }
            }

        
            if (appId === null || appId === undefined) {
            throw new RequiredError('appId','Required parameter appId was null or undefined when calling showAutoRecord.');
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

            options.pathParams = { 'app_id': appId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 调用此接口查询单流任务状态。
         * 
         * 租户的OBS桶内的情况，暂不支持查询。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showIndividualStreamJob(showIndividualStreamJobRequest?: ShowIndividualStreamJobRequest) {
            const options = {
                method: "GET",
                url: "/v2/apps/{app_id}/individual-stream-jobs/{job_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let appId;
            
            let jobId;
            
            let authorization;
            
            let xSdkDate;
            
            let xProjectId;

            if (showIndividualStreamJobRequest !== null && showIndividualStreamJobRequest !== undefined) {
                if (showIndividualStreamJobRequest instanceof ShowIndividualStreamJobRequest) {
                    appId = showIndividualStreamJobRequest.appId;
                    jobId = showIndividualStreamJobRequest.jobId;
                    authorization = showIndividualStreamJobRequest.authorization;
                    xSdkDate = showIndividualStreamJobRequest.xSdkDate;
                    xProjectId = showIndividualStreamJobRequest.xProjectId;
                } else {
                    appId = showIndividualStreamJobRequest['app_id'];
                    jobId = showIndividualStreamJobRequest['job_id'];
                    authorization = showIndividualStreamJobRequest['Authorization'];
                    xSdkDate = showIndividualStreamJobRequest['X-Sdk-Date'];
                    xProjectId = showIndividualStreamJobRequest['X-Project-Id'];
                }
            }

        
            if (appId === null || appId === undefined) {
            throw new RequiredError('appId','Required parameter appId was null or undefined when calling showIndividualStreamJob.');
            }
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling showIndividualStreamJob.');
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

            options.pathParams = { 'app_id': appId,'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 调用此接口查询合流转码任务状态。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showMixJob(showMixJobRequest?: ShowMixJobRequest) {
            const options = {
                method: "GET",
                url: "/v2/apps/{app_id}/mix-stream-jobs/{job_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let appId;
            
            let jobId;
            
            let authorization;
            
            let xSdkDate;
            
            let xProjectId;

            if (showMixJobRequest !== null && showMixJobRequest !== undefined) {
                if (showMixJobRequest instanceof ShowMixJobRequest) {
                    appId = showMixJobRequest.appId;
                    jobId = showMixJobRequest.jobId;
                    authorization = showMixJobRequest.authorization;
                    xSdkDate = showMixJobRequest.xSdkDate;
                    xProjectId = showMixJobRequest.xProjectId;
                } else {
                    appId = showMixJobRequest['app_id'];
                    jobId = showMixJobRequest['job_id'];
                    authorization = showMixJobRequest['Authorization'];
                    xSdkDate = showMixJobRequest['X-Sdk-Date'];
                    xProjectId = showMixJobRequest['X-Project-Id'];
                }
            }

        
            if (appId === null || appId === undefined) {
            throw new RequiredError('appId','Required parameter appId was null or undefined when calling showMixJob.');
            }
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling showMixJob.');
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

            options.pathParams = { 'app_id': appId,'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 调用此接口查询增值（录制）事件回调配置
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showRecordCallback(showRecordCallbackRequest?: ShowRecordCallbackRequest) {
            const options = {
                method: "GET",
                url: "/v2/apps/{app_id}/record-callback",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let appId;
            
            let authorization;
            
            let xSdkDate;
            
            let xProjectId;

            if (showRecordCallbackRequest !== null && showRecordCallbackRequest !== undefined) {
                if (showRecordCallbackRequest instanceof ShowRecordCallbackRequest) {
                    appId = showRecordCallbackRequest.appId;
                    authorization = showRecordCallbackRequest.authorization;
                    xSdkDate = showRecordCallbackRequest.xSdkDate;
                    xProjectId = showRecordCallbackRequest.xProjectId;
                } else {
                    appId = showRecordCallbackRequest['app_id'];
                    authorization = showRecordCallbackRequest['Authorization'];
                    xSdkDate = showRecordCallbackRequest['X-Sdk-Date'];
                    xProjectId = showRecordCallbackRequest['X-Project-Id'];
                }
            }

        
            if (appId === null || appId === undefined) {
            throw new RequiredError('appId','Required parameter appId was null or undefined when calling showRecordCallback.');
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

            options.pathParams = { 'app_id': appId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 调用此接口查询指定录制规则。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showRecordRule(showRecordRuleRequest?: ShowRecordRuleRequest) {
            const options = {
                method: "GET",
                url: "/v2/apps/{app_id}/record-rules/{rule_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let appId;
            
            let ruleId;
            
            let authorization;
            
            let xSdkDate;
            
            let xProjectId;

            if (showRecordRuleRequest !== null && showRecordRuleRequest !== undefined) {
                if (showRecordRuleRequest instanceof ShowRecordRuleRequest) {
                    appId = showRecordRuleRequest.appId;
                    ruleId = showRecordRuleRequest.ruleId;
                    authorization = showRecordRuleRequest.authorization;
                    xSdkDate = showRecordRuleRequest.xSdkDate;
                    xProjectId = showRecordRuleRequest.xProjectId;
                } else {
                    appId = showRecordRuleRequest['app_id'];
                    ruleId = showRecordRuleRequest['rule_id'];
                    authorization = showRecordRuleRequest['Authorization'];
                    xSdkDate = showRecordRuleRequest['X-Sdk-Date'];
                    xProjectId = showRecordRuleRequest['X-Project-Id'];
                }
            }

        
            if (appId === null || appId === undefined) {
            throw new RequiredError('appId','Required parameter appId was null or undefined when calling showRecordRule.');
            }
            if (ruleId === null || ruleId === undefined) {
            throw new RequiredError('ruleId','Required parameter ruleId was null or undefined when calling showRecordRule.');
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

            options.pathParams = { 'app_id': appId,'rule_id': ruleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询应用鉴权配置参数
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showUrlAuth(showUrlAuthRequest?: ShowUrlAuthRequest) {
            const options = {
                method: "GET",
                url: "/v2/apps/{app_id}/authentication",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let appId;
            
            let authorization;
            
            let xSdkDate;
            
            let xProjectId;

            if (showUrlAuthRequest !== null && showUrlAuthRequest !== undefined) {
                if (showUrlAuthRequest instanceof ShowUrlAuthRequest) {
                    appId = showUrlAuthRequest.appId;
                    authorization = showUrlAuthRequest.authorization;
                    xSdkDate = showUrlAuthRequest.xSdkDate;
                    xProjectId = showUrlAuthRequest.xProjectId;
                } else {
                    appId = showUrlAuthRequest['app_id'];
                    authorization = showUrlAuthRequest['Authorization'];
                    xSdkDate = showUrlAuthRequest['X-Sdk-Date'];
                    xProjectId = showUrlAuthRequest['X-Project-Id'];
                }
            }

        
            if (appId === null || appId === undefined) {
            throw new RequiredError('appId','Required parameter appId was null or undefined when calling showUrlAuth.');
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

            options.pathParams = { 'app_id': appId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 调用此接口启用单个应用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        startApp(startAppRequest?: StartAppRequest) {
            const options = {
                method: "POST",
                url: "/v2/apps/{app_id}/enable",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let appId;
            
            let authorization;
            
            let xSdkDate;
            
            let xProjectId;

            if (startAppRequest !== null && startAppRequest !== undefined) {
                if (startAppRequest instanceof StartAppRequest) {
                    appId = startAppRequest.appId;
                    authorization = startAppRequest.authorization;
                    xSdkDate = startAppRequest.xSdkDate;
                    xProjectId = startAppRequest.xProjectId;
                } else {
                    appId = startAppRequest['app_id'];
                    authorization = startAppRequest['Authorization'];
                    xSdkDate = startAppRequest['X-Sdk-Date'];
                    xProjectId = startAppRequest['X-Project-Id'];
                }
            }

        
            if (appId === null || appId === undefined) {
            throw new RequiredError('appId','Required parameter appId was null or undefined when calling startApp.');
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

            options.pathParams = { 'app_id': appId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 调用此接口停用单个应用。
         * 
         * 应用停用后，新房间无法新增和加入，已加入的房间可以继续使用。合流、录制功能等也不可用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        stopApp(stopAppRequest?: StopAppRequest) {
            const options = {
                method: "POST",
                url: "/v2/apps/{app_id}/disable",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let appId;
            
            let authorization;
            
            let xSdkDate;
            
            let xProjectId;

            if (stopAppRequest !== null && stopAppRequest !== undefined) {
                if (stopAppRequest instanceof StopAppRequest) {
                    appId = stopAppRequest.appId;
                    authorization = stopAppRequest.authorization;
                    xSdkDate = stopAppRequest.xSdkDate;
                    xProjectId = stopAppRequest.xProjectId;
                } else {
                    appId = stopAppRequest['app_id'];
                    authorization = stopAppRequest['Authorization'];
                    xSdkDate = stopAppRequest['X-Sdk-Date'];
                    xProjectId = stopAppRequest['X-Project-Id'];
                }
            }

        
            if (appId === null || appId === undefined) {
            throw new RequiredError('appId','Required parameter appId was null or undefined when calling stopApp.');
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

            options.pathParams = { 'app_id': appId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 调用此接口停止单流任务
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        stopIndividualStreamJob(stopIndividualStreamJobRequest?: StopIndividualStreamJobRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/apps/{app_id}/individual-stream-jobs/{job_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let appId;
            
            let jobId;
            
            let authorization;
            
            let xSdkDate;
            
            let xProjectId;

            if (stopIndividualStreamJobRequest !== null && stopIndividualStreamJobRequest !== undefined) {
                if (stopIndividualStreamJobRequest instanceof StopIndividualStreamJobRequest) {
                    appId = stopIndividualStreamJobRequest.appId;
                    jobId = stopIndividualStreamJobRequest.jobId;
                    authorization = stopIndividualStreamJobRequest.authorization;
                    xSdkDate = stopIndividualStreamJobRequest.xSdkDate;
                    xProjectId = stopIndividualStreamJobRequest.xProjectId;
                } else {
                    appId = stopIndividualStreamJobRequest['app_id'];
                    jobId = stopIndividualStreamJobRequest['job_id'];
                    authorization = stopIndividualStreamJobRequest['Authorization'];
                    xSdkDate = stopIndividualStreamJobRequest['X-Sdk-Date'];
                    xProjectId = stopIndividualStreamJobRequest['X-Project-Id'];
                }
            }

        
            if (appId === null || appId === undefined) {
            throw new RequiredError('appId','Required parameter appId was null or undefined when calling stopIndividualStreamJob.');
            }
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling stopIndividualStreamJob.');
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

            options.pathParams = { 'app_id': appId,'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 调用此接口停止已下发的合流转码任务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        stopMixJob(stopMixJobRequest?: StopMixJobRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/apps/{app_id}/mix-stream-jobs/{job_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let appId;
            
            let jobId;
            
            let authorization;
            
            let xSdkDate;
            
            let xProjectId;

            if (stopMixJobRequest !== null && stopMixJobRequest !== undefined) {
                if (stopMixJobRequest instanceof StopMixJobRequest) {
                    appId = stopMixJobRequest.appId;
                    jobId = stopMixJobRequest.jobId;
                    authorization = stopMixJobRequest.authorization;
                    xSdkDate = stopMixJobRequest.xSdkDate;
                    xProjectId = stopMixJobRequest.xProjectId;
                } else {
                    appId = stopMixJobRequest['app_id'];
                    jobId = stopMixJobRequest['job_id'];
                    authorization = stopMixJobRequest['Authorization'];
                    xSdkDate = stopMixJobRequest['X-Sdk-Date'];
                    xProjectId = stopMixJobRequest['X-Project-Id'];
                }
            }

        
            if (appId === null || appId === undefined) {
            throw new RequiredError('appId','Required parameter appId was null or undefined when calling stopMixJob.');
            }
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling stopMixJob.');
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

            options.pathParams = { 'app_id': appId,'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新自动录制配置，租户可以开启自动单流录制或者停用自动单流录制。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateAutoRecord(updateAutoRecordRequest?: UpdateAutoRecordRequest) {
            const options = {
                method: "PUT",
                url: "/v2/apps/{app_id}/auto-record-mode",
                contentType: "application/json;charset=utf-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let appId;
            
            let authorization;
            
            let xSdkDate;
            
            let xProjectId;

            if (updateAutoRecordRequest !== null && updateAutoRecordRequest !== undefined) {
                if (updateAutoRecordRequest instanceof UpdateAutoRecordRequest) {
                    appId = updateAutoRecordRequest.appId;
                    body = updateAutoRecordRequest.body
                    authorization = updateAutoRecordRequest.authorization;
                    xSdkDate = updateAutoRecordRequest.xSdkDate;
                    xProjectId = updateAutoRecordRequest.xProjectId;
                } else {
                    appId = updateAutoRecordRequest['app_id'];
                    body = updateAutoRecordRequest['body'];
                    authorization = updateAutoRecordRequest['Authorization'];
                    xSdkDate = updateAutoRecordRequest['X-Sdk-Date'];
                    xProjectId = updateAutoRecordRequest['X-Project-Id'];
                }
            }

        
            if (appId === null || appId === undefined) {
            throw new RequiredError('appId','Required parameter appId was null or undefined when calling updateAutoRecord.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
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
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=utf-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'app_id': appId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 调用此接口修改单流任务。
         * 
         * 仅部分场景支持修改。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateIndividualStreamJob(updateIndividualStreamJobRequest?: UpdateIndividualStreamJobRequest) {
            const options = {
                method: "PUT",
                url: "/v2/apps/{app_id}/individual-stream-jobs/{job_id}",
                contentType: "application/json;charset=utf-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let appId;
            
            let jobId;
            
            let authorization;
            
            let xSdkDate;
            
            let xProjectId;

            if (updateIndividualStreamJobRequest !== null && updateIndividualStreamJobRequest !== undefined) {
                if (updateIndividualStreamJobRequest instanceof UpdateIndividualStreamJobRequest) {
                    appId = updateIndividualStreamJobRequest.appId;
                    jobId = updateIndividualStreamJobRequest.jobId;
                    body = updateIndividualStreamJobRequest.body
                    authorization = updateIndividualStreamJobRequest.authorization;
                    xSdkDate = updateIndividualStreamJobRequest.xSdkDate;
                    xProjectId = updateIndividualStreamJobRequest.xProjectId;
                } else {
                    appId = updateIndividualStreamJobRequest['app_id'];
                    jobId = updateIndividualStreamJobRequest['job_id'];
                    body = updateIndividualStreamJobRequest['body'];
                    authorization = updateIndividualStreamJobRequest['Authorization'];
                    xSdkDate = updateIndividualStreamJobRequest['X-Sdk-Date'];
                    xProjectId = updateIndividualStreamJobRequest['X-Project-Id'];
                }
            }

        
            if (appId === null || appId === undefined) {
            throw new RequiredError('appId','Required parameter appId was null or undefined when calling updateIndividualStreamJob.');
            }
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling updateIndividualStreamJob.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
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
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=utf-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'app_id': appId,'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 调用此接口更新合流任务布局。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateMixJob(updateMixJobRequest?: UpdateMixJobRequest) {
            const options = {
                method: "PUT",
                url: "/v2/apps/{app_id}/mix-stream-jobs/{job_id}",
                contentType: "application/json;charset=utf-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let appId;
            
            let jobId;
            
            let authorization;
            
            let xSdkDate;
            
            let xProjectId;

            if (updateMixJobRequest !== null && updateMixJobRequest !== undefined) {
                if (updateMixJobRequest instanceof UpdateMixJobRequest) {
                    appId = updateMixJobRequest.appId;
                    jobId = updateMixJobRequest.jobId;
                    body = updateMixJobRequest.body
                    authorization = updateMixJobRequest.authorization;
                    xSdkDate = updateMixJobRequest.xSdkDate;
                    xProjectId = updateMixJobRequest.xProjectId;
                } else {
                    appId = updateMixJobRequest['app_id'];
                    jobId = updateMixJobRequest['job_id'];
                    body = updateMixJobRequest['body'];
                    authorization = updateMixJobRequest['Authorization'];
                    xSdkDate = updateMixJobRequest['X-Sdk-Date'];
                    xProjectId = updateMixJobRequest['X-Project-Id'];
                }
            }

        
            if (appId === null || appId === undefined) {
            throw new RequiredError('appId','Required parameter appId was null or undefined when calling updateMixJob.');
            }
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling updateMixJob.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
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
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=utf-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'app_id': appId,'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 调用此接口配置增值（录制）事件上报回调。
         * 
         * 当任务发生订阅了的事件时，通过该接口配置的回调地址通知。
         * 
         * 回调格式参考/customer-record-notify-url定义。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateRecordCallback(updateRecordCallbackRequest?: UpdateRecordCallbackRequest) {
            const options = {
                method: "PUT",
                url: "/v2/apps/{app_id}/record-callback",
                contentType: "application/json;charset=utf-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let appId;
            
            let authorization;
            
            let xSdkDate;
            
            let xProjectId;

            if (updateRecordCallbackRequest !== null && updateRecordCallbackRequest !== undefined) {
                if (updateRecordCallbackRequest instanceof UpdateRecordCallbackRequest) {
                    appId = updateRecordCallbackRequest.appId;
                    body = updateRecordCallbackRequest.body
                    authorization = updateRecordCallbackRequest.authorization;
                    xSdkDate = updateRecordCallbackRequest.xSdkDate;
                    xProjectId = updateRecordCallbackRequest.xProjectId;
                } else {
                    appId = updateRecordCallbackRequest['app_id'];
                    body = updateRecordCallbackRequest['body'];
                    authorization = updateRecordCallbackRequest['Authorization'];
                    xSdkDate = updateRecordCallbackRequest['X-Sdk-Date'];
                    xProjectId = updateRecordCallbackRequest['X-Project-Id'];
                }
            }

        
            if (appId === null || appId === undefined) {
            throw new RequiredError('appId','Required parameter appId was null or undefined when calling updateRecordCallback.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
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
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=utf-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'app_id': appId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 调用此接口更新录制规则。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateRecordRule(updateRecordRuleRequest?: UpdateRecordRuleRequest) {
            const options = {
                method: "PUT",
                url: "/v2/apps/{app_id}/record-rules/{rule_id}",
                contentType: "application/json;charset=utf-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let appId;
            
            let ruleId;
            
            let authorization;
            
            let xSdkDate;
            
            let xProjectId;

            if (updateRecordRuleRequest !== null && updateRecordRuleRequest !== undefined) {
                if (updateRecordRuleRequest instanceof UpdateRecordRuleRequest) {
                    appId = updateRecordRuleRequest.appId;
                    ruleId = updateRecordRuleRequest.ruleId;
                    body = updateRecordRuleRequest.body
                    authorization = updateRecordRuleRequest.authorization;
                    xSdkDate = updateRecordRuleRequest.xSdkDate;
                    xProjectId = updateRecordRuleRequest.xProjectId;
                } else {
                    appId = updateRecordRuleRequest['app_id'];
                    ruleId = updateRecordRuleRequest['rule_id'];
                    body = updateRecordRuleRequest['body'];
                    authorization = updateRecordRuleRequest['Authorization'];
                    xSdkDate = updateRecordRuleRequest['X-Sdk-Date'];
                    xProjectId = updateRecordRuleRequest['X-Project-Id'];
                }
            }

        
            if (appId === null || appId === undefined) {
            throw new RequiredError('appId','Required parameter appId was null or undefined when calling updateRecordRule.');
            }
            if (ruleId === null || ruleId === undefined) {
            throw new RequiredError('ruleId','Required parameter ruleId was null or undefined when calling updateRecordRule.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
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
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=utf-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'app_id': appId,'rule_id': ruleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 调用此接口开启或关闭URL鉴权。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateUrlAuth(updateUrlAuthRequest?: UpdateUrlAuthRequest) {
            const options = {
                method: "PUT",
                url: "/v2/apps/{app_id}/authentication",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let appId;
            
            let authorization;
            
            let xSdkDate;
            
            let xProjectId;

            if (updateUrlAuthRequest !== null && updateUrlAuthRequest !== undefined) {
                if (updateUrlAuthRequest instanceof UpdateUrlAuthRequest) {
                    appId = updateUrlAuthRequest.appId;
                    body = updateUrlAuthRequest.body
                    authorization = updateUrlAuthRequest.authorization;
                    xSdkDate = updateUrlAuthRequest.xSdkDate;
                    xProjectId = updateUrlAuthRequest.xProjectId;
                } else {
                    appId = updateUrlAuthRequest['app_id'];
                    body = updateUrlAuthRequest['body'];
                    authorization = updateUrlAuthRequest['Authorization'];
                    xSdkDate = updateUrlAuthRequest['X-Sdk-Date'];
                    xProjectId = updateUrlAuthRequest['X-Project-Id'];
                }
            }

        
            if (appId === null || appId === undefined) {
            throw new RequiredError('appId','Required parameter appId was null or undefined when calling updateUrlAuth.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
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
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'app_id': appId, };
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