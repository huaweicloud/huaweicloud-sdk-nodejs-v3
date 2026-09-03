
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowBackupRetainPolicyResponse extends SdkResponse {
    private 'instance_id'?: string;
    public name?: string;
    private 'engine_name'?: string;
    private 'engine_version'?: string;
    private 'instance_delete_time'?: number;
    public auto?: string;
    public manual?: string;
    public constructor() { 
        super();
    }
    public withInstanceId(instanceId: string): ShowBackupRetainPolicyResponse {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withName(name: string): ShowBackupRetainPolicyResponse {
        this['name'] = name;
        return this;
    }
    public withEngineName(engineName: string): ShowBackupRetainPolicyResponse {
        this['engine_name'] = engineName;
        return this;
    }
    public set engineName(engineName: string  | undefined) {
        this['engine_name'] = engineName;
    }
    public get engineName(): string | undefined {
        return this['engine_name'];
    }
    public withEngineVersion(engineVersion: string): ShowBackupRetainPolicyResponse {
        this['engine_version'] = engineVersion;
        return this;
    }
    public set engineVersion(engineVersion: string  | undefined) {
        this['engine_version'] = engineVersion;
    }
    public get engineVersion(): string | undefined {
        return this['engine_version'];
    }
    public withInstanceDeleteTime(instanceDeleteTime: number): ShowBackupRetainPolicyResponse {
        this['instance_delete_time'] = instanceDeleteTime;
        return this;
    }
    public set instanceDeleteTime(instanceDeleteTime: number  | undefined) {
        this['instance_delete_time'] = instanceDeleteTime;
    }
    public get instanceDeleteTime(): number | undefined {
        return this['instance_delete_time'];
    }
    public withAuto(auto: string): ShowBackupRetainPolicyResponse {
        this['auto'] = auto;
        return this;
    }
    public withManual(manual: string): ShowBackupRetainPolicyResponse {
        this['manual'] = manual;
        return this;
    }
}