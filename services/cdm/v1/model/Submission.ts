import { Counters } from './Counters';


export class Submission {
    public isIncrementing?: boolean;
    private 'job-name'?: string;
    public counters?: Counters;
    public isStopingIncrement?: string;
    private 'is-execute-auto'?: boolean;
    private 'last-update-date'?: number;
    private 'last-udpate-user'?: string;
    public isDeleteJob?: boolean;
    private 'creation-user'?: string;
    private 'creation-date'?: number;
    private 'external-id'?: string;
    public progress?: number;
    private 'submission-id'?: number;
    private 'delete_rows'?: number;
    private 'update_rows'?: number;
    private 'write_rows'?: number;
    private 'execute-date'?: number;
    public status?: string;
    private 'error-details'?: string;
    private 'error-summary'?: string;
    public constructor(isIncrementing?: boolean, jobName?: string, isStopingIncrement?: string, isExecuteAuto?: boolean, lastUpdateDate?: number, lastUdpateUser?: string, isDeleteJob?: boolean, creationUser?: string, creationDate?: number, externalId?: string, progress?: number, status?: string) { 
        this['isIncrementing'] = isIncrementing;
        this['job-name'] = jobName;
        this['isStopingIncrement'] = isStopingIncrement;
        this['is-execute-auto'] = isExecuteAuto;
        this['last-update-date'] = lastUpdateDate;
        this['last-udpate-user'] = lastUdpateUser;
        this['isDeleteJob'] = isDeleteJob;
        this['creation-user'] = creationUser;
        this['creation-date'] = creationDate;
        this['external-id'] = externalId;
        this['progress'] = progress;
        this['status'] = status;
    }
    public withIsIncrementing(isIncrementing: boolean): Submission {
        this['isIncrementing'] = isIncrementing;
        return this;
    }
    public withJobName(jobName: string): Submission {
        this['job-name'] = jobName;
        return this;
    }
    public set jobName(jobName: string  | undefined) {
        this['job-name'] = jobName;
    }
    public get jobName(): string | undefined {
        return this['job-name'];
    }
    public withCounters(counters: Counters): Submission {
        this['counters'] = counters;
        return this;
    }
    public withIsStopingIncrement(isStopingIncrement: string): Submission {
        this['isStopingIncrement'] = isStopingIncrement;
        return this;
    }
    public withIsExecuteAuto(isExecuteAuto: boolean): Submission {
        this['is-execute-auto'] = isExecuteAuto;
        return this;
    }
    public set isExecuteAuto(isExecuteAuto: boolean  | undefined) {
        this['is-execute-auto'] = isExecuteAuto;
    }
    public get isExecuteAuto(): boolean | undefined {
        return this['is-execute-auto'];
    }
    public withLastUpdateDate(lastUpdateDate: number): Submission {
        this['last-update-date'] = lastUpdateDate;
        return this;
    }
    public set lastUpdateDate(lastUpdateDate: number  | undefined) {
        this['last-update-date'] = lastUpdateDate;
    }
    public get lastUpdateDate(): number | undefined {
        return this['last-update-date'];
    }
    public withLastUdpateUser(lastUdpateUser: string): Submission {
        this['last-udpate-user'] = lastUdpateUser;
        return this;
    }
    public set lastUdpateUser(lastUdpateUser: string  | undefined) {
        this['last-udpate-user'] = lastUdpateUser;
    }
    public get lastUdpateUser(): string | undefined {
        return this['last-udpate-user'];
    }
    public withIsDeleteJob(isDeleteJob: boolean): Submission {
        this['isDeleteJob'] = isDeleteJob;
        return this;
    }
    public withCreationUser(creationUser: string): Submission {
        this['creation-user'] = creationUser;
        return this;
    }
    public set creationUser(creationUser: string  | undefined) {
        this['creation-user'] = creationUser;
    }
    public get creationUser(): string | undefined {
        return this['creation-user'];
    }
    public withCreationDate(creationDate: number): Submission {
        this['creation-date'] = creationDate;
        return this;
    }
    public set creationDate(creationDate: number  | undefined) {
        this['creation-date'] = creationDate;
    }
    public get creationDate(): number | undefined {
        return this['creation-date'];
    }
    public withExternalId(externalId: string): Submission {
        this['external-id'] = externalId;
        return this;
    }
    public set externalId(externalId: string  | undefined) {
        this['external-id'] = externalId;
    }
    public get externalId(): string | undefined {
        return this['external-id'];
    }
    public withProgress(progress: number): Submission {
        this['progress'] = progress;
        return this;
    }
    public withSubmissionId(submissionId: number): Submission {
        this['submission-id'] = submissionId;
        return this;
    }
    public set submissionId(submissionId: number  | undefined) {
        this['submission-id'] = submissionId;
    }
    public get submissionId(): number | undefined {
        return this['submission-id'];
    }
    public withDeleteRows(deleteRows: number): Submission {
        this['delete_rows'] = deleteRows;
        return this;
    }
    public set deleteRows(deleteRows: number  | undefined) {
        this['delete_rows'] = deleteRows;
    }
    public get deleteRows(): number | undefined {
        return this['delete_rows'];
    }
    public withUpdateRows(updateRows: number): Submission {
        this['update_rows'] = updateRows;
        return this;
    }
    public set updateRows(updateRows: number  | undefined) {
        this['update_rows'] = updateRows;
    }
    public get updateRows(): number | undefined {
        return this['update_rows'];
    }
    public withWriteRows(writeRows: number): Submission {
        this['write_rows'] = writeRows;
        return this;
    }
    public set writeRows(writeRows: number  | undefined) {
        this['write_rows'] = writeRows;
    }
    public get writeRows(): number | undefined {
        return this['write_rows'];
    }
    public withExecuteDate(executeDate: number): Submission {
        this['execute-date'] = executeDate;
        return this;
    }
    public set executeDate(executeDate: number  | undefined) {
        this['execute-date'] = executeDate;
    }
    public get executeDate(): number | undefined {
        return this['execute-date'];
    }
    public withStatus(status: string): Submission {
        this['status'] = status;
        return this;
    }
    public withErrorDetails(errorDetails: string): Submission {
        this['error-details'] = errorDetails;
        return this;
    }
    public set errorDetails(errorDetails: string  | undefined) {
        this['error-details'] = errorDetails;
    }
    public get errorDetails(): string | undefined {
        return this['error-details'];
    }
    public withErrorSummary(errorSummary: string): Submission {
        this['error-summary'] = errorSummary;
        return this;
    }
    public set errorSummary(errorSummary: string  | undefined) {
        this['error-summary'] = errorSummary;
    }
    public get errorSummary(): string | undefined {
        return this['error-summary'];
    }
}