

export class DeleteDcPointsFailedDetail {
    private 'error_code'?: string;
    private 'error_msg'?: string;
    private 'point_id'?: string;
    public constructor(errorCode?: string, errorMsg?: string, pointId?: string) { 
        this['error_code'] = errorCode;
        this['error_msg'] = errorMsg;
        this['point_id'] = pointId;
    }
    public withErrorCode(errorCode: string): DeleteDcPointsFailedDetail {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): string | undefined {
        return this['error_code'];
    }
    public withErrorMsg(errorMsg: string): DeleteDcPointsFailedDetail {
        this['error_msg'] = errorMsg;
        return this;
    }
    public set errorMsg(errorMsg: string  | undefined) {
        this['error_msg'] = errorMsg;
    }
    public get errorMsg(): string | undefined {
        return this['error_msg'];
    }
    public withPointId(pointId: string): DeleteDcPointsFailedDetail {
        this['point_id'] = pointId;
        return this;
    }
    public set pointId(pointId: string  | undefined) {
        this['point_id'] = pointId;
    }
    public get pointId(): string | undefined {
        return this['point_id'];
    }
}