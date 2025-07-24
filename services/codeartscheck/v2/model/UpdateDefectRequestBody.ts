

export class UpdateDefectRequestBody {
    private 'defect_id'?: string;
    private 'defect_status'?: string;
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
}