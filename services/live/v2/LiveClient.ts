import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { AreaDetail } from './model/AreaDetail';
import { AreaTimeValue } from './model/AreaTimeValue';
import { HistoryStreamInfo } from './model/HistoryStreamInfo';
import { HttpCode } from './model/HttpCode';
import { HttpCodeSummary } from './model/HttpCodeSummary';
import { ListAreaDetailRequest } from './model/ListAreaDetailRequest';
import { ListAreaDetailResponse } from './model/ListAreaDetailResponse';
import { ListBandwidthDetailRequest } from './model/ListBandwidthDetailRequest';
import { ListBandwidthDetailResponse } from './model/ListBandwidthDetailResponse';
import { ListDomainBandwidthPeakRequest } from './model/ListDomainBandwidthPeakRequest';
import { ListDomainBandwidthPeakResponse } from './model/ListDomainBandwidthPeakResponse';
import { ListDomainTrafficDetailRequest } from './model/ListDomainTrafficDetailRequest';
import { ListDomainTrafficDetailResponse } from './model/ListDomainTrafficDetailResponse';
import { ListDomainTrafficSummaryRequest } from './model/ListDomainTrafficSummaryRequest';
import { ListDomainTrafficSummaryResponse } from './model/ListDomainTrafficSummaryResponse';
import { ListHistoryStreamsRequest } from './model/ListHistoryStreamsRequest';
import { ListHistoryStreamsResponse } from './model/ListHistoryStreamsResponse';
import { ListPlayDomainStreamInfoRequest } from './model/ListPlayDomainStreamInfoRequest';
import { ListPlayDomainStreamInfoResponse } from './model/ListPlayDomainStreamInfoResponse';
import { ListQueryHttpCodeRequest } from './model/ListQueryHttpCodeRequest';
import { ListQueryHttpCodeResponse } from './model/ListQueryHttpCodeResponse';
import { ListRecordDataRequest } from './model/ListRecordDataRequest';
import { ListRecordDataResponse } from './model/ListRecordDataResponse';
import { ListSingleStreamBitrateRequest } from './model/ListSingleStreamBitrateRequest';
import { ListSingleStreamBitrateResponse } from './model/ListSingleStreamBitrateResponse';
import { ListSingleStreamDetailRequest } from './model/ListSingleStreamDetailRequest';
import { ListSingleStreamDetailResponse } from './model/ListSingleStreamDetailResponse';
import { ListSingleStreamFramerateRequest } from './model/ListSingleStreamFramerateRequest';
import { ListSingleStreamFramerateResponse } from './model/ListSingleStreamFramerateResponse';
import { ListSnapshotDataRequest } from './model/ListSnapshotDataRequest';
import { ListSnapshotDataResponse } from './model/ListSnapshotDataResponse';
import { ListTranscodeConcurrencyNumRequest } from './model/ListTranscodeConcurrencyNumRequest';
import { ListTranscodeConcurrencyNumResponse } from './model/ListTranscodeConcurrencyNumResponse';
import { ListTranscodeDataRequest } from './model/ListTranscodeDataRequest';
import { ListTranscodeDataResponse } from './model/ListTranscodeDataResponse';
import { ListTranscodeTaskDetailRequest } from './model/ListTranscodeTaskDetailRequest';
import { ListTranscodeTaskDetailResponse } from './model/ListTranscodeTaskDetailResponse';
import { ListUpStreamDetailRequest } from './model/ListUpStreamDetailRequest';
import { ListUpStreamDetailResponse } from './model/ListUpStreamDetailResponse';
import { ListUsersOfStreamRequest } from './model/ListUsersOfStreamRequest';
import { ListUsersOfStreamResponse } from './model/ListUsersOfStreamResponse';
import { PeakBandwidthData } from './model/PeakBandwidthData';
import { PlayDomainStreamInfo } from './model/PlayDomainStreamInfo';
import { RecordData } from './model/RecordData';
import { ShowStreamCountRequest } from './model/ShowStreamCountRequest';
import { ShowStreamCountResponse } from './model/ShowStreamCountResponse';
import { ShowStreamPortraitRequest } from './model/ShowStreamPortraitRequest';
import { ShowStreamPortraitResponse } from './model/ShowStreamPortraitResponse';
import { ShowUpBandwidthRequest } from './model/ShowUpBandwidthRequest';
import { ShowUpBandwidthResponse } from './model/ShowUpBandwidthResponse';
import { SnapshotData } from './model/SnapshotData';
import { StreamCountData } from './model/StreamCountData';
import { StreamDetail } from './model/StreamDetail';
import { StreamPortrait } from './model/StreamPortrait';
import { TimeValue } from './model/TimeValue';
import { TrafficData } from './model/TrafficData';
import { TrafficSummaryData } from './model/TrafficSummaryData';
import { TranscodeConNumData } from './model/TranscodeConNumData';
import { TranscodeData } from './model/TranscodeData';
import { TranscodeDetailInfo } from './model/TranscodeDetailInfo';
import { TranscodeSpec } from './model/TranscodeSpec';
import { TranscodeSummary } from './model/TranscodeSummary';
import { UpStreamDetail } from './model/UpStreamDetail';
import { V2BandwidthData } from './model/V2BandwidthData';
import { V2BitrateInfo } from './model/V2BitrateInfo';
import { V2FramerateInfo } from './model/V2FramerateInfo';
import { V2UserData } from './model/V2UserData';

