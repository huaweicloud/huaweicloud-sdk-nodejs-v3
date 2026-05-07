import { FailReasons } from './FailReasons';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateAntiVirusTaskResponse extends SdkResponse {
    private 'task_id'?: string;
    private 'policy_id'?: string;
    public result?: boolean;
    private 'fail_reasons'?: Array<FailReasons>;
    public constructor() { 
        super();
    }
    public withTaskId(taskId: string): CreateAntiVirusTaskResponse {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withPolicyId(policyId: string): CreateAntiVirusTaskResponse {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string  | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId(): string | undefined {
        return this['policy_id'];
    }
    public withResult(result: boolean): CreateAntiVirusTaskResponse {
        this['result'] = result;
        return this;
    }
    public withFailReasons(failReasons: Array<FailReasons>): CreateAntiVirusTaskResponse {
        this['fail_reasons'] = failReasons;
        return this;
    }
    public set failReasons(failReasons: Array<FailReasons>  | undefined) {
        this['fail_reasons'] = failReasons;
    }
    public get failReasons(): Array<FailReasons> | undefined {
        return this['fail_reasons'];
    }
}