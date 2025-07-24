import { CaseExecuteVo } from './CaseExecuteVo';
import { CasePassVo } from './CasePassVo';


export class RequirementOverviewVo {
    public name?: string;
    private 'workitem_id'?: string;
    private 'sequence_id'?: string;
    private 'board_id'?: string;
    private 'tracker_id'?: string;
    private 'tracker_name'?: string;
    private 'relate_case_number'?: number;
    private 'case_pass_vo'?: CasePassVo;
    private 'case_execute_vo'?: CaseExecuteVo;
    private 'relate_defect_number'?: number;
    public constructor() { 
    }
    public withName(name: string): RequirementOverviewVo {
        this['name'] = name;
        return this;
    }
    public withWorkitemId(workitemId: string): RequirementOverviewVo {
        this['workitem_id'] = workitemId;
        return this;
    }
    public set workitemId(workitemId: string  | undefined) {
        this['workitem_id'] = workitemId;
    }
    public get workitemId(): string | undefined {
        return this['workitem_id'];
    }
    public withSequenceId(sequenceId: string): RequirementOverviewVo {
        this['sequence_id'] = sequenceId;
        return this;
    }
    public set sequenceId(sequenceId: string  | undefined) {
        this['sequence_id'] = sequenceId;
    }
    public get sequenceId(): string | undefined {
        return this['sequence_id'];
    }
    public withBoardId(boardId: string): RequirementOverviewVo {
        this['board_id'] = boardId;
        return this;
    }
    public set boardId(boardId: string  | undefined) {
        this['board_id'] = boardId;
    }
    public get boardId(): string | undefined {
        return this['board_id'];
    }
    public withTrackerId(trackerId: string): RequirementOverviewVo {
        this['tracker_id'] = trackerId;
        return this;
    }
    public set trackerId(trackerId: string  | undefined) {
        this['tracker_id'] = trackerId;
    }
    public get trackerId(): string | undefined {
        return this['tracker_id'];
    }
    public withTrackerName(trackerName: string): RequirementOverviewVo {
        this['tracker_name'] = trackerName;
        return this;
    }
    public set trackerName(trackerName: string  | undefined) {
        this['tracker_name'] = trackerName;
    }
    public get trackerName(): string | undefined {
        return this['tracker_name'];
    }
    public withRelateCaseNumber(relateCaseNumber: number): RequirementOverviewVo {
        this['relate_case_number'] = relateCaseNumber;
        return this;
    }
    public set relateCaseNumber(relateCaseNumber: number  | undefined) {
        this['relate_case_number'] = relateCaseNumber;
    }
    public get relateCaseNumber(): number | undefined {
        return this['relate_case_number'];
    }
    public withCasePassVo(casePassVo: CasePassVo): RequirementOverviewVo {
        this['case_pass_vo'] = casePassVo;
        return this;
    }
    public set casePassVo(casePassVo: CasePassVo  | undefined) {
        this['case_pass_vo'] = casePassVo;
    }
    public get casePassVo(): CasePassVo | undefined {
        return this['case_pass_vo'];
    }
    public withCaseExecuteVo(caseExecuteVo: CaseExecuteVo): RequirementOverviewVo {
        this['case_execute_vo'] = caseExecuteVo;
        return this;
    }
    public set caseExecuteVo(caseExecuteVo: CaseExecuteVo  | undefined) {
        this['case_execute_vo'] = caseExecuteVo;
    }
    public get caseExecuteVo(): CaseExecuteVo | undefined {
        return this['case_execute_vo'];
    }
    public withRelateDefectNumber(relateDefectNumber: number): RequirementOverviewVo {
        this['relate_defect_number'] = relateDefectNumber;
        return this;
    }
    public set relateDefectNumber(relateDefectNumber: number  | undefined) {
        this['relate_defect_number'] = relateDefectNumber;
    }
    public get relateDefectNumber(): number | undefined {
        return this['relate_defect_number'];
    }
}