export class LiveClient {
    public static newBuilder(): ClientBuilder<LiveClient> {
            let client = new ClientBuilder<LiveClient>(newClient);
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
     * 查询直播全球区域维度的详细数据接口。
     * 
     * 如果不传入域名，则查询租户下所有播放域名的详细数据。
     * 
     * 当查询租户级别数据时，参数app、stream不生效。
     * 
     * 最大查询跨度1天，最大查询周期90天。
     * 
     * 支持查询当天，当前数据延时少于5分钟。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询直播各区域指标分布接口
     * @param {string} startTime 查询起始时间。日期格式按照ISO8601表示法，并使用UTC时间。  格式为：YYYY-MM-DDThh:mm:ssZ。最大查询跨度1天，最大查询周期90天。 
     * @param {string} endTime 查询结束时间。日期格式按照ISO8601表示法，并使用UTC时间。  格式为：YYYY-MM-DDThh:mm:ssZ。最大查询跨度1天，最大查询周期90天。 
     * @param {Array<string>} area 需查询的计费大区，取值如下： - CN：中国内地。 - AP1：亚太1区。 - AP2：亚太2区。 - AP3：亚太3区。 - MEAA：中东非洲。 - SA：南美。 - EU：欧洲。 - ALL：全部。  中国内地返回结果为省份/直辖市的中文名称，比如：广东、上海； 海外大区与地区/国家的对应关系请参考[地区/国家代码对照表](https://support.huaweicloud.com/api-live/live_03_0049.html)。 
     * @param {string} metric 指标，取值如下： - bandwidth：带宽 - traffic：流量 - player：观众数 
     * @param {Array<string>} [playDomains] 需查询的播放域名列表，最多支持查询100个域名。 
     * @param {string} [app] 需查询的app。 
     * @param {string} [stream] 流名称。
     * @param {300 | 3600 | 86400} [interval] 查询数据的时间粒度。支持300（默认值）、3600和86400秒。若参数为空，则默认为300秒。  注意，若metric的值为player（观众数），则interval填入的值不起效果，查询粒度interval默认为60秒。 
     * @param {Array<string>} [isp] 运营商列表，取值如下： - CMCC：移动 - CTCC：电信 - CUCC：联通 - OTHER：其他  若参数为空，则查询所有运营商。 
     * @param {string} [protocol] 请求协议，取值如下： - flv - hls 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAreaDetail(listAreaDetailRequest?: ListAreaDetailRequest): Promise<ListAreaDetailResponse> {
        const options = ParamCreater().listAreaDetail(listAreaDetailRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询播放域名带宽数据。
     * 
     * 如果不传入域名，则查询租户下所有播放域名的带宽数据。
     * 
     * 当查询租户级别带宽数据时，参数app、stream不生效。
     * 
     * 最大查询跨度31天，最大查询周期一年。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询播放带宽趋势接口
     * @param {Array<string>} [playDomains] 播放域名列表，最多支持查询100个域名，多个域名以逗号分隔。  如果不传入域名，则查询租户下所有播放域名的带宽数据。 
     * @param {string} [app] 应用名称。
     * @param {string} [stream] 流名。
     * @param {Array<string>} [country] 国家列表。具体取值请参考[国家名称缩写](https://support.huaweicloud.com/api-live/vod_08_0172.html)，不填写查询所有国家。 
     * @param {Array<string>} [region] 区域列表。具体取值请参考[省份名称缩写](https://support.huaweicloud.com/api-live/live_03_0043.html)，不填写查询所有区域。 
     * @param {Array<string>} [isp] 运营商列表，取值如下： - CMCC ：移动 - CTCC ：电信 - CUCC ：联通 - OTHER ：其他  不填写查询所有运营商。 
     * @param {'flv' | 'hls'} [protocol] 请求协议
     * @param {300 | 3600 | 86400} [interval] 查询数据的时间粒度。支持300（默认值）, 3600和86400秒。不传值时，使用默认值300秒。 
     * @param {string} [startTime] 起始时间。日期格式按照ISO8601表示法，并使用UTC时间。  格式为：YYYY-MM-DDThh:mm:ssZ。最大查询跨度31天，最大查询周期一年。  若参数为空，默认查询7天数据。 
     * @param {string} [endTime] 结束时间。日期格式按照ISO8601表示法，并使用UTC时间。  格式为：YYYY-MM-DDThh:mm:ssZ。  若参数为空，默认为当前时间。结束时间需大于起始时间。 
     * @param {'Live' | 'LLL' | 'ALL'} [serviceType] 服务类型： - Live：直播 - LLL：超低时延直播 - ALL：默认所有直播 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listBandwidthDetail(listBandwidthDetailRequest?: ListBandwidthDetailRequest): Promise<ListBandwidthDetailResponse> {
        const options = ParamCreater().listBandwidthDetail(listBandwidthDetailRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定时间范围内播放带宽峰值。
     * 
     * 如果不传入域名，则查询租户下所有播放域名的带宽峰值。
     * 
     * 当查询租户级别带宽数据时，参数app、stream不生效。
     * 
     * 最大查询跨度31天，最大查询周期一年。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询播放带宽峰值接口
     * @param {Array<string>} [playDomains] 播放域名列表，最多支持查询100个域名，多个域名以逗号分隔。  如果不传入域名，则查询租户下所有播放域名的带宽峰值。 
     * @param {string} [app] 应用名称。
     * @param {string} [stream] 流名。
     * @param {Array<string>} [region] 区域列表。具体取值请参考[省份名称缩写](https://support.huaweicloud.com/api-live/live_03_0043.html)，不填写查询所有区域。 
     * @param {Array<string>} [isp] 运营商列表，取值如下： - CMCC ：移动 - CTCC ： 电信 - CUCC ：联通 - OTHER ：其他  不填写查询所有运营商。 
     * @param {'flv' | 'hls'} [protocol] 请求协议
     * @param {string} [startTime] 起始时间。日期格式按照ISO8601表示法，并使用UTC时间。  格式为：YYYY-MM-DDThh:mm:ssZ。最大查询跨度31天，最大查询周期一年。  若参数为空，默认查询7天数据。 
     * @param {string} [endTime] 结束时间。日期格式按照ISO8601表示法，并使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ。  若参数为空，默认为当前时间。结束时间需大于起始时间。 
     * @param {'Live' | 'LLL' | 'ALL'} [serviceType] 服务类型： - Live：直播 - LLL：超低时延直播 - ALL: 默认所有直播 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDomainBandwidthPeak(listDomainBandwidthPeakRequest?: ListDomainBandwidthPeakRequest): Promise<ListDomainBandwidthPeakResponse> {
        const options = ParamCreater().listDomainBandwidthPeak(listDomainBandwidthPeakRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询播放域名流量数据。
     * 
     * 如果不传入域名，则查询租户下所有播放域名的流量数据。
     * 
     * 当查询租户级别流量数据时，参数app、stream不生效。
     * 
     * 最大查询跨度31天，最大查询周期一年。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询播放流量趋势接口
     * @param {Array<string>} [playDomains] 播放域名列表，最多支持查询100个域名，多个域名以逗号分隔。  如果不传入域名，则查询租户下所有播放域名的流量数据。 
     * @param {string} [app] 应用名称。
     * @param {string} [stream] 流名。
     * @param {Array<string>} [region] 区域列表。具体取值请参考[省份名称缩写](https://support.huaweicloud.com/api-live/live_03_0043.html)，不填写查询所有区域。 
     * @param {Array<string>} [isp] 运营商列表，取值如下： - CMCC ：移动 - CTCC ： 电信 - CUCC ：联通 - OTHER ：其他  不填写查询所有运营商。 
     * @param {'flv' | 'hls'} [protocol] 请求协议
     * @param {number} [interval] 查询数据的时间粒度。支持300（默认值）, 3600和86400秒。不传值时，使用默认值300秒。 
     * @param {string} [startTime] 起始时间。日期格式按照ISO8601表示法，并使用UTC时间。  格式为：YYYY-MM-DDThh:mm:ssZ。最大查询跨度31天，最大查询周期一年。  若参数为空，默认查询7天数据。 
     * @param {string} [endTime] 结束时间。日期格式按照ISO8601表示法，并使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ。  若参数为空，默认为当前时间。结束时间需大于起始时间。 
     * @param {'Live' | 'LLL' | 'ALL'} [serviceType] 服务类型： - Live：直播 - LLL：超低时延直播 - ALL: 默认所有直播 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDomainTrafficDetail(listDomainTrafficDetailRequest?: ListDomainTrafficDetailRequest): Promise<ListDomainTrafficDetailResponse> {
        const options = ParamCreater().listDomainTrafficDetail(listDomainTrafficDetailRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定时间范围内流量汇总量。
     * 
     * 如果不传入域名，则查询租户下所有播放域名的流量汇总量。
     * 
     * 当查询租户级别流量数据时，参数app、stream不生效。
     * 
     * 最大查询跨度31天，最大查询周期一年。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询播放流量汇总接口
     * @param {Array<string>} [playDomains] 播放域名列表，最多支持查询100个域名，多个域名以逗号分隔。  如果不传入域名，则查询租户下所有播放域名的流量汇总量。 
     * @param {string} [app] 应用名称。
     * @param {string} [stream] 流名。
     * @param {Array<string>} [region] 区域列表。具体取值请参考[省份名称缩写](https://support.huaweicloud.com/api-live/live_03_0043.html)，不填写查询所有区域。 
     * @param {Array<string>} [isp] 运营商列表。取值如下： - CMCC ：移动 - CTCC ： 电信 - CUCC ：联通 - OTHER ：其他  不填写查询所有运营商。 
     * @param {'flv' | 'hls'} [protocol] 请求协议
     * @param {string} [startTime] 起始时间。日期格式按照ISO8601表示法，并使用UTC时间。  格式为：YYYY-MM-DDThh:mm:ssZ。最大查询跨度31天，最大查询周期一年。  若参数为空，默认查询7天数据。 
     * @param {string} [endTime] 结束时间。日期格式按照ISO8601表示法，并使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ。  若参数为空，默认为当前时间。结束时间需大于起始时间。 
     * @param {'Live' | 'LLL' | 'ALL'} [serviceType] 服务类型： - Live：直播 - LLL：超低时延直播 - ALL: 默认所有直播 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDomainTrafficSummary(listDomainTrafficSummaryRequest?: ListDomainTrafficSummaryRequest): Promise<ListDomainTrafficSummaryResponse> {
        const options = ParamCreater().listDomainTrafficSummary(listDomainTrafficSummaryRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询历史推流列表。
     * 
     * 不能查询现推流。
     * 
     * 最大查询跨度1天。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询历史推流列表接口
     * @param {string} domain 推流域名。 
     * @param {string} [app] 应用名称。
     * @param {string} [stream] 流名称。
     * @param {string} [startTime] 起始时间。日期格式按照ISO8601表示法，并使用UTC时间。  格式为：YYYY-MM-DDThh:mm:ssZ。最大查询跨度1天。  若参数为空，默认查询1天数据。 
     * @param {string} [endTime] 结束时间。日期格式按照ISO8601表示法，并使用UTC时间。 格式为：YYYY-MM-DDThh:mm:ssZ。  若参数为空，默认为当前时间，最大查询跨度1天。结束时间需大于起始时间。 
     * @param {number} [offset] 分页编号，默认为0
     * @param {number} [limit] 每页记录数。  取值范围：[1,100]  默认值：10。 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listHistoryStreams(listHistoryStreamsRequest?: ListHistoryStreamsRequest): Promise<ListHistoryStreamsResponse> {
        const options = ParamCreater().listHistoryStreams(listHistoryStreamsRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询播放域名下的监控数据，根据输入时间点，返回查询该时间点所有流的带宽、在线人数、协议。
     * 返回的数据粒度为1分钟。
     * 最大查询周期7天，数据延迟5分钟。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询播放域名下的流数据
     * @param {string} time 查询数据的时间点，精确到分钟。  日期格式按照ISO8601表示法，并使用UTC时间。  格式为：YYYY-MM-DDThh:mm:ssZ，最大查询周期七天。  时间必须为时间粒度整时刻点，如：2024-02-02T08:01:00Z。 
     * @param {Array<string>} [playDomains] 播放域名列表，最多支持查询10个域名，多个域名以逗号分隔。  如果不传入域名，则查询租户下所有播放域名的流数据。 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listPlayDomainStreamInfo(listPlayDomainStreamInfoRequest?: ListPlayDomainStreamInfoRequest): Promise<ListPlayDomainStreamInfoResponse> {
        const options = ParamCreater().listPlayDomainStreamInfo(listPlayDomainStreamInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询直播拉流HTTP状态码接口。  获取加速域名1分钟粒度的HTTP返回码  最大查询跨度不能超过24小时，最大查询周期7天。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询直播拉流HTTP状态码接口
     * @param {Array<string>} playDomains 播放域名列表，最多支持查询100个域名，多个域名以逗号分隔。 
     * @param {Array<string>} [code] 状态码。 
     * @param {Array<string>} [region] 区域列表。具体取值请参考[省份名称缩写](https://support.huaweicloud.com/api-live/live_03_0043.html)，不填写查询所有区域。 
     * @param {Array<string>} [isp] 运营商列表，取值如下： - CMCC ：移动 - CTCC ： 电信 - CUCC ：联通 - OTHER ：其他  不填写查询所有运营商。 
     * @param {string} [startTime] 起始时间。日期格式按照ISO8601表示法，并使用UTC时间。  格式为：YYYY-MM-DDThh:mm:ssZ。若参数为空，默认查询最近1小时数据。  最大查询跨度1天，最大查询周期7天。 
     * @param {string} [endTime] 结束时间。日期格式按照ISO8601表示法，并使用UTC时间。  格式为：YYYY-MM-DDThh:mm:ssZ。  若参数为空，默认为当前时间。结束时间需大于起始时间。  最大查询跨度1天，最大查询周期7天。 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listQueryHttpCode(listQueryHttpCodeRequest?: ListQueryHttpCodeRequest): Promise<ListQueryHttpCodeResponse> {
        const options = ParamCreater().listQueryHttpCode(listQueryHttpCodeRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询直播租户每小时录制的最大并发数，计算1小时内每分钟的并发总路数，取最大值做为统计值。  最大查询跨度31天，最大查询周期90天。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询录制用量接口
     * @param {string} [publishDomain] 推流域名。 
     * @param {string} [startTime] 起始时间。日期格式按照ISO8601表示法，并使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ。  非整点时间按小时取整，若start_time为2020-08-18T07:20:40Z，则实际查询起始时间为2020-08-18T07:00:00Z。  若start_time为空，则默认查询最近24小时数据。 
     * @param {string} [endTime] 结束时间。日期格式按照ISO8601表示法，并使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ。  非整点时间按小时取整，若end_time为2020-08-18T08:20:40Z，则实际查询起始时间为2020-08-18T08:00:00Z。  若参数为空，默认为当前时间。结束时间需大于起始时间。 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listRecordData(listRecordDataRequest?: ListRecordDataRequest): Promise<ListRecordDataResponse> {
        const options = ParamCreater().listRecordData(listRecordDataRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询直播域名每小时的截图数量。  最大查询跨度31天，最大查询周期90天。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询截图用量接口
     * @param {string} [publishDomain] 推流域名。 
     * @param {string} [startTime] 起始时间。日期格式按照ISO8601表示法，并使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ。  非整点时间按小时取整，若start_time为2020-08-18T07:20:40Z，则实际查询起始时间为2020-08-18T07:00:00Z。  若start_time为空，则默认查询最近24小时数据。 
     * @param {string} [endTime] 结束时间。日期格式按照ISO8601表示法，并使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ。  非整点时间按小时取整，若end_time为2020-08-18T08:20:40Z，则实际查询起始时间为2020-08-18T08:00:00Z。  若参数为空，默认为当前时间。结束时间需大于起始时间。 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSnapshotData(listSnapshotDataRequest?: ListSnapshotDataRequest): Promise<ListSnapshotDataResponse> {
        const options = ParamCreater().listSnapshotData(listSnapshotDataRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询推流域名下的转码路数，根据输入时间点和时间粒度，返回转码路数。
     * 最大查询跨度1天，最大查询周期90天，数据延迟5分钟。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询推流域名转码路数
     * @param {Array<string>} publishDomains 推流域名列表，最多支持查询100个域名，多个域名以逗号分隔。  若查询多个域名，则返回的是多个域名合并数据。 
     * @param {string} [app] 应用名称
     * @param {60 | 300 | 3600} [interval] 查询数据的时间粒度。支持60, 300（默认值）和3600秒。不传值时，使用默认值300秒。 
     * @param {string} [startTime] 起始时间。日期格式按照ISO8601表示法，并使用UTC时间。  格式为：YYYY-MM-DDThh:mm:ssZ。最大查询跨度1天，最大查询周期90天。  若参数为空，默认查询1天数据。 
     * @param {string} [endTime] 结束时间。日期格式按照ISO8601表示法，并使用UTC时间。  格式为：YYYY-MM-DDThh:mm:ssZ。最大查询跨度1天，最大查询周期90天。  若参数为空，默认为当前时间。结束时间需大于起始时间。 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTranscodeConcurrencyNum(listTranscodeConcurrencyNumRequest?: ListTranscodeConcurrencyNumRequest): Promise<ListTranscodeConcurrencyNumResponse> {
        const options = ParamCreater().listTranscodeConcurrencyNum(listTranscodeConcurrencyNumRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询直播域名每小时的转码时长数据。  最大查询跨度31天，最大查询周期90天。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询转码用量接口
     * @param {string} [publishDomain] 推流域名。 
     * @param {string} [stream] 流名。 
     * @param {string} [startTime] 起始时间。日期格式按照ISO8601表示法，并使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ。  非整点时间按小时取整，若start_time为2020-08-18T07:20:40Z，则实际查询起始时间为2020-08-18T07:00:00Z。  若start_time为空，则默认查询最近24小时数据。 
     * @param {string} [endTime] 结束时间。日期格式按照ISO8601表示法，并使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ。  非整点时间按小时取整，若end_time为2020-08-18T08:20:40Z，则实际查询起始时间为2020-08-18T08:00:00Z。  若参数为空，默认为当前时间。结束时间需大于起始时间。 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTranscodeData(listTranscodeDataRequest?: ListTranscodeDataRequest): Promise<ListTranscodeDataResponse> {
        const options = ParamCreater().listTranscodeData(listTranscodeDataRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询流粒度转码明细，包含流名、模版、格式、时长。
     * 最大查询跨度1天，最大查询周期14天。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询转码明细
     * @param {string} domain 推流域名。 
     * @param {Array<string>} [streamNameList] 流名列表，以逗号分隔，最多支持查询100个流名。 如果不传入流名，则查询域名下所有转码流的数据。 
     * @param {string} [startTime] 起始时间。日期格式按照ISO8601表示法，并使用UTC时间。  格式为：YYYY-MM-DDThh:mm:ssZ。最大查询跨度1天，最大查询周期14天。  若参数为空，默认查询1天数据。 
     * @param {string} [endTime] 结束时间。日期格式按照ISO8601表示法，并使用UTC时间。  格式为：YYYY-MM-DDThh:mm:ssZ。最大查询跨度1天，最大查询周期14天。  若参数为空，默认为当前时间。结束时间需大于起始时间。 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTranscodeTaskDetail(listTranscodeTaskDetailRequest?: ListTranscodeTaskDetailRequest): Promise<ListTranscodeTaskDetailResponse> {
        const options = ParamCreater().listTranscodeTaskDetail(listTranscodeTaskDetailRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询观众趋势。  最大查询跨度31天，最大查询周期一年。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询观众趋势接口
     * @param {string} playDomain 播放域名。 
     * @param {string} [app] app名。 
     * @param {string} [stream] 流名。 
     * @param {Array<string>} [isp] 运营商列表，取值如下： - CMCC ：移动 - CTCC ： 电信 - CUCC ：联通 - OTHER ：其他  不填写查询所有运营商。 
     * @param {Array<string>} [country] 国家列表。具体取值请参考[国家名称缩写](https://support.huaweicloud.com/api-live/vod_08_0172.html)，不填写查询所有国家。 
     * @param {Array<string>} [region] 区域列表。具体取值请参考[省份名称缩写](https://support.huaweicloud.com/api-live/live_03_0043.html)，不填写查询所有区域。 
     * @param {'flv' | 'hls'} [protocol] 请求协议
     * @param {60 | 300} [interval] 查询数据的时间粒度，支持60（默认值）, 300秒。不传值时，使用默认值60秒。 
     * @param {string} [startTime] 起始时间。日期格式按照ISO8601表示法，并使用UTC时间。  格式为：YYYY-MM-DDThh:mm:ssZ。最大查询跨度31天，最大查询周期一年。  若参数为空，默认查询7天数据。 
     * @param {string} [endTime] 结束时间。日期格式按照ISO8601表示法，并使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ。  若参数为空，默认为当前时间。结束时间需大于起始时间。 
     * @param {'Live' | 'LLL' | 'ALL'} [serviceType] 服务类型： - Live：直播 - LLL：超低时延直播 - ALL: 默认所有直播 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listUsersOfStream(listUsersOfStreamRequest?: ListUsersOfStreamRequest): Promise<ListUsersOfStreamResponse> {
        const options = ParamCreater().listUsersOfStream(listUsersOfStreamRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询域名维度推流路数接口。  最大查询跨度31天，最大查询周期1年。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询域名维度推流路数接口
     * @param {Array<string>} publishDomains 推流域名列表，最多支持查询100个域名，多个域名以逗号分隔，若查询多个域名，则返回的是多个域名合并数据。 
     * @param {string} [startTime] 起始时间。日期格式按照ISO8601表示法，并使用UTC时间。  格式为：YYYY-MM-DDThh:mm:ssZ。最大查询跨度31天，最大查询周期1年。  若参数为空，默认查询7天数据。 
     * @param {string} [endTime] 结束时间。日期格式按照ISO8601表示法，并使用UTC时间。 格式为：YYYY-MM-DDThh:mm:ssZ。  若参数为空，默认为当前时间，最大查询跨度31天， 最大查询跨度31天，最大查询周期1年。 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showStreamCount(showStreamCountRequest?: ShowStreamCountRequest): Promise<ShowStreamCountResponse> {
        const options = ParamCreater().showStreamCount(showStreamCountRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询播放画像信息。  最大查询跨度1天，最大查询周期31天。
     * 不统计协议为HLS的播放时长（play_duration）信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询播放画像信息接口
     * @param {string} playDomain 播放域名。 
     * @param {string} time 统计日期，日期格式按照ISO8601表示法，格式：YYYYMMDD，如20200904。可以查询过去31天的数据（不含当天）。 
     * @param {string} [stream] 流名。 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showStreamPortrait(showStreamPortraitRequest?: ShowStreamPortraitRequest): Promise<ShowStreamPortraitResponse> {
        const options = ParamCreater().showStreamPortrait(showStreamPortraitRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询上行带宽数据。  最大查询跨度31天，最大查询周期1年。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询上行带宽数据接口
     * @param {Array<string>} publishDomains 推流域名列表，最多支持查询100个域名，多个域名以逗号分隔，若查询多个域名，则返回的是多个域名合并数据。 
     * @param {string} [app] 应用名称。 
     * @param {string} [stream] 流名。 
     * @param {Array<string>} [region] 区域列表。具体取值请参考[省份名称缩写](https://support.huaweicloud.com/api-live/live_03_0043.html)，不填写查询所有区域。 
     * @param {Array<string>} [isp] 运营商列表，取值如下： - CMCC ：移动 - CTCC ： 电信 - CUCC ：联通 - OTHER ：其他  不填写查询所有运营商。 
     * @param {300 | 3600 | 86400} [interval] 查询数据的时间粒度。支持300（默认值），3600和86400秒。不传值时，使用默认值300秒。 
     * @param {'RELAY'} [type] 类型： - RELAY：转推 不填默认查询推流 
     * @param {string} [startTime] 起始时间。日期格式按照ISO8601表示法，并使用UTC时间。  格式为：YYYY-MM-DDThh:mm:ssZ。 最大查询跨度31天，最大查询周期1年。  若参数为空，默认查询7天数据。 
     * @param {string} [endTime] 结束时间。日期格式按照ISO8601表示法，并使用UTC时间。 格式为：YYYY-MM-DDThh:mm:ssZ。  若参数为空，默认为当前时间，最大查询跨度31天，最大查询周期1年。结束时间需大于起始时间。 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showUpBandwidth(showUpBandwidthRequest?: ShowUpBandwidthRequest): Promise<ShowUpBandwidthResponse> {
        const options = ParamCreater().showUpBandwidth(showUpBandwidthRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询推流监控码率数据接口。
     * 
     * 最大查询跨度1天，最大查询周期1个月。
     * 
     * 返回的码率数据列表粒度为1秒钟。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询推流码率数据接口
     * @param {string} domain 推流域名。 
     * @param {string} app App名。 
     * @param {string} stream 流名。 
     * @param {string} [startTime] 起始时间。日期格式按照ISO8601表示法，并使用UTC时间。  格式为：YYYY-MM-DDThh:mm:ssZ。最大查询跨度1天，最大查询周期1个月。  若参数为空，默认查询最近1小时数据。 
     * @param {string} [endTime] 结束时间。日期格式按照ISO8601表示法，并使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ。  若参数为空，默认为当前时间。结束时间需大于起始时间。 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSingleStreamBitrate(listSingleStreamBitrateRequest?: ListSingleStreamBitrateRequest): Promise<ListSingleStreamBitrateResponse> {
        const options = ParamCreater().listSingleStreamBitrate(listSingleStreamBitrateRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询流监控数据接口，包括帧率码率断流情况。
     * 
     * 最大查询跨度1天，最大查询周期1个月。
     * 
     * 返回的码率数据列表粒度为1秒钟。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询推流监控数据接口
     * @param {string} publishDomain 推流域名。 
     * @param {string} app 应用名。 
     * @param {string} stream 流名。 
     * @param {string} [startTime] 起始时间。日期格式按照ISO8601表示法，并使用UTC时间。  格式为：YYYY-MM-DDThh:mm:ssZ。最大查询跨度1天，最大查询周期1个月。  若参数为空，默认查询最近1小时数据。 
     * @param {string} [endTime] 结束时间。日期格式按照ISO8601表示法，并使用UTC时间。  格式为：YYYY-MM-DDThh:mm:ssZ。最大查询跨度1天，最大查询周期1个月。  若参数为空，默认为当前时间。结束时间需大于起始时间。 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSingleStreamDetail(listSingleStreamDetailRequest?: ListSingleStreamDetailRequest): Promise<ListSingleStreamDetailResponse> {
        const options = ParamCreater().listSingleStreamDetail(listSingleStreamDetailRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询推流帧率数据接口。
     * 
     * 最大查询跨度1天，最大查询周期1个月。
     * 
     * 返回的帧率数据列表粒度为1秒钟。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询推流帧率数据接口
     * @param {string} domain 推流域名。 
     * @param {string} app App名。 
     * @param {string} stream 流名。 
     * @param {string} [startTime] 起始时间。日期格式按照ISO8601表示法，并使用UTC时间。  格式为：YYYY-MM-DDThh:mm:ssZ。最大查询跨度1天，最大查询周期1个月。  若参数为空，默认查询最近1小时数据。 
     * @param {string} [endTime] 结束时间。日期格式按照ISO8601表示法，并使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ。  若参数为空，默认为当前时间。结束时间需大于起始时间。 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSingleStreamFramerate(listSingleStreamFramerateRequest?: ListSingleStreamFramerateRequest): Promise<ListSingleStreamFramerateResponse> {
        const options = ParamCreater().listSingleStreamFramerate(listSingleStreamFramerateRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询CDN上行推流质量数据。
     * 
     * 最大查询跨度1天，最大查询周期7天。
     * 
     * 返回的CDN上行推流质量数据列表粒度为1分钟。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询CDN上行推流质量数据接口
     * @param {string} publishDomain 推流域名。 
     * @param {string} app 应用名。 
     * @param {string} stream 流名。 
     * @param {string} [startTime] 起始时间。日期格式按照ISO8601表示法，并使用UTC时间。  格式为：YYYY-MM-DDThh:mm:ssZ。最大查询跨度1天，最大查询周期1个月。  若参数为空，默认查询最近1小时数据。 
     * @param {string} [endTime] 结束时间。日期格式按照ISO8601表示法，并使用UTC时间。  格式为：YYYY-MM-DDThh:mm:ssZ。最大查询跨度1天，最大查询周期1个月。  若参数为空，默认为当前时间。结束时间需大于起始时间。 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listUpStreamDetail(listUpStreamDetailRequest?: ListUpStreamDetailRequest): Promise<ListUpStreamDetailResponse> {
        const options = ParamCreater().listUpStreamDetail(listUpStreamDetailRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 查询直播全球区域维度的详细数据接口。
         * 
         * 如果不传入域名，则查询租户下所有播放域名的详细数据。
         * 
         * 当查询租户级别数据时，参数app、stream不生效。
         * 
         * 最大查询跨度1天，最大查询周期90天。
         * 
         * 支持查询当天，当前数据延时少于5分钟。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAreaDetail(listAreaDetailRequest?: ListAreaDetailRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/stats/area/detail",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let startTime;
            
            let endTime;
            
            let area;
            
            let metric;
            
            let playDomains;
            
            let app;
            
            let stream;
            
            let interval;
            
            let isp;
            
            let protocol;

            if (listAreaDetailRequest !== null && listAreaDetailRequest !== undefined) {
                if (listAreaDetailRequest instanceof ListAreaDetailRequest) {
                    startTime = listAreaDetailRequest.startTime;
                    endTime = listAreaDetailRequest.endTime;
                    area = listAreaDetailRequest.area;
                    metric = listAreaDetailRequest.metric;
                    playDomains = listAreaDetailRequest.playDomains;
                    app = listAreaDetailRequest.app;
                    stream = listAreaDetailRequest.stream;
                    interval = listAreaDetailRequest.interval;
                    isp = listAreaDetailRequest.isp;
                    protocol = listAreaDetailRequest.protocol;
                } else {
                    startTime = listAreaDetailRequest['start_time'];
                    endTime = listAreaDetailRequest['end_time'];
                    area = listAreaDetailRequest['area'];
                    metric = listAreaDetailRequest['metric'];
                    playDomains = listAreaDetailRequest['play_domains'];
                    app = listAreaDetailRequest['app'];
                    stream = listAreaDetailRequest['stream'];
                    interval = listAreaDetailRequest['interval'];
                    isp = listAreaDetailRequest['isp'];
                    protocol = listAreaDetailRequest['protocol'];
                }
            }

        
            if (startTime === null || startTime === undefined) {
                throw new RequiredError('startTime','Required parameter startTime was null or undefined when calling listAreaDetail.');
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime === null || endTime === undefined) {
                throw new RequiredError('endTime','Required parameter endTime was null or undefined when calling listAreaDetail.');
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (area === null || area === undefined) {
                throw new RequiredError('area','Required parameter area was null or undefined when calling listAreaDetail.');
            }
            if (area !== null && area !== undefined) {
                localVarQueryParameter['area'] = area;
            }
            if (metric === null || metric === undefined) {
                throw new RequiredError('metric','Required parameter metric was null or undefined when calling listAreaDetail.');
            }
            if (metric !== null && metric !== undefined) {
                localVarQueryParameter['metric'] = metric;
            }
            if (playDomains !== null && playDomains !== undefined) {
                localVarQueryParameter['play_domains'] = playDomains;
            }
            if (app !== null && app !== undefined) {
                localVarQueryParameter['app'] = app;
            }
            if (stream !== null && stream !== undefined) {
                localVarQueryParameter['stream'] = stream;
            }
            if (interval !== null && interval !== undefined) {
                localVarQueryParameter['interval'] = interval;
            }
            if (isp !== null && isp !== undefined) {
                localVarQueryParameter['isp'] = isp;
            }
            if (protocol !== null && protocol !== undefined) {
                localVarQueryParameter['protocol'] = protocol;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询播放域名带宽数据。
         * 
         * 如果不传入域名，则查询租户下所有播放域名的带宽数据。
         * 
         * 当查询租户级别带宽数据时，参数app、stream不生效。
         * 
         * 最大查询跨度31天，最大查询周期一年。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listBandwidthDetail(listBandwidthDetailRequest?: ListBandwidthDetailRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/stats/bandwidth/detail",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let playDomains;
            
            let app;
            
            let stream;
            
            let country;
            
            let region;
            
            let isp;
            
            let protocol;
            
            let interval;
            
            let startTime;
            
            let endTime;
            
            let serviceType;

            if (listBandwidthDetailRequest !== null && listBandwidthDetailRequest !== undefined) {
                if (listBandwidthDetailRequest instanceof ListBandwidthDetailRequest) {
                    playDomains = listBandwidthDetailRequest.playDomains;
                    app = listBandwidthDetailRequest.app;
                    stream = listBandwidthDetailRequest.stream;
                    country = listBandwidthDetailRequest.country;
                    region = listBandwidthDetailRequest.region;
                    isp = listBandwidthDetailRequest.isp;
                    protocol = listBandwidthDetailRequest.protocol;
                    interval = listBandwidthDetailRequest.interval;
                    startTime = listBandwidthDetailRequest.startTime;
                    endTime = listBandwidthDetailRequest.endTime;
                    serviceType = listBandwidthDetailRequest.serviceType;
                } else {
                    playDomains = listBandwidthDetailRequest['play_domains'];
                    app = listBandwidthDetailRequest['app'];
                    stream = listBandwidthDetailRequest['stream'];
                    country = listBandwidthDetailRequest['country'];
                    region = listBandwidthDetailRequest['region'];
                    isp = listBandwidthDetailRequest['isp'];
                    protocol = listBandwidthDetailRequest['protocol'];
                    interval = listBandwidthDetailRequest['interval'];
                    startTime = listBandwidthDetailRequest['start_time'];
                    endTime = listBandwidthDetailRequest['end_time'];
                    serviceType = listBandwidthDetailRequest['service_type'];
                }
            }

        
            if (playDomains !== null && playDomains !== undefined) {
                localVarQueryParameter['play_domains'] = playDomains;
            }
            if (app !== null && app !== undefined) {
                localVarQueryParameter['app'] = app;
            }
            if (stream !== null && stream !== undefined) {
                localVarQueryParameter['stream'] = stream;
            }
            if (country !== null && country !== undefined) {
                localVarQueryParameter['country'] = country;
            }
            if (region !== null && region !== undefined) {
                localVarQueryParameter['region'] = region;
            }
            if (isp !== null && isp !== undefined) {
                localVarQueryParameter['isp'] = isp;
            }
            if (protocol !== null && protocol !== undefined) {
                localVarQueryParameter['protocol'] = protocol;
            }
            if (interval !== null && interval !== undefined) {
                localVarQueryParameter['interval'] = interval;
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (serviceType !== null && serviceType !== undefined) {
                localVarQueryParameter['service_type'] = serviceType;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定时间范围内播放带宽峰值。
         * 
         * 如果不传入域名，则查询租户下所有播放域名的带宽峰值。
         * 
         * 当查询租户级别带宽数据时，参数app、stream不生效。
         * 
         * 最大查询跨度31天，最大查询周期一年。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDomainBandwidthPeak(listDomainBandwidthPeakRequest?: ListDomainBandwidthPeakRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/stats/bandwidth/peak",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let playDomains;
            
            let app;
            
            let stream;
            
            let region;
            
            let isp;
            
            let protocol;
            
            let startTime;
            
            let endTime;
            
            let serviceType;

            if (listDomainBandwidthPeakRequest !== null && listDomainBandwidthPeakRequest !== undefined) {
                if (listDomainBandwidthPeakRequest instanceof ListDomainBandwidthPeakRequest) {
                    playDomains = listDomainBandwidthPeakRequest.playDomains;
                    app = listDomainBandwidthPeakRequest.app;
                    stream = listDomainBandwidthPeakRequest.stream;
                    region = listDomainBandwidthPeakRequest.region;
                    isp = listDomainBandwidthPeakRequest.isp;
                    protocol = listDomainBandwidthPeakRequest.protocol;
                    startTime = listDomainBandwidthPeakRequest.startTime;
                    endTime = listDomainBandwidthPeakRequest.endTime;
                    serviceType = listDomainBandwidthPeakRequest.serviceType;
                } else {
                    playDomains = listDomainBandwidthPeakRequest['play_domains'];
                    app = listDomainBandwidthPeakRequest['app'];
                    stream = listDomainBandwidthPeakRequest['stream'];
                    region = listDomainBandwidthPeakRequest['region'];
                    isp = listDomainBandwidthPeakRequest['isp'];
                    protocol = listDomainBandwidthPeakRequest['protocol'];
                    startTime = listDomainBandwidthPeakRequest['start_time'];
                    endTime = listDomainBandwidthPeakRequest['end_time'];
                    serviceType = listDomainBandwidthPeakRequest['service_type'];
                }
            }

        
            if (playDomains !== null && playDomains !== undefined) {
                localVarQueryParameter['play_domains'] = playDomains;
            }
            if (app !== null && app !== undefined) {
                localVarQueryParameter['app'] = app;
            }
            if (stream !== null && stream !== undefined) {
                localVarQueryParameter['stream'] = stream;
            }
            if (region !== null && region !== undefined) {
                localVarQueryParameter['region'] = region;
            }
            if (isp !== null && isp !== undefined) {
                localVarQueryParameter['isp'] = isp;
            }
            if (protocol !== null && protocol !== undefined) {
                localVarQueryParameter['protocol'] = protocol;
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (serviceType !== null && serviceType !== undefined) {
                localVarQueryParameter['service_type'] = serviceType;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询播放域名流量数据。
         * 
         * 如果不传入域名，则查询租户下所有播放域名的流量数据。
         * 
         * 当查询租户级别流量数据时，参数app、stream不生效。
         * 
         * 最大查询跨度31天，最大查询周期一年。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDomainTrafficDetail(listDomainTrafficDetailRequest?: ListDomainTrafficDetailRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/stats/traffic/detail",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let playDomains;
            
            let app;
            
            let stream;
            
            let region;
            
            let isp;
            
            let protocol;
            
            let interval;
            
            let startTime;
            
            let endTime;
            
            let serviceType;

            if (listDomainTrafficDetailRequest !== null && listDomainTrafficDetailRequest !== undefined) {
                if (listDomainTrafficDetailRequest instanceof ListDomainTrafficDetailRequest) {
                    playDomains = listDomainTrafficDetailRequest.playDomains;
                    app = listDomainTrafficDetailRequest.app;
                    stream = listDomainTrafficDetailRequest.stream;
                    region = listDomainTrafficDetailRequest.region;
                    isp = listDomainTrafficDetailRequest.isp;
                    protocol = listDomainTrafficDetailRequest.protocol;
                    interval = listDomainTrafficDetailRequest.interval;
                    startTime = listDomainTrafficDetailRequest.startTime;
                    endTime = listDomainTrafficDetailRequest.endTime;
                    serviceType = listDomainTrafficDetailRequest.serviceType;
                } else {
                    playDomains = listDomainTrafficDetailRequest['play_domains'];
                    app = listDomainTrafficDetailRequest['app'];
                    stream = listDomainTrafficDetailRequest['stream'];
                    region = listDomainTrafficDetailRequest['region'];
                    isp = listDomainTrafficDetailRequest['isp'];
                    protocol = listDomainTrafficDetailRequest['protocol'];
                    interval = listDomainTrafficDetailRequest['interval'];
                    startTime = listDomainTrafficDetailRequest['start_time'];
                    endTime = listDomainTrafficDetailRequest['end_time'];
                    serviceType = listDomainTrafficDetailRequest['service_type'];
                }
            }

        
            if (playDomains !== null && playDomains !== undefined) {
                localVarQueryParameter['play_domains'] = playDomains;
            }
            if (app !== null && app !== undefined) {
                localVarQueryParameter['app'] = app;
            }
            if (stream !== null && stream !== undefined) {
                localVarQueryParameter['stream'] = stream;
            }
            if (region !== null && region !== undefined) {
                localVarQueryParameter['region'] = region;
            }
            if (isp !== null && isp !== undefined) {
                localVarQueryParameter['isp'] = isp;
            }
            if (protocol !== null && protocol !== undefined) {
                localVarQueryParameter['protocol'] = protocol;
            }
            if (interval !== null && interval !== undefined) {
                localVarQueryParameter['interval'] = interval;
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (serviceType !== null && serviceType !== undefined) {
                localVarQueryParameter['service_type'] = serviceType;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定时间范围内流量汇总量。
         * 
         * 如果不传入域名，则查询租户下所有播放域名的流量汇总量。
         * 
         * 当查询租户级别流量数据时，参数app、stream不生效。
         * 
         * 最大查询跨度31天，最大查询周期一年。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDomainTrafficSummary(listDomainTrafficSummaryRequest?: ListDomainTrafficSummaryRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/stats/traffic/summary",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let playDomains;
            
            let app;
            
            let stream;
            
            let region;
            
            let isp;
            
            let protocol;
            
            let startTime;
            
            let endTime;
            
            let serviceType;

            if (listDomainTrafficSummaryRequest !== null && listDomainTrafficSummaryRequest !== undefined) {
                if (listDomainTrafficSummaryRequest instanceof ListDomainTrafficSummaryRequest) {
                    playDomains = listDomainTrafficSummaryRequest.playDomains;
                    app = listDomainTrafficSummaryRequest.app;
                    stream = listDomainTrafficSummaryRequest.stream;
                    region = listDomainTrafficSummaryRequest.region;
                    isp = listDomainTrafficSummaryRequest.isp;
                    protocol = listDomainTrafficSummaryRequest.protocol;
                    startTime = listDomainTrafficSummaryRequest.startTime;
                    endTime = listDomainTrafficSummaryRequest.endTime;
                    serviceType = listDomainTrafficSummaryRequest.serviceType;
                } else {
                    playDomains = listDomainTrafficSummaryRequest['play_domains'];
                    app = listDomainTrafficSummaryRequest['app'];
                    stream = listDomainTrafficSummaryRequest['stream'];
                    region = listDomainTrafficSummaryRequest['region'];
                    isp = listDomainTrafficSummaryRequest['isp'];
                    protocol = listDomainTrafficSummaryRequest['protocol'];
                    startTime = listDomainTrafficSummaryRequest['start_time'];
                    endTime = listDomainTrafficSummaryRequest['end_time'];
                    serviceType = listDomainTrafficSummaryRequest['service_type'];
                }
            }

        
            if (playDomains !== null && playDomains !== undefined) {
                localVarQueryParameter['play_domains'] = playDomains;
            }
            if (app !== null && app !== undefined) {
                localVarQueryParameter['app'] = app;
            }
            if (stream !== null && stream !== undefined) {
                localVarQueryParameter['stream'] = stream;
            }
            if (region !== null && region !== undefined) {
                localVarQueryParameter['region'] = region;
            }
            if (isp !== null && isp !== undefined) {
                localVarQueryParameter['isp'] = isp;
            }
            if (protocol !== null && protocol !== undefined) {
                localVarQueryParameter['protocol'] = protocol;
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (serviceType !== null && serviceType !== undefined) {
                localVarQueryParameter['service_type'] = serviceType;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询历史推流列表。
         * 
         * 不能查询现推流。
         * 
         * 最大查询跨度1天。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listHistoryStreams(listHistoryStreamsRequest?: ListHistoryStreamsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/stats/history/streams",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let domain;
            
            let app;
            
            let stream;
            
            let startTime;
            
            let endTime;
            
            let offset;
            
            let limit;

            if (listHistoryStreamsRequest !== null && listHistoryStreamsRequest !== undefined) {
                if (listHistoryStreamsRequest instanceof ListHistoryStreamsRequest) {
                    domain = listHistoryStreamsRequest.domain;
                    app = listHistoryStreamsRequest.app;
                    stream = listHistoryStreamsRequest.stream;
                    startTime = listHistoryStreamsRequest.startTime;
                    endTime = listHistoryStreamsRequest.endTime;
                    offset = listHistoryStreamsRequest.offset;
                    limit = listHistoryStreamsRequest.limit;
                } else {
                    domain = listHistoryStreamsRequest['domain'];
                    app = listHistoryStreamsRequest['app'];
                    stream = listHistoryStreamsRequest['stream'];
                    startTime = listHistoryStreamsRequest['start_time'];
                    endTime = listHistoryStreamsRequest['end_time'];
                    offset = listHistoryStreamsRequest['offset'];
                    limit = listHistoryStreamsRequest['limit'];
                }
            }

        
            if (domain === null || domain === undefined) {
                throw new RequiredError('domain','Required parameter domain was null or undefined when calling listHistoryStreams.');
            }
            if (domain !== null && domain !== undefined) {
                localVarQueryParameter['domain'] = domain;
            }
            if (app !== null && app !== undefined) {
                localVarQueryParameter['app'] = app;
            }
            if (stream !== null && stream !== undefined) {
                localVarQueryParameter['stream'] = stream;
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
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
         * 查询播放域名下的监控数据，根据输入时间点，返回查询该时间点所有流的带宽、在线人数、协议。
         * 返回的数据粒度为1分钟。
         * 最大查询周期7天，数据延迟5分钟。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listPlayDomainStreamInfo(listPlayDomainStreamInfoRequest?: ListPlayDomainStreamInfoRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/stats/stream/play-info",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let time;
            
            let playDomains;

            if (listPlayDomainStreamInfoRequest !== null && listPlayDomainStreamInfoRequest !== undefined) {
                if (listPlayDomainStreamInfoRequest instanceof ListPlayDomainStreamInfoRequest) {
                    time = listPlayDomainStreamInfoRequest.time;
                    playDomains = listPlayDomainStreamInfoRequest.playDomains;
                } else {
                    time = listPlayDomainStreamInfoRequest['time'];
                    playDomains = listPlayDomainStreamInfoRequest['play_domains'];
                }
            }

        
            if (time === null || time === undefined) {
                throw new RequiredError('time','Required parameter time was null or undefined when calling listPlayDomainStreamInfo.');
            }
            if (time !== null && time !== undefined) {
                localVarQueryParameter['time'] = time;
            }
            if (playDomains !== null && playDomains !== undefined) {
                localVarQueryParameter['play_domains'] = playDomains;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询直播拉流HTTP状态码接口。  获取加速域名1分钟粒度的HTTP返回码  最大查询跨度不能超过24小时，最大查询周期7天。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listQueryHttpCode(listQueryHttpCodeRequest?: ListQueryHttpCodeRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/stats/httpcodes",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let playDomains;
            
            let code;
            
            let region;
            
            let isp;
            
            let startTime;
            
            let endTime;

            if (listQueryHttpCodeRequest !== null && listQueryHttpCodeRequest !== undefined) {
                if (listQueryHttpCodeRequest instanceof ListQueryHttpCodeRequest) {
                    playDomains = listQueryHttpCodeRequest.playDomains;
                    code = listQueryHttpCodeRequest.code;
                    region = listQueryHttpCodeRequest.region;
                    isp = listQueryHttpCodeRequest.isp;
                    startTime = listQueryHttpCodeRequest.startTime;
                    endTime = listQueryHttpCodeRequest.endTime;
                } else {
                    playDomains = listQueryHttpCodeRequest['play_domains'];
                    code = listQueryHttpCodeRequest['code'];
                    region = listQueryHttpCodeRequest['region'];
                    isp = listQueryHttpCodeRequest['isp'];
                    startTime = listQueryHttpCodeRequest['start_time'];
                    endTime = listQueryHttpCodeRequest['end_time'];
                }
            }

        
            if (playDomains === null || playDomains === undefined) {
                throw new RequiredError('playDomains','Required parameter playDomains was null or undefined when calling listQueryHttpCode.');
            }
            if (playDomains !== null && playDomains !== undefined) {
                localVarQueryParameter['play_domains'] = playDomains;
            }
            if (code !== null && code !== undefined) {
                localVarQueryParameter['code'] = code;
            }
            if (region !== null && region !== undefined) {
                localVarQueryParameter['region'] = region;
            }
            if (isp !== null && isp !== undefined) {
                localVarQueryParameter['isp'] = isp;
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
         * 查询直播租户每小时录制的最大并发数，计算1小时内每分钟的并发总路数，取最大值做为统计值。  最大查询跨度31天，最大查询周期90天。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listRecordData(listRecordDataRequest?: ListRecordDataRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/stats/record",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let publishDomain;
            
            let startTime;
            
            let endTime;

            if (listRecordDataRequest !== null && listRecordDataRequest !== undefined) {
                if (listRecordDataRequest instanceof ListRecordDataRequest) {
                    publishDomain = listRecordDataRequest.publishDomain;
                    startTime = listRecordDataRequest.startTime;
                    endTime = listRecordDataRequest.endTime;
                } else {
                    publishDomain = listRecordDataRequest['publish_domain'];
                    startTime = listRecordDataRequest['start_time'];
                    endTime = listRecordDataRequest['end_time'];
                }
            }

        
            if (publishDomain !== null && publishDomain !== undefined) {
                localVarQueryParameter['publish_domain'] = publishDomain;
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
         * 查询直播域名每小时的截图数量。  最大查询跨度31天，最大查询周期90天。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSnapshotData(listSnapshotDataRequest?: ListSnapshotDataRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/stats/snapshot",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let publishDomain;
            
            let startTime;
            
            let endTime;

            if (listSnapshotDataRequest !== null && listSnapshotDataRequest !== undefined) {
                if (listSnapshotDataRequest instanceof ListSnapshotDataRequest) {
                    publishDomain = listSnapshotDataRequest.publishDomain;
                    startTime = listSnapshotDataRequest.startTime;
                    endTime = listSnapshotDataRequest.endTime;
                } else {
                    publishDomain = listSnapshotDataRequest['publish_domain'];
                    startTime = listSnapshotDataRequest['start_time'];
                    endTime = listSnapshotDataRequest['end_time'];
                }
            }

        
            if (publishDomain !== null && publishDomain !== undefined) {
                localVarQueryParameter['publish_domain'] = publishDomain;
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
         * 查询推流域名下的转码路数，根据输入时间点和时间粒度，返回转码路数。
         * 最大查询跨度1天，最大查询周期90天，数据延迟5分钟。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTranscodeConcurrencyNum(listTranscodeConcurrencyNumRequest?: ListTranscodeConcurrencyNumRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/stats/transcode/concurrency",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let publishDomains;
            
            let app;
            
            let interval;
            
            let startTime;
            
            let endTime;

            if (listTranscodeConcurrencyNumRequest !== null && listTranscodeConcurrencyNumRequest !== undefined) {
                if (listTranscodeConcurrencyNumRequest instanceof ListTranscodeConcurrencyNumRequest) {
                    publishDomains = listTranscodeConcurrencyNumRequest.publishDomains;
                    app = listTranscodeConcurrencyNumRequest.app;
                    interval = listTranscodeConcurrencyNumRequest.interval;
                    startTime = listTranscodeConcurrencyNumRequest.startTime;
                    endTime = listTranscodeConcurrencyNumRequest.endTime;
                } else {
                    publishDomains = listTranscodeConcurrencyNumRequest['publish_domains'];
                    app = listTranscodeConcurrencyNumRequest['app'];
                    interval = listTranscodeConcurrencyNumRequest['interval'];
                    startTime = listTranscodeConcurrencyNumRequest['start_time'];
                    endTime = listTranscodeConcurrencyNumRequest['end_time'];
                }
            }

        
            if (publishDomains === null || publishDomains === undefined) {
                throw new RequiredError('publishDomains','Required parameter publishDomains was null or undefined when calling listTranscodeConcurrencyNum.');
            }
            if (publishDomains !== null && publishDomains !== undefined) {
                localVarQueryParameter['publish_domains'] = publishDomains;
            }
            if (app !== null && app !== undefined) {
                localVarQueryParameter['app'] = app;
            }
            if (interval !== null && interval !== undefined) {
                localVarQueryParameter['interval'] = interval;
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
         * 查询直播域名每小时的转码时长数据。  最大查询跨度31天，最大查询周期90天。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTranscodeData(listTranscodeDataRequest?: ListTranscodeDataRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/stats/transcode",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let publishDomain;
            
            let stream;
            
            let startTime;
            
            let endTime;

            if (listTranscodeDataRequest !== null && listTranscodeDataRequest !== undefined) {
                if (listTranscodeDataRequest instanceof ListTranscodeDataRequest) {
                    publishDomain = listTranscodeDataRequest.publishDomain;
                    stream = listTranscodeDataRequest.stream;
                    startTime = listTranscodeDataRequest.startTime;
                    endTime = listTranscodeDataRequest.endTime;
                } else {
                    publishDomain = listTranscodeDataRequest['publish_domain'];
                    stream = listTranscodeDataRequest['stream'];
                    startTime = listTranscodeDataRequest['start_time'];
                    endTime = listTranscodeDataRequest['end_time'];
                }
            }

        
            if (publishDomain !== null && publishDomain !== undefined) {
                localVarQueryParameter['publish_domain'] = publishDomain;
            }
            if (stream !== null && stream !== undefined) {
                localVarQueryParameter['stream'] = stream;
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
         * 查询流粒度转码明细，包含流名、模版、格式、时长。
         * 最大查询跨度1天，最大查询周期14天。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTranscodeTaskDetail(listTranscodeTaskDetailRequest?: ListTranscodeTaskDetailRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/stats/transcode/detail",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let domain;
            
            let streamNameList;
            
            let startTime;
            
            let endTime;

            if (listTranscodeTaskDetailRequest !== null && listTranscodeTaskDetailRequest !== undefined) {
                if (listTranscodeTaskDetailRequest instanceof ListTranscodeTaskDetailRequest) {
                    domain = listTranscodeTaskDetailRequest.domain;
                    streamNameList = listTranscodeTaskDetailRequest.streamNameList;
                    startTime = listTranscodeTaskDetailRequest.startTime;
                    endTime = listTranscodeTaskDetailRequest.endTime;
                } else {
                    domain = listTranscodeTaskDetailRequest['domain'];
                    streamNameList = listTranscodeTaskDetailRequest['stream_name_list'];
                    startTime = listTranscodeTaskDetailRequest['start_time'];
                    endTime = listTranscodeTaskDetailRequest['end_time'];
                }
            }

        
            if (domain === null || domain === undefined) {
                throw new RequiredError('domain','Required parameter domain was null or undefined when calling listTranscodeTaskDetail.');
            }
            if (domain !== null && domain !== undefined) {
                localVarQueryParameter['domain'] = domain;
            }
            if (streamNameList !== null && streamNameList !== undefined) {
                localVarQueryParameter['stream_name_list'] = streamNameList;
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
         * 查询观众趋势。  最大查询跨度31天，最大查询周期一年。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listUsersOfStream(listUsersOfStreamRequest?: ListUsersOfStreamRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/stats/user",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let playDomain;
            
            let app;
            
            let stream;
            
            let isp;
            
            let country;
            
            let region;
            
            let protocol;
            
            let interval;
            
            let startTime;
            
            let endTime;
            
            let serviceType;

            if (listUsersOfStreamRequest !== null && listUsersOfStreamRequest !== undefined) {
                if (listUsersOfStreamRequest instanceof ListUsersOfStreamRequest) {
                    playDomain = listUsersOfStreamRequest.playDomain;
                    app = listUsersOfStreamRequest.app;
                    stream = listUsersOfStreamRequest.stream;
                    isp = listUsersOfStreamRequest.isp;
                    country = listUsersOfStreamRequest.country;
                    region = listUsersOfStreamRequest.region;
                    protocol = listUsersOfStreamRequest.protocol;
                    interval = listUsersOfStreamRequest.interval;
                    startTime = listUsersOfStreamRequest.startTime;
                    endTime = listUsersOfStreamRequest.endTime;
                    serviceType = listUsersOfStreamRequest.serviceType;
                } else {
                    playDomain = listUsersOfStreamRequest['play_domain'];
                    app = listUsersOfStreamRequest['app'];
                    stream = listUsersOfStreamRequest['stream'];
                    isp = listUsersOfStreamRequest['isp'];
                    country = listUsersOfStreamRequest['country'];
                    region = listUsersOfStreamRequest['region'];
                    protocol = listUsersOfStreamRequest['protocol'];
                    interval = listUsersOfStreamRequest['interval'];
                    startTime = listUsersOfStreamRequest['start_time'];
                    endTime = listUsersOfStreamRequest['end_time'];
                    serviceType = listUsersOfStreamRequest['service_type'];
                }
            }

        
            if (playDomain === null || playDomain === undefined) {
                throw new RequiredError('playDomain','Required parameter playDomain was null or undefined when calling listUsersOfStream.');
            }
            if (playDomain !== null && playDomain !== undefined) {
                localVarQueryParameter['play_domain'] = playDomain;
            }
            if (app !== null && app !== undefined) {
                localVarQueryParameter['app'] = app;
            }
            if (stream !== null && stream !== undefined) {
                localVarQueryParameter['stream'] = stream;
            }
            if (isp !== null && isp !== undefined) {
                localVarQueryParameter['isp'] = isp;
            }
            if (country !== null && country !== undefined) {
                localVarQueryParameter['country'] = country;
            }
            if (region !== null && region !== undefined) {
                localVarQueryParameter['region'] = region;
            }
            if (protocol !== null && protocol !== undefined) {
                localVarQueryParameter['protocol'] = protocol;
            }
            if (interval !== null && interval !== undefined) {
                localVarQueryParameter['interval'] = interval;
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (serviceType !== null && serviceType !== undefined) {
                localVarQueryParameter['service_type'] = serviceType;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询域名维度推流路数接口。  最大查询跨度31天，最大查询周期1年。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showStreamCount(showStreamCountRequest?: ShowStreamCountRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/stats/stream-count",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let publishDomains;
            
            let startTime;
            
            let endTime;

            if (showStreamCountRequest !== null && showStreamCountRequest !== undefined) {
                if (showStreamCountRequest instanceof ShowStreamCountRequest) {
                    publishDomains = showStreamCountRequest.publishDomains;
                    startTime = showStreamCountRequest.startTime;
                    endTime = showStreamCountRequest.endTime;
                } else {
                    publishDomains = showStreamCountRequest['publish_domains'];
                    startTime = showStreamCountRequest['start_time'];
                    endTime = showStreamCountRequest['end_time'];
                }
            }

        
            if (publishDomains === null || publishDomains === undefined) {
                throw new RequiredError('publishDomains','Required parameter publishDomains was null or undefined when calling showStreamCount.');
            }
            if (publishDomains !== null && publishDomains !== undefined) {
                localVarQueryParameter['publish_domains'] = publishDomains;
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
         * 查询播放画像信息。  最大查询跨度1天，最大查询周期31天。
         * 不统计协议为HLS的播放时长（play_duration）信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showStreamPortrait(showStreamPortraitRequest?: ShowStreamPortraitRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/stats/stream-portraits",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let playDomain;
            
            let time;
            
            let stream;

            if (showStreamPortraitRequest !== null && showStreamPortraitRequest !== undefined) {
                if (showStreamPortraitRequest instanceof ShowStreamPortraitRequest) {
                    playDomain = showStreamPortraitRequest.playDomain;
                    time = showStreamPortraitRequest.time;
                    stream = showStreamPortraitRequest.stream;
                } else {
                    playDomain = showStreamPortraitRequest['play_domain'];
                    time = showStreamPortraitRequest['time'];
                    stream = showStreamPortraitRequest['stream'];
                }
            }

        
            if (playDomain === null || playDomain === undefined) {
                throw new RequiredError('playDomain','Required parameter playDomain was null or undefined when calling showStreamPortrait.');
            }
            if (playDomain !== null && playDomain !== undefined) {
                localVarQueryParameter['play_domain'] = playDomain;
            }
            if (time === null || time === undefined) {
                throw new RequiredError('time','Required parameter time was null or undefined when calling showStreamPortrait.');
            }
            if (time !== null && time !== undefined) {
                localVarQueryParameter['time'] = time;
            }
            if (stream !== null && stream !== undefined) {
                localVarQueryParameter['stream'] = stream;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询上行带宽数据。  最大查询跨度31天，最大查询周期1年。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showUpBandwidth(showUpBandwidthRequest?: ShowUpBandwidthRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/stats/up-bandwidth/detail",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let publishDomains;
            
            let app;
            
            let stream;
            
            let region;
            
            let isp;
            
            let interval;
            
            let type;
            
            let startTime;
            
            let endTime;

            if (showUpBandwidthRequest !== null && showUpBandwidthRequest !== undefined) {
                if (showUpBandwidthRequest instanceof ShowUpBandwidthRequest) {
                    publishDomains = showUpBandwidthRequest.publishDomains;
                    app = showUpBandwidthRequest.app;
                    stream = showUpBandwidthRequest.stream;
                    region = showUpBandwidthRequest.region;
                    isp = showUpBandwidthRequest.isp;
                    interval = showUpBandwidthRequest.interval;
                    type = showUpBandwidthRequest.type;
                    startTime = showUpBandwidthRequest.startTime;
                    endTime = showUpBandwidthRequest.endTime;
                } else {
                    publishDomains = showUpBandwidthRequest['publish_domains'];
                    app = showUpBandwidthRequest['app'];
                    stream = showUpBandwidthRequest['stream'];
                    region = showUpBandwidthRequest['region'];
                    isp = showUpBandwidthRequest['isp'];
                    interval = showUpBandwidthRequest['interval'];
                    type = showUpBandwidthRequest['type'];
                    startTime = showUpBandwidthRequest['start_time'];
                    endTime = showUpBandwidthRequest['end_time'];
                }
            }

        
            if (publishDomains === null || publishDomains === undefined) {
                throw new RequiredError('publishDomains','Required parameter publishDomains was null or undefined when calling showUpBandwidth.');
            }
            if (publishDomains !== null && publishDomains !== undefined) {
                localVarQueryParameter['publish_domains'] = publishDomains;
            }
            if (app !== null && app !== undefined) {
                localVarQueryParameter['app'] = app;
            }
            if (stream !== null && stream !== undefined) {
                localVarQueryParameter['stream'] = stream;
            }
            if (region !== null && region !== undefined) {
                localVarQueryParameter['region'] = region;
            }
            if (isp !== null && isp !== undefined) {
                localVarQueryParameter['isp'] = isp;
            }
            if (interval !== null && interval !== undefined) {
                localVarQueryParameter['interval'] = interval;
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
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询推流监控码率数据接口。
         * 
         * 最大查询跨度1天，最大查询周期1个月。
         * 
         * 返回的码率数据列表粒度为1秒钟。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSingleStreamBitrate(listSingleStreamBitrateRequest?: ListSingleStreamBitrateRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/stats/stream/bitrate",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let domain;
            
            let app;
            
            let stream;
            
            let startTime;
            
            let endTime;

            if (listSingleStreamBitrateRequest !== null && listSingleStreamBitrateRequest !== undefined) {
                if (listSingleStreamBitrateRequest instanceof ListSingleStreamBitrateRequest) {
                    domain = listSingleStreamBitrateRequest.domain;
                    app = listSingleStreamBitrateRequest.app;
                    stream = listSingleStreamBitrateRequest.stream;
                    startTime = listSingleStreamBitrateRequest.startTime;
                    endTime = listSingleStreamBitrateRequest.endTime;
                } else {
                    domain = listSingleStreamBitrateRequest['domain'];
                    app = listSingleStreamBitrateRequest['app'];
                    stream = listSingleStreamBitrateRequest['stream'];
                    startTime = listSingleStreamBitrateRequest['start_time'];
                    endTime = listSingleStreamBitrateRequest['end_time'];
                }
            }

        
            if (domain === null || domain === undefined) {
                throw new RequiredError('domain','Required parameter domain was null or undefined when calling listSingleStreamBitrate.');
            }
            if (domain !== null && domain !== undefined) {
                localVarQueryParameter['domain'] = domain;
            }
            if (app === null || app === undefined) {
                throw new RequiredError('app','Required parameter app was null or undefined when calling listSingleStreamBitrate.');
            }
            if (app !== null && app !== undefined) {
                localVarQueryParameter['app'] = app;
            }
            if (stream === null || stream === undefined) {
                throw new RequiredError('stream','Required parameter stream was null or undefined when calling listSingleStreamBitrate.');
            }
            if (stream !== null && stream !== undefined) {
                localVarQueryParameter['stream'] = stream;
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
         * 查询流监控数据接口，包括帧率码率断流情况。
         * 
         * 最大查询跨度1天，最大查询周期1个月。
         * 
         * 返回的码率数据列表粒度为1秒钟。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSingleStreamDetail(listSingleStreamDetailRequest?: ListSingleStreamDetailRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/stats/stream-detail",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let publishDomain;
            
            let app;
            
            let stream;
            
            let startTime;
            
            let endTime;

            if (listSingleStreamDetailRequest !== null && listSingleStreamDetailRequest !== undefined) {
                if (listSingleStreamDetailRequest instanceof ListSingleStreamDetailRequest) {
                    publishDomain = listSingleStreamDetailRequest.publishDomain;
                    app = listSingleStreamDetailRequest.app;
                    stream = listSingleStreamDetailRequest.stream;
                    startTime = listSingleStreamDetailRequest.startTime;
                    endTime = listSingleStreamDetailRequest.endTime;
                } else {
                    publishDomain = listSingleStreamDetailRequest['publish_domain'];
                    app = listSingleStreamDetailRequest['app'];
                    stream = listSingleStreamDetailRequest['stream'];
                    startTime = listSingleStreamDetailRequest['start_time'];
                    endTime = listSingleStreamDetailRequest['end_time'];
                }
            }

        
            if (publishDomain === null || publishDomain === undefined) {
                throw new RequiredError('publishDomain','Required parameter publishDomain was null or undefined when calling listSingleStreamDetail.');
            }
            if (publishDomain !== null && publishDomain !== undefined) {
                localVarQueryParameter['publish_domain'] = publishDomain;
            }
            if (app === null || app === undefined) {
                throw new RequiredError('app','Required parameter app was null or undefined when calling listSingleStreamDetail.');
            }
            if (app !== null && app !== undefined) {
                localVarQueryParameter['app'] = app;
            }
            if (stream === null || stream === undefined) {
                throw new RequiredError('stream','Required parameter stream was null or undefined when calling listSingleStreamDetail.');
            }
            if (stream !== null && stream !== undefined) {
                localVarQueryParameter['stream'] = stream;
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
         * 查询推流帧率数据接口。
         * 
         * 最大查询跨度1天，最大查询周期1个月。
         * 
         * 返回的帧率数据列表粒度为1秒钟。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSingleStreamFramerate(listSingleStreamFramerateRequest?: ListSingleStreamFramerateRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/stats/stream/framerate",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let domain;
            
            let app;
            
            let stream;
            
            let startTime;
            
            let endTime;

            if (listSingleStreamFramerateRequest !== null && listSingleStreamFramerateRequest !== undefined) {
                if (listSingleStreamFramerateRequest instanceof ListSingleStreamFramerateRequest) {
                    domain = listSingleStreamFramerateRequest.domain;
                    app = listSingleStreamFramerateRequest.app;
                    stream = listSingleStreamFramerateRequest.stream;
                    startTime = listSingleStreamFramerateRequest.startTime;
                    endTime = listSingleStreamFramerateRequest.endTime;
                } else {
                    domain = listSingleStreamFramerateRequest['domain'];
                    app = listSingleStreamFramerateRequest['app'];
                    stream = listSingleStreamFramerateRequest['stream'];
                    startTime = listSingleStreamFramerateRequest['start_time'];
                    endTime = listSingleStreamFramerateRequest['end_time'];
                }
            }

        
            if (domain === null || domain === undefined) {
                throw new RequiredError('domain','Required parameter domain was null or undefined when calling listSingleStreamFramerate.');
            }
            if (domain !== null && domain !== undefined) {
                localVarQueryParameter['domain'] = domain;
            }
            if (app === null || app === undefined) {
                throw new RequiredError('app','Required parameter app was null or undefined when calling listSingleStreamFramerate.');
            }
            if (app !== null && app !== undefined) {
                localVarQueryParameter['app'] = app;
            }
            if (stream === null || stream === undefined) {
                throw new RequiredError('stream','Required parameter stream was null or undefined when calling listSingleStreamFramerate.');
            }
            if (stream !== null && stream !== undefined) {
                localVarQueryParameter['stream'] = stream;
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
         * 查询CDN上行推流质量数据。
         * 
         * 最大查询跨度1天，最大查询周期7天。
         * 
         * 返回的CDN上行推流质量数据列表粒度为1分钟。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listUpStreamDetail(listUpStreamDetailRequest?: ListUpStreamDetailRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/stats/up-stream/detail",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let publishDomain;
            
            let app;
            
            let stream;
            
            let startTime;
            
            let endTime;

            if (listUpStreamDetailRequest !== null && listUpStreamDetailRequest !== undefined) {
                if (listUpStreamDetailRequest instanceof ListUpStreamDetailRequest) {
                    publishDomain = listUpStreamDetailRequest.publishDomain;
                    app = listUpStreamDetailRequest.app;
                    stream = listUpStreamDetailRequest.stream;
                    startTime = listUpStreamDetailRequest.startTime;
                    endTime = listUpStreamDetailRequest.endTime;
                } else {
                    publishDomain = listUpStreamDetailRequest['publish_domain'];
                    app = listUpStreamDetailRequest['app'];
                    stream = listUpStreamDetailRequest['stream'];
                    startTime = listUpStreamDetailRequest['start_time'];
                    endTime = listUpStreamDetailRequest['end_time'];
                }
            }

        
            if (publishDomain === null || publishDomain === undefined) {
                throw new RequiredError('publishDomain','Required parameter publishDomain was null or undefined when calling listUpStreamDetail.');
            }
            if (publishDomain !== null && publishDomain !== undefined) {
                localVarQueryParameter['publish_domain'] = publishDomain;
            }
            if (app === null || app === undefined) {
                throw new RequiredError('app','Required parameter app was null or undefined when calling listUpStreamDetail.');
            }
            if (app !== null && app !== undefined) {
                localVarQueryParameter['app'] = app;
            }
            if (stream === null || stream === undefined) {
                throw new RequiredError('stream','Required parameter stream was null or undefined when calling listUpStreamDetail.');
            }
            if (stream !== null && stream !== undefined) {
                localVarQueryParameter['stream'] = stream;
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
    
    }
};

function newClient(client: HcClient): LiveClient {
    return new LiveClient(client);
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