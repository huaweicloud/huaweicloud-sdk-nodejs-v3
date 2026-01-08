

export class ListAgenciesRequest {
    public scene?: string;
    public action?: string;
    public constructor() { 
    }
    public withScene(scene: string): ListAgenciesRequest {
        this['scene'] = scene;
        return this;
    }
    public withAction(action: string): ListAgenciesRequest {
        this['action'] = action;
        return this;
    }
}