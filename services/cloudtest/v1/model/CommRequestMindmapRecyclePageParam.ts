import { MindmapRecyclePageParam } from './MindmapRecyclePageParam';


export class CommRequestMindmapRecyclePageParam {
    public params?: MindmapRecyclePageParam;
    public constructor(params?: MindmapRecyclePageParam) { 
        this['params'] = params;
    }
    public withParams(params: MindmapRecyclePageParam): CommRequestMindmapRecyclePageParam {
        this['params'] = params;
        return this;
    }
}