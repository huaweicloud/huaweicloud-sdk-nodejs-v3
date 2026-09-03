import { TaskInfoV4VoReq } from './TaskInfoV4VoReq';


export class UpdateTestsuiteInfoUsingRequest {
    private 'service_id'?: string;
    private 'suite_id'?: string;
    public body?: TaskInfoV4VoReq;
    public constructor(serviceId?: string, suiteId?: string) { 
        this['service_id'] = serviceId;
        this['suite_id'] = suiteId;
    }
    public withServiceId(serviceId: string): UpdateTestsuiteInfoUsingRequest {
        this['service_id'] = serviceId;
        return this;
    }
    public set serviceId(serviceId: string  | undefined) {
        this['service_id'] = serviceId;
    }
    public get serviceId(): string | undefined {
        return this['service_id'];
    }
    public withSuiteId(suiteId: string): UpdateTestsuiteInfoUsingRequest {
        this['suite_id'] = suiteId;
        return this;
    }
    public set suiteId(suiteId: string  | undefined) {
        this['suite_id'] = suiteId;
    }
    public get suiteId(): string | undefined {
        return this['suite_id'];
    }
    public withBody(body: TaskInfoV4VoReq): UpdateTestsuiteInfoUsingRequest {
        this['body'] = body;
        return this;
    }
}