

export class CreateAgenciesReq {
    public scene?: CreateAgenciesReqSceneEnum | string;
    public constructor() { 
    }
    public withScene(scene: CreateAgenciesReqSceneEnum | string): CreateAgenciesReq {
        this['scene'] = scene;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateAgenciesReqSceneEnum {
    WORKSPACE = 'WORKSPACE',
    CLOUD_GAME = 'CLOUD_GAME'
}
