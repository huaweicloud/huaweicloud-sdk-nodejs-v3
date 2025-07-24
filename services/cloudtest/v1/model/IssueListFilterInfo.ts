import { IssueListPiFilterInfo } from './IssueListPiFilterInfo';


export class IssueListFilterInfo {
    private 'iteration_ids'?: Array<string>;
    private 'pi_sprints'?: Array<IssueListPiFilterInfo>;
    public subject?: string;
    private 'module_id'?: string;
    private 'status_id'?: string;
    public constructor() { 
    }
    public withIterationIds(iterationIds: Array<string>): IssueListFilterInfo {
        this['iteration_ids'] = iterationIds;
        return this;
    }
    public set iterationIds(iterationIds: Array<string>  | undefined) {
        this['iteration_ids'] = iterationIds;
    }
    public get iterationIds(): Array<string> | undefined {
        return this['iteration_ids'];
    }
    public withPiSprints(piSprints: Array<IssueListPiFilterInfo>): IssueListFilterInfo {
        this['pi_sprints'] = piSprints;
        return this;
    }
    public set piSprints(piSprints: Array<IssueListPiFilterInfo>  | undefined) {
        this['pi_sprints'] = piSprints;
    }
    public get piSprints(): Array<IssueListPiFilterInfo> | undefined {
        return this['pi_sprints'];
    }
    public withSubject(subject: string): IssueListFilterInfo {
        this['subject'] = subject;
        return this;
    }
    public withModuleId(moduleId: string): IssueListFilterInfo {
        this['module_id'] = moduleId;
        return this;
    }
    public set moduleId(moduleId: string  | undefined) {
        this['module_id'] = moduleId;
    }
    public get moduleId(): string | undefined {
        return this['module_id'];
    }
    public withStatusId(statusId: string): IssueListFilterInfo {
        this['status_id'] = statusId;
        return this;
    }
    public set statusId(statusId: string  | undefined) {
        this['status_id'] = statusId;
    }
    public get statusId(): string | undefined {
        return this['status_id'];
    }
}