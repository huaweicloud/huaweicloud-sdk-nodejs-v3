import { ListScenesRespParams } from './ListScenesRespParams';


export class ListScenesRespResults {
    public scene?: string;
    public name?: string;
    public params?: Array<ListScenesRespParams>;
    public description?: string;
    public constructor() { 
    }
    public withScene(scene: string): ListScenesRespResults {
        this['scene'] = scene;
        return this;
    }
    public withName(name: string): ListScenesRespResults {
        this['name'] = name;
        return this;
    }
    public withParams(params: Array<ListScenesRespParams>): ListScenesRespResults {
        this['params'] = params;
        return this;
    }
    public withDescription(description: string): ListScenesRespResults {
        this['description'] = description;
        return this;
    }
}