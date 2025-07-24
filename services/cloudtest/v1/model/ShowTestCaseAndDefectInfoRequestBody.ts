

export class ShowTestCaseAndDefectInfoRequestBody {
    public offset?: number;
    public limit?: number;
    private 'branch_id'?: string;
    private 'create_testcase_start_time'?: string;
    private 'create_testcase_end_time'?: string;
    private 'associate_defect_start_time'?: string;
    private 'associate_defect_end_time'?: string;
    public constructor(offset?: number, limit?: number, createTestcaseStartTime?: string, createTestcaseEndTime?: string) { 
        this['offset'] = offset;
        this['limit'] = limit;
        this['create_testcase_start_time'] = createTestcaseStartTime;
        this['create_testcase_end_time'] = createTestcaseEndTime;
    }
    public withOffset(offset: number): ShowTestCaseAndDefectInfoRequestBody {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ShowTestCaseAndDefectInfoRequestBody {
        this['limit'] = limit;
        return this;
    }
    public withBranchId(branchId: string): ShowTestCaseAndDefectInfoRequestBody {
        this['branch_id'] = branchId;
        return this;
    }
    public set branchId(branchId: string  | undefined) {
        this['branch_id'] = branchId;
    }
    public get branchId(): string | undefined {
        return this['branch_id'];
    }
    public withCreateTestcaseStartTime(createTestcaseStartTime: string): ShowTestCaseAndDefectInfoRequestBody {
        this['create_testcase_start_time'] = createTestcaseStartTime;
        return this;
    }
    public set createTestcaseStartTime(createTestcaseStartTime: string  | undefined) {
        this['create_testcase_start_time'] = createTestcaseStartTime;
    }
    public get createTestcaseStartTime(): string | undefined {
        return this['create_testcase_start_time'];
    }
    public withCreateTestcaseEndTime(createTestcaseEndTime: string): ShowTestCaseAndDefectInfoRequestBody {
        this['create_testcase_end_time'] = createTestcaseEndTime;
        return this;
    }
    public set createTestcaseEndTime(createTestcaseEndTime: string  | undefined) {
        this['create_testcase_end_time'] = createTestcaseEndTime;
    }
    public get createTestcaseEndTime(): string | undefined {
        return this['create_testcase_end_time'];
    }
    public withAssociateDefectStartTime(associateDefectStartTime: string): ShowTestCaseAndDefectInfoRequestBody {
        this['associate_defect_start_time'] = associateDefectStartTime;
        return this;
    }
    public set associateDefectStartTime(associateDefectStartTime: string  | undefined) {
        this['associate_defect_start_time'] = associateDefectStartTime;
    }
    public get associateDefectStartTime(): string | undefined {
        return this['associate_defect_start_time'];
    }
    public withAssociateDefectEndTime(associateDefectEndTime: string): ShowTestCaseAndDefectInfoRequestBody {
        this['associate_defect_end_time'] = associateDefectEndTime;
        return this;
    }
    public set associateDefectEndTime(associateDefectEndTime: string  | undefined) {
        this['associate_defect_end_time'] = associateDefectEndTime;
    }
    public get associateDefectEndTime(): string | undefined {
        return this['associate_defect_end_time'];
    }
}