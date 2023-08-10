import { Dimension2 } from './Dimension2';


export class GetResourceGroupResources {
    public status?: GetResourceGroupResourcesStatusEnum | string;
    public dimensions?: Array<Dimension2>;
    public constructor(status?: string, dimensions?: Array<Dimension2>) { 
        this['status'] = status;
        this['dimensions'] = dimensions;
    }
    public withStatus(status: GetResourceGroupResourcesStatusEnum | string): GetResourceGroupResources {
        this['status'] = status;
        return this;
    }
    public withDimensions(dimensions: Array<Dimension2>): GetResourceGroupResources {
        this['dimensions'] = dimensions;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum GetResourceGroupResourcesStatusEnum {
    HEALTH = 'health',
    UNHEALTHY = 'unhealthy',
    NO_ALARM_RULE = 'no_alarm_rule'
}
