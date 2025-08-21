import { ReqWorkItemBasicDto } from './ReqWorkItemBasicDto';


export class ReqWorkItemDto {
    public id?: string;
    public subject?: string;
    public sequence?: string;
    public tracker?: ReqWorkItemBasicDto;
    public status?: ReqWorkItemBasicDto;
    public priority?: ReqWorkItemBasicDto;
    public constructor() { 
    }
    public withId(id: string): ReqWorkItemDto {
        this['id'] = id;
        return this;
    }
    public withSubject(subject: string): ReqWorkItemDto {
        this['subject'] = subject;
        return this;
    }
    public withSequence(sequence: string): ReqWorkItemDto {
        this['sequence'] = sequence;
        return this;
    }
    public withTracker(tracker: ReqWorkItemBasicDto): ReqWorkItemDto {
        this['tracker'] = tracker;
        return this;
    }
    public withStatus(status: ReqWorkItemBasicDto): ReqWorkItemDto {
        this['status'] = status;
        return this;
    }
    public withPriority(priority: ReqWorkItemBasicDto): ReqWorkItemDto {
        this['priority'] = priority;
        return this;
    }
}