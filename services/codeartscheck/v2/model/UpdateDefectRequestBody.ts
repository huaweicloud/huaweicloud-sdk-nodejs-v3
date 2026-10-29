

export class UpdateDefectRequestBody {
    private 'defect_id'?: string;
    private 'defect_status'?: string;
    public approver?: string;
    public comment?: string;
    public ignoreType?: string;
    public constructor() { 
    }
    public withDefectId(defectId: string): UpdateDefectRequestBody {
        this['defect_id'] = defectId;
        return this;
    }
    public set defectId(defectId: string  | undefined) {
        this['defect_id'] = defectId;
    }
    public get defectId(): string | undefined {
        return this['defect_id'];
    }
    public withDefectStatus(defectStatus: string): UpdateDefectRequestBody {
        this['defect_status'] = defectStatus;
        return this;
    }
    public set defectStatus(defectStatus: string  | undefined) {
        this['defect_status'] = defectStatus;
    }
    public get defectStatus(): string | undefined {
        return this['defect_status'];
    }
    public withApprover(approver: string): UpdateDefectRequestBody {
        this['approver'] = approver;
        return this;
    }
    public withComment(comment: string): UpdateDefectRequestBody {
        this['comment'] = comment;
        return this;
    }
    public withIgnoreType(ignoreType: string): UpdateDefectRequestBody {
        this['ignoreType'] = ignoreType;
        return this;
    }
}