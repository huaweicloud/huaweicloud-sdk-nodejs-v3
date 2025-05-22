import { RecycleBinPolicy } from './RecycleBinPolicy';


export class RecycleBinResponseBody {
    private 'project_id'?: string;
    public policy?: RecycleBinPolicy;
    public enable?: boolean;
    public constructor() { 
    }
    public withProjectId(projectId: string): RecycleBinResponseBody {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withPolicy(policy: RecycleBinPolicy): RecycleBinResponseBody {
        this['policy'] = policy;
        return this;
    }
    public withEnable(enable: boolean): RecycleBinResponseBody {
        this['enable'] = enable;
        return this;
    }
}