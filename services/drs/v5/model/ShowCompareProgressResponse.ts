import { QueryCompareJobProgressRespFullInfo } from './QueryCompareJobProgressRespFullInfo';
import { QueryCompareJobProgressRespGlobalInfo } from './QueryCompareJobProgressRespGlobalInfo';
import { QueryCompareJobProgressRespIncreInfo } from './QueryCompareJobProgressRespIncreInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowCompareProgressResponse extends SdkResponse {
    private 'full_info'?: QueryCompareJobProgressRespFullInfo;
    private 'incre_info'?: QueryCompareJobProgressRespIncreInfo;
    private 'global_info'?: QueryCompareJobProgressRespGlobalInfo;
    public constructor() { 
        super();
    }
    public withFullInfo(fullInfo: QueryCompareJobProgressRespFullInfo): ShowCompareProgressResponse {
        this['full_info'] = fullInfo;
        return this;
    }
    public set fullInfo(fullInfo: QueryCompareJobProgressRespFullInfo  | undefined) {
        this['full_info'] = fullInfo;
    }
    public get fullInfo(): QueryCompareJobProgressRespFullInfo | undefined {
        return this['full_info'];
    }
    public withIncreInfo(increInfo: QueryCompareJobProgressRespIncreInfo): ShowCompareProgressResponse {
        this['incre_info'] = increInfo;
        return this;
    }
    public set increInfo(increInfo: QueryCompareJobProgressRespIncreInfo  | undefined) {
        this['incre_info'] = increInfo;
    }
    public get increInfo(): QueryCompareJobProgressRespIncreInfo | undefined {
        return this['incre_info'];
    }
    public withGlobalInfo(globalInfo: QueryCompareJobProgressRespGlobalInfo): ShowCompareProgressResponse {
        this['global_info'] = globalInfo;
        return this;
    }
    public set globalInfo(globalInfo: QueryCompareJobProgressRespGlobalInfo  | undefined) {
        this['global_info'] = globalInfo;
    }
    public get globalInfo(): QueryCompareJobProgressRespGlobalInfo | undefined {
        return this['global_info'];
    }
}