import { MoveJobGroupRequestBodyJobs } from './MoveJobGroupRequestBodyJobs';


export class MoveJobGroupRequestBody {
    private 'group_id'?: string;
    public jobs?: Array<MoveJobGroupRequestBodyJobs>;
    public constructor() { 
    }
    public withGroupId(groupId: string): MoveJobGroupRequestBody {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withJobs(jobs: Array<MoveJobGroupRequestBodyJobs>): MoveJobGroupRequestBody {
        this['jobs'] = jobs;
        return this;
    }
}