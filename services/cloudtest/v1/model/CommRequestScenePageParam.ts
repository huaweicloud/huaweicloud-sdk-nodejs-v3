import { ScenePageParam } from './ScenePageParam';


export class CommRequestScenePageParam {
    public params?: ScenePageParam;
    public constructor() { 
    }
    public withParams(params: ScenePageParam): CommRequestScenePageParam {
        this['params'] = params;
        return this;
    }
}