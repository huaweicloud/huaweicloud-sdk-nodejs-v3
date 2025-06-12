import { RecycleBinPolicys } from './RecycleBinPolicys';


export class RecycleBin {
    private 'project_id'?: string;
    private 'switch'?: string;
    public policy?: RecycleBinPolicys;
    public constructor(projectId?: string, _switch?: string, policy?: RecycleBinPolicys) { 
        this['project_id'] = projectId;
        this['switch'] = _switch;
        this['policy'] = policy;
    }
    public withProjectId(projectId: string): RecycleBin {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withSwitch(_switch: string): RecycleBin {
        this['switch'] = _switch;
        return this;
    }
    public set _switch(_switch: string  | undefined) {
        this['switch'] = _switch;
    }
    public get _switch(): string | undefined {
        return this['switch'];
    }
    public withPolicy(policy: RecycleBinPolicys): RecycleBin {
        this['policy'] = policy;
        return this;
    }
}