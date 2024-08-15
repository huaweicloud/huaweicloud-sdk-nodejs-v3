import { RemediationResourceKey } from './RemediationResourceKey';


export class RemediationExecutionStatusesSummaryRequestBody {
    private 'resource_keys'?: Array<RemediationResourceKey>;
    public constructor(resourceKeys?: Array<RemediationResourceKey>) { 
        this['resource_keys'] = resourceKeys;
    }
    public withResourceKeys(resourceKeys: Array<RemediationResourceKey>): RemediationExecutionStatusesSummaryRequestBody {
        this['resource_keys'] = resourceKeys;
        return this;
    }
    public set resourceKeys(resourceKeys: Array<RemediationResourceKey>  | undefined) {
        this['resource_keys'] = resourceKeys;
    }
    public get resourceKeys(): Array<RemediationResourceKey> | undefined {
        return this['resource_keys'];
    }
}