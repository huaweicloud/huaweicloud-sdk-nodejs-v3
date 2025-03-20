import { ResourceQuery } from './ResourceQuery';


export class TargetResource {
    public type?: TargetResourceTypeEnum | string;
    public id?: string;
    private 'app_name'?: string;
    private 'region_id'?: string;
    public params?: Array<ResourceQuery>;
    public constructor() { 
    }
    public withType(type: TargetResourceTypeEnum | string): TargetResource {
        this['type'] = type;
        return this;
    }
    public withId(id: string): TargetResource {
        this['id'] = id;
        return this;
    }
    public withAppName(appName: string): TargetResource {
        this['app_name'] = appName;
        return this;
    }
    public set appName(appName: string  | undefined) {
        this['app_name'] = appName;
    }
    public get appName(): string | undefined {
        return this['app_name'];
    }
    public withRegionId(regionId: string): TargetResource {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withParams(params: Array<ResourceQuery>): TargetResource {
        this['params'] = params;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum TargetResourceTypeEnum {
    REGION = 'REGION',
    APPLICATION = 'APPLICATION'
}
