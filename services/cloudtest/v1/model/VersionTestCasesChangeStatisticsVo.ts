

export class VersionTestCasesChangeStatisticsVo {
    private 'add_testcases_number'?: number;
    private 'reuse_testcases_number'?: number;
    private 'modifying_testcases_number'?: number;
    private 'update_date_timestamp'?: number;
    private 'update_date'?: Date;
    public constructor() { 
    }
    public withAddTestcasesNumber(addTestcasesNumber: number): VersionTestCasesChangeStatisticsVo {
        this['add_testcases_number'] = addTestcasesNumber;
        return this;
    }
    public set addTestcasesNumber(addTestcasesNumber: number  | undefined) {
        this['add_testcases_number'] = addTestcasesNumber;
    }
    public get addTestcasesNumber(): number | undefined {
        return this['add_testcases_number'];
    }
    public withReuseTestcasesNumber(reuseTestcasesNumber: number): VersionTestCasesChangeStatisticsVo {
        this['reuse_testcases_number'] = reuseTestcasesNumber;
        return this;
    }
    public set reuseTestcasesNumber(reuseTestcasesNumber: number  | undefined) {
        this['reuse_testcases_number'] = reuseTestcasesNumber;
    }
    public get reuseTestcasesNumber(): number | undefined {
        return this['reuse_testcases_number'];
    }
    public withModifyingTestcasesNumber(modifyingTestcasesNumber: number): VersionTestCasesChangeStatisticsVo {
        this['modifying_testcases_number'] = modifyingTestcasesNumber;
        return this;
    }
    public set modifyingTestcasesNumber(modifyingTestcasesNumber: number  | undefined) {
        this['modifying_testcases_number'] = modifyingTestcasesNumber;
    }
    public get modifyingTestcasesNumber(): number | undefined {
        return this['modifying_testcases_number'];
    }
    public withUpdateDateTimestamp(updateDateTimestamp: number): VersionTestCasesChangeStatisticsVo {
        this['update_date_timestamp'] = updateDateTimestamp;
        return this;
    }
    public set updateDateTimestamp(updateDateTimestamp: number  | undefined) {
        this['update_date_timestamp'] = updateDateTimestamp;
    }
    public get updateDateTimestamp(): number | undefined {
        return this['update_date_timestamp'];
    }
    public withUpdateDate(updateDate: Date): VersionTestCasesChangeStatisticsVo {
        this['update_date'] = updateDate;
        return this;
    }
    public set updateDate(updateDate: Date  | undefined) {
        this['update_date'] = updateDate;
    }
    public get updateDate(): Date | undefined {
        return this['update_date'];
    }
}