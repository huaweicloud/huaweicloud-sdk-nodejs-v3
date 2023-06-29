import { RegisterScenesReqScenes } from './RegisterScenesReqScenes';


export class RegisterScenesReq {
    public scenes?: Array<RegisterScenesReqScenes>;
    public constructor() { 
    }
    public withScenes(scenes: Array<RegisterScenesReqScenes>): RegisterScenesReq {
        this['scenes'] = scenes;
        return this;
    }
}