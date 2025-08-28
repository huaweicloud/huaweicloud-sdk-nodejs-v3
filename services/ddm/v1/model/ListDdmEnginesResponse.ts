import { EngineGroupInfo } from './EngineGroupInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDdmEnginesResponse extends SdkResponse {
    private 'engine_groups'?: Array<EngineGroupInfo>;
    public offset?: number;
    public limit?: number;
    public total?: number;
    public constructor() { 
        super();
    }
    public withEngineGroups(engineGroups: Array<EngineGroupInfo>): ListDdmEnginesResponse {
        this['engine_groups'] = engineGroups;
        return this;
    }
    public set engineGroups(engineGroups: Array<EngineGroupInfo>  | undefined) {
        this['engine_groups'] = engineGroups;
    }
    public get engineGroups(): Array<EngineGroupInfo> | undefined {
        return this['engine_groups'];
    }
    public withOffset(offset: number): ListDdmEnginesResponse {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListDdmEnginesResponse {
        this['limit'] = limit;
        return this;
    }
    public withTotal(total: number): ListDdmEnginesResponse {
        this['total'] = total;
        return this;
    }
}