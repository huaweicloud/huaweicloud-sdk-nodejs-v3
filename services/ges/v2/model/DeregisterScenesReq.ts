import { DeregisterScenesReqScenes } from './DeregisterScenesReqScenes';


export class DeregisterScenesReq {
    public scenes?: Array<DeregisterScenesReqScenes>;
    public constructor() { 
    }
    public withScenes(scenes: Array<DeregisterScenesReqScenes>): DeregisterScenesReq {
        this['scenes'] = scenes;
        return this;
    }
}