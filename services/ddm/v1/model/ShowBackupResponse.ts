import { RelatedDn } from './RelatedDn';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowBackupResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    private 'instance_id'?: string;
    private 'instance_name'?: string;
    private 'related_data_nodes'?: Array<RelatedDn>;
    public constructor() { 
        super();
    }
    public withId(id: string): ShowBackupResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ShowBackupResponse {
        this['name'] = name;
        return this;
    }
    public withInstanceId(instanceId: string): ShowBackupResponse {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withInstanceName(instanceName: string): ShowBackupResponse {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): string | undefined {
        return this['instance_name'];
    }
    public withRelatedDataNodes(relatedDataNodes: Array<RelatedDn>): ShowBackupResponse {
        this['related_data_nodes'] = relatedDataNodes;
        return this;
    }
    public set relatedDataNodes(relatedDataNodes: Array<RelatedDn>  | undefined) {
        this['related_data_nodes'] = relatedDataNodes;
    }
    public get relatedDataNodes(): Array<RelatedDn> | undefined {
        return this['related_data_nodes'];
    }
}