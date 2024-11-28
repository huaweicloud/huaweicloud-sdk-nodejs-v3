import { SecretTask } from './SecretTask';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSecretTaskResponse extends SdkResponse {
    public total?: number;
    public tasks?: Array<SecretTask>;
    private 'next_marker'?: string;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListSecretTaskResponse {
        this['total'] = total;
        return this;
    }
    public withTasks(tasks: Array<SecretTask>): ListSecretTaskResponse {
        this['tasks'] = tasks;
        return this;
    }
    public withNextMarker(nextMarker: string): ListSecretTaskResponse {
        this['next_marker'] = nextMarker;
        return this;
    }
    public set nextMarker(nextMarker: string  | undefined) {
        this['next_marker'] = nextMarker;
    }
    public get nextMarker(): string | undefined {
        return this['next_marker'];
    }
}