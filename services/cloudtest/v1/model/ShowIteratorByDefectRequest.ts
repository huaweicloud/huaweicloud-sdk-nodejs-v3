

export class ShowIteratorByDefectRequest {
    private 'project_id'?: string;
    private 'defect_id'?: string;
    public constructor(projectId?: string, defectId?: string) { 
        this['project_id'] = projectId;
        this['defect_id'] = defectId;
    }
    public withProjectId(projectId: string): ShowIteratorByDefectRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withDefectId(defectId: string): ShowIteratorByDefectRequest {
        this['defect_id'] = defectId;
        return this;
    }
    public set defectId(defectId: string  | undefined) {
        this['defect_id'] = defectId;
    }
    public get defectId(): string | undefined {
        return this['defect_id'];
    }
}