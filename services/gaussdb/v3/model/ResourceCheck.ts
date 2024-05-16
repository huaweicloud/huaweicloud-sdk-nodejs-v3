import { ResourceCheckResource } from './ResourceCheckResource';


export class ResourceCheck {
    public action?: ResourceCheckActionEnum | string;
    public resource?: ResourceCheckResource;
    public constructor(action?: string, resource?: ResourceCheckResource) { 
        this['action'] = action;
        this['resource'] = resource;
    }
    public withAction(action: ResourceCheckActionEnum | string): ResourceCheck {
        this['action'] = action;
        return this;
    }
    public withResource(resource: ResourceCheckResource): ResourceCheck {
        this['resource'] = resource;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ResourceCheckActionEnum {
    CREATEINSTANCE = 'createInstance'
}
