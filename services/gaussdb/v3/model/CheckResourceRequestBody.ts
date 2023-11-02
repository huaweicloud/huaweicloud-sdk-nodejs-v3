import { CheckResourceInfo } from './CheckResourceInfo';


export class CheckResourceRequestBody {
    public action?: string;
    public resource?: CheckResourceInfo;
    public constructor(action?: string, resource?: CheckResourceInfo) { 
        this['action'] = action;
        this['resource'] = resource;
    }
    public withAction(action: string): CheckResourceRequestBody {
        this['action'] = action;
        return this;
    }
    public withResource(resource: CheckResourceInfo): CheckResourceRequestBody {
        this['resource'] = resource;
        return this;
    }
}