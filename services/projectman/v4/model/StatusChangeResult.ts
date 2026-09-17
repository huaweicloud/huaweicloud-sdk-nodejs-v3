import { WorkItemVO } from './WorkItemVO';


export class StatusChangeResult {
    private 'cannot_finish_ar'?: Array<WorkItemVO>;
    public constructor() { 
    }
    public withCannotFinishAr(cannotFinishAr: Array<WorkItemVO>): StatusChangeResult {
        this['cannot_finish_ar'] = cannotFinishAr;
        return this;
    }
    public set cannotFinishAr(cannotFinishAr: Array<WorkItemVO>  | undefined) {
        this['cannot_finish_ar'] = cannotFinishAr;
    }
    public get cannotFinishAr(): Array<WorkItemVO> | undefined {
        return this['cannot_finish_ar'];
    }
}