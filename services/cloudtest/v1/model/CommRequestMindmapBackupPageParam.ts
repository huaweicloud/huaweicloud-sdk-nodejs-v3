import { MindmapBackupPageParam } from './MindmapBackupPageParam';


export class CommRequestMindmapBackupPageParam {
    public params?: MindmapBackupPageParam;
    public constructor(params?: MindmapBackupPageParam) { 
        this['params'] = params;
    }
    public withParams(params: MindmapBackupPageParam): CommRequestMindmapBackupPageParam {
        this['params'] = params;
        return this;
    }
}