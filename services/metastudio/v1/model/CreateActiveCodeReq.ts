

export class CreateActiveCodeReq {
    private 'robot_id'?: string;
    private 'room_id'?: string;
    private 'valid_period'?: number;
    public constructor(robotId?: string, roomId?: string, validPeriod?: number) { 
        this['robot_id'] = robotId;
        this['room_id'] = roomId;
        this['valid_period'] = validPeriod;
    }
    public withRobotId(robotId: string): CreateActiveCodeReq {
        this['robot_id'] = robotId;
        return this;
    }
    public set robotId(robotId: string  | undefined) {
        this['robot_id'] = robotId;
    }
    public get robotId(): string | undefined {
        return this['robot_id'];
    }
    public withRoomId(roomId: string): CreateActiveCodeReq {
        this['room_id'] = roomId;
        return this;
    }
    public set roomId(roomId: string  | undefined) {
        this['room_id'] = roomId;
    }
    public get roomId(): string | undefined {
        return this['room_id'];
    }
    public withValidPeriod(validPeriod: number): CreateActiveCodeReq {
        this['valid_period'] = validPeriod;
        return this;
    }
    public set validPeriod(validPeriod: number  | undefined) {
        this['valid_period'] = validPeriod;
    }
    public get validPeriod(): number | undefined {
        return this['valid_period'];
    }
}