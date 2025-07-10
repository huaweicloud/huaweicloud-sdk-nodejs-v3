

export class ListAgenciesRequest {
    public scene?: ListAgenciesRequestSceneEnum | string;
    public constructor() { 
    }
    public withScene(scene: ListAgenciesRequestSceneEnum | string): ListAgenciesRequest {
        this['scene'] = scene;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListAgenciesRequestSceneEnum {
    WORKSPACE = 'WORKSPACE',
    CLOUD_GAME = 'CLOUD_GAME',
    CLOUD_STORAGE = 'CLOUD_STORAGE',
    SCREEN_RECORD = 'SCREEN_RECORD'
}
