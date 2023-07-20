
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateGaussMySqlBackupPolicyResponse extends SdkResponse {
    public status?: string;
    private 'instance_id'?: string;
    private 'instance_name'?: string;
    public constructor() { 
        super();
    }
    public withStatus(status: string): UpdateGaussMySqlBackupPolicyResponse {
        this['status'] = status;
        return this;
    }
    public withInstanceId(instanceId: string): UpdateGaussMySqlBackupPolicyResponse {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withInstanceName(instanceName: string): UpdateGaussMySqlBackupPolicyResponse {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): string | undefined {
        return this['instance_name'];
    }
}