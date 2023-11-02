

export class QueryDbPositionReq {
    private 'reset_position_time'?: string;
    public constructor(resetPositionTime?: string) { 
        this['reset_position_time'] = resetPositionTime;
    }
    public withResetPositionTime(resetPositionTime: string): QueryDbPositionReq {
        this['reset_position_time'] = resetPositionTime;
        return this;
    }
    public set resetPositionTime(resetPositionTime: string  | undefined) {
        this['reset_position_time'] = resetPositionTime;
    }
    public get resetPositionTime(): string | undefined {
        return this['reset_position_time'];
    }
}