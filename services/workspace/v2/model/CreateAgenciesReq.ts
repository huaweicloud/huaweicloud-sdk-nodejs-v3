

export class CreateAgenciesReq {
    public scene?: CreateAgenciesReqSceneEnum | string;
    public action?: CreateAgenciesReqActionEnum | string;
    public constructor() { 
    }
    public withScene(scene: CreateAgenciesReqSceneEnum | string): CreateAgenciesReq {
        this['scene'] = scene;
        return this;
    }
    public withAction(action: CreateAgenciesReqActionEnum | string): CreateAgenciesReq {
        this['action'] = action;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateAgenciesReqSceneEnum {
    WORKSPACE = 'WORKSPACE',
    CLOUD_GAME = 'CLOUD_GAME',
    CLOUD_STORAGE = 'CLOUD_STORAGE',
    SCREEN_RECORD = 'SCREEN_RECORD'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateAgenciesReqActionEnum {
    CREATE = 'CREATE',
    FIX = 'FIX'
}
