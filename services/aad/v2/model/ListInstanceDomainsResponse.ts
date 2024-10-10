import { InstanceDomainItem } from './InstanceDomainItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInstanceDomainsResponse extends SdkResponse {
    private 'instance_id'?: string;
    private 'instance_name'?: string;
    public domains?: Array<InstanceDomainItem>;
    public constructor() { 
        super();
    }
    public withInstanceId(instanceId: string): ListInstanceDomainsResponse {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withInstanceName(instanceName: string): ListInstanceDomainsResponse {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): string | undefined {
        return this['instance_name'];
    }
    public withDomains(domains: Array<InstanceDomainItem>): ListInstanceDomainsResponse {
        this['domains'] = domains;
        return this;
    }
}