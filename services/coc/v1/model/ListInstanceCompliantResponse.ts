import { InstanceCompliant } from './InstanceCompliant';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInstanceCompliantResponse extends SdkResponse {
    public count?: number;
    private 'instance_compliant'?: Array<InstanceCompliant>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListInstanceCompliantResponse {
        this['count'] = count;
        return this;
    }
    public withInstanceCompliant(instanceCompliant: Array<InstanceCompliant>): ListInstanceCompliantResponse {
        this['instance_compliant'] = instanceCompliant;
        return this;
    }
    public set instanceCompliant(instanceCompliant: Array<InstanceCompliant>  | undefined) {
        this['instance_compliant'] = instanceCompliant;
    }
    public get instanceCompliant(): Array<InstanceCompliant> | undefined {
        return this['instance_compliant'];
    }
}