import { ShowCeshierarchyRespChildren } from './ShowCeshierarchyRespChildren';


export class ShowCeshierarchyRespDimensions {
    public name?: string;
    public metrics?: Array<string>;
    private 'key_name'?: Array<string>;
    private 'dim_router'?: Array<string>;
    public children?: Array<ShowCeshierarchyRespChildren>;
    public constructor() { 
    }
    public withName(name: string): ShowCeshierarchyRespDimensions {
        this['name'] = name;
        return this;
    }
    public withMetrics(metrics: Array<string>): ShowCeshierarchyRespDimensions {
        this['metrics'] = metrics;
        return this;
    }
    public withKeyName(keyName: Array<string>): ShowCeshierarchyRespDimensions {
        this['key_name'] = keyName;
        return this;
    }
    public set keyName(keyName: Array<string>  | undefined) {
        this['key_name'] = keyName;
    }
    public get keyName(): Array<string> | undefined {
        return this['key_name'];
    }
    public withDimRouter(dimRouter: Array<string>): ShowCeshierarchyRespDimensions {
        this['dim_router'] = dimRouter;
        return this;
    }
    public set dimRouter(dimRouter: Array<string>  | undefined) {
        this['dim_router'] = dimRouter;
    }
    public get dimRouter(): Array<string> | undefined {
        return this['dim_router'];
    }
    public withChildren(children: Array<ShowCeshierarchyRespChildren>): ShowCeshierarchyRespDimensions {
        this['children'] = children;
        return this;
    }
}