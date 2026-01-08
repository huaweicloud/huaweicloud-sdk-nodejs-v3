

export class StartJobSubmission {
    public isIncrementing?: boolean;
    private 'delete_rows'?: number;
    private 'update_rows'?: number;
    private 'write_rows'?: number;
    private 'submission-id'?: number;
    private 'job-name'?: string;
    private 'creation-user'?: string;
    private 'creation-date'?: number;
    private 'execute-date'?: number;
    public progress?: number;
    public status?: string;
    public isStopingIncrement?: string;
    private 'is-execute-auto'?: boolean;
    private 'last-update-date'?: number;
    private 'last-update-user'?: string;
    public isDeleteJob?: boolean;
    public constructor(jobName?: string, creationUser?: string, creationDate?: number, progress?: number, status?: string) { 
        this['job-name'] = jobName;
        this['creation-user'] = creationUser;
        this['creation-date'] = creationDate;
        this['progress'] = progress;
        this['status'] = status;
    }
    public withIsIncrementing(isIncrementing: boolean): StartJobSubmission {
        this['isIncrementing'] = isIncrementing;
        return this;
    }
    public withDeleteRows(deleteRows: number): StartJobSubmission {
        this['delete_rows'] = deleteRows;
        return this;
    }
    public set deleteRows(deleteRows: number  | undefined) {
        this['delete_rows'] = deleteRows;
    }
    public get deleteRows(): number | undefined {
        return this['delete_rows'];
    }
    public withUpdateRows(updateRows: number): StartJobSubmission {
        this['update_rows'] = updateRows;
        return this;
    }
    public set updateRows(updateRows: number  | undefined) {
        this['update_rows'] = updateRows;
    }
    public get updateRows(): number | undefined {
        return this['update_rows'];
    }
    public withWriteRows(writeRows: number): StartJobSubmission {
        this['write_rows'] = writeRows;
        return this;
    }
    public set writeRows(writeRows: number  | undefined) {
        this['write_rows'] = writeRows;
    }
    public get writeRows(): number | undefined {
        return this['write_rows'];
    }
    public withSubmissionId(submissionId: number): StartJobSubmission {
        this['submission-id'] = submissionId;
        return this;
    }
    public set submissionId(submissionId: number  | undefined) {
        this['submission-id'] = submissionId;
    }
    public get submissionId(): number | undefined {
        return this['submission-id'];
    }
    public withJobName(jobName: string): StartJobSubmission {
        this['job-name'] = jobName;
        return this;
    }
    public set jobName(jobName: string  | undefined) {
        this['job-name'] = jobName;
    }
    public get jobName(): string | undefined {
        return this['job-name'];
    }
    public withCreationUser(creationUser: string): StartJobSubmission {
        this['creation-user'] = creationUser;
        return this;
    }
    public set creationUser(creationUser: string  | undefined) {
        this['creation-user'] = creationUser;
    }
    public get creationUser(): string | undefined {
        return this['creation-user'];
    }
    public withCreationDate(creationDate: number): StartJobSubmission {
        this['creation-date'] = creationDate;
        return this;
    }
    public set creationDate(creationDate: number  | undefined) {
        this['creation-date'] = creationDate;
    }
    public get creationDate(): number | undefined {
        return this['creation-date'];
    }
    public withExecuteDate(executeDate: number): StartJobSubmission {
        this['execute-date'] = executeDate;
        return this;
    }
    public set executeDate(executeDate: number  | undefined) {
        this['execute-date'] = executeDate;
    }
    public get executeDate(): number | undefined {
        return this['execute-date'];
    }
    public withProgress(progress: number): StartJobSubmission {
        this['progress'] = progress;
        return this;
    }
    public withStatus(status: string): StartJobSubmission {
        this['status'] = status;
        return this;
    }
    public withIsStopingIncrement(isStopingIncrement: string): StartJobSubmission {
        this['isStopingIncrement'] = isStopingIncrement;
        return this;
    }
    public withIsExecuteAuto(isExecuteAuto: boolean): StartJobSubmission {
        this['is-execute-auto'] = isExecuteAuto;
        return this;
    }
    public set isExecuteAuto(isExecuteAuto: boolean  | undefined) {
        this['is-execute-auto'] = isExecuteAuto;
    }
    public get isExecuteAuto(): boolean | undefined {
        return this['is-execute-auto'];
    }
    public withLastUpdateDate(lastUpdateDate: number): StartJobSubmission {
        this['last-update-date'] = lastUpdateDate;
        return this;
    }
    public set lastUpdateDate(lastUpdateDate: number  | undefined) {
        this['last-update-date'] = lastUpdateDate;
    }
    public get lastUpdateDate(): number | undefined {
        return this['last-update-date'];
    }
    public withLastUpdateUser(lastUpdateUser: string): StartJobSubmission {
        this['last-update-user'] = lastUpdateUser;
        return this;
    }
    public set lastUpdateUser(lastUpdateUser: string  | undefined) {
        this['last-update-user'] = lastUpdateUser;
    }
    public get lastUpdateUser(): string | undefined {
        return this['last-update-user'];
    }
    public withIsDeleteJob(isDeleteJob: boolean): StartJobSubmission {
        this['isDeleteJob'] = isDeleteJob;
        return this;
    }
}