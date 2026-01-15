
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CheckCidrResponse extends SdkResponse {
    private 'manage_cidrs'?: Array<string>;
    private 'conflict_cidrs'?: Array<string>;
    public constructor() { 
        super();
    }
    public withManageCidrs(manageCidrs: Array<string>): CheckCidrResponse {
        this['manage_cidrs'] = manageCidrs;
        return this;
    }
    public set manageCidrs(manageCidrs: Array<string>  | undefined) {
        this['manage_cidrs'] = manageCidrs;
    }
    public get manageCidrs(): Array<string> | undefined {
        return this['manage_cidrs'];
    }
    public withConflictCidrs(conflictCidrs: Array<string>): CheckCidrResponse {
        this['conflict_cidrs'] = conflictCidrs;
        return this;
    }
    public set conflictCidrs(conflictCidrs: Array<string>  | undefined) {
        this['conflict_cidrs'] = conflictCidrs;
    }
    public get conflictCidrs(): Array<string> | undefined {
        return this['conflict_cidrs'];
    }
}