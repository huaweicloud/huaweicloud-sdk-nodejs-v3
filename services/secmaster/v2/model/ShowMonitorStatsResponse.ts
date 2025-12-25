import { EsMonitorBody } from './EsMonitorBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowMonitorStatsResponse extends SdkResponse {
    private 'es_result'?: EsMonitorBody;
    public result?: Array<{ [key: string]: object; }>;
    public constructor() { 
        super();
    }
    public withEsResult(esResult: EsMonitorBody): ShowMonitorStatsResponse {
        this['es_result'] = esResult;
        return this;
    }
    public set esResult(esResult: EsMonitorBody  | undefined) {
        this['es_result'] = esResult;
    }
    public get esResult(): EsMonitorBody | undefined {
        return this['es_result'];
    }
    public withResult(result: Array<{ [key: string]: object; }>): ShowMonitorStatsResponse {
        this['result'] = result;
        return this;
    }
}