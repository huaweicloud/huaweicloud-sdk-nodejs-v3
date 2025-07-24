import { MindmapPageParamV3 } from './MindmapPageParamV3';


export class CommRequestMindmapPageParamV3 {
    public params?: MindmapPageParamV3;
    public constructor() { 
    }
    public withParams(params: MindmapPageParamV3): CommRequestMindmapPageParamV3 {
        this['params'] = params;
        return this;
    }
}