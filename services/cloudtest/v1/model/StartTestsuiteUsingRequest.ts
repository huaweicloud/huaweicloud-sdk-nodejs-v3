import { TaskActionParamsV5 } from './TaskActionParamsV5';


export class StartTestsuiteUsingRequest {
    private 'service_id'?: string;
    private 'suite_id'?: string;
    public body?: TaskActionParamsV5;
    public constructor(serviceId?: string, suiteId?: string) { 
        this['service_id'] = serviceId;
        this['suite_id'] = suiteId;
    }
    public withServiceId(serviceId: string): StartTestsuiteUsingRequest {
        this['service_id'] = serviceId;
        return this;
    }
    public set serviceId(serviceId: string  | undefined) {
        this['service_id'] = serviceId;
    }
    public get serviceId(): string | undefined {
        return this['service_id'];
    }
    public withSuiteId(suiteId: string): StartTestsuiteUsingRequest {
        this['suite_id'] = suiteId;
        return this;
    }
    public set suiteId(suiteId: string  | undefined) {
        this['suite_id'] = suiteId;
    }
    public get suiteId(): string | undefined {
        return this['suite_id'];
    }
    public withBody(body: TaskActionParamsV5): StartTestsuiteUsingRequest {
        this['body'] = body;
        return this;
    }
}