import { AIServiceInstance } from './AIServiceInstance';
import { Model } from './Model';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class GetDevServerJobServiceResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    public status?: string;
    public spec?: { [key: string]: string; };
    public instances?: Array<AIServiceInstance>;
    public model?: Model;
    public constructor() { 
        super();
    }
    public withId(id: string): GetDevServerJobServiceResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): GetDevServerJobServiceResponse {
        this['name'] = name;
        return this;
    }
    public withStatus(status: string): GetDevServerJobServiceResponse {
        this['status'] = status;
        return this;
    }
    public withSpec(spec: { [key: string]: string; }): GetDevServerJobServiceResponse {
        this['spec'] = spec;
        return this;
    }
    public withInstances(instances: Array<AIServiceInstance>): GetDevServerJobServiceResponse {
        this['instances'] = instances;
        return this;
    }
    public withModel(model: Model): GetDevServerJobServiceResponse {
        this['model'] = model;
        return this;
    }
}