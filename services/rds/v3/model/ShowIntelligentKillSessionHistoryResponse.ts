import { IntelligentKillSessionHistory } from './IntelligentKillSessionHistory';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowIntelligentKillSessionHistoryResponse extends SdkResponse {
    private 'instance_id'?: string;
    public history?: Array<IntelligentKillSessionHistory>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withInstanceId(instanceId: string): ShowIntelligentKillSessionHistoryResponse {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withHistory(history: Array<IntelligentKillSessionHistory>): ShowIntelligentKillSessionHistoryResponse {
        this['history'] = history;
        return this;
    }
    public withTotalCount(totalCount: number): ShowIntelligentKillSessionHistoryResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
}