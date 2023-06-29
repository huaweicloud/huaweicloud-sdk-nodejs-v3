import { AnimatedGraphicsTask } from './AnimatedGraphicsTask';
import { CommonQueryTaskRsp } from './CommonQueryTaskRsp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAnimatedGraphicsTaskResponse extends SdkResponse {
    public total?: number;
    public tasks?: Array<AnimatedGraphicsTask>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListAnimatedGraphicsTaskResponse {
        this['total'] = total;
        return this;
    }
    public withTasks(tasks: Array<AnimatedGraphicsTask>): ListAnimatedGraphicsTaskResponse {
        this['tasks'] = tasks;
        return this;
    }
}