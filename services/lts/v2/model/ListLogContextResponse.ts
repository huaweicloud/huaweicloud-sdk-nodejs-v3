import { LogContents } from './LogContents';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListLogContextResponse extends SdkResponse {
    public logs?: Array<LogContents>;
    private 'total_count'?: number;
    private 'backwards_count'?: number;
    private 'forwards_count'?: number;
    public isQueryComplete?: boolean;
    public constructor() { 
        super();
    }
    public withLogs(logs: Array<LogContents>): ListLogContextResponse {
        this['logs'] = logs;
        return this;
    }
    public withTotalCount(totalCount: number): ListLogContextResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withBackwardsCount(backwardsCount: number): ListLogContextResponse {
        this['backwards_count'] = backwardsCount;
        return this;
    }
    public set backwardsCount(backwardsCount: number  | undefined) {
        this['backwards_count'] = backwardsCount;
    }
    public get backwardsCount(): number | undefined {
        return this['backwards_count'];
    }
    public withForwardsCount(forwardsCount: number): ListLogContextResponse {
        this['forwards_count'] = forwardsCount;
        return this;
    }
    public set forwardsCount(forwardsCount: number  | undefined) {
        this['forwards_count'] = forwardsCount;
    }
    public get forwardsCount(): number | undefined {
        return this['forwards_count'];
    }
    public withIsQueryComplete(isQueryComplete: boolean): ListLogContextResponse {
        this['isQueryComplete'] = isQueryComplete;
        return this;
    }
}