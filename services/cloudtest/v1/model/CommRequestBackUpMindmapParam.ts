import { BackUpMindmapParam } from './BackUpMindmapParam';


export class CommRequestBackUpMindmapParam {
    public params?: BackUpMindmapParam;
    public constructor(params?: BackUpMindmapParam) { 
        this['params'] = params;
    }
    public withParams(params: BackUpMindmapParam): CommRequestBackUpMindmapParam {
        this['params'] = params;
        return this;
    }
}