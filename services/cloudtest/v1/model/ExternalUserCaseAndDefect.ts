import { NameAndIdVo } from './NameAndIdVo';


export class ExternalUserCaseAndDefect {
    public creator?: NameAndIdVo;
    private 'defect_count'?: number;
    private 'defect_ids'?: Array<string>;
    private 'testcase_id'?: string;
    private 'branch_id'?: string;
    public constructor() { 
    }
    public withCreator(creator: NameAndIdVo): ExternalUserCaseAndDefect {
        this['creator'] = creator;
        return this;
    }
    public withDefectCount(defectCount: number): ExternalUserCaseAndDefect {
        this['defect_count'] = defectCount;
        return this;
    }
    public set defectCount(defectCount: number  | undefined) {
        this['defect_count'] = defectCount;
    }
    public get defectCount(): number | undefined {
        return this['defect_count'];
    }
    public withDefectIds(defectIds: Array<string>): ExternalUserCaseAndDefect {
        this['defect_ids'] = defectIds;
        return this;
    }
    public set defectIds(defectIds: Array<string>  | undefined) {
        this['defect_ids'] = defectIds;
    }
    public get defectIds(): Array<string> | undefined {
        return this['defect_ids'];
    }
    public withTestcaseId(testcaseId: string): ExternalUserCaseAndDefect {
        this['testcase_id'] = testcaseId;
        return this;
    }
    public set testcaseId(testcaseId: string  | undefined) {
        this['testcase_id'] = testcaseId;
    }
    public get testcaseId(): string | undefined {
        return this['testcase_id'];
    }
    public withBranchId(branchId: string): ExternalUserCaseAndDefect {
        this['branch_id'] = branchId;
        return this;
    }
    public set branchId(branchId: string  | undefined) {
        this['branch_id'] = branchId;
    }
    public get branchId(): string | undefined {
        return this['branch_id'];
    }
}