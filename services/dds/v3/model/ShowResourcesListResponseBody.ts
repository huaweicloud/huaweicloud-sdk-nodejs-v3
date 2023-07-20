import { ShowResourcesDetailResponseBody } from './ShowResourcesDetailResponseBody';


export class ShowResourcesListResponseBody {
    public resources?: Array<ShowResourcesDetailResponseBody>;
    public constructor(resources?: Array<ShowResourcesDetailResponseBody>) { 
        this['resources'] = resources;
    }
    public withResources(resources: Array<ShowResourcesDetailResponseBody>): ShowResourcesListResponseBody {
        this['resources'] = resources;
        return this;
    }
}