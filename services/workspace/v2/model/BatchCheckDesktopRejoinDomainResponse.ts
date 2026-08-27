import { BatchCheckRejoinDomainResult } from './BatchCheckRejoinDomainResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchCheckDesktopRejoinDomainResponse extends SdkResponse {
    private 'total_count'?: number;
    public desktops?: Array<BatchCheckRejoinDomainResult>;
    public constructor() { 
        super();
    }
    public withTotalCount(totalCount: number): BatchCheckDesktopRejoinDomainResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withDesktops(desktops: Array<BatchCheckRejoinDomainResult>): BatchCheckDesktopRejoinDomainResponse {
        this['desktops'] = desktops;
        return this;
    }
}